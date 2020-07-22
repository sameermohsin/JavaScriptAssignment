//Chapter 1

//Task 1:-
alert("Welcome to my Website");

//Task 2:-
alert("Error! Please enter a valid password.");

//Task 3:-
alert("Welcome to JS Land...\nHappy Coding!");

//Task 5:-
var a = "Hello...I can run JS through my web browser's console "
console.log(a)


//Chapter 2

//Task 1:-
var username;

//Task 2:-
var myName = "Full Name";

//Task 3:-
var message = "Hello World";
alert(message);

//Task 4:-
var Name = "Jhone Doe";
var age = "15 years old";
var Message = "Certified Mobile Application Development";
alert(Name);
alert(age);
alert(Message);

//Task 5:-
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//Task 6:-
var email = "sameermohsin316@gmail.com";
alert("My email address is sameermohsin316@gmail.com");

//Task 7:-
var Book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book A smarter\nway to learn JavaScript");

//Task 8:-
var a = "Yah! I can write HTML content through JavaScript";
document.write(a);

//Task 9:-
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);


//Chapter 3

//Task 1:-
var age = "I am 21 years old";
alert(age);

//Task 2:-
var a = "12 times";
alert("You have visited this site 14 times");

//Task 3:-
var birthYear = "1999";
document.write("My birth year is 2000 <br> Data type of my declared variable is number ");

//Task 4:-
var visitorName = "Sameer Mohsin";
var Producttitle = "T-Shirt";
var Quantity = 6;
document.write("<b>Sameer Mohsin</b> ordered <b>5 T-shirt</b>(s) on XYZ clothing store ");


//Chapter 4

//Task 1:-
var a = 3;
var b = 4;
var c = 5;
document.write(a, b, c);

//Task 2:-

//Legal:
var sameerMohsin;
var muhammadZohain;
var $;
var muhammad_12;
var muhammad$_Zohaib;

//Illegal:
var Muhammadzohaib;
var itemcost;
var Nameofbrand;
var Superhighway;
var Super30;

//Task 3:-
document.write("<h1>Rules for naming JS variables</h1>" + "<br" + "<br>" + "<br>");
document.write("Variable names can only contain , numbers,$ and _ . For example: $my_1st variable " + " < br > ");
document.write("Variable must begin with a letter, $ or_ . For example : $name, _name or name " + " < br > ");
document.write("Variable name are case sensitive" + "<br>");
document.write("Variable names should not be JS keywords");


//Chapter 5

//Task 1:-
var a = 9;
var b = 5;
var c = a + b;
document.write("Sum of 9 and 5 is 14");

//Task 2:-
//For Subtraction:
var a = 6;
var b = 4;
var c = a - b;
document.write("Difference of 6 and 4 is 2");

//For Multipication:
var a = 8;
var b = 3;
var c = a * b;
document.write("Product of 8 and 3 is 24");

//For Division:
var a = 7;
var b = 4;
var c = a / b;
document.write("Division of 7 and 4 is 1.75");

//For Modulus:
var a = 8;
var b = 4;
var c = a % b;
document.write("Modulus of 8 and 5 is 0");

//Task 3:-
var a = "Value after variable declaration is:??";
document.write("Value after variable declaration is undefined" + "<br>");
var a = 4;
document.write("Initial value:5" + "<br>");
var a = a++;
document.write("Value after increment is:5" + "<br>");
var a = a + 7;
document.write("Value after addition is:11" + "<br>");
var a = a--;
document.write("Value after decrement is:3" + "<br>");
var a = a / 3;
document.write("The remainder is:1");

//Task 4:
var priceofticket = 600;
var Total = 600 * 5;
document.write("Total cost to buy 5 tickets to a movie is 3000PKR");

//Task 5:
document.write("<h1>Table of 5</h1>");
for (var i = 1; i <= 10; i++) {
    document.write("5" + "x" + i + "=" + 5 * i + "<br>");
}

//Task 6:
var celsius = "25&#8451";
var ConvertFehrenheit = ("&#8457" - 32) * 5 / 9;
document.write("25&#8451 is 77&#8457" + "<br>");
var fehrenheit = "77&#8457";
var ConvertCelsius = ("&#8451*9/5") + 32;
document.write("70&#8457 is 21.11111111111111&#8451");

//Task 7:
document.write("<h1>Shopping Cart</h1>" + "<br>" + "<br>");
var p1 = 650;
document.write("Price of item 1 is 650" + "<br>");
var q1 = 3;
document.write("Quantity of item 1 is 3" + "<br>");
var p2 = 100;
document.write("Price of item 2 is 100" + "<br>");
var q2 = 7;
document.write("Quantity of item 2 is 7" + "<br>");
var shp = 100;
document.write("Shipping charges 100" + "<br>" + "<br>");
var Total = (p1 * q1 + p2 * q2) + shp;
document.write("Total cost of your order is 2750");

