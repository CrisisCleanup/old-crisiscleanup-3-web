# Access and Redaction
## Overview
Trust
-------------
The only asset Crisis Cleanup has is the trust of the relief agencies that use it. Should Crisis Cleanup ever lose that trust, relief agencies would stop using the platform, and it would become a useless piece of tech on github, just like all of the other pieces of cool, unused tech. Appropriate data access controls are an essential component of maintaining that trust. For example, consider the following organizations:
 - A local church doing cleanup
 - A county emergency manager
 - A state emergency manager
 - An insurance agent
 - FEMA
 - A member of the public
 - The press
 - A long-term recovery group (LTRG)

Various Organization Roles and Needs
-------------
Each of these groups require different types and levels of access:
 - *Local Cleanup Group*: A cleanup group (like the church) needs access to all of the work order information to understand how to prioritize their limited volunteer resources across a wide geographic area. They may operate across the entire disaster area, crossing county/parish and state boundaries to reach people who need help most.
 - *Local and StateEmergency Management*: With notable local exceptions, voluntary agencies and emergency management have a history of conflicting interests. To protect the interests of survivors (e.g. undocumented survivors, members of a religious minority with sensitivity to appearing on government lists, or members of other disfavored groups), voluntary relief agencies do their best to minimize government access to personally identifying information. Thus, it is generally inappropriate for emergency management to have access to detailed personal contact information, and any information outside their jurisdiction.
 - *FEMA*: Experience has shown that FEMA representatives do not actually want anything more than broad, aggregated statistics.
 - *Insurance Agent, Public, and the Press*: An insurance agent may have interests that are at odds with a survivor; further, Crisis Cleanup cannot guaranty that any of the information is complete, correct, or current. The press may wish to hold relief agencies accountable, but with incorrect or misleading data. A member of the public may want the information for legitmate purposes (e.g. to determine whether a relative is in an affected area), but they do not have any level of trust. For these entities, only de-identified statistical data is appropriate.
 - *LTRG*: Long-term recovery groups need all of the case information they can get, but only for their jurisdiction, which is typically limited to a county or large municipality.

Privacy and Redaction Variables
-------------
Based upon these and other real-world use cases, the amount of data any single organization should receive is a combination of several factors:
 - *Access Profile*: E.g. one of the groups listed above.
 - *Relationship with Survivor*: An organization with an existing relationship with a survivor should have access to all survivor information. An organization without a relationship should have less access.
 - *Geofence*: Some organizations (like government or LTRGs) need more access to data within their jurisdiction, and less information for cases outside their jurisdiction.
 - *Medium*: Experience has shown that while it may be appropriate for a relief organization to be able to access all case information through the GUI and map, it is not appropriate to permit them to download the entire data set in a CSV file (Hurricane Harvey, for example, had 25,000 records, and roughly 200 people downloaded the data set per day).
 - *Data Sensitivity*: Some information, like names, phone numbers, addresses, latitude, longitude, and free-form text, should be more heavily redacted than non-identifying information, such as a city, county, state, or general damage information.
 - *Redaction Pattern*: All of the previous variables lead to a redaction pattern. Redaction patterns run along a scale, including completely hiding a field, replacing digits with X's, all the way to no redaction at all.

Privacy and Redaction Process
-------------
`accessRedaction.json` defines the _Access Profiles_, as well as the _Redaction Patterns_ for all relevant combinations of _Access Profiles_, _Relationships to Survivor_, _Relationship to Geofence_, _Medium_, and _Data Sensitivity_.
Each data field in each form contains a `data_sensitivity` (or _Data Sensitivity_) attribute. The remaining attributes are drawn from the organization model (_Access Profile_ and _Geofence_), the site/case model (_Relationship to Survivor_ and location), and the system itself (_Medium_).
Each time a user makes a request to view a piece of data (a field), the system queries each of these models to acquire all of the required attributes. The combination of the attributes dictates a _Redaction Pattern_ located in the `redactionConditions` object within `accessRedaction.json`.
_Redaction Patterns_ should be implemented in logic, but a plain-English definition of each _Redaction Pattern_ may be found in `redactionPatterns.txt`.

## Attribute Definitions
Root Attributes of `accessRedaction.json`
-------------
 - `lastUpdated`: Date of last update.
   - Applies to: Root
   - Possible Values: `YYYY-mm-dd`
   - Required: No
   - Default: `null`
 - `defaultValue`: The default value of any missing required attribute.
   - Applies to: Root
   - Possible Values: string
   - Required: Yes
   - Default: `any`
 - `accessProfiles`: A list of all access profiles attributable to an organization.
   - Applies to: Root
   - Possible Values: `any`, `public`, `statistics`, `situationalAwareness`, `coordination`, `ltr`, and `recovery`
   - Required: Yes
   - Default: `null`
 - `redactionConditions`: All relevant combinations of organization, case, and system settings that result in a _Redaction Pattern_.
   - Applies to: Root
   - Possible Values: JSON
   - Required: Yes
   - Default: `null`

