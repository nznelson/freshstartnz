$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

var googleForm = $(window).jqGoogleForms({"formKey": "1WILLX9m4XilS2Aot6lvv6HkpB0e8NmwVMx6Voz8Aq2E"});

$('#contact_form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
    //alert( "bad");
  } else {

    var owner = "No";

    if $('#owner').is(':checked'){
      owner = "Yes";
    }

    //alert( "good");
    googleForm.sendFormData({
        "entry.1791470700": $("#firstname").val(),
        "entry.223980102": $("#lastname").val(),
        "entry.1089363256": $("#number").val(),
        "entry.643872458": $("#email").val(),
        "entry.411567493": $("#address").val(),
        "entry.1037285793": owner,
        });
    //stop the form submitting
    e.preventDefault();

    //window.location.replace("./too-many-orders");
  }
});