//Task 8:
document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>");
var Totalmarks = 500;
document.write("Total marks: 500" + "<br>");
var marksobtained = 430;
document.write("Marks obtained: 430" + "<br>");
var percentage = 430 / 500 * 100;
document.write("percentage: 86%");

//Task 9:
document.write("<h1>Currency in PKR</h1>" + "<br>" + "<br>");
var usDollar1 = 104.80;
var usDollar10 = 10 * 104.80;
var a = 1048;
var saudiriyal1 = 28;
var saudiriyal25 = 25 * 28;
var b = 700;
var Totalcurrency = a + b;
document.write("Total Currency in PKR: 1748");

//Task 10:
var a = 4;
var b = a + 5;
var c = a * 10;
var d = a / 2;
document.write(a, b, c, d);

//Task 11:
document.write("<h1>Age Calculator</h1>" + "<br>" + "<br>");
var currentYear = 2020;
document.write("Current Year: 2020" + "<br>");
var birthYear = 2000;
document.write("Birth Year: 2000" + "<br>");
var age = currentYear - birthYear;
document.write("Your Age is: 20");

//Task 12:
document.write("<h1>The Geometrizer</h1>" + "<br>" + "<br>");
var radius = 24;
document.write("Radius of a circle: 24" + "<br>");
var circumference = 2 * 3.142 * 24;
document.write("The circumference is: 150.816" + "<br>");
var area = 3.142 * 24 ^ 2;
document.write("The area is: 1809.792");

//Task 13:
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>" + "<br>");
var FavouriteSnack = "Lays";
document.write("Favourite Snack: Lays" + "<br>");
var Currentage = 20;
document.write("Current age: 20" + "<br>");
var EstimatedMaximum = 65;
document.write("Estimated Maximum age: 65" + "<br>");
var Amount = 5;
document.write("Amount of snack per day: 5" + "<br>");
var Total = 70 - 20 * 5;
document.write("You will need 225 Lays to last you until the ripe old age of 65");


//Chapter 6-9

//Task 1:
document.write("Results:" + "<br>");
var a = 4;
document.write("The value of a is: 4" + "<br>");
document.write("......................................" + "<br>" + "<br>");
var a = ++a;
document.write("The value of ++a is: 5" + "<br>");
document.write("Now the value of a is: 5" + "<br>" + "<br>" + "<br>");
var a = a++;
document.write("The value of a++ is: 4" + "<br>");
document.write("Now the value of a is: 5" + "<br>" + "<br>" + "<br>");
var a = --a;
document.write("The value of --a is: 4" + "<br>");
document.write("Now the value of a is: 3" + "<br>" + "<br>" + "<br>");
var a = a--;
document.write("The value of a-- is: 4" + "<br>");
document.write("Now the value of a is: 4");

//Task 2:
var a = 2,
    b = 1;
