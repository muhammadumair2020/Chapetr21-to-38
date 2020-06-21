//Chapter#21to25

//  Q1

/*var FirstName =prompt("Enter First Name");
var LastName=prompt("Last Name");

var FullName = FirstName+" "+LastName;
document.write("Wellcome"+" "+FullName);*/
//Q2
/*var EnterTheMobleName=prompt("Enter Your Mobile Name");
var check=EnterTheMobleName.length;
document.write(check);*/
//Q3
/*var CountryName ="Pakistan";

var ind =CountryName.indexOf("n");

document.write(ind);*/

//Q4
/*
var HELLO ="HELLOW WORLD";
var ind = HELLO.lastIndexOf("D");
document.write(ind);
*/

/*Q5

/*var CountryName ="Pakistan";
var ind = CountryName.indexOf("i");
document.write(ind);*/

/*Q6

/*var FirstName =prompt("Enter First Name");
var LastName=prompt("Last Name");
var res=FirstName.concat(LastName);
document.write("Wellcome"+res);*/

/*Q7*/
/*var cont = "HYDERABAD";
var res = cont.replace("HYDER","ISLAM");
document.write(res);*/

/*Q8*/

/*var message="Ali and Sami are best friend.They play cricket and football togather";
var rges = message.replace(/and/g,"&");
document.write(rges);*/
/*Q9*/
/*
var program ="472";
var integer = parseInt(program);
document.write(integer);*/

/*Q10*/
/*
var Inter = prompt("Enter Your Name");
var uper=Inter.toUpperCase();
document.write(uper);*/


/*Q11*/

/*var Inter = prompt("Enter Your Name");
var uper=Inte.charat
document.write(uper);*/


/*Q12*/

/* var d = 36.36;
 var s = d + '';
 s =s.replace('.', '');
 s = parseInt(s);
 document.write(s);*/
/*Q13*/
 /*var user=prompt("Enter User Name");
 if(user === "@"||"."||","||"!"){

alert("Enter correct User Name")


 }else{

    document.write(user);
 }*/

 /*Q14*/
/*
 var userinput=prompt("Enter Name ")
 userinput=userinput.toLowerCase();
 var bakery=["cake","apple","cookies","chips"]
 for( var i=0;i < bakery.length;i++){

    if(bakery[i] === userinput){

        alert(userinput+" "+"are available")
    }else{

        document.write(userinput+" "+"note available");

 }
} 
*//*25end*/

/*26Start*/
/*Q1/
/*
var num =+3.245+"<br>";
var num2=Math.round(3.245)+"<br>";
var num3=Math.floor(3.245)+"<br>";
var num4=Math.ceil(3.245)+"<br>"; 
document.write(num,num2,num3,num4);
*/

/*Q2*/
/*var num =+-2.673+"<br>";
var num2=Math.round(-2.673)+"<br>";
var num3=Math.floor(-2.673)+"<br>";
var num4=Math.ceil(-2.673)+"<br>"; 
document.write(num,num2,num3,num4);*/

/*Q3*/

/*var num=Math.abs(-4)+"<br>";
var num1=Math.abs(-5);
document.write(num,num1);
*/

/*Q4*/

/*var ren=Math.floor(Math.random()* 5 + 1);
document.write("Dice value is"+ren);
*/

/*Q5*/

/*var coin=Math.floor(Math.random()* 2+1);
if(coin === 1){

document.write("Rendom coin value Head"+" "+coin);

}else{


    document.write("Rendom coin value tails"+" "+coin);

}*/






/*Q6*/
/*var ren=Math.floor(Math.random()*100+1);
document.write("Random value between 1 and 100"+" ",ren);
*/
/*Q7*/

/*var entrWeight=prompt("Enter Your Weight");
var convert=entrWeight*100/100;
document.write(convert);*/

/*Q7*/
/*var EntarNumber=prompt("Entar your Number")

var luckyNumber = Math.floor(Math.random()*7+1)

if(EntarNumber === luckyNumber)
{

Document.write("Congeratulatio you got lucky Number"+luckyNumber);
    
}else{


document.write("Sorry this number are not lucky",luckyNumber)

}end30*/

/*31Start*/

/*Q1*/
/*var dt = new Date();
document.write(dt);
*/
/*Q2*/
/*
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];

document.write(n);

*/
/*Q3*/

/*var d = new Date();
var day = new Array();
day[0] = "Mon";
day[1] = "Tue";
day[2] = "wed";
day[3] = "The";
day[4] = "Fri";
day[5] = "Sat";
day[6] = "Sun";
var n = day[d.getDay()];
alert("Today is"+" "+day[5]);
*/

/*var d = new Date();
var day = new Array();
day[0] = "Mon";
day[1] = "Tue";
day[2] = "wed";
day[3] = "The";
day[4] = "Fri";
day[5] = "Sat";
day[6] = "Sun";
var n = day[d.getDay()];
if(day ==="sat"||"sun")
{

document.write("Today is "+" "+day[5,6]+" "+"its a Fun day");

}

*/
/*q5*/
/*var d = new Date();

if (d <=16){

document.write(d+"First Fifteen days of themonth");

}
 */

 /*Q6*/





 /*Q7*/


/*
 var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;
  var d = new Date();
  var t= d.getTime();

  var y = Math.round(t / years)

  document.write(y);*/

  /*138*/

  /*var DateOFBirtth = new Date(prompt("Enter Your Date Of Birth","Apr 26, 1989"))
  var gtTiem=DateOFBirtth.getTime();
  var today= new Date();
  var todaymil=today.getTime();
  var diff = todaymil-gtTiem;
  var AccordDate=Math.floor(diff/(1000*60*60*24*30*12));
  document.write("Your Till today is"+" "+AccordDate);*/
  
  
/*Chepter35-38*/

/*Q1*/
/*
function CurrntDate(d){
 d = new Date();
d.getTime();

 document.write(d);

}
CurrntDate();*/

/*Q2*/

/*function greet(){

    var  FirstName=prompt("Enteer Your First Name");
    var LastName=prompt("Enteer Your Last Name");    
     document.write("Well Come Mr."+" "+ FirstName,LastName);
    

}

greet();*/

/*Q3*/
/*
function add(){

var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter 2nd Number");
var res=num1+num2;

document.write("Total Is"+" "+res)

}

add();*/
/*Q4*/

/*function result(num1,num2,opp){
num1=+prompt("Enter Num1");
opp=prompt("Enter opprator");
num2=+prompt("Enter Num2");
if(opp === "+" ){
    document.write(num1+num2);    
    if(opp ==="-"){

  
        document.write(num1-num2);

}
    

}


}

result();*/

/*Q5*/
/*var num = parseInt(prompt("Enter a number:"));
function sumOfSquares(num) {
    
    var i;

    for (i=0,i<=num,i++){
        var sum=0;
        var i = i*i;
        sum = i;
}
     document.write("The sum of squares for numbers up to and including " +num+ "is " +sum+ ) ;
}

sumOfSquares(num);*/
/*q6*/
/*function factorial(n){
    var answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);

*/

