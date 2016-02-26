import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,
  actions: {
    showAnswerForm() {
      this.set('answerForm', true);
    },

    save_answer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        answer_date: Date.now()
      };
      this.sendAction('saveAnswer', params);
      this.set('answerForm', false);
    }
  }
});
