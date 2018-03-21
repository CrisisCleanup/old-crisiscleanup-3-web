# User Roles
## Attribute Definitions
General Rules
-------------
 - All user roles are non-heirarchical (e.g. non-inheriting).
 - A user may have more than one role.
 - If two roles conflict, then the user receives the more permissive role.
   - Except that if the user role is `phoneAgent`, access to other users' contact information is limited, regardless of other roles.

User Roles
-------------
 - `primaryContact`
   - Name: Primary Contact
   - Description: A Primary Contact is the face of the organization to other relief agencies using Crisis Cleanup. A Primary Contact may also affiliate his or her organization with other organizations. An organization can (and should) have more than one Primary Contact. When a user selects to be a Primary Contact, all other Primary Contacts are alerted, so they may take action if the self-selection was in error.
 - `teamLeader`
   - Name: Team Leader
   - Description: A Team Leader leads a group of workers or volunteers in the field.
 - `worker`
   - Name: Worker
   - Description: A Worker is a person who assists survivors over the phone or in person by doing activities like assessments, cleanup, debris removal, tree removal, etc. By default, all users are Workers.
 - `phoneAgent`
   - Name: Phone Agent
   - Description: A Phone Agent answers and returns phone calls when the cleanup assistance hotline is active.
 - `mapSpecialist`
   - Name: Map Specialist
   - Description: A Map Specialist has access to special tools to place icons in their correct locations when they are in the wrong location or difficult to place.
 - `translator`
   - Name: Translator
   - Description: A Translator is able to translate website content and/or phone calls into another language.
 - `userSpecialist`
   - Name: User Specialist
   - Description: A User Specialist is someone who knows how to use Crisis Cleanup well enough to help others. They can provide technical support to others and share their knowledge in written help documents.
 - `guestWorker`
   - Name: Guest Worker
   - Description: A Guest Worker is an limited-trust member of the public, usually a spontaneous unaffiliated volunteer, that has been organized by a relief agency. A guest worker must request any other role to become another role. Once they are a full Worker, they may 

Attributes
-------------
 - `lastUpdated`: Date or datetime of last data model update.
   - Applies to: All roles
   - Possible Values: Date or Datetime
   - Required: Yes
   - Default: Now
 - `name_t`: Translated name for the role, such as "Team Leader," or "Map Specialist"
   - Applies to: All roles
   - Possible Values: string
   - Required: Yes
   - Default: `null`
 - `description_t`: Translated description of the role, such as the descriptions in the section above.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `isActive`: If `true`, activates this role. If `false`, then this role is not available. Some roles will require future development.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `affiliateOrg`: Authority to affiliate the user's organization with another organization, thereby sharing more data between the organizations.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`
 - `inviteWorkers`: Authority to invite other Workers to join the user's organization.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `removeWorkers`: Authority to remove other Workers from the user's organization
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `phoneAgent`: Access to the built-in phone system.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`
 - `advancedMaps`: Access to advanced mapping and research resources.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`
 - `translate`: Access to advanced translation tools to improve the website or interact with survivors.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`
 - `supportAgent`: Access to advanced technical support tools.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`
 - `crewManagement`: Access to advanced crew management features.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `viewUserContacts`: Allows user to view ALL contact details (including cell phone) of all other users from other organizations. If set to `false`, the role may only see limited user contact information, such as name and email. This setting is for Phone Agents who have a tendency to inappropriately share the cell phone numbers of relief volunteers with survivors.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `viewSensitive`: Allows users to access "sensitive" class information. Primarily used to ensure that Guest Workers cannot access sensitive data.
   - Applies to: All roles
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`

## Attribute Suffix Conventions
 - `_t`: This attribute must be translated, using `\src\services\translation.js`


Current list of translatable attributes:
-------------
 - `name_t`
 - `description_t`