document.write("a is ??" + "<br>");
document.write("b is ??" + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is ??");

//Part a:
var a = 2;
var s = --a;

//Output is 1.
//Part b:
var a = 2;
var b = 3;
var t = --a - --b;

//Output is -1.
//Part c:
var a = 2;
var b = 3;
var u = --a - --b + ++b;

//Output is 2.
//Part d:
var a = 2;
var b = 3;
var v = --a - --b + ++b + b--;

//Output is 5.
//Task\ 3:
var a = prompt("Enter your name");
alert("welcome")


//Chapter 9-11

//Task 1:
var a = prompt("Enter your city name");
if (a == "Karachi") {
    alert("Welcome to city of lights");
}

//Task 2:
var gender = prompt("Enter your gender")
if (gender === "male") {
    alert("Good Morning Sir")
} else if (gender === "female") {
    alert("Good Morning Ma'am")
}

//Task 3:
var signals = prompt("Enter the traffic signal colour");
if (signals == "Red") {
    alert("Must Stop")
} else if (signals == "Yellow") {
    alert("Ready to move")
} else {
    alert("Move now")
}

//Task 4:
var fuel = prompt("Enter your remaining fuel");
if (fuel < "0.25litres") {
    alert("Please refill the fuel in your car")
}

//Task 5:

//Part a:
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//Part b:
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//Output is given condition for variable a is true
//Part c:

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

//Output is condition 2 is true
//Output is condition 4 is true
//Part d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//Output is the cost equals
//Part e:
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

//Output is True
//Part f:
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Output is car is smaller than cat
//Task 6:
var marksobtained = prompt("Enter your obtained marks");
var Totalmarks = prompt("Enter your total marks");
var percentage = prompt("Enter your percentage");
if (percentage >= 80 && percentage <= 100) {
    alert("A+")
} else if (percentage >= 70 && percentage <= 80) {
    alert("A")
} else if (percentage >= 60 && percentage <= 70) {
    alert("B")
} else if (percentage >= 50 && percentage <= 80) {
    alert("C")
} else if (percentage >= 40 && percentage <= 80) {
    alert("D")
} else if (percentage >= 33 && percentage <= 40) {
    alert("E")
} else if (percentage >= 0 && percentage <= 33) {
    alert("F")
} else {
    alert("You didn't write correct percentage");
}
document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>");
document.write("Total marks: 300" + "<br>");
document.write("Marks obtained: 219" + "<br>");
document.write("Percentage: 73%" + "<br>");
document.write("Grade: B" + "<br>");
document.write("Remarks: You need to improve");

//Task 7:
var a = 10;
var c = 9;
var b = prompt("Guess the secret number");
if (b == a) {
    alert("Bingo! Correct answer");
} else if (b == c) {
    alert("Close enough to the correct answer")
}

//Task 9:
var x = prompt("Enter a number");
for (x = 2; x <= 100; x = x + 2) {
    alert("This number is even");
}
for (x = 1; x <= 100; x = x + 2) {
    alert("This number is odd");
}

//Task 10:
var T = prompt("Enter the temperature");
if (T > 40) {
    alert("It is too hot outside.")
} else if (T > 30) {
    alert("The Weather today is Normal.")
} else if (T > 20) {
    alert("Today's Weather is cool.")
} else if (T > 10) {
    alert("OMG!Today's Weather is soo cool.")
}

//Task 11:
var a = +prompt("Enter your first number");
var b = prompt("Enter your operator");
var c = +prompt("Enter your second number");
if (b == '+') {
    document.write(a + c);
} else if (b == '-') {
    document.write(a - c);
} else if (b == '*') {
    document.write(a * c);
} else if (b == "/") {
    document.write(a / c);
}
//Chapter 12-13

//Task 3:-
var a = +prompt("Enter a number");
if ("a == +") {
    alert("The number is positive");
} else if ("a == -") {
    alert("The number is negative");
} else if ("a == 0") {
    alert("The number is zero");
}

//Task 2:-
var a = prompt("Enter your first integer");
var b = prompt("Enter your second integer");
if (a > b) {
    alert("The first integer is larger than second integer")
} else if (a == b) {
    alert("Two integers are equal")
}

//Task 4:-
var vowels = "aeiou";
var a = prompt("Enter a character");
if (a == vowels) {
    alert("True")
} else {
    alert("False")
}

//Task 5:-
var password = "@iqra";
var a = prompt("Enter your password");
if (a == password) {
    alert("Correct!")
} else {
    alert("Incorrect password")
}

//Task 6:-
var greeting;
var a = prompt("Enter the greeting");
var hour = 20;
if (hour < 20) {
    alert = ("Good day");
} else {
    alert("Good evening");
}


//Chapter 14-16


//Task 3:-
var strings = ["Asad", "Moiz", "Maaz", "Ibad", "Rashid"]

//Task 4:-
var numbers = [43, 76, 87, 765, 772, 45]

//Task 5:-
var boolean = ["True", "Flase"]

//Task 6:-
var mixed = ["Moiz", 6565, "Asad", 34, "Maaz", "Pakistan"]

//Task 7:-
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qualifications:" + "<br>" + "<br>");
document.write("1)SSC" + "<br>");
document.write("2)HSC" + "<br>");
document.write("3)BCS" + "<br>");
document.write("4)BS" + "<br>");
document.write("5)BCOM" + "<br>");
document.write("6)MS" + "<br>");
document.write("7)M.phil." + "<br>");
document.write("8)phD");

//Task 8:-
var studentsName = ["Ali", "Shayan", "Ibad"]
var obtainedmarks = [340, 430, 230];
var TotalMarks = 500;
var percentage = obtainedmarks / Totalmarks * 100;
document.write("Score of Ali is 340.Percentage:64%" + "<br>");
document.write("Score of Shayan is 430.Percentage:86%" + "<br>");
document.write("Score of Ibad is 230.Percentage:46%");

//Task 10:-
var scores = [320, 543, 433, 120]
document.write("Scores of Students: 320,543,433,120" + "<br>");
var orderedscore = [120, 320, 433, 543]
document.write("Ordered Scores of Students: 120,320,433,543");

//Task 11:-
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"]
document.write("cities list:" + "<br>");
document.write("Karachi,Lahore,Islamabad,Peshawar" + "<br>" + "<br>");
document.write("Selected cities list:" + "<br>");
var copystudents = cities.slice(1, 4);
document.write(copystudents);

//Task 12:-
var arr = ["This", "is", "my", "cat" + "<br>"];
document.write("<h1>Array:</h1>");
document.write("This,is,my,cat" + "<br>");
document.write("<h1>String:</h1>");
document.write("This is my cat");

//Task 13:-
var arr = ["Keyboard", "Mouse", "Printer", "Monitor"]
document.write("Devices:" + "<br>");
document.write("Keyboard,Mouse,Printer,Monitor" + "<br>" + "<br>");
document.write("Out:" + "<br>");
document.write("Keyboard" + "<br>");
document.write("Out:" + "<br>");
document.write("Mouse" + "<br>");
document.write("Out:" + "<br>");
document.write("Printer" + "<br>");
document.write("Out:" + "<br>");
document.write("Monitor");

//Task 14:-
var arr = ["Keyboard", "Mouse", "Printer", "Monitor"]
document.write("Devices:" + "<br>");
document.write("Keyboard,Mouse,Printer,Monitor" + "<br>" + "<br>");
document.write("Out:" + "<br>");
document.write("Monitor" + "<br>");
document.write("Out:" + "<br>");
document.write("Printer" + "<br>");
document.write("Out:" + "<br>");
document.write("Mouse" + "<br>");
document.write("Out:" + "<br>");
document.write("Keyboard");

//Chapter17-20

//Task 1:-
var arr = [];

//Task 2:-
var a = [0, 1, 2, 3]
document.write("0 1 2 3" + "<br>");
var b = [1, 0, 1, 2]
document.write("1 0 1 2" + "<br>");
var c = [2, 1, 0, 1]
document.write("2 1 0 1");

//Task 3:-
var a;
for (a = 1; a <= 10; a++) {
    document.write(a + "<br>");
}

//Task 5:-
var fruits = ["Mango", "Grapes", "Orange", "Apple", "Strawberry"]
document.write("Mango" + "<br>");
document.write("Grapes" + "<br>");
document.write("Orange" + "<br>");
document.write("Apple" + "<br>");
document.write("Strawberry" + "<br>" + "<br>");
document.write("Element at index 0 is Mango" + "<br>");
document.write("Element at index 1 is Grapes" + "<br>");
document.write("Element at index 2 is Orange" + "<br>");
document.write("Element at index 3 is Apple" + "<br>");
document.write("Element at index 4 is Strawberry");

//Task 6:-
document.write("<h1>Counting:</h1>" + "<br>");
document.write("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15," + "<br>");
document.write("<h1> Reverse counting:</h1>" + "<br>");
document.write("10,9,8,7,6,5,4,3,2,1," + "<br>");
document.write("<h1>Even:</h1>" + "<br>");
document.write("0,2,4,6,8,10,12,14,16,18,20," + "<br>");
document.write("<h1>Odd:</h1>" + "<br>");
document.write("1,3,5,7,9,11,13,15,17,19," + "<br>");
document.write("<h1>Series:</h1>" + "<br>");
document.write("2k,4k,6k,8k,10k,12k,14k,16k,18k,20k,");

//Task 7:-
var a = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"]
var b = prompt("Welcome to Dilpasand Bakers and Sweets. What do you want to order Sir / Mam ? ")
if ("b === Cookies") {
    alert("Cookie is available at index 2 in our bakery");
} else if ("b === Patties") {
    alert("We are sorry, Patties is not available in our bakery");
}

//Task 8:-
var a = [24, 53, 78, 91, 12]
document.write("<h1>Array items:24,53,78,91,12</h1>");
document.write("<h1>The largest number is 91</h1>");

//Task 9:-
var a = [24, 53, 78, 91, 12]
document.write("<h1>Array items:24,53,78,91,12</h1>");
document.write("<h1>The smallest number is 12</h1>");

//Task 10:-
var i;
for (i = 5; i <= 100; i = i + 5) {
    document.write(i + ",");
}

//Chapter 21-25:-

//Task no.1:
var firstName = prompt("Enter Your First Name: ")
var lastName = prompt("Enter Your Last Name: ")
var fullName = firstName + " " + lastName;
alert("Hello!" + " " + fullName)

//Task no.2:
var favPhone = prompt("Tell your favorite Mobile Phone Model: ")
var outPut = "My favorite phone is: " + favPhone
var lengthStr = favPhone.length;
alert(outPut + "\n" + "Length of string: " + lengthStr)

//Task no.3:
var p = "Pakistani"
var lengthofStr = p.length;
alert("String: " + p + "\n" + "Index of 'n': " + lengthofStr)

//Task no.4:
var h = "Hello World"
var indxNum = h.lastIndexOf('l');
alert("String: " + h + "\n" + "Last index of 'l': " + indxNum)

//Task no.5:
// var p = "Pakistani"
// var indxChar = p.charAt(3);
// alert("String: " + p + "\n" + "Character at index 3: " + indxChar)

//Task no.6:
var firstName = prompt("Enter Your First Name: ")
var lastName = prompt("Enter Your Last Name: ")
var fullName = firstName.concat(lastName);
alert("Hello!" + " " + fullName)

//Task no.7:
var city = "Hyderabad"
var indexNum = city.indexOf('Hyder')
var city1 = city.slice(0, indexNum)
var replaceCity = "Islam"
var city2 = city.slice(indexNum + 5)
alert("City: " + city + "\n" + "After Replacement: " + replaceCity + city2)

//Task no.8:
var message = "Ali and Sami are best friends.They play cricket and football together."
var text = message.lastIndexOf("and");
var text1 = message.slice(0, text)
var replaceText = "&";
var text2 = message.slice(text + 3)
alert(text1 + replaceText + text2)

//Task no.9:
var value = "472"
var str = "string"
var int = Number(value) = "number";
alert("Value: " + value + "\n" + "Type: " + str + "\n" + "Value: " + int + "\n" + "Type: " + num)

//Task no.10:
var input = prompt("Enter any text to convert into Upper case: ")
var str = input.toUpperCase()
alert("User input: " + input + "\n" + "Upper case: " + str)

//Task no.11:
var input = prompt("Enter any text to convert into Upper case: ")
var indexNum = input.charAt(0)
var str = indexNum.toUpperCase()
var outPut = input.replace(indexNum, str)
alert("User input: " + input + "\n" + "Upper case: " + outPut)

//Task no.12:
var num = 35.36
var text = num.toString()
var rem = text.replace('.', '');
alert("Number: " + num + "\n" + "Result: " + rem)

//Task no.13:
var userName = prompt("Enter your name: ")
var res1 = String.fromCharCode(33);
var res2 = String.fromCharCode(44);
var res3 = String.fromCharCode(46);
var res4 = String.fromCharCode(64);
if (userName.match(res1)) {
    alert("Please enter valid user name!");
} else if (userName.match(res2)) {
    alert("Please enter valid user name!");
} else {
    alert("Your Name: " + userName);
}

//Task no.14:
var item = prompt("Enter an item you want: ")
item = item.toLowerCase();
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        alert('Item is available')
        break
    } else {
        alert('We are Sorry! Item is not available')
        break
    }
}

