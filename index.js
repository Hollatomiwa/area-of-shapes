function dropdown() {
  document.getElementById("shapes").style.display = "block";
}

function displayCircle() {
  var circle = document.getElementsByClassName("circle")[0];
  var triangle = document.getElementsByClassName("triangle")[0];
  var square = document.getElementsByClassName("square")[0];
  var rectangle = document.getElementsByClassName("rectangle")[0];
  circle.style.display = "block";
  triangle.style.display = "none";
  square.style.display = "none";
  rectangle.style.display = "none";
}

function displayTriangle() {
  var circle = document.getElementsByClassName("circle")[0];
  var triangle = document.getElementsByClassName("triangle")[0];
  var square = document.getElementsByClassName("square")[0];
  var rectangle = document.getElementsByClassName("rectangle")[0];
  circle.style.display = "none";
  triangle.style.display = "block";
  square.style.display = "none";
  rectangle.style.display = "none";
}

function displaySquare() {
  var circle = document.getElementsByClassName("circle")[0];
  var triangle = document.getElementsByClassName("triangle")[0];
  var square = document.getElementsByClassName("square")[0];
  var rectangle = document.getElementsByClassName("rectangle")[0];
  circle.style.display = "none";
  triangle.style.display = "none";
  square.style.display = "block";
  rectangle.style.display = "none";
}

function displayRectangle() {
  var circle = document.getElementsByClassName("circle")[0];
  var triangle = document.getElementsByClassName("triangle")[0];
  var square = document.getElementsByClassName("square")[0];
  var rectangle = document.getElementsByClassName("rectangle")[0];
  circle.style.display = "none";
  triangle.style.display = "none";
  square.style.display = "none";
  rectangle.style.display = "block";
}

function areaOfCircle() {
  var radius = document.getElementById("circleRadius").value;
  var area = Math.PI * radius * radius;
  document.getElementById("circleAnswer").innerHTML = "The area of your circle is " + area;
}

function areaOfTriangle() {
  var base = document.getElementById("triangleBase").value;
  var height = document.getElementById("triangleHeight").value;
  var area = (base * height) / 2;
  document.getElementById("triangleAnswer").innerHTML = "The area of your triangle is " + area;
}

function areaOfSquare() {
  var side = document.getElementById("squareSide").value;
  var area = side * side;
  document.getElementById("squareAnswer").innerHTML = "The area of your square is " + area;
}

function areaOfRectangle() {
  var width = document.getElementById("rectangleWidth").value;
  var length = document.getElementById("rectangleLength").value;
  var area = width * length;
  document.getElementById("rectangleAnswer").innerHTML = "The area of your rectangle is " + area;
}
// function displayCalc() {
//   var shape = document.getElementById("shapes").value;
//   var circle = document.getElementsByClassName("circle")[0];
//   var triangle = document.getElementsByClassName("triangle")[0];
//   var square = document.getElementsByClassName("square")[0];
//   var rectangle = document.getElementsByClassName("rectangle")[0];
//   if (shape = circle) {
//     circle.style.display = "block";
//   } else if (shape = triangle) {
//     triangle.style.display = "block";
//   } else if (shape = square) {
//     square.style.display = "block";
//   } else {
//     rectangle.style.display = "block";
//   }
// }
