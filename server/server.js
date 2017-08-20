import { Meteor } from 'meteor/meteor';

// code to run on server at startup
Rates = new Meteor.Collection('rates');

if (Meteor.isServer) {
	Meteor.publish('rates', function() {
		return Rates.find();
	});

	Meteor.setInterval(function() {
		Rates.insert({ rate: Math.random() });
	}, 1000);
}
