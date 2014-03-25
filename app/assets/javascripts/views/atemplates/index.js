window.Alistpress.Views.AtemplatesIndex = Backbone.View.extend({
  className: 'row',
  
  template: JST['atemplates/index'],
  
  initialize: function() {
    this.listenTo(Alistpress.atemplates, "sync add remove change", this.render);
  },
  
  getCategories: function() {
    var atemplates = this.collection;
    
    var result = [];
    var categoriesAry = [];
    _.each(atemplates.models, function(atemplate){
      categoriesAry.push(atemplate.attributes.category);
    });
    
    _.each(categoriesAry, function(category){
      if (result.indexOf(category) == -1){
        result.push(category)
      };
    });

    return result;
  },

  render: function() {
    var renderedContent = this.template({
      atemplates: this.collection,
      categories: this.getCategories()    
    });
    
    this.$el.html(renderedContent);
    return this;
  }
  
});