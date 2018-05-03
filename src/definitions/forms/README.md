# Forms
## Attribute Definitions
Root Attributes
-------------
 - `event_id`: Foreign key to `legacy_events`
   - Applies to: Root
   - Possible Values: Integer
   - Required: Yes
 - `last_updated`: Date (or Datetime) of last update
   - Applies to: Root
   - Possible Values: date or datetime
   - Required: Yes
 - `phase_pda`: Preliminary Damage Assessment Phase form
   - Applies to: Root
   - Possible Values: JSON
   - Required: No
 - `phase_cleanup`: Cleanup phase form
   - Applies to: Root
   - Possible Values: JSON
   - Required: Yes
 - `phase_rebuild`: Rebuild Phase form
   - Applies to: Root
   - Possible Values: JSON
   - Required: No

Phase Attributes
-------------
 - `attribute_default`: If a required attribute is not defined, use this default
   - Applies to: Phases
   - Possible Values: string, `true`, `false`
   - Required: Yes
   - Default: `false`
 - `preamble_t`: Introductory instructions on the form
   - Applies to: Phases
   - Possible Values: string, translation
   - Required: Yes
   - Default: Defined in translations.js
 - `is_active`: The phase is active or not
   - Applies to: Phases
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `allow_suggestions`: Permit users to suggest changes to the form
   - Applies to: Phases
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `allow_site_claim`: Permit a user or organization to claim an entire site as a single work order
   - Applies to: Phases
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true` for cleanup and rebuilding phase; `false` for pda phase
 - `allow_section_claim`: Permit a user or organization to claim a section as a work order, thereby creating more than one work order per site.
   - Applies to: Phases
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true` for rebuilding phase; `false` for pda and cleanup phases.
 - `fields`: All fields and attributes belonging to the current phase.
   - Applies to: Phases and sections fields
   - Possible Values: JSON
   - Required: Yes
   - Default: `null`

