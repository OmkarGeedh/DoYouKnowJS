var ck=require('chalk');
var readLine=require('readline-sync')
console.log(ck.bold.red('JavaScript QUIZ\n'))
var usrname,userans,score=0,topscore=0;
usrname=readLine.question(ck.magenta('Enter your name :'))
var questions =[{
  question:'1. Which type of JavaScript language is \na. Object-Oriented\nb. Object-Based\nc. Assembly-language\nd. High-level',
  answer:'b'
},{
  question:'2. Which one of the following also known as Conditional Expression:\na. Alternative to if-else\nb. Switch statement\nc. If-then-else statement\nd. immediate if',
  answer:'d'
}
,{
  question:'3. In JavaScript, what is a block of statement? \n a. Conditional block \n b. block that combines a number of statements into a single compound statement \n c. both conditional block and a single statement \n d. block that contains a single statement',
  answer:'b'
},{
  question:'4. When interpreter encounters an empty statements, what it will do: \n a. Shows a warning \n b. Prompts to complete the statement \n c. Throws an error \n d. Ignores the statements ',
  answer:'d'
},{
  question:'5. The "function" and " var" are known as: \n a. Keywords \n b. Data types \n c. Declaration statements \n d. Prototypes ',
  answer:'c'
},{
  question:'6. Which of the following variables takes precedence over the others if the names are the same? \n a. Global variable \n b. The local element \n c. The two of the above \n d. None of the above ',
  answer:'b'
},{
  question:'7. Which one of the following is the correct way for calling the JavaScript code? \n a. Preprocessor \n b. Triggering Event \n c. RMI \n d. Function/Method ',
  answer:'d'
},{
  question:'8. Which of the following type of a variable is volatile? \n a. Mutable variable \n b. Dynamic variable \n c. Volatile variable \n d. Immutable variable ',
  answer:'a'
},{
  question:'9. Which of the following option is used as hexadecimal literal beginning? \n a. 00 \n b. 0x \n c. 0X \n d. Both 0x and 0X ',
  answer:'d'
},{
  question:'10. In the JavaScript, which one of the following is not considered as an error: \n a. Syntax error \n b. Missing of semicolons \n c. Division by zero \n d. Missing of Bracket ',
  answer:'c'
},

];
for(i=0;i<=questions.length-1;i++){
console.log(ck.red(questions[i].question))
userans=readLine.question(ck.green('type any option :'))
if(questions[i].answer===userans)
{
  console.log('right ! your answer is ' +userans)
  score++;
}else{
  console.log('wrong answer** \n answer is '+questions[i].answer)
  
}}
console.log(ck.yellow(usrname+' your score is '+score))
if(score>topscore){
  topscore=score
  };
console.log('top score is '+topscore)