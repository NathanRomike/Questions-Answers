import Ember from 'ember';

export default Ember.Route.extend({
  questionForm: false,
  actions: {
    showQuestionForm() {
      this.set('questionForm', true);
    }
  }
});
