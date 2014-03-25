window.Alistpress.Views.SidebarIndex = Backbone.View.extend({
  
  tagName: 'section', 
  className: 'sidebar-section',
  
  template: JST['sidebar/index'],
  
  render: function() {
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    return this;
  }
  
});