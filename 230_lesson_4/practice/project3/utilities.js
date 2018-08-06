(function() {

  var findObjs = function(element, givenObj) {
        var match;

        element.some(function(currentObj) {
          var prop; 
          var lastProperty = Object.keys(givenObj)[Object.keys(givenObj).length - 1];

          for (prop in givenObj) {
            if (currentObj[prop] === givenObj[prop]) {
                if (prop === lastProperty) {
                  match = currentObj;
                  return true;
                }
            } else {
              return false;
            }
          }
        });

        return match;
  }

  var _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var index;
        var newArray = element;
  
        Array.prototype.forEach.call(arguments, function(elem) {
          index = newArray.indexOf(elem);
          newArray.splice(index, 1);
        });
  
        return newArray;
      },
      lastIndexOf: function(elem) {
        var index = -1;
        var i;

        for (i = element.length; i >= 0; i -= 1) {
          if (element[i] === elem) {
            index = i;
            break;
          }
        }

        return index;
      },
      sample: function(quantity) {
        var newArray = element;

        if (quantity === undefined) {
          var randomIndex1 = Math.floor(Math.random() * newArray.length);
          return newArray[randomIndex1];
        } else {
          var randomElems = [];
          var i;
  
          for (i = 0; i < quantity; i += 1) {
            var elem = _(newArray).sample();
            _(newArray).without(elem);
            randomElems.push(elem);
          }
  
          return randomElems;
        }
      },
      findWhere: function(givenObj) {
        return findObjs(element, givenObj);
      },
      where: function(givenObj) {
        var newArray = element;
        var matches = [];
        var match = findObjs(newArray, givenObj);
        var startIndex = 0;

        while (match !== undefined || startIndex < newArray.length) {
          newArray = newArray.slice(startIndex);
          match = findObjs(newArray, givenObj);

          if (match) {
            matches.push(match);
            startIndex = newArray.indexOf(match) + 1;
          }
        }

        return matches;
      },
      pluck: function(key) {
        var values = [];
        var i;

        element.forEach(function(obj) {
          var currentValue = obj[key];

          if (currentValue) {
            values.push(currentValue);
          }
        });

        return values;
      },
      keys: function() {
        return Object.keys(element);
      },
      values: function() {
        return Object.keys(element).map(function(prop) {
          return element[prop];
        });
      },
      pick: function() {
        var properties = [].slice.call(arguments);
        var newObj = {};

        properties.forEach(function(prop) {
          newObj[prop] = element[prop];
        });

        return newObj;
      },
      omit: function() {
        var properties = [].slice.call(arguments);
        var newObj = element;

        properties.forEach(function(prop) {
          delete newObj[prop];
        });

        return newObj;
      },
      has: function(prop) {
        return Object.keys(element).indexOf(prop) > -1;
      },
      isElement: function() {
        _.isElement(element);
      }
    };

    (['isElement', 'isArray', 'isObject', 'isFunction', 'isString', 'isNumber', 'isBoolean']).forEach(function(method) {
      u[method] = function () { _[method].call(u, element); };
    });
    
    return u;
  };

  _.range = function(start, end) {
    var i;
    var range = [];
    var start = arguments[0];
    var end = arguments[1];


    if (end === undefined) {
      end = arguments[0];
      start = 0;
    } 
  
    for (i = start; i < end; i += 1) {
      range.push(i);
    }
  
    return range;
  };

  _.extend = function() {
    var prop;
    var allObjs = Array.prototype.slice.call(arguments);
    var lastObj = allObjs[allObjs.length - 1];
    var secondToLastObj = allObjs[allObjs.length - 2];

    for (prop in lastObj) {
      secondToLastObj[prop] = lastObj[prop];
    }

    allObjs.splice(-1);
    return allObjs.length === 1 ? allObjs[0] : _.extend.apply(_, allObjs);
  };

  _.isObject = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' ||
           _.isArray(obj) ||
           _.isFunction(obj);
  };

  _.isElement = function(obj) {
    return Object.prototype.toString.call(obj).match(/(HTML)[A-Za-z]*(Element)/);
  };

  (['Array', 'Function', 'Boolean', 'String', 'Number']).forEach(function(method) {
    _['is' + method] = function(obj) {
      return Object.prototype.toString.call(obj) === '[object ' + method + ']';
    };
  });

  window._ = _;
})();



