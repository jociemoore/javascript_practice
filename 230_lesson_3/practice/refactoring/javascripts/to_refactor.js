$(function() {
  var birthstones = {
    "January": "garnet",
    "February": "amethyst",
    "March": "aquamarine or bloodstone",
    "April": "diamond",
    "May": "emerald",
    "June": "pearl, moonstone, or alexandrite",
    "July": "ruby",
    "August": "peridot",
    "September": "sapphire",
    "October": "opal or tourmaline",
    "November": "topaz or citrine",
    "December": "turquoise, zircon, or tanzanite"
  }

  function luhnTotal(cc_number) {
    var odd_total = 0;
    var even_total = 0;
    cc_number = cc_number.split("").reverse();

    for (var i = 0, len = cc_number.length; i < len; i++) {
      if (i % 2 == 1) {
        cc_number[i] = (+cc_number[i] * 2) + "";
        if (cc_number[i].length > 1) {
          cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
        }
        else {
          cc_number[i] = +cc_number[i];
        }
        odd_total += cc_number[i];
      } else {
        even_total += +cc_number[i];
      }
    }

    return (odd_total + even_total);
  }

  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("visible")
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("visible");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var total = luhnTotal(cc_number);
    var isValid = total % 10 == 0 && total !== 0;

    $(this).find(".success").toggle(isValid);
    $(this).find(".error").toggle(!isValid);
  });

  $(document).click(function(e) {
    var target = e.target;

    if ($(target).hasClass("button") || 
        $(target).is("button")) {
        e.preventDefault();
  
        $(target).addClass("clicked");
    } else if ($(target).hasClass("toggle")) {
        e.preventDefault();
    
        $(target).next(".accordion").toggleClass("opened");
    } else if ($(target).is("ul a")) {
        e.preventDefault();
    
        var month = $(target).text();
        var $stone = $("#birthstone");

        $stone.text("Your birthstone is " + birthstones[month]);
    }
  });
});
