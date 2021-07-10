// 1. Write a custom function power (1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
//  a, b ), to calculate the value of 
// a raised to b.
// var base = +prompt(" Enter base  : ");
// var exp = +prompt(" Enter exponent  : ");
// function power(a,b){
//     var p = Math.pow(a,b);
//     return p;
// }
// var a= power(base,exp);
// alert(a);

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.

// var y = prompt(" Enter any year : ");
// function leapYear(year){
//     if(( 0== year % 4) && (0!= year % 100 ) || (0 == year % 400)){
//         alert(y +" is a Leap Year ")

//     }
//     else{
//         alert(y +" is not a Leap Year ")
//     }
// }

// leapYear(y);



// If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// var firstLength = Math.floor(+prompt(" Enter first length of the sides of a triangle : "));

// var secondLength = Math.floor(+prompt(" Enter second length of the sides of a triangle : "));
// var thirdLength = Math.floor(+prompt(" Enter third  length of the sides of a triangle : "));
// function calTriangle(a,b,c){
//     var s = ( a + b + c ) / 2
    
//     var d = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     return d;
// }
// var f = calTriangle(firstLength,secondLength,thirdLength);
// alert(f);


// Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.
// var Math = +prompt(" Enter Math's marks : ");
// var Eng = +prompt(" Enter Eng's marks : ");
// var urdu = +prompt(" Enter Urdu's marks : ");
// var Marks_Obtained = Math+Eng+urdu;
// var totalSubj = 3; 
// var totalMarks = 300;
// function average(){
//     var ave =Marks_Obtained/totalSubj;
//     alert( " average is :  " + ave);
// }
// function percentage(){
//     var per =(Marks_Obtained/totalMarks)*100;
//     alert(" percentage is : "+ per);
// }
// function mainFunction(){
//     var a =  average();
//     var b = percentage();
    
// }
// mainFunction();

// You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

// Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.


// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.


// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.
