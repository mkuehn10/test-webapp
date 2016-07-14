$(document).ready(function() {
    'use strict';
    /*--- Display information modal box ---*/
    $('.what').click(function() {
        $('.overlay').fadeIn(1000);
    });
    /*--- Hide information modal box ---*/
    $('a.close').click(function() {
        $('.overlay').fadeOut(1000);
    });

    /* numberToGuess: Randomly generated number 1-100 */
    var numberToGuess;
    /* guessArray: Array containing all of the user's guesses */
    var guessArray;
    /* guessCount: Count of how many guesses user has made */
    var guessCount;

    /* generateNumber
     * Returns a random number between max and min
     */
    function generateNumber(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /* newGame
     * Resets the game state to initial load
     */
    function newGame() {
        $('#feedback').text('Make your Guess!');
        $('#count').text('0');
        $('#guessList').text('');
        $('#userGuess').val('');
        $('form').show();
        $('.win').hide();
        numberToGuess = generateNumber(100, 1);
        guessArray = [];
        guessCount = 0;
    }

    /* processGuess
     * Checks guess and gives user feedback
     */
    function processGuess(guess) {
        $('#userGuess').removeClass('red-border');
        var delta = Math.abs(numberToGuess - guess);
        guessArray.push(guess);

        $('#count').text(++guessCount);
        if (delta === 0) {
            $('#feedback').text('You won! Congratulations!');
            $('form').hide();
            $('.win').show();
            $('#guessList').append('<li class="correct">' + guess + '</li>');
        } else if (delta >= 65) {
            $('#feedback').text('Brr! Ice Cold!');
            $('#guessList').append('<li class="ice-cold">' + guess + '</li>');
        } else if (delta >= 40 && delta < 65) {
            $('#feedback').text('Cold!');
            $('#guessList').append('<li class="cold">' + guess + '</li>');
        } else if (delta >= 20 && delta < 40) {
            $('#feedback').text('Warm!');
            $('#guessList').append('<li class="warm">' + guess + '</li>');
        } else if (delta >= 10 && delta < 20) {
            $('#feedback').text('Hot!');
            $('#guessList').append('<li class="hot">' + guess + '</li>');
        } else {
            $('#feedback').text('BURNING UP!');
            $('#guessList').append('<li class="burning">' + guess + '</li>');
        }
        $('#userGuess').val('');
    }

    /* validateGuess
     * Makes sure user enters a valid number 1-100
     */
    function validateGuess(guess) {
        if (parseInt(guess) == guess && guess >= 1 && guess <= 100) {
            if (guessArray.indexOf(guess) >= 0) {
                $('#feedback').text('You already guessed ' + guess);
                $('#userGuess').val('');
            } else {
                processGuess(guess);
            }
        } else {
            $('#feedback').text('Please enter a valid guess (1-100)');
            $('#userGuess').addClass('red-border');
            $('#userGuess').val('');
        }
    }

    /* Starts a newGame on page load */
    newGame();

    /* Bind New Game button to newGame function */
    $('.new').click(newGame);

    /* Bind submit action for the guess form to process guess */
    $('form').submit(function(event) {
        event.preventDefault();
        validateGuess($('#userGuess').val());
    });

    /* Process when user hits enter instead of clicking button */
    $('#guessButton').keypress(function(event) {
        if (event.keyCode === 13) {
            $('form').submit();
        }
    });
});
