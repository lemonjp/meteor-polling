// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Meteorってすごい？',
        choices: [
          { text: 'もちろん！', votes: 0 },
          { text: 'どうかな', votes: 0 },
          { text: 'いいや、俺は素のJSがいいね', votes: 0 }
        ]
      },
      {
        question: 'Reactってどうなの？',
        choices: [
          { text: 'いいね', votes: 0 },
          { text: 'どうかな', votes: 0 },
          { text: 'やっぱAngularでしょ', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});
