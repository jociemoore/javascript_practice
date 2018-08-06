var App = (function() {
  var cars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corrolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

return {
  templates: {},
  filterCars: function(criteria) {
    var filteredCars = cars;

    criteria.forEach(function(specifiedCategory) {
      var spec = specifiedCategory.value;

      filteredCars = filteredCars.filter(function(currentCar) {
        if (spec === 'All' || spec === 'Any') {
          return true;
        }

        var currentCarData = Object.keys(currentCar).map(function(key) {
          return String(currentCar[key]);
        });

        return $.inArray(spec, currentCarData) > -1;
      });
    });

    return filteredCars;
  },
  renderFilters: function() {
    var filters = this.templates['filters']({cars: cars});
    $('fieldset').prepend(filters);
  },
  renderCarTiles: function(cars) {
    var currentCars = this.templates['carTiles']({cars: cars});
    $('main').empty();
    $('main').append(currentCars);
  },
  registerHandlebarsTemplates: function() {
    var self = this;

    $("script[type='text/x-handlebars']").each(function() {
      var $template = $(this);
      var name = $template.attr('id');

      if ($template.data('type') === 'partial') {
        Handlebars.registerPartial(name, $template.html());
      }

      self.templates[name] = Handlebars.compile($template.html());
    });
  },
  bindEvents: function() {
    var self = this;

    $('form').on('submit', function(e) {
      e.preventDefault();

      var criteria = $(this).serializeArray();
      var matchingCars = self.filterCars(criteria);

      self.renderCarTiles(matchingCars);
    });
  },
  init: function() {
    this.registerHandlebarsTemplates();
    this.bindEvents();
    this.renderFilters();
    this.renderCarTiles(cars);
  }
}
})();

$(function() {
  App.init();
});
