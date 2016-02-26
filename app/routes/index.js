import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('question');
  // },

  actions: {
    saveQuestion(params) {
      console.log("It got to the index.js!");
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
