
// Business (or back-end) logic:

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseFloat($("#add1").val());
		var number2 = parseFloat($("#add2").val());
		var result = add (number1, number2);
		$("#output").text(number1 + " + " + number2 + " = " + result.toFixed(3));
	});

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseFloat($("#subtract1").val());
		var number2 = parseFloat($("#subtract2").val());
		var result = subtract (number1, number2);
		$("#output").text(number1 + " - " + number2 + " = " + result.toFixed(3));
	});

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseFloat($("#multiply1").val());
		var number2 = parseFloat($("#multiply2").val());
		var result = multiply (number1, number2);
		$("#output").text(number1 + " x " + number2 + " = " + result.toFixed(3));
	});

	$("form#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseFloat($("#divide1").val());
		var number2 = parseFloat($("#divide2").val());
		var result = divide (number1, number2);
		$("#output").text(number1 + " / " + number2 + " = " + result.toFixed(3));
	});
});





// var calcBMI = function(weight, height) {
// 	weightKG = weight * 0.453592;
// 	heightMS = (height * 0.0254)^2;
//
// 	var bmi = weightKG / heightMS;
//
// 	return bmi.toFixed(2);
// }
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);
//
// var weight = parseInt(prompt("Enter your weight in pounds:"));
// var height = parseInt(prompt("Enter your height by inches:"));
//
// var fat = calcBMI(weight, height);
// alert(fat)
//
//
// var fahrenheitConversion = function() {
// 	var celcius = prompt("Enter the temperature in Celcius...");
// 	var fahrenheit = celcius * 1.8 + 32;
//
// 	return fahrenheit;
// }
//
// alert(fahrenheitConversion());
