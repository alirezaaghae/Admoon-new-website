var emailValid = false;
var nameValid = false;
var phoneValid = false;
var websiteValid = false;
var page = '';

// just get 11 number input
var alireza = document.querySelectorAll(".alireza_validator input"),
    i;
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}
for (i = 0; i < alireza.length; ++i) {
    alireza[i].maxLength = 11;
    // Restrict input to digits and '.' by using a regular expression filter.
    setInputFilter(alireza[i], function (value) {
        return /^[0-9۰-۹]*$/i.test(value);
    });
}

// input select 
var x, i, j, l, ll, selElmnt, a, b, c, formPage;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
const element = document.getElementById("FPS"); 
formPage = element.getAttribute("page");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  if (formPage != ''){
    a.innerHTML = formPage;
    page = formPage;
  } else {
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    page = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  }

  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



$('#homePage .owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    nav:true,
    // rtl:true,
    autoplay: true,
    autoplayHoverPause: true,
    singleItem:true,
    autoplayTimeout: 6000,
    navText : ["<img src='assets/images/leftArrowSlider.svg' width='54px'>","<img src='assets/images/rightArrowSlider.svg' width='54px'>"],
    responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1
      }
     }
});


function sendAjaxForm() {
    var name, email, website, phone, page;
    var elm = $(this).parent();
    var a = 'ld';
    name = $("input[name='name']:checked").val();
    email = $("input[name='email']:checked").val();
    website = $("input[name='website']:checked").val();
    phone = $("input[name='phone']:checked").val();
    page = '' ? $("body").getAttribute("id") : page;

    $('.send_button').addClass('pending');
    $('.send_button').prop('disabled', true);

    // disable all forms when fill the form :|
//     [beforAjax] $('#next_button').addClass('pending');
//     [ajaxSuccess:] $('#next_button').removeClass('pending');$('form').addClass('success');
    $.ajax({
        url: 'form.php',
        method: "POST",
        data: {
            'ajax': 'true',
            'in': '5' + a,
            'page': page,
            'name': name,
            'email': email,
            'website': website,
            'phone': phone,
            'TotalFee': TotalFeeSum,
            'WageFee': WageFeeSum,
            'price': pricePerDot
        },
        success: function (result) {
            $('.send_button').addClass('disable');
            elm.addClass('success');
            // console.log(result);
            $('.thirdQS').removeClass('show');
            $('.successQS').addClass('show');
            $('.backbutton').hide();
            $('.formPriceSubmiting').addClass('success');
            $('#footerform').addClass('success');
            $('.form.contactUs').addClass('success');
        }
    });

}


$('form').submit(function () {
    return false;
});

// change language option
$('#dropdown').click(function () {
  $('#dropdown-options').toggleClass('open');
});

$('.phone-input .custom-details').click(function () {
  $('ul.list').toggleClass('open');
});
$('#phone').click(function () {
  $('ul.list.open').removeClass('open');
});

$('#sec_1 .icons>ul li').click(function () {
  $('li.text').removeClass('up');
  let x = $(this).attr('num');
  $(this).addClass('up');
  $('#sec_1 .icons>ul li').removeClass('active');
  $('#sec_1 .textinfo li.text').removeClass('active');
  $('#sec_1 .textinfo li.text.'+x).addClass('active');
  $(this).addClass('active');
  switch (x) {
    case 'one':
      $('#sec_1 .line .dot').css("left", "17.7%");
      break;
    case 'two':
      $('#sec_1 .line .dot').css("left", "41.7%");
      break;
    case 'three':
      $('#sec_1 .line .dot').css("left", "65%");
      break;
    case 'four':
      $('#sec_1 .line .dot').css("left", "88.5%");
      break;
    case 'five':
      $('#sec_1 .line .dot').css("left", "91.5%");
      break;
      
  }
  $('li.text:not.active').addClass('up');
  
});

$('.list label').click(function (e) {
  e.preventDefault();
  let listValue = $(this).attr("value");
  let listFor = $(this).attr("for");
  let listTitle = $(this).text();
  $('.listValue').text(listTitle);
  $('ul.list.open').removeClass('open');
  return false;
});



  $(".Email-input input").blur(function () {
    if ($(this).is(":invalid") || !$(this).val()) {
      emailValid = false;
    } else {
      emailValid = true;
    };
  });
  $(".Name-input input").blur(function () {
    if ($(this).is(":invalid") || this.value.length < 2) {
      nameValid = false;
    } else {
      nameValid = true;
    };
  });
  $(".phone-input input").blur(function () {
    if ($(this).is(":invalid") || this.value.length != 10) {
      phoneValid = false;
    } else {
      phoneValid = true;
    };
  });
  $(".website-input input").blur(function () {
    if ($(this).is(":invalid") || this.value.length < 2) {
      websiteValid = false;
    } else {
      websiteValid = true;
    };
  });

    // if ($(this).is(":invalid") || this.value.length != 10) {
    //   phoneValid = false;
    // } else {
    //   phoneValid = true;
    // };

