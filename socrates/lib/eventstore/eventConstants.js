'use strict';

module.exports = {
  ROOM_QUOTA_WAS_SET: 'ROOM-QUOTA-WAS-SET',
  URL_WAS_SET: 'URL_WAS_SET',
  START_TIME_WAS_SET: 'START_TIME_WAS_SET',
  END_TIME_WAS_SET: 'END_TIME_WAS_SET',

  RESERVATION_WAS_ISSUED: 'RESERVATION-WAS-ISSUED',
  WAITINGLIST_RESERVATION_WAS_ISSUED: 'WAITINGLIST-RESERVATION-WAS-ISSUED',
  DID_NOT_ISSUE_RESERVATION_FOR_ALREADY_RESERVED_SESSION: 'DID_NOT_ISSUE_RESERVATION_FOR_ALREADY_RESERVED_SESSION',
  DID_NOT_ISSUE_WAITINGLIST_RESERVATION_FOR_ALREADY_RESERVED_SESSION: 'DID_NOT_ISSUE_WAITINGLIST_RESERVATION_FOR_ALREADY_RESERVED_SESSION',
  DID_NOT_ISSUE_RESERVATION_FOR_FULL_RESOURCE: 'DID_NOT_ISSUE_RESERVATION_FOR_FULL_RESOURCE',
  PARTICIPANT_WAS_REGISTERED: 'PARTICIPANT-WAS-REGISTERED',
  WAITINGLIST_PARTICIPANT_WAS_REGISTERED: 'WAITINGLIST_PARTICIPANT_WAS_REGISTERED',
  DID_NOT_REGISTER_PARTICIPANT_FOR_FULL_RESOURCE: 'DID_NOT_REGISTER_PARTICIPANT_FOR_FULL_RESOURCE',
  DID_NOT_REGISTER_PARTICIPANT_A_SECOND_TIME: 'DID_NOT_REGISTER_PARTICIPANT_A_SECOND_TIME',
  ROOM_TYPE_WAS_CHANGED: 'ROOM-TYPE-WAS-CHANGED',
  DURATION_WAS_CHANGED: 'DURATION-WAS-CHANGED',
  DID_NOT_CHANGE_ROOM_TYPE_FOR_NON_PARTICIPANT: 'DID-NOT-CHANGE-ROOM-TYPE-FOR-NON-PARTICIPANT',
  DID_NOT_CHANGE_DURATION_FOR_NON_PARTICIPANT: 'DID-NOT-CHANGE-DURATION-FOR-NON-PARTICIPANT',

  ROOM_PAIR_WAS_ADDED: 'ROOM_PAIR_WAS_ADDED',
  DID_NOT_ADD_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_NOT_IN_ROOM_TYPE: 'DID_NOT_ADD_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_NOT_IN_ROOM_TYPE',
  DID_NOT_ADD_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_ALREADY_IN_ROOM: 'DID_NOT_ADD_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_ALREADY_IN_ROOM',
  DID_NOT_ADD_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_PAIRED_WITH_THEMSELVES: 'DID_NOT_ADD_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_PAIRED_WITH_THEMSELVES',
  ROOM_PAIR_WAS_REMOVED: 'ROOM_PAIR_WAS_REMOVED',
  DID_NOT_REMOVE_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_NOT_IN_ROOM_TYPE: 'DID_NOT_REMOVE_ROOM_PAIR_BECAUSE_PARTICIPANT_IS_NOT_IN_ROOM_TYPE',
  DID_NOT_REMOVE_ROOM_PAIR_BECAUSE_THE_PAIR_DOES_NOT_EXIST_FOR_THIS_ROOM_TYPE: 'DID_NOT_REMOVE_ROOM_PAIR_BECAUSE_THE_PAIR_DOES_NOT_EXIST_FOR_THIS_ROOM_TYPE'
};
