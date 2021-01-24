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
  question:'3. \n a. \n b. \n c. \n d. ',
  answer:''
},{
  question:'4. \n a. \n b. \n c. \n d. ',
  answer:''
},{
  question:'5. \n a. \n b. \n c. \n d. ',
  answer:''
},{
  question:'6. \n a. \n b. \n c. \n d. ',
  answer:''
},{
  question:'7. \n a. \n b. \n c. \n d. ',
  answer:''
},{
  question:'8. \n a. \n b. \n c. \n d. ',
  answer:''
},{
  question:'9. \n a. \n b. \n c. \n d. ',
  answer:''
},{
  question:'10. \n a. \n b. \n c. \n d. ',
  answer:''
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