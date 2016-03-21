$('.test').hide();
$('.requirment-for-application').hide();

$(document).ready(function() {
$('#my-form').on('submit', function(event) {
   event.preventDefault();
   if ( $('#my-text-input').val() == '' ) {
      alert('You missed the field.');
   } else {
      alert('Thanks for filling the field!');
   }
});

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

});