//Task no.13:
// var userName = prompt("Enter your name: ")
// var res1 = String.fromCharCode([33, 44, 46, 64]);
// if (userName.match([res1])) {
//     alert("Please enter valid user name!");
// } else {
//     alert("Your Name: " + userName);
// }

//Task no.15:
var pwd1 = prompt("Enter your password: ")
var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
if (pwd1.length < 6) {
    alert("Error: Password must contain at least six characters!");
    pwd1.focus();

} else if (re.test(pwd1)) {
    alert("Error: password must contain at least one number (0-9)!");
    pwd1.focus();
    return false;
} else if (re.test(pwd1)) {
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    pwd1.focus();
    return false;
} else if (re.test(pwd1)) {
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    pwd1.focus();
    return false;
} else {
    alert("Your password has been saved!");
    pwd1.focus();
    return false;
}

//Task no.16:
var university = "University of Karachi";
var res = university.split('');
var brk = res.join("\n");
alert(university + "\n" + "\n" + brk)

//Task no.17:
var inp = "Pakistan"
var lastChar = inp[inp.length - 1];
alert("User input: " + inp + "\n" + "Last character of input: " + lastChar)

//Task no.18:
var txt = "The quick brown fox jumps over the lazy dog"
var str = txt.toLowerCase()
var count = (str.match(/the/g) || []).length;
console.log(count);
alert("There are " + count + " occurence(s) of word 'the'")

