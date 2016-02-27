import Ember from 'ember';

export default Ember.Component.extend({
  questionEditForm: false,
  actions: {
    showQuestionEditForm() {
      this.set('questionEditForm', true);
    },

    edit_question(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        ask_date: Date.now()
      };
      this.set('questionEditForm', false);
      this.sendAction('edit', question, params);
    },

    cancel() {
      this.set('questionEditForm', false);
    }
  }
});
