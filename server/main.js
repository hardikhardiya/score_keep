import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function(){
  // Players.insert({
  // 	name: 'Vikram',
  // 	score: 31
  // });
  console.log(Players.find().fetch());
});