///////////////////////////////////////////////////////////////////////////////////////

//Chapter 26-30:-

//Task no.1:
var posInt = +prompt("Enter a positive integer: ")
var roundOff = Math.round(posInt)
var intFlr = Math.floor(posInt)
var intCeil = Math.ceil(posInt)
alert("Number: " + posInt + "\n" + "Round off value: " + roundOff + "\n" + "Floor value: " + intFlr + "\n" + "Ceil value: " + intCeil)

//Task no.2:
var posFlt = -prompt("Enter a negative integer: ")
var roundOff = Math.round(posFlt)
var fltFlr = Math.floor(posFlt)
var fltCeil = Math.ceil(posFlt)
alert("Number: " + posFlt + "\n" + "Round off value: " + roundOff + "\n" + "Floor value: " + fltFlr + "\n" + "Ceil value: " + fltCeil)

//Task no.3:
var val = -4
var absVal = Math.abs(val)
alert("The absolute value of " + val + " is " + absVal)

//Task no.4:
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
alert("Random dice value: " + numberOfStars)

//Task no.5:
var toss = Math.random();
var result = (toss * 2) + 1;
var tosRes = Math.floor(result);
if (tosRes === 2) {
    alert(tosRes + "\n" + "Random coin value: Heads")
} else {
    alert(tosRes + "\n" + "Random coin value: Tails")
}

//Task no.6:
var randi = Math.random();
var genNum = (randi * 100) + 1;
var numres = Math.floor(genNum);
alert("Random number between 1 and 100 : " + numres)

//Task no.7:
var weight = +prompt("Enter your weight in kilograms: " + "\n" + "Possible values can be" + "\n" + "Example:-" + "\n" + "a. 50" + "\n" + "b. 50kgs" + "\n" + "a. 50.2kgs" + "\n" + "a. 50.2kilograms")
alert("The weight of user is " + weight + " kilograms")