Field Attributes
-------------
 - `field_type`: Identifies the type of field, input, or section.
   - Applies to: All fields
   - Possible Values: `section`, `text`, `textarea`, `suggest`, `hidden`, `select`, `multiselect`, `checkbox`, `radio`
   - Required: Yes
   - Default: `null`
 - `validation`: Identifies the type of validation to apply to the input
   - Applies to: All fields
   - Possible Values: `string`, `float`, `email`, `integer`, `datetime-local`
   - Required: Yes
   - Default: `string`
 - `label_t`: Translated label of the field, e.g. "name". Used also for translating from the DB to CSV export.
   - Applies to: All fields
   - Possible Values: string, translated. If `field_type` = `suggest`, then `label_t` = `null`
   - Required: Yes
   - Default: `null`
 - `help_text_t`: Translated help tips, e.g. for an info/help icon.
   - Applies to: All fields
   - Possible Values: string, translated.
   - Required: No
   - Default: `null`
 - `is_required`: Indicates that input into this field is required. Technically a specialized type of form validation.
   - Applies to: All fields
   - Possible Values: `true`, `false` 
   - Required: Yes
   - Default: `false`
 - `data_sensitivity`: Indicates the sensitivity class of the information collected by a field. Combining this information with the organization type, whether there is a relationship between the organization and the case, whether the case falls within the organization's geofence, and the medium through which the user is accessing the data dictates a particular redaction pattern on the data, which may be anywhere from no redaction to complete hiding. In contrast to `if_selected_then_work_type`, there is a preference to explicitly declare this value, rather than inherit from a parent.
   - Applies to: All fields
   - Possible Values: `verySensitive`, `orgSensitive`, `sensitive`, `lessSensitive`, `public`, `inherit`
   - Required: Yes
   - Default: `inherit`
 - `data_type`: Indicates the type of information collected by a field. This may be useful to group types of data in the future. Sensitivity and type do not have a one-to-one relationship. For example, a phone number is `verySensitive` (sensitivity) `personalInfo` (type), but a city or state is `public` (sensitivity) `personalInfo`.
   - Applies to: All fields
   - Possible Values: `personalInfo`, `caseInfo`, `workInfo`, `inherit`
   - Required: No
   - Default: `inherit`
 - `is_readonly`: Indicates whether this field is readonly. E.g. County, latitude, longitude.
   - Applies to: All fields
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`
 - `allow_edit_break_glass`: If a field is readonly, this permits the user to "break the glass" and edit the field by taking some sort of affirmative action (e.g. clicking a small "edit" link). Useful in case Google Maps guesses the County wrong, for example.
   - Applies to: All fields
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `true`
 - `allow_toggle_hiding`: Allow the user to hide/unhide the field to save space on the intake form. Note: The mobile version may override these defaults if advisable.
   - Applies to: All fields, but typically invoked on sections.
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`
 - `is_hidden_default`: Indicates the starting state of the field or section, hidden or unhidden.
   - Applies to: All fields
   - Possible Values: `true`, `false`
   - Required: Yes
   - Default: `false`, except: If `field_type` = `hidden`, default = `true`
 - `if_selected_then_work_type`: If this field is checked, selected, or data entered in any way, it will trigger either a specific, inherited, or no work type. For example, the section "Trees" would have an `if_selected_then_work_type` = `trees`. The question within the Trees subsection, "How many trees?" would have `if_selected_then_work_type` = `inherit` `[trees]`. However, a checkbox labeled "Needs heavy equipment" would have `if_selected_then_work_type` = `trees_heavy_equipment`. Thus, a single work order may have multiple work types (and therefore multiple icons). An explicit `work_type` selection will no longer occur. In contrast, "Phone Number" would have `if_selected_then_work_type` = `null`, because a phone number does not indicate the problem.
   - Applies to: All fields
   - Possible Values: `null`, `inherit`, work types: [`ash`, `biohazard`, `construction_consultation`, `core_relief_items`, `debris`, `debris_removal`, `deferred_maintenance`, `demolition`, `education`, `erosion`, `escort`, `fence`, `fire`, `_flood`, `flood`, `flood_indoor`, `flood_outdoor`, `food`, `goods_or_services`, `health`, `infrastructure`, `infrastructure_logistics`, `jobs_livelihoods`, `landslide`, `leak`, `mold_remediation`, `muck_out`, `other`, `pda_1`, `pda_2`, `pda_3`, `pda_4`, `pda_5`, `phone`, `pill`, `power`, `protection_security`, `rebuild`, `rebuild_total`, `report`, `retardant_cleanup`, `shelter`, `siding`, `smoke_damage`, `snow_ground`, `snow_roof`, `structure`, `syringe`, `tarp`, `temporary_housing`, `tornado`, `trees`, `trees_heavy_equipment`, `unknown`, `various`, `volcano`, `water_sanitation`, `water_bottles`, `water_filter`], or other future work type.
   - Required: Yes
   - Default: `inherit`
 - `fields`: All fields and attributes belonging to the current section
   - Applies to: Only `field_type` = `section` (and Phases)
   - Possible Values: JSON
   - Required: Yes
   - Default: `null`
 - `placeholder_t`: The form placeholder that disappears in freeform text fields
   - Applies to: Only `field_type` = `text` or `textarea`
   - Possible Values: string, translated
   - Required: Yes
   - Default: `null`
 - `options`: 
   - Applies to: Only `field_type` = `select`, `multiselect`, `checkbox`, or `radio`
   - Possible Values: JSON
   - Required: Yes
   - Default: `null`, except `field_type` = `checkbox`. Default = array[`null`, `true`, `false`]


Option Attributes
-------------

 - `value`: The value inputted into the database when a value is selected.
   - Applies to: Only JSON located in the `options` field (e.g. Only `field_type` = `select`, `multiselect`, `checkbox`, or `radio`)
   - Possible Values: string
   - Required: Yes
   - Default: `null`
 - `name_t`: The translated version of that string. For example, a `value` for the field "Status" might be, `open_unassigned`. The `name_t` would display, "Open, unassigned" in English, and "Abierto, sin asignar" in Spanish.
   - Applies to: Only JSON located in the `options` field (e.g. Only `field_type` = `select`, `multiselect`, `checkbox`, or `radio`)
   - Possible Values: string, translated
   - Required: Yes
   - Default: `null`

## Attribute Suffix Conventions
 - `_t`: This attribute must be translated, using `\src\services\translation.js`
 - `_info`: Generally used to denote a section
 - `_info_end`: Used internally to denote the close of a section

Current list of translatable attributes (including in areas other than forms):
-------------
 - `name_t`
 - `description_t`
 - `comment_t`
 - `label_t`
 - `help_text_t`
 - `name_1_t`
 - `name_2_t`
 - `preamble_t`
 - `placeholder_t`


Adding New Definitions
---------------
1. New incident definition file is created following `EVENT_NUMBER-NAME.json` convention
2. New definition file is added to `src/definitions/forms`
3. New definition file is imported into `src/components/form/EventForm.vue` (around lines 47-116) 
    - e.g. `import EventData72 from ../../definitions/forms/72-foo-bar.json`
4. Case statement is added for new definition file in `src/components/form/EventForm.vue` (around lines 136-202)
    - e.g. `case 72: return EventData72.phase_cleanup;`
