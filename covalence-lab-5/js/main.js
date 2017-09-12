$(document).ready(function(){

//make sentences for the array.
var sentence = ['Hello, how are you', 'Do you understand what you are doing', 'Javascript is so much fun', 'This year has passed by so fast',
    'Well, just do your best', 'One small step for human', 'One giant leap for mankind', 'Houston we have a problem'];

//Create varibles with 0 vaules.
var sentenceIndex = 0;
var letterIndex = 0;
var errorCount = 0;
//Startime is left as an empty value, and will be set to a variable later in code.
var startTime;

//This will show the current sentence to be typed.
var currentSentence = sentence[sentenceIndex];
//This will show the current letter of that particular sentence.
var currentLetter = currentSentence.charAt(0);


//This function will show only one specific keyboard.
function toggleKeyboards() {
    $('#keyboard-upper-container').toggle()
    $('#keyboard-lower-container').toggle()
}

//Used for function toggleKeyboards.
$('#keyboard-upper-container').hide();
//Places the current sentence into the id with attribute of id ="sentence".
$('#sentence').text(currentSentence);
//Places the current letter into the id with attribute of id="target-letter".
$('#target-letter').text(currentLetter);


//Functions to be performed.

//This partcular function is dependent of the function toggleKeyboards.
$(document).keydown(function (event) {
    if (event.which === 16) {
        toggleKeyboards();
    }
});
//This partcular function is dependent of the function toggleKeyboards.
$(document).keyup(function (event) {
    if (event.which === 16) {
        toggleKeyboards();
    }
    $('.highlighted').removeClass('highlighted')
});

//This function will prevents the actual keypress event from accuring.
$(document).keypress(function (event) {
    event.preventDefault();

    //To start the timer when a key is pressed set var = startTime to this event, this will start the timer.
    if (!startTime) {
        startTime = event.timeStamp;
    }
    //This syntax will create a css id selector and give it the class attribute of highlighted.
    $('#' + event.which).addClass('highlighted');

    //If current letter matches the current event
    if (event.which === currentLetter.chartCodeAt(0)) {
        $('#feedback').append('<span class=“ glyphicon glyphicon-ok”></span>');
    } else {
        $('feedback').append('<span class="glyphicon glyphicon-remove”></span>');
        //Keeps count of errors.
        errorCount++;
    }

    //Continue to the next letter.
    letterIndex++;

    //When all of the letters of the sentenced is finished, continue to the next sentence.
    if (letteIndex === currentSentence.length) {
        sentenceIndex++

        //When all sentences are finished, end the game and compute wpm and alert. 
        if (sentenceIndex === sentence.length) {
            var endTime = event.timeStamp;
            //Calculate the time.
            var elapseMinutes = (endTime - startTime) / (60 * 1000);
            var wpm = 54 / elaspeMinutes - 2 * errorCount;
            $('#feedback').text('You scored' + wpm + 'words per minute.');
            //If you would like to play again. See Code Below.
            setTimeout(function () {
                if (confirm('Would you like to play again? ')) {
                    sentenceIndex = 0;
                    letterIndex = 0;
                    currentSentence = sentence[0];
                    currentLetter = currentSentecne.charAt(0);
                    $('#sentence').text(currentSentence);
                    $('#target - letter').text(currentLetter);
                    $('#feedback').empty();
                    $('#yellow - block’).css(‘left', '15px');
                    startTime = undefined;
                }
            }, 2000);
        } else {
            currentSentence = sentence[sentenceIndex];
            $('#sentence').text(currentSentence);
            letterIndex = 0;
            currentLetter = currentSentence.charAt(letterIndex);
            $('#target-letter').empty();
            $('#yellow-block').css('left', '15px');
        }
    } else {
        currentLetter = currentSentence.charAt(letterIndex);
        $('#target-letter').text(currentLetter);
        $('#yellow-block').css('left', '+=17.5px');
    }
});
});