const questions=[
    {
        question: "What is the capital of Pakistan?",
        answers: [
                 {text : "Lahore" , correct: "false"},
                   {text : "Karachi" , correct: "false"},
                     {text : "Islamabad" , correct: "true"},
                       {text : "Peshawar" , correct: "false"}
        ]
    },
    {
        
        question: "Which planet is known as the Red Planet?",
        answers: [
                 {text : "Venus" , correct: "false"},
                   {text : "Mars" , correct: "true"},
                     {text : "Saturn" , correct: "false"},
                       {text : "Jupiter" , correct: "false"}
        ]
    },
    {
          question: "Which is the largest ocean in the world?",
        answers: [
                 {text : "Atlantic Ocean" , correct: "false"},
                   {text : "Indian Oceans" , correct: "false"},
                     {text : "Arctic Ocean" , correct: "false"},
                       {text : "Pacific Ocean" , correct: "true"}
        ]
    },{
         question: "How many continents are there in the world?",
        answers: [
                 {text : "5" , correct: "false"},
                   {text : "6" , correct: "false"},
                     {text : "7" , correct: "true"},
                       {text : "8" , correct: "false"}
        ] 
    },{
          question: "Which country is called the Land of the Rising Sun?",
        answers: [
                 {text : "China" , correct: "false"},
                   {text : "japan" , correct: "true"},
                     {text : "Italy" , correct: "false"},
                       {text : "Korea" , correct: "false"}
        ] 
    }
];
const questionElement= document.getElementById("question")
const answerbutton= document.getElementById("answerbutton")
const nextbutton= document.getElementById("next-btn")

let Currentquestionindex=0;
let score=0;

function startQuiz(){
    resetstate();
    Currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
  resetstate(); 
   let Currentquestion=questions[Currentquestionindex]
   let Qno=Currentquestionindex+1;
   questionElement.innerHTML=Qno + '.' + Currentquestion.question;
  
   Currentquestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectanswer);
   });
}
function  resetstate(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
function selectanswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct=="true";

if(iscorrect){
    selectedbtn.classList.add("correct");
    score++;
}
else{
        selectedbtn.classList.add("incorrect");

}
Array.from(answerbutton.children).forEach(button=>{
    if(button.dataset.correct=="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextbutton.style.display="block"
}
function  showScore(){
    resetstate();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextbutton.style.display="none"
}
function  handlenextbutton(){
    Currentquestionindex++;
  if (Currentquestionindex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }  
}
nextbutton.addEventListener("click",()=>{
    if (Currentquestionindex<questions.length){
        handlenextbutton();
    }else{
        startQuiz();
    }
});
startQuiz();
