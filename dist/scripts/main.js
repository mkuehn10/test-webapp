"use strict";$(document).ready(function(){function e(e,s){return Math.floor(Math.random()*(e-s))+s}function s(){$("#feedback").text("Make your Guess!"),$("#count").text("0"),$("#guessList").text(""),$("#userGuess").val(""),$("form").show(),$(".win").hide(),u=e(100,1),i=[],n=0}function t(e){$("#userGuess").removeClass("red-border");var s=Math.abs(u-e);i.push(e),$("#count").text(++n),0===s?($("#feedback").text("You won! Congratulations!"),$("form").hide(),$(".win").show(),$("#guessList").append('<li class="correct">'+e+"</li>")):s>=65?($("#feedback").text("Brr! Ice Cold!"),$("#guessList").append('<li class="ice-cold">'+e+"</li>")):s>=40&&s<65?($("#feedback").text("Cold!"),$("#guessList").append('<li class="cold">'+e+"</li>")):s>=20&&s<40?($("#feedback").text("Warm!"),$("#guessList").append('<li class="warm">'+e+"</li>")):s>=10&&s<20?($("#feedback").text("Hot!"),$("#guessList").append('<li class="hot">'+e+"</li>")):($("#feedback").text("BURNING UP!"),$("#guessList").append('<li class="burning">'+e+"</li>")),$("#userGuess").val("")}function a(e){parseInt(e)==e&&e>=1&&e<=100?i.indexOf(e)>=0?($("#feedback").text("You already guessed "+e),$("#userGuess").val("")):t(e):($("#feedback").text("Please enter a valid guess (1-100)"),$("#userGuess").addClass("red-border"),$("#userGuess").val(""))}$(".what").click(function(){$(".overlay").fadeIn(1e3)}),$("a.close").click(function(){$(".overlay").fadeOut(1e3)});var u,i,n;s(),$(".new").click(s),$("form").submit(function(e){e.preventDefault(),a($("#userGuess").val())}),$("#guessButton").keypress(function(e){13===e.keyCode&&$("form").submit()})});