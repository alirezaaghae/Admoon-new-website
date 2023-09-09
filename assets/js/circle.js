const WageFee = $('.WageFee');
const SetupFee = $('.SetupFee');
const BudgetFee = $('.BudgetFee');
const TotalFee = $('.TotalFee');
var TotalFeeSum = 0;
var WageFeeSum = 0;
var SetupFeeSum = 100;
var BudgetFeeSum = 0;
SetupFee.text('$100');

// circle price
const circleRange = document.querySelector('.circle-range');
const sliderRange = document.querySelector('.circle-range .slider');
const header = document.querySelector('#ServicesHeader');
const Intro = document.querySelector('#Intro');
const Steps = document.querySelector('#Steps');
  const body = document.querySelector('#AdsManage #ServicesMain');
const slider = document.querySelector('.slider');
  let isDragging;
  let isChecked = false;
  let isTruePrice = false;
let angle ;
let degree ;
// let pricePerDot ;
let priceShow ;
let topSections;
let centerX ;
let centerY ;
let deltaX ;
let deltaY ;
let posX ;
let posY ;

$('.circle-range .slider').bind( "mousedown touchstart", function() { isDragging = true; $('html, body').css({overflow: 'hidden' }); });
$('body').bind( "mouseup touchend", function() { isDragging = false; slider.style.transition = 'all .3s'; $('html, body').css({overflow: 'auto'}); });

  $('#PricingForm').bind( "mousemove touchmove", function(e) {
  
  const box = circleRange.getBoundingClientRect();
  const priceInfo = document.querySelector('.priceInfo').value;
  if(isDragging) {    
      const {atan2, PI, round} = Math ;
      // if 
    if ($(window).width() < 760) {
      topSections = header.offsetHeight;
    }
    else {
      topSections = header.offsetHeight + Intro.offsetHeight + Steps.offsetHeight + 200;
    }
    
          centerX = (circleRange.offsetWidth / 2) + box.left;
          centerY = (circleRange.offsetHeight / 2) + box.top;
    // console.log("Left: " + box.left.toFixed() + ", Top: " + box.top.toFixed() + ", Width: " + box.width + ", Height: " + box.height);
          posX = e.originalEvent.pageX ? e.originalEvent.pageX : e.originalEvent.touches[0].pageX ;
          posY = e.originalEvent.pageY ? e.originalEvent.pageY : e.originalEvent.touches[0].pageY ;
          posY -= topSections;
          deltaY = centerY - posY ;
          deltaX = centerX - posX ;
    // console.log('pageX: '+posX+', pageY: '+posY);
    // console.log('deltaX: '+deltaX+', deltaY: '+deltaY);
          angle = atan2(deltaY, deltaX) * (180 / PI) ;
          angle -= 0 ;
          if(angle < 0){
      angle += 360;
    }
          angle = round(angle);
    pricePerDot = (angle * 100)+1000;
    selectItems(pricePerDot);
    degree = angle - 90;
    slider.style.transition = 'inherit';
    slider.style.transform = `rotate(${degree}deg)`;
          // priceInfo.textContent = angle ;
    // $('#priceInfo').val(pricePerDot);
    priceShow = '$'+ pricePerDot.toLocaleString('en');
    BudgetFee.text(priceShow);
    TotalFeeSum = isChecked ? (WageFeeSum + pricePerDot + SetupFeeSum) : (WageFeeSum + SetupFeeSum);
    TotalFee.text('$'+ TotalFeeSum.toLocaleString('en'));
    $('#priceInfo').val(priceShow);
    // console.log(angle,priceInfo);
    
      }
      
  });
 function addListAfterKeypress() {
  pricePerDot = $( "#priceInfo" ).val();
  pricePerDot = pricePerDot.replace(/[^\d\.]*/g, ''); // Replace all leading non-digits with nothing
  pricePerDot = Number(pricePerDot);
  selectItems(pricePerDot);
  priceShow = '$'+ pricePerDot.toLocaleString('en');
  BudgetFee.text(priceShow);
  TotalFeeSum = isChecked ? (WageFeeSum + pricePerDot + SetupFeeSum) : (WageFeeSum + SetupFeeSum);
  TotalFee.text('$'+ TotalFeeSum.toLocaleString('en'));
  $('#priceInfo').val(priceShow);
  degree = (pricePerDot/100)-90;
  slider.style.transform = `rotate(${degree}deg)`;
  
}