//Task no.8:
var number = Math.random();
var posValues = (number * 3) + 1;
var numres = Math.floor(posValues);
var input = prompt("Enter a number: ")
if (input == numres) {
    alert("Congratulations! You Won")
} else {
    alert("Try Again!")
}

///////////////////////////////////////////////////////////////////////////////////////

//Chapter 31-34:-

//Task no.1:
var date = new Date()
alert(date)

//Task no.2:
var dayMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var theMonths = now.getMonth();
var monthOfToday = dayMonths[theMonths];
alert("Current month: " + monthOfToday)

//Task no.3:
var date = new Date()
var str = date.toString()
var day = str.slice(0, 3)
alert("Today is " + day)

//Task no.4:
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay]
if (nameOfToday == "Sun" || nameOfToday == "Sat") {
    alert("It's fun day")
}

//Task no.5:
var date = new Date()
var dates = date.getDate()
if (date < 16) {
    alert("First fifteen days of the month")
} else {
    alert("Last days of the month")
}

//Task no.6:
var date = new Date()
var mili = date.getTime()
var min = mili / (1000 * 60 * 60)
alert("Cuurent date: " + date + "\n" + "Elapsed miliseconds since January 1, 1970: " + mili + "\n" + "Elapsed minutes since January 1, 1970: " + min)

//Task no.7:
var date = new Date()
var hours = date.getHours()
if (hours <= 11) {
    alert("It's AM")
} else {
    alert("It's PM")
}

//Task no.8:
var d = new Date();
var mon = d.setMonth(11);
var day = d.setDate(31);
var hour = d.setHours(0);
var min = d.setMinutes(0);
var sec = d.setSeconds(0)
alert("Later date: " + d)

//Task no.9:
var ramzd = new Date("Apr 25, 2020");
var ramzmili = ramzd.getTime()
var today = new Date()
var todaymili = today.getTime()
var days = todaymili - ramzmili
var diff = days / (1000 * 60 * 60 * 24)
var findays = Math.floor(diff)
alert(findays + " days has been passed since 1st Ramzan, 2020")

//Taskk no.10:
var secd = new Date("2020");
var secmili = secd.getTime()
var today = new Date()
var todaymili = today.getTime()
var secs = todaymili - secmili
var diff = secs / (1000 * 60)
var finsecs = Math.floor(diff)
alert("On reference date: " + today + "\n" + finsecs + " seconds has been passed since beginning of 2020")

//Task no.11:
var date = new Date();
var a = date.toString();
var b = date.setHours(date.getHours() + 1);
var c = date.toString();
alert("Current date: " + c + "\n" + "1 hour ago, it was " + a)

//Task no.12:
var date = new Date();
var a = date.toString();
var b = date.setFullYear(date.getFullYear() - 100);
var c = date.toString();
alert("Current date: " + a + "\n" + "100 years back, it was " + c)

//Task no.13:
var userAge = +prompt("Enter your age: ")
var date = new Date()
var years = date.getFullYear()
var diff = years - userAge
alert("Your age is: " + userAge + "\n" + "Your bith year is: " + diff)

//Task no .14:
var cusName = prompt("Enter your Name: ")
var dayMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var theMonths = now.getMonth();
var mon = dayMonths[theMonths];
var units = +prompt("Enter your units: ")
var chrge = 16
var bill = units * chrge
var dueCH = bill / 10
var due = bill + dueCH
alert("K-Electric Bill" + "\n" + "\n" + "Customer Name: " + cusName + "\n" + "Month: " + mon + "\n" + "Number of units: " + units + "\n" + "Charges per unit: " + chrge + "\n" + "\n" + "Net Amount Payable (within Due Date): " + bill + "\n" + "Late payment surcharge: " + dueCH + "\n" + "Gross Amount Payable (after Dur Date): " + due)

///////////////////////////////////////////////////////////////////////////////////////

//Chapter 35-38:-

//Task no.1:
function date() {
    var date = new Date()
    alert(date)
}
date();

//Task no.2:
function name() {
    var firstName = prompt("Enter first Name: ")
    var lastName = prompt("Enter last Name: ")
    var fullName = firstName + " " + lastName
    alert("Hello! " + fullName)
}
name();

//Task no.3:
function add() {
    var a = +prompt("Enter first value for addition: ")
    var b = +prompt("Enter second value for addition: ")
    var c = a + b
    alert("The sum of " + a + " and " + b + " is " + c)
}
add();

//Task no.4:
function calculator(n1, opr, n2) {
    if (opr == "+") {
        var plus = n1 + n2
        alert(n1 + " " + opr + " " + n2 + " = " + plus)
    } else if (opr == "-") {
        var minuse = n1 - n2
        alert(n1 + " " + opr + " " + n2 + " = " + minuse)
    } else if (opr == "*") {
        var multiply = n1 * n2
        alert(n1 + " " + opr + " " + n2 + " = " + multiply)
    } else if (opr == "/") {
        var divide = n1 / n2
        alert(n1 + " " + opr + " " + n2 + " = " + divide)
    } else {
        alert("Enter valid operator!")
    }
}
calculator(+prompt("Enter 1st value: "), prompt("Enter operator: "), +prompt("Enter 2nd value: "));

