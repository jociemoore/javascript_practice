var App = {
  todoItems: [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}],
  createTodos: function() {
    var todos = this.todoItems;
    $.each(todos, function(index, todo) {
      var closeBtn = $('<a>').attr('href', '#')
                             .addClass('close')
                             .text('Close');
      var newTodo = $('<li>').attr('data-id', todo.id)
                             .text(todo.title)
                             .append(closeBtn);
      $('ul').append(newTodo);
    });
  },
  setCurrentTodo: function($target) {
    this.currentTodo = $target.closest('li').data('id');
  },
  toggleModal: function() {
    $('#modal-container').fadeToggle();
  },
  deleteTodo: function() {
    $('ul').find('[data-id=' + this.currentTodo + ']').remove();
  },
  bindEvents: function() {
    var self = this;

    $(document).on('click', function(e) {
      e.preventDefault();
      var $target = $(e.target);

      if ($target.hasClass('close')) {
        self.setCurrentTodo($target);
        self.toggleModal();
      } else if ($target.hasClass('yesBtn')) {
        self.deleteTodo();
        self.toggleModal();
      } else if ($target.hasClass('noBtn')) {
        self.toggleModal();
      }
    });
  },
  init: function() {
    this.bindEvents();
    this.createTodos();
  }
}

$(function() {
  App.init();
}); 