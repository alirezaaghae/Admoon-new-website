// circle price
const circleRange = document.querySelector('.circle-range');
const sliderRange = document.querySelector('.circle-range .slider');
const header = document.querySelector('#ServicesHeader');
const Intro = document.querySelector('#Intro');
const Steps = document.querySelector('#Steps');
  const body = document.querySelector('#AdsManage #ServicesMain');
const slider = document.querySelector('.slider');
  let isDragging;
let angle ;
let degree ;
let pricePerDot ;
let priceShow ;
let topSections;
let centerX ;
let centerY ;
let deltaX ;
let deltaY ;
let posX ;
let posY ;
  sliderRange.addEventListener('mousedown',()=>{isDragging = true});
  body.addEventListener('mouseup',()=>{isDragging = false;
  slider.style.transition = 'all .3s';
});

$('#PricingForm').on('mousemove', function (e) {
  // window.addEventListener('mousemove',e=>{
  const box = circleRange.getBoundingClientRect();
  const priceInfo = document.querySelector('.priceInfo').value;
  if(isDragging) {    
      const {atan2, PI, round} = Math ;
      // if 
    if ($(window).width() < 760) {
      topSections = header.offsetHeight;
    }
    else {
      topSections = header.offsetHeight + Intro.offsetHeight + Steps.offsetHeight + 300;
    }
    
          centerX = (circleRange.offsetWidth / 2) + box.left;
          centerY = (circleRange.offsetHeight / 2) + box.top;
    // console.log("Left: " + box.left.toFixed() + ", Top: " + box.top.toFixed() + ", Width: " + box.width + ", Height: " + box.height);
          posX = e.originalEvent.pageX ;
          posY = e.originalEvent.pageY - topSections;
          deltaY = centerY - posY ;
          deltaX = centerX - posX ;
    // console.log('pageX: '+e.originalEvent.pageX+', pageY: '+e.originalEvent.pageY);
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
    $('#priceInfo').val(priceShow);
    console.log(angle,priceInfo);
    
      }
      
  });
 function addListAfterKeypress() {
  pricePerDot = $( "#priceInfo" ).val();
  var thenum = pricePerDot.replace(/[^\d\.]*/g, ''); // Replace all leading non-digits with nothing
  priceShow = '$'+ thenum.toLocaleString('en');
  $('#priceInfo').val(priceShow);
  degree = (thenum/100)-90;
  slider.style.transform = `rotate(${degree}deg)`;
  console.log(thenum);
  selectItems(thenum);
}

function selectItems(price){
  if (price < 5000){
    $('.selectItems>ul>li>.button').removeClass('selected');
    $('.selectItems>ul>li>.button[item="1"]').addClass('selected');
  } else if (5001 < price < 15000){
    $('.selectItems>ul>li>.button').removeClass('selected');
    $('.selectItems>ul>li>.button[item="2"]').addClass('selected');
  } if (15001 < price){
    $('.selectItems>ul>li>.button').removeClass('selected');
    $('.selectItems>ul>li>.button[item="3"]').addClass('selected');
  }
}


$('.SelectPrices>.selectItems>ul>li>.button').click(function () {
  $('.SelectPrices>.selectItems>ul>li>.button').removeClass('selected');
  $(this).addClass('selected');
  let item = $(this).attr("item");
  switch (item) {
    case '1':
      pricePerDot = 1000;
      slider.style.transform = `rotate(-90deg)`;
      $('#priceInfo').val('$'+ pricePerDot.toLocaleString('en'));
      break;
    case '2':
      pricePerDot = 5000;
      slider.style.transform = `rotate(-50deg)`;
      $('#priceInfo').val('$'+ pricePerDot.toLocaleString('en'));
      break;
    case '3':
      pricePerDot = 15000;
      slider.style.transform = `rotate(50deg)`;
      $('#priceInfo').val('$'+ pricePerDot.toLocaleString('en'));
      break;
    default: console.log('default');
  }
  
});
  