// Javascripted by daNialz ×_×
// Cafelead.agency All Rights Reserved
// let rootUrl='/admoon-landing/';
let rootUrl='http://sarnakh.net/';
let desktopWidthLimit=960;
let desktopHeightLimit=600;
let danialzPointer=$('.danialzPointer');
let firstowl=$('.owl-peoples');
let secondowl=$('.owl-glassboxes');
let thirdowl=$('.owl-timepicker');
let secondowlOptions={loop:false,margin:20,smartSpeed:700,nav:false,dots:false,rtl:true,autoHeight:true,stagePadding:80,items:1,responsive:{0:{items:1,stagePadding:55},500:{stagePadding:80},600:{items:2},961:{items:2,stagePadding:40}}};
let firstowlOptions={loop:true,autoplay:true,autoplayTimeout:2500,autoplayHoverPause:true,margin:100,smartSpeed:700,nav:false,dots:false,rtl:true,autoHeight:true,items:1,responsive:{0:{items:1,margin:20,stagePadding:50},400:{items:2,margin:20,stagePadding:50},500:{items:2,margin:40,stagePadding:80},700:{items:1,margin:40},900:{items:2,margin:40},1100:{margin:100,items:3}}};
let thirdowlOptions={loop:false,nav:true,dots:false,items:7,responsive:{0:{items:5},400:{items:7}}}
const postData=(userData)=>{
    return new Promise((resolve,reject) => {
        fetch(rootUrl+'request.php',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify(userData)
        }).then((response)=>response.json()).then((responseJson)=>{resolve(responseJson);}).catch((error)=>{reject(error);});
    })
}
const validateEmail=(email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateWebsite=(str)=>{
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}
const init=()=>{
    if(desktopWidthLimit<screen.width && desktopHeightLimit<screen.height){
        if(typeof fullpage_api === 'undefined' || (typeof fullpage_api !== 'undefined' && !$('body').hasClass('fp-enabled'))){
            new fullpage('#fullpage', {
            licenseKey: '98EB5422-AB6C4C56-81889AF4-42B57849',
            slidesNavigation: false,
            scrollHorizontally: true,
            scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',
            controlArrows: false,
            autoScrolling: false,
            paddingTop: '100px',
            paddingBottom: '110px',
            afterSlideLoad: function(section, origin, destination, direction){
                // console.log({
                //     section: section,
                //     origin: origin,
                //     destination: destination,
                //     direction: direction
                // });
            },
            onSlideLeave: function(section, origin, destination, direction){
                // console.log({
                //     section: section,
                //     origin: origin,
                //     destination: destination,
                //     direction: direction
                // });
            }
            });
        }
        if(!secondowl.hasClass('off')){ secondowl.addClass('off').trigger('destroy.owl.carousel');secondowl.find('.owl-stage-outer').childen(':eq(0)').unwrap(); }
    }else{
        if(typeof fullpage_api !== 'undefined'){ fullpage_api.destroy('all'); }
        if(secondowl.hasClass('off')){ secondowl.owlCarousel(secondowlOptions);secondowl.removeClass('off'); }
    }
    firstowl.owlCarousel(firstowlOptions);
    firstowl.trigger('refresh.owl.carousel');
}
window.onresize=()=>{init();}
$(document).ready(()=>{
    init();
    setTimeout(()=>{$('body').removeClass('loading');},1000);
    // custom datepicker
    let datume = new Date();
    for(loopTime=0;loopTime<13;loopTime+=1){
        datume.setDate(datume.getDate() + 1);
        let datumeArr=datume.toDateString().split(' ');
        let optionactive='';
        if(loopTime==0){optionactive=' active';}else{optionactive=''}
        $('.videocall-datepicker').append('<div class="videocall-datepicker-option'+optionactive+'"><span>'+datumeArr[0]+'</span><span>'+datumeArr[1]+'</span><span>'+datumeArr[2]+'</span></div>');
    }
    thirdowl.owlCarousel(thirdowlOptions);
    // end custompicker
});
$(document).mousemove((event)=>{
    let mX=event.clientX;
    let mY=event.clientY;
    danialzPointer.css({'left':mX+'px','top':mY});
});
$('.fullmenu-switcher,.fullmenu-closer').on('click',()=>{
    $('body').toggleClass('fullmenu-active');
});
$('.videocall-closer,.videocall-close').on('click',()=>{
    $('body').removeClass('videocall-active');
});
$('.videocall-timepicker-option').on('click',(e)=>{
    $('.videocall-timepicker-option').removeClass('active');
    $(e.currentTarget).addClass('active');
});
$(document).on('click','.videocall-datepicker-option',(e)=>{
    $('.videocall-datepicker-option').removeClass('active');
    $(e.currentTarget).addClass('active');
});
$('.fullmenu-content a').on('click',(e)=>{
    let i=$(e.target).index()+1;
    $('body').removeClass('fullmenu-active');
    $([document.documentElement, document.body]).animate({
        scrollTop: $('.slide:nth-child('+i+')').offset().top
    }, 200);
});
$('.btn-freeaudit,.freeaudit-close,.freeaudit-closer').on('click',(e)=>{
    $('body').toggleClass('freeaudit-active');
});
$('.freeaudit-submit').on('click',(e)=>{
    let fullname=$('.freeaudit-fullname').val();
    let email=$('.freeaudit-email').val();
    let somayenaro=false;
    if(fullname.length<2){$('.freeaudit-fullname').addClass('error');somayenaro=true;}
    if(email=='' || !validateEmail(email)){$('.freeaudit-email').addClass('error');somayenaro=true;}
    if(somayenaro){ setTimeout(()=>{$('.error').removeClass('error');},1000); }else{
        postData({fullname:fullname,email:email,action:'audit'});
        $(e.currentTarget).addClass('pending');
        setTimeout(()=>{$('.freeaudit-stage').addClass('success');},1000);
    }
});
$('.contact-form-send').on('click',(e)=>{
    let fullname=$('.contact-fullname').val();
    let email=$('.contact-email').val();
    let website=$('.contact-website').val();
    if(website.indexOf('http://')==-1 && website.indexOf('https://')==-1){website='http://'+website;}
    let somayenaro=false;
    if(fullname.length<2){$('.contact-fullname').addClass('error');somayenaro=true;}
    if(email=='' || !validateEmail(email)){$('.contact-email').addClass('error');somayenaro=true;}
    if(website=='' || !validateWebsite(website)){$('.contact-website').addClass('error');somayenaro=true;}
    let videocall=$('.videocalloption input').is(':checked');
    if(somayenaro){ $(e.currentTarget).addClass('error');setTimeout(()=>{$('.error').removeClass('error');},1000); }else{
        if(videocall){
            $('body').addClass('videocall-active');
        }else{
            postData({fullname:fullname,email:email,website:website,action:'contact'});
            $(e.currentTarget).addClass('pending');
            setTimeout(()=>{$('.contact-stage').addClass('success');},1000);
        }
    }
});
$('.btn-videocall-submit').on('click',(e)=>{
    let fullname=$('.contact-fullname').val();
    let email=$('.contact-email').val();
    let website=$('.contact-website').val();
    if(website.indexOf('http://')==-1 && website.indexOf('https://')==-1){website='http://'+website;}
    let videocalldate=$('.videocall-datepicker-option.active span');
    let videocalltime=$('.videocall-timepicker-option.active').html();
    let meeting=videocalltime+' - '+videocalldate[0].innerHTML+', '+videocalldate[2].innerHTML+' '+videocalldate[1].innerHTML;
    postData({fullname:fullname,email:email,meeting:meeting,website:website,action:'videocontact'});
    $(e.currentTarget).addClass('pending');
    setTimeout(()=>{$('body').removeClass('videocall-active');$('.contact-stage').addClass('success');},1000);
});
$('.takeatour').on('click',()=>{
    if(typeof fullpage_api !== 'undefined' && $('html').hasClass('fp-enabled')){
        fullpage_api.moveTo(1, 1);        
    }else{
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.slide-howwework').offset().top
        }, 200);
    }
});
$(document).on('click','.requestproposal',()=>{
    if(typeof fullpage_api !== 'undefined'){
        fullpage_api.moveTo(1, 5);
    }else{
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.slide-contact').offset().top
        }, 200);
    }
});
$('.footer-item').on('click',(e)=>{
    let targetpage=((e.currentTarget.className).replace('footer-item footer-item-',''))-1;
    fullpage_api.moveTo(1, targetpage); 
});
$(document).on('mousewheel',(event)=>{
    if(typeof fullpage_api === 'undefined'){return false;}
    let active=fullpage_api.getActiveSlide();
    if(event.deltaY < 0 && !active.isLast){fullpage_api.moveSlideRight();}
    if(event.deltaY > 0 && !active.isFirst){fullpage_api.moveSlideLeft();}
});
$(document).on('keydown',(e)=>{
    if(typeof fullpage_api !== 'undefined'){
    var shiftPressed = e.shiftKey;
    let active=fullpage_api.getActiveSlide();
    switch (e.which) {
        //up
        case 38:
        case 37:
        case 33:
            if(!active.isFirst){fullpage_api.moveSlideLeft();}
            break;
        //down
        case 40:
        case 39:
        case 34:
            if(!active.isLast){fullpage_api.moveSlideRight();}
            break;
    }
    }
});
$(()=>{
    const hour0 = document.getElementById('counter-hour-nil');
    const hour1 = document.getElementById('counter-hour-first');
    const hour2 = document.getElementById('counter-hour-second');
    const min1 = document.getElementById('counter-min-first');
    const min2 = document.getElementById('counter-min-second');
    const sec1 = document.getElementById('counter-sec-first');
    const sec2 = document.getElementById('counter-sec-second');
    const newYears = '28 August 2021';
    const countdown=()=>{
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
        const totalSeconds = (newYearsDate - currentDate) /1000;
        const minutes = Math.floor(totalSeconds/ 60) % 60;
        let hours = Math.floor(totalSeconds /3600) % 24;
        const days = Math.floor(totalSeconds /3600/ 24);
        const seconds = Math.floor(totalSeconds) % 60;
        hours+=(days*24);
        if(totalSeconds<0){
            clearInterval(countdownRunner);
            $('.header-offer-inner-counter').remove();       
        }
        if(hours.toString().length==2){
            hour1.innerText=hours.toString()[0];
            hour2.innerText=hours.toString()[1];
        }else if(hours.toString().length==3){
            hour0.classList.remove('hidden');
            hour0.innerText=hours.toString()[0];
            hour1.innerText=hours.toString()[1];
            hour2.innerText=hours.toString()[2];
        }else{
            hour1.innerText=0;
            hour2.innerText=hours.toString()[0];
        }
        if(minutes.toString().length==2){
            min1.innerText=minutes.toString()[0];
            min2.innerText=minutes.toString()[1];
        }else{
            min1.innerText=0;
            min2.innerText=minutes.toString()[0];
        }
        if(seconds.toString().length==2){
            sec1.innerText=seconds.toString()[0];
            sec2.innerText=seconds.toString()[1];
        }else{
            sec1.innerText=0;
            sec2.innerText=seconds.toString()[0];
        }
    }
    let countdownRunner=setInterval(countdown, 1000);
});