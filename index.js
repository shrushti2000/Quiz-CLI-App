var readLineSync=require('readline-sync');
var userName=readLineSync.question("What's your name? ");
console.log("Welcome "+ userName + "Do you know Shrushti ?");
var score=0;
function play(question ,answer){
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("Your answer is correct");
    score=score+1;
  }else{
    console.log("Your answer is wrong");
  }
}

var questions=[
  {
    question:"Where do I live ?",
    answer:"Thane"
  },
  {
    question:"What's my favourite dish ?",
    answer:"Biryani"
  },
  {
    question:"What's the name of my College ?",
    answer:"RAIT"
  },
  {
    question:"Which is my favourite sitcom ?",
    answer:"Friends"
  },
  {
    question:"Who is my favourite author?",
    answer:"Haruki Murakami"
  }
]

for(var i=0;i<questions.length;i++){
  var q=questions[i];
  play(q.question,q.answer);
}
console.log("Your score is "+score);