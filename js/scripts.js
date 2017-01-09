var test ="it works";

var add = function(number1, number2) {
	return number1 + number2;
};

var calcBMI = function(weight, height) {
	weightKG = weight * 0.453592;
	heightMS = (height * 0.0254)^2;

	var bmi = weightKG / heightMS;

	return bmi.toFixed(2);
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var weight = parseInt(prompt("Enter your weight in pounds:"));
var height = parseInt(prompt("Enter your height by inches:"));

var fat = calcBMI(weight, height);
alert(fat)
