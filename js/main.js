var options = 2;

/* --------- FUNCTIONS --------- */

function addBox() {
    var optionbox = '<input type="text" class="option" id="option'+ options +'">';

    if(options < 10) {
        $('#options').append(optionbox);
        options++;
    }
}

function deleteBox(){

    if (options > 2) { 
      $('input').last().remove();
      options--;
    }
}

function decide(){
    var choice = "#option" + returnRandom(options);
    var answer = $(choice).val();
    
    var answerText = escapeHtmlEntities(answer);
    
    $('#answer').html('<p>' + answerText +'</p>');
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
$('#decide').click(decide);
$('#reset').click(function(){
  location.reload();
});