function selectItems(price){
  if (1000 <= price && price < 5000){ 
    $('.selectItems>ul>li>.button').removeClass('selected');
    $('.selectItems>ul>li>.button[item="1"]').addClass('selected');
    WageFeeSum = (price*15)/100;
    WageFee.text('$'+WageFeeSum.toLocaleString('en'));
    isTruePrice = true;
  } else if (5000 <= price && price < 15000){ 
    $('.selectItems>ul>li>.button').removeClass('selected');
    $('.selectItems>ul>li>.button[item="2"]').addClass('selected');
    WageFeeSum = (price*7)/100;
    WageFee.text('$'+WageFeeSum.toLocaleString('en'));
    isTruePrice = true;
  } else if (15000 <= price){  
    $('.selectItems>ul>li>.button').removeClass('selected');
    $('.selectItems>ul>li>.button[item="3"]').addClass('selected');
    WageFeeSum = (price*5)/100;
    WageFee.text('$'+WageFeeSum.toLocaleString('en'));
    isTruePrice = true;
  } else {
    $('.selectItems>ul>li>.button').removeClass('selected');
    WageFee.text('$0');
    TotalFee.text('$0');
    BudgetFee.text('$0');
    isTruePrice = false;
  }
}


$('.SelectPrices>.selectItems>ul>li>.button').click(function () {
  $('.SelectPrices>.selectItems>ul>li>.button').removeClass('selected');
  $(this).addClass('selected');
  isTruePrice = true;
  let item = $(this).attr("item");
  switch (item) {
    case '1':
      pricePerDot = 1000;
      WageFeeSum = (pricePerDot*15)/100;
      WageFee.text('$'+WageFeeSum.toLocaleString('en'));
      TotalFeeSum = isChecked ? (WageFeeSum + pricePerDot + SetupFeeSum) : (WageFeeSum + SetupFeeSum);
      TotalFee.text('$'+ TotalFeeSum.toLocaleString('en'));
      slider.style.transform = `rotate(-90deg)`;
      $('#priceInfo').val('$'+ pricePerDot.toLocaleString('en'));
      break;
    case '2':
      pricePerDot = 5000;
      WageFeeSum = (pricePerDot*7)/100;
      WageFee.text('$'+WageFeeSum.toLocaleString('en'));
      TotalFeeSum = isChecked ? (WageFeeSum + pricePerDot + SetupFeeSum) : (WageFeeSum + SetupFeeSum);
      TotalFee.text('$'+ TotalFeeSum.toLocaleString('en'));
      slider.style.transform = `rotate(-50deg)`;
      $('#priceInfo').val('$'+ pricePerDot.toLocaleString('en'));
      break;
    case '3':
      pricePerDot = 15000;
      WageFeeSum = (pricePerDot*5)/100;
      WageFee.text('$'+WageFeeSum.toLocaleString('en'));
      TotalFeeSum = isChecked ? (WageFeeSum + pricePerDot + SetupFeeSum) : (WageFeeSum + SetupFeeSum);
      TotalFee.text('$'+ TotalFeeSum.toLocaleString('en'));
      slider.style.transform = `rotate(50deg)`;
      $('#priceInfo').val('$'+ pricePerDot.toLocaleString('en'));
      break;
    default: console.log('default');
  }
  
});
  

$('#payCheckbox').change(function() {
  // this will contain a reference to the checkbox   
  if (this.checked) {
      $('.BudgetFeeLi').addClass('showww');
      TotalFeeSum = WageFeeSum + pricePerDot + SetupFeeSum;
      console.log(WageFeeSum +'+'+ pricePerDot +'+'+ SetupFeeSum)
      isChecked = true;
      TotalFee.text('$'+ TotalFeeSum.toLocaleString('en'));
  } else {
      $('.BudgetFeeLi').removeClass('showww');
      TotalFeeSum = WageFeeSum + SetupFeeSum;
      isChecked = false;
      TotalFee.text('$'+ TotalFeeSum.toLocaleString('en'));
  }
});

// open form Range
$('.openFormButton').click(function () {
  if(isTruePrice){
    $('.formPriceSubmiting').addClass('open');
  }else{
    // $('#priceInfo').val('Choose above $1000');
    $('#priceInfo').addClass('shake');
    $('.circle-range>span').addClass('shake');
    setTimeout(function(){ 
      $('#priceInfo').removeClass('shake');
      $('.circle-range>span').removeClass('shake');
    },2000);
    $('.circle-range>span').text('Choose above $1,000');
    setTimeout(function(){ $('.circle-range>span').text('Monthly Budget')},2000);
  }
  
});
$('.formPriceSubmiting>.top button').click(function () {
  $('.formPriceSubmiting').removeClass('open');
});