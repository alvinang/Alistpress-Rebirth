window.Alistpress.Views.Todos = Backbone.View.extend({
  template: JST['home/todo'],
  
  render: function() {
    var renderedContent = this.template({
      todos: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});