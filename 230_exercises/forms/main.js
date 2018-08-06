var form = { 
  isComplete: function() {
    var totalFormErrors = $(document).find('.fieldError');
    return totalFormErrors.length === 0;
  },
  removeSubmissionError: function() {
    $('.submitError').remove();
  },
  renderErrorMessage: function(msg, $target) {
    var $lastElementWithinLabel = $target.closest('label').children().last();

    var $el = $('<p>', {
      class: 'fieldError',
      text: msg
    });

    if ($lastElementWithinLabel.is('dd')) {
      $target.closest('label').append($el);
    }
  },
  renderInvalid: function(field) {
    $(field).removeClass('focus');
    $(field).addClass('invalid');
  },
  changeInputFocus: function($target) {
    $target.trigger('blur');
    $target.nextAll('input').first().trigger('focus');
  },
  validateRequiredField: function(field) {
    var name = $(field).closest('label').children().first().text();
    var errorMsg = name + ' is a required field.';

    if (field.validity.valueMissing) {
      this.renderInvalid(field);
      this.renderErrorMessage(errorMsg, $(field));
    }
  },
  validateFormat: function(field) {
    var name = $(field).closest('label').children().first().text();
    var errorMsg = 'Please Enter a valid ' + name + '.';

    if (field.validity.patternMismatch) {
      this.renderInvalid(field);
      this.renderErrorMessage(errorMsg, $(field));
    }
  },
  validatePasswordLength: function(field) {
    var minLength = 10;
    var errorMsg = 'Password must be at least 10 characters long.';

    if (field.value.length < minLength) {
      this.renderInvalid(field);
      this.renderErrorMessage(errorMsg, $(field));
    }
  },
  checkAutoTab: function($target) {
    var isLastInput = $target.index() === 6;
    var isFull = $target.val().length === 3;
    
    if (!isLastInput && isFull) {
      this.changeInputFocus($target);
    }
  },
  validateNonAlphaNonWhitespace: function(e, pattern) {
    var key = String.fromCharCode(e.which);

    if (!pattern.test(key)) {
      e.preventDefault();
    }
  },
  validateNonNumeric: function (e, pattern) {
    var key = e.which;

    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  },
  updateFormStatus: function() {
    if (this.isComplete()) {
      this.removeSubmissionError();
    }
  },
  validateCurrentField: function($target) {
      var name = $target.attr('name');

      if (name === 'FirstName') {
        this.validateRequiredField($target.get(0));
      } else if (name === 'LastName') {
        this.validateRequiredField($target.get(0));
      } else if (name === 'Email') {
        this.validateRequiredField($target.get(0));
        this.validateFormat($target.get(0));
      } else if (name === 'Password') {
        this.validateRequiredField($target.get(0));
        this.validatePasswordLength($target.get(0));
      } else if (name === 'PhoneNumber') {
        this.validateFormat($target.get(0));
      } else if (name === 'CreditCard') {
        this.validateFormat($target.get(0));
      }
  },
  validateFormSubmission: function() {
    var self = this;
    var firstname = $("input[name='FirstName']").get(0);
    var lastname = $("input[name='LastName']").get(0);
    var email = $("input[name='Email']").get(0);
    var password = $("input[name='Password']").get(0);
    var phoneNumber = $("input[name='PhoneNumber']").get(0);
    var creditCardInputs = $("input[name='CreditCard']");

    this.validateRequiredField(firstname);
    this.validateRequiredField(lastname);
    this.validateRequiredField(email);
    this.validateFormat(email);
    this.validateRequiredField(password);
    this.validatePasswordLength(password);
    this.validateFormat(phoneNumber);
    $.each(creditCardInputs, function(_, input) {
      self.validateFormat(input);
    });
  },
  renderSubmissionError: function() {
    var $firstFormElement = $('form').children().first();

    var $el = $('<p>', {
      class: 'submitError',
      text: 'Form cannot be submitted until errors are corrected.'
    });

    if ($firstFormElement.is('label')) {
      $('form').prepend($el);
    }
  },
  getFullCreditCardNumber: function() {
    var creditCardInputs = $("input[name='CreditCard']");
    var creditCardNumber = '';

    $.each(creditCardInputs, function(_, input) {
      creditCardNumber += input.value;
    });

    return creditCardNumber;
  },
  sendData: function() {
    var output = $('#serializedData');
    var form = $('form').get(0);
    var keysAndValues = [];
    var value;

    for (var i = 0; i < form.elements.length; i += 1) {
      var element = form.elements[i];
      var key = encodeURIComponent(element.name);

      if (key === 'CreditCard') {
        value = encodeURIComponent(this.getFullCreditCardNumber());
        i += 3;
      } else {
        value = encodeURIComponent(element.value);
      }

      keysAndValues.push(key + '=' + value);
    }

    keysAndValues.splice(-1);
    
    var data = keysAndValues.join('&');
    output.append('<p>' + data + '</p>');
  },
  bindKeypress: function($target) {
    var self = this;

    $target.on('keypress', function(e) {
      var pattern = new RegExp($target.attr('pattern'));

      if ($target.attr('name') === 'FirstName' || 
          $target.attr('name') === 'LastName') {
        self.validateNonAlphaNonWhitespace(e, pattern);
      } else if ($target.attr('name') === 'CreditCard') {
        self.validateNonNumeric(e, pattern);
        self.checkAutoTab($target);
      }
    });
  },
  bindBlur: function($target) {
    var self = this;

    $target.on('blur', function(e) {
      $target.removeClass('focus');
      $target.off('blur');
      $target.off('keypress');
      
      self.validateCurrentField($target);
      self.updateFormStatus();
    });
  },
  bindSubmit: function() {
    var self = this;

    $('form').on('submit', function(e) {
      e.preventDefault();
      self.validateFormSubmission();

      if (self.isComplete()) {
        self.sendData();
      } else {
        self.renderSubmissionError();
      }
    });
  },
  bindFocus: function() {
    var self = this;

    $('input').on('focus', function(e) {
      var $target = $(e.target);
      var $lastElementWithinLabel = $target.closest('label').children().last();

      $target.removeClass();
      $target.addClass('focus');

      if ($lastElementWithinLabel.is('p')) {
        $lastElementWithinLabel.remove();
      }

      self.bindBlur($target);
      self.bindKeypress($target);
    });
  },
  init: function() {
    this.bindFocus();
    this.bindSubmit();
  }
}

$(function() {
  form.init();
});
