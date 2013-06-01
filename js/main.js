var options = $('.input-prepend').last().index() + 1;

/* --------- FUNCTIONS --------- */

function addBox() {
    var optionbox = '<div class="input-prepend">\
    <span class="add-on">'+ (options + 1) +'.</span>\
    <input type="text" class="option" id="option'+ options +'"></div></div>';

    if(options < 10) {
        $('#options').append(optionbox);
        options++;
    }
}

function deleteBox(){

    if (options > 2) { 
      $('.input-prepend').last().remove();
      options--;
    }
}

//Function copied from stackoverflow

function escapeHtmlEntities (str) {
  if (typeof jQuery !== 'undefined') {
    // Create an empty div to use as a container,
    // then put the raw text in and get the HTML
    // equivalent out.
    return jQuery('<div/>').text(str).html();
  }

  // No jQuery, so use string replace.
  return str
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

function returnRandom(max) {

    var randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}

/* --------- TO HTML --------- */

$('#add').click(addBox);
$('#remove').click(deleteBox);
$('#decide').click(function(){
    
    var choice = "#option" + returnRandom(options);
    var answer = $(choice).val();
    
    var answerText = escapeHtmlEntities(answer);
    
    $('#answer').html('<p>' + answerText +'</p>');
});
$('#reset').click(function(){
  location.reload();
});



