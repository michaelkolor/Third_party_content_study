console.log("content_script.js was successfully injected");
//This works too acutally wait there is an error
// wait for the DOM to be loaded
$(document).ready(function(){
console.log("test");
//****************Inject Form*************************8
/*$('body').prepend('<a href="#popupLogin" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-check ui-btn-icon-left ui-btn-a" data-transition="pop">Sign in</a> \
<div data-role="popup" id="popupLogin" data-theme="a" class="ui-corner-all" data-dismissible="false"> \
  <form id="myForm" style="font-style:Helvetica;background-color:#CA0002;text-align:center;margin-top: 50px; margin-bottom: 0px;margin-right: 100px;margin-left: 100px;" action="thankyou.php" method="post"> \
    <h1 style="color:purple;">SURVEY</h1> \
    Div 1:<input type="radio" name="div_1" value="1" required> Yes, it is third-Party Content \
      <input type="radio" name="div_1" value="0"> No <br> \
    Div 2:<input type="radio" name="div_2" value="1" required> Yes, it is third-Party Content \
      <input type="radio" name="div_2" value="0"> No <br> \
    Div 3:<input type="radio" name="div_3" value="1" required> Yes, it is third-Party Content \
      <input type="radio" name="div_3" value="0"> No <br> \
    Div 4:<input type="radio" name="div_4" value="1" required> Yes, it is third-Party Content \
      <input type="radio" name="div_4" value="0"> No <br> \
    Div 5:<input type="radio" name="div_5" value="1" required> Yes, it is third-Party Content \
      <input type="radio" name="div_5" value="0"> No <br> \
    Div 6:<input type="radio" name="div_6" value="1" required> Yes, it is third-Party Content \
      <input type="radio" name="div_6" value="0"> No <br> \
    Rate Your Comfort with this Form (1 least, 5 most):<input type="radio" name="comfort" value="1" required> 1 \
      <input type="radio" name="comfort" value="2"> 2 \
      <input type="radio" name="comfort" value="3"> 3 \
      <input type="radio" name="comfort" value="4"> 4 \
      <input type="radio" name="comfort" value="5"> 5 <br> \
    <input type="submit" value="Submit Comment" name="form_submitted" value="0" /> \
  </form> \
</div>');*/

//Floating attempt
$('div[id="google_ads_iframe_/8663477/CNN/homepage_2__container__"]').css("position:relative");

//Inject Labels
  //Trying to inject an iframe --> Not functional rn
$('div[id="google_ads_iframe_/8663477/CNN/homepage_2__container__"]').prepend('<iframe style="position: relative; width: 100%; height: 100%"><h1 style="color:purple; float: right;">CONTENT #1:</h1></iframe>');

//Other labels
$('.cd.cd--tool.cd--tool__webtag article').prepend('<h1 style="color:purple;">CONTENT #2:</h1>');
$('.column.zn__column--idx-5.column--top').prepend('<h1 style="color:purple;">CONTENT #3:</h1>');
$('.cn.cn-list-hierarchical-xs.cn--idx-5.cn-coverageContainer_B5ED9522-33C5-5FB3-7CEE-3E0FA1AA1D2B').prepend('<h1 style="color:purple;">CONTENT #4:</h1>');
$('div[id="google_ads_iframe_/8663477/CNN/homepage_5__container__"]').prepend('<h1 style="color:purple;">CONTENT #5:</h1>');
$('.l-footer__tools').prepend('<h1 style="color:purple;">CONTENT #6:</h1>');

//ON HOVER PULL UP QUESTIONS
$('div[id="google_ads_iframe_/8663477/CNN/homepage_2__container__"]').hover(function() {
  $('#test_iframe').contents().find('body').html('<form data-role="popup" style="background-color:yellow; float: right;" data-dismissible="false"> <h1 style="color:purple;">SURVEY</h1> \
  Div 1:<input type="radio" name="div_1" value="1" required> Yes, it is third-Party Content \
    <input type="radio" name="div_1" value="0"> No <br> </form>');
  alert("Would mouseenter be better than hover?");
});
$('.cd.cd--tool.cd--tool__webtag article').hover(function() {
  $('#test_iframe').contents().find('body').html('<form  style="background-color:yellow"> <h1 style="color:purple;">SURVEY</h1> \
  Div 2:<input type="radio" name="div_2" value="1" required> Yes, it is third-Party Content \
    <input type="radio" name="div_2" value="0"> No <br> </form>');
    alert("Hover Test!");
});
$('.column.zn__column--idx-5.column--top').hover(function() {
  $('#test_iframe').contents().find('body').html('<form  style="background-color:yellow"> <h1 style="color:purple;">SURVEY</h1> \
  Div 3:<input type="radio" name="div_3" value="1" required> Yes, it is third-Party Content \
    <input type="radio" name="div_3" value="0"> No <br> </form>');
  alert("Hover Test!");
});
$('.cn.cn-list-hierarchical-xs.cn--idx-5.cn-coverageContainer_B5ED9522-33C5-5FB3-7CEE-3E0FA1AA1D2B').hover(function() {
  $('#test_iframe').contents().find('body').html('<form  style="background-color:yellow"> <h1 style="color:purple;">SURVEY</h1> \
  Div 4:<input type="radio" name="div_4" value="1" required> Yes, it is third-Party Content \
    <input type="radio" name="div_4" value="0"> No <br> </form>');
  alert("Hover Test!");
});
$('div[id="google_ads_iframe_/8663477/CNN/homepage_5__container__"]').hover(function() {
  $('#test_iframe').contents().find('body').html('<form  style="background-color:yellow"> <h1 style="color:purple;">SURVEY</h1> \
  Div 5:<input type="radio" name="div_5" value="1" required> Yes, it is third-Party Content \
    <input type="radio" name="div_5" value="0"> No <br> </form>');
  alert("Hover Test!");
});
$('.l-footer__tools').hover(function() {
  $('#test_iframe').contents().find('body').html('<form  style="background-color:yellow"> <h1 style="color:purple;">SURVEY</h1> \
  Div 6:<input type="radio" name="div_6" value="1" required> Yes, it is third-Party Content \
    <input type="radio" name="div_6" value="0"> No <br> </form>');
    alert("Hover Test!");
});

console.log("Successful!");

});