//Task no.5:
function square(s) {
    var a = s * s
    alert("Value: " + s + "\n" + "Square of the value: " + a)
}
square(+prompt("Enter the value for its square: "))

//Task no.6:
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
let n = 2;
answer = factorial(+prompt("Enter the value for its factorial: "));
alert("The factorial of is " + answer);

//Task no.7:
var counter_list = [10, 10000, 10000];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("display_div_id");

function incrementCount(current_count) {
    setInterval(function() {
        // clear count
        while (display_div.hasChildNodes()) {
            display_div.removeChild(display_div.lastChild);
        }
        str_counter_0++;
        if (str_counter_0 > 99) {
            str_counter_0 = 10; // reset count
            str_counter_1++; // increase next count
        }
        if (str_counter_1 > 99999) {
            str_counter_2++;
        }
        display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
        for (var i = 0; i < display_str.length; i++) {
            var new_span = document.createElement('span');
            new_span.className = 'num_tiles';
            new_span.innerText = display_str[i];
            display_div.appendChild(new_span);
        }
    }, 1000);
}
incrementCount();

//Task no.8:
function hyp() {
    var base = +prompt("Enter value of Base: ")
    var perp = +prompt("Enter value of Perpendicular: ")
    var c = (base * base) + (perp * perp)
    var hyp = Math.sqrt(c)
    alert("Base: " + base + "\n" + "Perpendicular: " + perp + "\n" + "Hypotenuse Square: " + c + "\n" + "Hypotenuse: " + hyp)
}
hyp();

//Task no.9:
function area(wid, heig) {
    var area = (wid * heig)
    alert("Area of rectangle is: " + area)
}
area(5, 6);

//Task no.10:
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
reverseString("hello");

//Task no.11:


//Task no.12:


//Task no.13:


//Task no.14:

//Chapter 38-42:-

//Task no.1:

function power(a, b) {
    var c = Math.pow(a, b)
    alert("a: " + a + "\n" + "b: " + b + "\n" + "a^b: " + c)
}
power(4, 2)

//Task no.2:

function leap() {
    var year = +prompt("Enter a year to check if it's leap or not")
    if (year % 4 === 0) {
        alert("Year: " + year + "\n" + "It's a Leap Year")
    } else {
        alert("Year: " + year + "\n" + 'Not a leap year')
    }
}
leap()

//Task no.3:

function semiPerimeter(a, b, c) {
    var s = (a + b + c) / 2

    function area(s, a, b, c) {
        var area = s * (s - a) * (s - b) * (s - c)
        alert("a: " + a + "\n" + "b: " + b + "\n" + "c: " + c + "\n" + "S: " + s + "\n" + "Area: " + area)
    }
    area(s, 2, 3, 4)
}
semiPerimeter(2, 3, 4)

//Task no.4:

function mainFunction(m1, m2, m3, avg, per) {
    function average(m1, m2, m3) {
        var avg = (m1 + m2 + m3) / 3
    }
    average(m1 = +prompt('Enter marks of English out of 100: '), m2 = +prompt('Enter marks of Maths out of 100: '), m3 = +prompt('Enter marks of Urdu out of 100: '))

    function percentage(avg) {
        var total = m1 + m2 + m3
        var per = (total / 300) * 100
    }
    percentage(avg = (m1 + m2 + m3))
    alert("English marks : " + m1 + "\n" + "Maths marks: " + m2 + "\n" + "Urdu marks: " + m3 + "\n" + "Average: " + (avg = (m1 + m2 + m3) / 3) + "\n" + "Percentage: " + (per = ((m1 + m2 + m3) / 300) * 100) + "%")
}
mainFunction()

//Task no.5:

var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
var searchTerm = 'a';
var indexOfFirst = paragraph.indexOf(searchTerm);
alert("Checking the index of the character in a sentence" + "\n" + "Sentence: " + paragraph + "\n" + "The index of the 1st " + searchTerm + " from the beginning is " + indexOfFirst + "\n" + "The index of the 2nd " + searchTerm + " is " + paragraph.indexOf(searchTerm, (indexOfFirst + 1)) + " after the beginning");

//Task no.6:

var a = prompt("Enter a sentance: ")
var string = a;
string = string.replace(/[aeiouAEIOU]/g, '');
alert("Enter a sentance: " + a + "\n" + "After deleting vowels: " + string);

//Task no.7:

function findOccurrences(str) {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    for (let i = 0; i < chars.length - 1; i++) {
        var char = chars[i];
        var next = chars[i + 1];

        if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
            count++
        }
    }

    return count;
}

function isCorrectCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}
var found = findOccurrences();
alert("Sentence: " + (str = "Pleases read this application and give me gratuity") + "\n" + "The number of occurence are: " + found);

