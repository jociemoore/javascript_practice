// var inventory;
$(function() {
  (function() {
    var inventory = {
      collection: [],
      setDate: function() {
        var ts = new Date();
        $('#order_date').text(ts.toUTCString());
      },
      getTemplate: function() {
        this.template = $("script[type='text/template']").remove( ).html();
      },
      deleteTemplateScript: function() {
        $template.remove();
      },
      addItem: function() {
         var item = {
           id: this.collection.length + 1,
           name: '',
           stockNumber: '',
           quantity: 1,
         };
         var tr = this.template.slice().replace(/ID/g, item['id'] );
         $('table').append($.parseHTML(tr));
         this.collection.push(item);
      },
      updateItem: function(target) {
         var updatedItemId = this.getID($(target));
         var updatedItemProperty = this.getPropertyName($(target) );
         var newValue = $(target).val();
         var item = this.collection.filter(function(item, index)  {
           return item['id'] === Number(updatedItemId);
         });
         item[0][updatedItemProperty] = newValue;
      },
      deleteItem: function(target) {
        var items = $('table').children();
        var item = $(target).closest('tr');
        var index = items.index(item);
        item.remove();
        this.collection.splice(index, 1);
      },
      getPropertyName: function(target) {
        var name = target.attr('name');
        var lastUnderScoreIndex;
        name = name.slice(5);
        lastUnderScoreIndex = name.lastIndexOf('_');
        name = name.substring(0, lastUnderScoreIndex);
        return name;
      },
      getID: function(target) {
        var nameArray = target.attr('name').split('_');
        var id = nameArray[nameArray.length - 1];
        return id;
      },
      bind: function() {
        var self = this;
  
        $('#add_item').on('click', function(e) {
          e.preventDefault();
          self.addItem();
        });
  
        $('table').on('blur', 'input', function(e) {
          self.updateItem(e.currentTarget);
        });
  
        $('table').on('click', '.delete', function(e) {
          e.preventDefault();
          self.deleteItem(e.currentTarget);
        });
      },
      init: function() {
        this.bind();
        this.setDate();
        this.getTemplate();
      }
    };
  inventory.init();
  })();
// inventory.init.bind(inventory);
});