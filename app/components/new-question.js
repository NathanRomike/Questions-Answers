import Ember from 'ember';

export default Ember.Component.extend({
  questionForm: false,
  actions: {
    showQuestionForm() {
      this.set('questionForm', true);
    },

    save_question() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        ask_date: Date.now()
      };
      console.log(params.author);
      this.sendAction('saveQuestion', params);
      this.set('questionForm', false);
    }
  }
});
