import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  notes: DS.attr(),
  ask_date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