// header form function
$('.next_button').click(function () {
  let state = $('.next_button').attr("state");

  switch (state) {
    case '0':
      if(emailValid){
        $('.form-input').attr("state", "name");
        $('.next_button').text('Next');
        $('.next_button').attr("state", "1");
      }
      break;
    case '1':
      if(nameValid){
        $('.form-input').attr("state", "phone");
        $('.next_button').attr("state", "2");
      }
      break;
    case '2':
      if(phoneValid){
        $('.form-input').attr("state", "website");
        $('.next_button').text('Send');
        $('.next_button').addClass('send_button');
        $('.next_button').attr("state", "3");
      }
      break;
    case '3':
      if(websiteValid){
        $('.successDiv').css("display", "flex");
        setTimeout(function(){ 
          $('.form-input').attr("state", "success");
        }, 100);
      }
      websiteValid = false;
      break;
    case '4':
      console.log(state);
  }
});

$('.send_button').click(function () {
  sendAjaxForm();
});

$('.top-label label').click(function (e) {
  e.preventDefault();
  let radio = $(this).attr("value");
  switch (radio) {
    case '0':
      $('.form-input').attr("state", "email");
      $('.next_button').text('Lets Start');
      $('.next_button.send_button').removeClass('send_button');
      $('.next_button').attr("state", "0");
      break;
    case '1':
      $('.form-input').attr("state", "name");
      $('.next_button').text('Next');
      $('.next_button.send_button').removeClass('send_button');
      $('.next_button').attr("state", "1");
      break;
    case '2':
      $('.form-input').attr("state", "phone");
      $('.next_button').text('Next');
      $('.next_button.send_button').removeClass('send_button');
      $('.next_button').attr("state", "2");
      
      break;
    case '3':
      $('.form-input').attr("state", "website");
      $('.next_button').text('Send');
      $('.next_button').addClass('send_button');
      $('.next_button').attr("state", "3");
      break;
    default: console.log('default');
  }
  return false;

});








// label form
// inputs form
$('.customForm>div').click(function (e) {
  e.preventDefault();
  $(this).addClass('active');
  $(this).find( "input" ).focus();
  return false;
});

$( "#Services,.ServicesNav" ).hover(
  function() {
    $('.selectBox.ServicesNav').css("height", "224px");
  }, function() {
      $('.selectBox.ServicesNav').css("height", "0");
  }
);

$( "#LearnAbout,.LearnAbout" ).hover(
  function() {
    $('.selectBox.LearnAbout').css("height", "277px");
  }, function() {
    $('.selectBox.LearnAbout').css("height", "0");
  }
);

// about us
// open box

$('#OurTeam>.boxs>ul>li').click(function () {
  $('#OurTeam>.boxs>ul>li').removeClass('open');
  $(this).addClass('open');
  if ( window.innerWidth > 760) {
    $('html, body').animate({
      scrollTop: $("#OurTeam").offset().top
    }, 0);
  }
});
$('#OurTeam .closeButton').click(function () {
  setTimeout(function(){ 
    $('#OurTeam>.boxs>ul>li').removeClass('open');
  }, 100);
});

$('.formDiscover').click(function () {
  $('.box').addClass('open');
});

var cPlusPlus = 0;
setInterval(function() {
  if(cPlusPlus % 2 == 0 ){
    $('.bottomItems ul.mobile li .items .item.showw').removeClass('showw');
    $('.bottomItems ul.mobile li .items .item:nth-child(1)').addClass('showw');
  } else {
    $('.bottomItems ul.mobile li .items .item.showw').removeClass('showw');
    $('.bottomItems ul.mobile li .items .item:nth-child(2)').addClass('showw');
  }
  cPlusPlus += 1;
}, 2500);

var MenuIsOpen = false;
$('.hamRotate').click(function () {
  if(MenuIsOpen){
    $('.hamRotate').removeClass('active');
    $('.headerNavBar').removeClass('open');
    MenuIsOpen = false;
  } else {
    $('.hamRotate').addClass('active');
    $('.headerNavBar').addClass('open');
    MenuIsOpen = true;
  }
  
});

// Fix mobile menu
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50 && window.innerWidth < 760) {
        // document.getElementById('MainNavBar').classList.add('fixed-top');
        $('#MainNavBar.mobile').addClass('fixed-top');
        // add padding top to show content behind navbar
        // navbar_height = document.querySelector('MainNavBar').offsetHeight;
        navbar_height = $('#MainNavBar.mobile').outerHeight() + 'px';
        $('#navbar_padding').css("padding-top", navbar_height);
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        // document.getElementById('navbar_top').classList.remove('fixed-top');
        $('#MainNavBar.mobile').removeClass('fixed-top');
         // remove padding top from body
        $('#navbar_padding').css("padding-top", '0');
      } 
  });
}); 