Access Profile Attributes
-------------
 - `name_t`: A translated human-readable name of each access type, e.g. "Public", or "Situational Awareness"
   - Applies to: `accessTypes`
   - Possible Values: string defined in translations.js
   - Required: Yes
   - Default: `null`
 - `techDescription`: A detailed technical description of each access profile in plain English, for the benefit of the developer.
   - Applies to: `accessTypes`
   - Possible Values: string
   - Required: No
   - Default: `null`
 - `accessLevel_t`: A translated human-readable description summarizing the level of access, e.g. "Access to de-identified public maps and data." To be used in helpdesk, admin, registration, and training materials.
   - Applies to: `accessTypes`
   - Possible Values: string defined in translations.js
   - Required: Yes
   - Default: `null`
 - `examples_t`: A translated list of illustrations of the types of organizations that might receive each level of access, e.g. "State & County Offices of Emergency Management, American Red Cross, Salvation Army"
   - Applies to: `accessTypes`
   - Possible Values: string defined in translations.js
   - Required: Yes
   - Default: `null`
 - `description_t`: A translated explanation of what kind of organization qualifies for each level of access, e.g. "Your organization does NOT interact directly with survivors in cleanup, but does other important relief work. Your organization needs general situational awareness and statistics."
   - Applies to: `accessTypes`
   - Possible Values: string defined in translations.js
   - Required: Yes
   - Default: `null`
 - `limitations_t`: A more detailed explanation of limitations on each type of access, e.g. "Within your jurisdiction, sensitive information is hidden, but other case data is available. Outside your jurisdiction, only general case type, status, and aggregated statistics are available. Case notes, details, all personal information, precise location, and other sensitive data is hidden."
   - Applies to: `accessTypes`
   - Possible Values: string defined in translations.js
   - Required: Yes
   - Default: `null`

Redaction Conditions Attributes
-------------
 - `techDescription`: A detailed technical description of each redaction rule in plain English, for the benefit of the developer. E.g., "For a Statistics Access user, truncate all zip codes to five digits, and replace numbers with Xs in all other lessSensitive class fields (e.g. phone numbers and address numbers), regardless of the medium or location."
   - Applies to: `redactionConditions`
   - Possible Values: string
   - Required: Yes
   - Default: `null`
 - `accessProfile`: The _Access Profile_.
   - Applies to: `redactionConditions`
   - Possible Values: `any`, `public`, `statistics`, `situationalAwareness`, `coordination`, `ltr`, `recovery`, `else`
   - Required: Yes
   - Default: `any`
 - `relationship`: The relationship of the user's organization with the case/client.
   - Applies to: `redactionConditions`
   - Possible Values: `any`, `noRelationship`, `claimedOrReportedCase`, `else`
   - Required: Yes
   - Default: `any`
 - `geofence`: Boolean indicating whether the case is inside an organization's geofence (if one exists)
   - Applies to: `redactionConditions`
   - Possible Values: `any`, `insideGeofence`, `outsideGeofence`
   - Required: Yes
   - Default: `any`
 - `medium`: The medium through which the user is accessing the data.
   - Applies to: `redactionConditions`
   - Possible Values: `any`, `screen`, `download`, `print`, `else`
   - Required: Yes
   - Default: `any`
 - `sensitivity`: The sensitivity of the target field/data. Though not explicitly defined elsewhere, these are attributes of each field.
   - Applies to: `redactionConditions`
   - Possible Values: `any`, `verySensitive`, `orgSensitive`, `sensitive`, `lessSensitive`, `public`, `else`
   - Required: Yes
   - Default: `any`
 - `redactionPatterns`: An array of redaction patterns to apply in order of priority.
   - Applies to: `redactionConditions`
   - Possible Values: `inherit`, `redactNumbers`, `hideField`, `replaceWithMessage_t`, `truncateToFive`, `redactAll`, `convertToBoolean`
   - Required: Yes
   - Default: `any`

`replaceWithMessage_t` Attributes
-------------
 - `message`: A translated message with which the target field is replaced. E.g, "You must claim or enter a case to access the person's name."
   - Applies to: `replaceWithMessage_t`
   - Possible Values: string defined in translations.js
   - Required: Yes
   - Default: `any`

## Translation
Attributes in this model that require translation include:
 - `name_t`
 - `accessLevel_t`
 - `examples_t`
 - `description_t`
 - `limitations_t`
 - `replaceWithMessage_t`