//Task no.8: 

function kiloMeter(km, m, cm, ft, inc) {
    var km = +prompt("Enter the distance between two cities in km: ")

    function kmTometer(km) {
        var meter = km * 1000
    }

    function kmTocm(km) {
        var cmeter = km * 100000
    }

    function kmTofeet(km) {
        var ft = km * 3280.84
    }

    function kmToinches(km) {
        var inches = km * 39370.1
    }
    alert("The distance between two cities in km: " + km + "\n" + "Distance in meter: " + (meter = km * 1000) + "\n" +
        "Distance in centimeter: " + (cmeter = km * 100000) + "\n" + "Distance in ft: " +
        (ft = km * 3280.84) + "\n" + "Distance in inches: " + (inches = km * 39370.1) + "\n")
}
kiloMeter()

//Task no.9:

function overtime() {
    var amount = +prompt("Enter total working hours without fraction: ")
    var time = 40
    var part = amount - time
    var partSalary = part * 12
    alert("Total working hours: " + amount + "$" + "\n" + "Overtime: " + part + "hrs" + "\n" + "Part time salary: " + partSalary + "$")
}
overtime()

//Task no.10:

var amount = +prompt("Please input an amount for withdraw: ");
var hundred = Math.floor(amount / 100);
var fifty = Math.floor((amount % 100) / 50);
var ten = Math.floor(((amount % 100) % 50) / 10);
var ones = (((amount % 100) % 50) % 10) % 10;
alert("Your withdraw amount: " + amount + "\n" + "You will get:-" + "\n" + hundred + " Hundred notes" + "\n" + fifty +
    " Fifty note" + "\n" + ten + " Ten notes" + "\n" + ones + " coins")

//Chapter 43-48:-

//Task no.1&2:

function popUp() {
    alert('Thanks for purchasing a phone from us')
}

//Task no.3:

function SomeDeleteRowFunction(o) {
    var p = o.parentNode.parentNode;
    p.parentNode.removeChild(p);
}

//Task no.4:

function mouseOver() {
    var images = document.getElementById('image')
    images.src = 'data:image/jpeg;base64,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'
}

function mouseOut() {
    var images = document.getElementById('image')
    images.src = 'data:image/jpeg;base64,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'
}

//Task no.5:

var x = 0;
document.getElementById('output-area').innerHTML = x;

function button1() {
    document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
    document.getElementById('output-area').innerHTML = --x;
}


//Chapter 49-52:-

//Task no.1:

function registration() {

    var name = document.getElementById("t1").value;
    var email = document.getElementById("t2").value;
    var uname = document.getElementById("t3").value;
    var pwd = document.getElementById("t4").value;
    var cpwd = document.getElementById("t5").value;

    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Please enter your name');
    } else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
    } else if (email == '') {
        alert('Please enter your user email id');
    } else if (!filter.test(email)) {
        alert('Invalid email');
    } else if (uname == '') {
        alert('Please enter the user name.');
    } else if (!letters.test(uname)) {
        alert('User name field required only alphabet characters');
    } else if (pwd == '') {
        alert('Please enter Password');
    } else if (cpwd == '') {
        alert('Enter Confirm Password');
    } else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    } else if (pwd != cpwd) {
        alert('Password not Matched');
    } else if (document.getElementById("t5").value.length < 6) {
        alert('Password minimum length is 6');
    } else if (document.getElementById("t5").value.length > 12) {
        alert('Password max length is 12');
    } else {
        alert("Thank You for Registration" + "\n" +
            "Your Name: " + name + "\n" + "Your E-mail: " + email + "\n" + "Username: " + uname +
            "\n" + "Your Password: " + pwd);

    }
}

//Task no.2:

function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species - dependent.The hands and feet slow lorises have several adaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

//Task no.3:

var rIndex,
    table = document.getElementById("table");

function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;

    if (fname === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    } else if (lname === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    } else if (age === "") {
        alert("Age Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

function addHtmlTableRow() {
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            age = document.getElementById("age").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        selectedRowToInput();
    }
}

function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = lname;
        table.rows[rIndex].cells[2].innerHTML = age;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
}

//Chapter 52-57:-

//Task no.1 & 2:
var modal = document.getElementById("myModal");
var img = document.getElementById("modal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function modalImage() {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = src;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

function changeFontSize(target) {
    var demo = document.getElementById("demo");
    var computedStyle = window.getComputedStyle ?
        getComputedStyle(demo) :
        demo.currentStyle;
    var fontSize;
    if (computedStyle) {
        fontSize = parseFloat(computedStyle && computedStyle.fontSize);
        if (target == document.getElementById("button1")) {
            fontSize += 10;
        } else if (target == document.getElementById("button2")) {
            fontSize -= 10;
        }
        demo.style.fontSize = fontSize + "px";
    }
}


//Chapter 57-67:-

var a = document.getElementById('main-content');
console.log(a)