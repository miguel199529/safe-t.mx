jQuery(document).ready(function($) {
    $('#simple-vertical').royalSlider({
     arrowsNav: true,
     arrowsNavAutoHide: false,
     fadeinLoadedSlide: true,
     controlNavigation: 'none',
     imageScaleMode: 'fill',
     imageAlignCenter:true,
     loop: false,
     loopRewind: false,
     numImagesToPreload: 4,
     slidesOrientation: 'vertical',
     keyboardNavEnabled: true,
     video: {
       autoHideArrows:true,
       autoHideControlNav:true
     },  
 
     autoScaleSlider: true, 
     autoScaleSliderWidth: 960,     
     autoScaleSliderHeight: 850,
 
     /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
     imgWidth: 640,
     imgHeight: 360
   });
 });