const statuses = {
  outbound {
    status_1_1_1 {
      id: "1.1.1",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.added'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.added')
    },
    status_1_1_2 {
      id: "1.1.2",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.updated'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.updated')
    },
    status_1_1_3 {
      id: "1.1.3",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.call_211'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.call_211')
    },
    status_1_1_4 {
      id: "1.1.4",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.already_in_ccu'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.already_in_ccu')
    },
    status_1_1_5 {
      id: "1.1.5",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.investigated'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.investigated')
    },
    status_1_1_6 {
      id: "1.1.6",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.will_call_back'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.will_call_back')
    },
    status_1_1_7 {
      id: "1.1.7",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.did_not_contact'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.did_not_contact')
    },
    status_1_1_8 {
      id: "1.1.8",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.no_help_needed'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.no_help_needed')
    },
    status_1_1_9 {
      id: "1.1.9",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.thanked_us'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.thanked_us')
    },
    status_1_1_10 {
      id: "1.1.10",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.wants_to_volunteer'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.wants_to_volunteer')
    },
    status_1_1_11 {
      id: "1.1.11",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.other'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.other')
    },
    status_1_2_1 {
      id: "1.2.1",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.mandarin'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.mandarin')
    },
    status_1_2_2 {
      id: "1.2.2",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.spanish'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.spanish')
    },
    status_1_2_3 {
      id: "1.2.3",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.another_language'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.another_language')
    },
    status_1_2_4 {
      id: "1.2.4",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.immediate_needs'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.immediate_needs')
    },
    status_1_2_5 {
      id: "1.2.5",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.special_needs'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.special_needs')
    },
    status_1_3_1 {
      id: "1.3.1",
      name_level1: i18n.t('phone_status.no_answer'),
      name_level2: i18n.t('phone_status.voicemail'),
      name_complete: i18n.t('phone_status.no_answer') + ": " + i18n.t('phone_status.voicemail')
    },
    status_1_3_2 {
      id: "1.3.2",
      name_level1: i18n.t('phone_status.no_answer'),
      name_level2: i18n.t('phone_status.no_voicemail'),
      name_complete: i18n.t('phone_status.no_answer') + ": " + i18n.t('phone_status.no_voicemail')
    },
    status_1_3_3 {
      id: "1.3.3",
      name_level1: i18n.t('phone_status.no_answer'),
      name_level2: i18n.t('phone_status.second_call'),
      name_complete: i18n.t('phone_status.no_answer') + ": " + i18n.t('phone_status.second_call')
    },
    status_1_3_4 {
      id: "1.3.4",
      name_level1: i18n.t('phone_status.no_answer'),
      name_level2: i18n.t('phone_status.voicemail_full'),
      name_complete: i18n.t('phone_status.no_answer') + ": " + i18n.t('phone_status.voicemail_full')
    },
    status_1_4_1 {
      id: "1.4.1",
      name_level1: i18n.t('phone_status.bad_number'),
      name_level2: i18n.t('phone_status.wrong_number'),
      name_complete: i18n.t('phone_status.bad_number') + ": " + i18n.t('phone_status.wrong_number')
    },
    status_1_4_2 {
      id: "1.4.2",
      name_level1: i18n.t('phone_status.bad_number'),
      name_level2: i18n.t('phone_status.out_of_service'),
      name_complete: i18n.t('phone_status.bad_number') + ": " + i18n.t('phone_status.out_of_service')
    },
    status_1_5_1 {
      id: "1.5.1",
      name_level1: i18n.t('phone_status.error'),
      name_level2: i18n.t('phone_status.technical_difficulty'),
      name_complete: i18n.t('phone_status.error') + ": " + i18n.t('phone_status.technical_difficulty')
    }
  },
  inbound {
    status_2_1_1 {
      id: "2.1.1",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.added'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.added')
    },
    status_2_1_2 {
      id: "2.1.2",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.updated'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.updated')
    },
    status_2_1_3 {
      id: "2.1.3",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.call_211'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.call_211')
    },
    status_2_1_4 {
      id: "2.1.4",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.already_in_ccu'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.already_in_ccu')
    },
    status_2_1_5 {
      id: "2.1.5",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.investigated'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.investigated')
    },
    status_2_1_6 {
      id: "2.1.6",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.will_call_back'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.will_call_back')
    },
    status_2_1_9 {
      id: "2.1.9",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.thanked_us'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.thanked_us')
    },
    status_2_1_10 {
      id: "2.1.10",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.wants_to_volunteer'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.wants_to_volunteer')
    },
    status_2_1_11 {
      id: "2.1.11",
      name_level1: i18n.t('phone_status.answered'),
      name_level2: i18n.t('phone_status.other'),
      name_complete: i18n.t('phone_status.answered') + ": " + i18n.t('phone_status.other')
    },
    status_2_2_1 {
      id: "2.2.1",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.mandarin'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.mandarin')
    },
    status_2_2_2 {
      id: "2.2.2",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.spanish'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.spanish')
    },
    status_2_2_3 {
      id: "2.2.3",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.another_language'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.another_language')
    },
    status_2_2_4 {
      id: "2.2.4",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.immediate_needs'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.immediate_needs')
    },
    status_2_2_5 {
      id: "2.2.5",
      name_level1: i18n.t('phone_status.special_assistance'),
      name_level2: i18n.t('phone_status.special_needs'),
      name_complete: i18n.t('phone_status.special_assistance') + ": " + i18n.t('phone_status.special_needs')
    },
    status_2_5_1 {
      id: "2.5.1",
      name_level1: i18n.t('phone_status.error'),
      name_level2: i18n.t('phone_status.technical_difficulty'),
      name_complete: i18n.t('phone_status.error') + ": " + i18n.t('phone_status.technical_difficulty')
    }
  }
}
export default statuses;
