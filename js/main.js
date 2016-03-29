$('.test').hide();
$('.requirment-for-application').hide();


$(document).ready(function() {

  /*var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
window.onload=function() {
  document.getElementById("form1").onsubmit=function() {
    if(!this.email.value.match(mailformat)) {  
     alert("You have entered an invalid email address!");  
     this.email.focus();  
     return false;  
    }
    return true;  
  } 
}*/

$('#immigrant-item').on('change', function() {
	$('.test').show();
  $selected = $(this).val();
  if ( $selected == 'student' ) {
    $('#student').show('slow');
    $('#workpermit').hide('slow');
  } else if ( $selected == 'workpermit' ) {
    $('#workpermit').show('slow');
    $('#student').hide('slow');
  } else {
	  $('#student, #workpermit').hide('slow');
  }
}); 
 
 $('#requirement-option').on('change', function() {
	$('.requirment-for-application').show();
	
	
  $selected = $(this).val();
  if ( $selected == 'caregiver' ) {
    $('#student2').hide('slow');
    $('#immigrant').hide('slow');
  	$('#caregiver').show('slow');
  } 

  else if ( $selected == 'immigrant' ) {
  	$('#immigrant').show('slow');
    $('#student2').hide('slow');
    $('#caregiver').hide('slow');
  } else if ( $selected == 'student' ) {
    $('#student2').show('slow');
    $('#caregiver').hide('slow');
    $('#immigrant').hide('slow');
  } else {
	  $('#student2, #immigrant, #caregiver').hide('slow');
  }
});

 $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

 $(window).scroll(function(event) {
 	var $moving_block = $('.mountains');
 	if($moving_block.visible(true)){
 		$moving_block.addClass('come-in');
 	}

 });

  $(window).scroll(function(event) {
 	var $moving_block = $('.winter');
 	if($moving_block.visible(true)){
 		$moving_block.addClass('come-in');
 	}	

 });

  $(window).load(function(event) {
 	var $moving_block = $('.message');
 	if($moving_block.visible(true)){
 		$moving_block.addClass('come-in');
 	}	

 });

});
