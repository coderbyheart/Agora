'use strict';

var expect = require('must-dist');

var beans = require('../../testutil/configureForTest').get('beans');
var Rooms = beans.get('rooms');
var Member = beans.get('member');

describe('Rooms', function () {

  var allKnownMemberIds = ['memberId1', 'memberId2', 'memberId3', 'memberId4', 'memberId5'];
  var allKnownMembers = [
    new Member({id: 'memberId1'}),
    new Member({id: 'memberId2'}),
    new Member({id: 'memberId3'}),
    new Member({id: 'memberId4'}),
    new Member({id: 'memberId5'})
  ];

  it('removes a pair if the members are given in the right order', function () {
    var roomsInResource = [
      {
        participant1: 'memberId1',
        participant2: 'memberId2'
      }, {
        participant1: 'memberId3',
        participant2: 'memberId4'
      }];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    rooms.remove('memberId1', 'memberId2');

    expect(rooms.state).to.have.length(1);
    expect(rooms.state[0].participant1).to.be('memberId3');
    expect(rooms.state[0].participant2).to.be('memberId4');
  });

  it('does not remove a pair if the members are given in the wrong order', function () {
    var roomsInResource = [
      {
        participant1: 'memberId1',
        participant2: 'memberId2'
      }, {
        participant1: 'memberId3',
        participant2: 'memberId4'
      }];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    rooms.remove('memberId2', 'memberId1');

    expect(rooms.state).to.have.length(2);
    expect(rooms.state[0].participant1).to.be('memberId1');
    expect(rooms.state[0].participant2).to.be('memberId2');
    expect(rooms.state[1].participant1).to.be('memberId3');
    expect(rooms.state[1].participant2).to.be('memberId4');
  });

  it('removes a pair if the first member is given', function () {
    var roomsInResource = [
      {
        participant1: 'memberId1',
        participant2: 'memberId2'
      }, {
        participant1: 'memberId3',
        participant2: 'memberId4'
      }];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    rooms.removePairContaining('memberId1');

    expect(rooms.state).to.have.length(1);
    expect(rooms.state[0].participant1).to.be('memberId3');
    expect(rooms.state[0].participant2).to.be('memberId4');
  });

  it('removes a pair if the second member is given', function () {
    var roomsInResource = [
      {
        participant1: 'memberId1',
        participant2: 'memberId2'
      }, {
        participant1: 'memberId3',
        participant2: 'memberId4'
      }];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    rooms.removePairContaining('memberId2');

    expect(rooms.state).to.have.length(1);
    expect(rooms.state[0].participant1).to.be('memberId3');
    expect(rooms.state[0].participant2).to.be('memberId4');
  });

  it('finds a roommate for a given member id', function () {
    var roomsInResource = [
      {
        participant1: 'memberId1',
        participant2: 'memberId2'
      }, {
        participant1: 'memberId3',
        participant2: 'memberId4'
      }];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    expect(rooms.findRoommateFor('memberId1')).to.be('memberId2');
    expect(rooms.findRoommateFor('memberId2')).to.be('memberId1');
    expect(rooms.findRoommateFor('nonexistentMemberId')).to.not.exist();
  });



  it('lists those participants that already are in a room', function () {
    var roomsInResource = [{participant1: 'memberId1', participant2: 'memberId2'}];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    var participantsInRoom = rooms.participantsInRoom();

    expect(participantsInRoom).to.eql(['memberId1', 'memberId2']);
  });

  it('lists the room pairs', function () {
    var roomsInResource = [
      {
        participant1: 'memberId1',
        participant2: 'memberId2'
      }, {
        participant1: 'memberId3',
        participant2: 'memberId4'
      }];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    var roomPairs = rooms.roomPairsWithMembersFrom(allKnownMembers);

    expect(roomPairs).to.have.length(2);
    expect(roomPairs[0].participant1.id()).to.be('memberId1');
    expect(roomPairs[0].participant2.id()).to.be('memberId2');
    expect(roomPairs[1].participant1.id()).to.be('memberId3');
    expect(roomPairs[1].participant2.id()).to.be('memberId4');
  });

  it('lists those participants that are not yet in a room', function () {
    var roomsInResource = [{participant1: 'memberId1', participant2: 'memberId2'}];
    var rooms = new Rooms(roomsInResource, allKnownMemberIds);

    var participantsWithoutRoom = rooms.participantsWithoutRoom();

    expect(participantsWithoutRoom).to.eql(['memberId3', 'memberId4', 'memberId5']);
  });

});
