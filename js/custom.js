$(document).ready(function(){"use strict";$(window).load(function(){$("#object").delay(600).fadeOut(300);$("#loading").delay(1000).fadeOut(500);})
$('#mc-embedded-subscribe-form').ajaxChimp({callback:mailchimpCallback,url:'http://ilmosys.us10.list-manage.com/subscribe/post?u=44e56a3df540b7b4c488ce45b&amp;id=a779ddfdd9'});function mailchimpCallback(resp){if(resp.result==='success'){$('#newsletter-error').slideUp();$('#newsletter-success').slideDown();}
else if(resp.result==='error'){$('#newsletter-success').slideUp();$('#newsletter-error').slideDown();}}});$('#submit_btn').on('click',function(){var proceed=true;$("#join-us-form input[required=true]").each(function(){$(this).css('border-color','');if(!$.trim($(this).val())){$(this).css('border','solid 1px red');proceed=false;}
var email_reg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;if($(this).attr("type")=="email"&&!email_reg.test($.trim($(this).val()))){$(this).css('border','solid 1px red');proceed=false;}});if(proceed)
{var post_data={'first_name':$('input[name=first_name]').val(),'last_name':$('input[name=last_name]').val(),'user_email':$('input[name=email]').val(),'message':$('textarea[name=message]').val()};$.post('join_us.php',post_data,function(response){if(response.type=='error'){var output='<div class="error">'+response.text+'</div>';}else{output='<div class="success">'+response.text+'</div>';$("#join-us-form  input[required=true]").val('');}
$("#join-us-results").hide().html(output).slideDown();},'json');}});$("#join-us-form  input[required=true]").keyup(function(){$(this).css('border-color','');$("#join-us-results").slideUp();});$("#map_extended").gMap({markers:[{address:"",html:'<h4>Office</h4>'+
'<address>'+
'<div>'+
'<div><b>Address:</b></div>'+
'<div>Envato Pty Ltd, 13/2<br> Elizabeth St Melbourne VIC 3000,<br> Australia</div>'+
'</div>'+
'<div>'+
'<div><b>Phone:</b></div>'+
'<div>+1 (408) 786 - 5117</div>'+
'</div>'+
'<div>'+
'<div><b>Fax:</b></div>'+
'<div>+1 (408) 786 - 5227</div>'+
'</div>'+
'<div>'+
'<div><b>Email:</b></div>'+
'<div><a href="mailto:info@domain.com">info@domain.com</a></div>'+
'</div>'+
'</address>',latitude:-33.87695388579145,longitude:151.22183918952942,icon:{image:"img/pin.png",iconsize:[35,48],iconanchor:[17,48]}},],icon:{image:"img/pin.png",iconsize:[35,48],iconanchor:[17,48]},latitude:-33.87695388579145,longitude:151.22183918952942,zoom:16});