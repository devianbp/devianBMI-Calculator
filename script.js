let button = document.getElementById("btn");

button.addEventListener("click", () => {
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);
  var result = document.getElementById("output");

  var bmi = ((weight / (height / 100)) ^ 2).toFixed(2);
  var bmiUnder = 18.5;
  var bmiNormal = 25;
  var bmiOver = 30;

  if (bmi < bmiUnder) {
    result.innerHTML =
      "Your BMI is " + bmi + " which means You are Underweight";
  } else if (bmi >= bmiUnder && bmi < bmiNormal) {
    result.innerHTML = "Your BMI is " + bmi + " which means You are Normal";
  } else if (bmi >= bmiNormal && bmi < bmiOver) {
    result.innerHTML = "Your BMI is " + bmi + " which means You are Overweight";
  } else {
    result.innerHTML = "Your BMI is " + bmi + " which means You are Obesity";
  }
});
