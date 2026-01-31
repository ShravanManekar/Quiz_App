document.addEventListener('DOMContentLoaded',()=>{
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
   const questionText =document.getElementById("question-text");
   const choicesList= document.getElementById("choices-list");
   const resultContainer= document.getElementById("result-container");
   const restartBtn =document.getElementById("restart-btn");
   const startBtn=  document.getElementById("start-btn");
   const nextBtn=  document.getElementById("next-btn");
   const scoreDisplay= document.getElementById("score"); 
    

   const questions=[
    {
        question:"What is the capital of France?",
        choices:["Paris","London","Berlin","Madrid"],
        answer:"Paris",
    },
    {
        question:"What planet is known as the Red Planet?",
        choices:["Mars","Venus","Jupitor","Earth"],
        answer:"Mars",
    },

    {
        question:"Who wrote 'Hamlet'?",
        choices:["Charles Dickens","Jane Austen","Willean Shakespear","Mark Twain "],
        answer:"Willean Shakespear",
    },




   ]


   let currentQuestionIndex=0;
   let score =0;

   startBtn.addEventListener('click', startquiz);

   nextBtn.addEventListener('click',()=>{
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showResult();
    }

   });
   restartBtn.addEventListener('click',()=>{
     currentQuestionIndex=0;
     score=0;
     resultContainer.classList.add('hidden');
     startquiz();
   })
   


   function startquiz() {
    startBtn.classList.add('hidden');
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove('hidden');
    showQuestion();


    
   }
   function showQuestion(){
    nextBtn.classList.add('hidden');
    questionText.textContent=questions[currentQuestionIndex].question; 
    choicesList.innerHTML="";//clear previous choices
    questions[currentQuestionIndex].choices.forEach(choice => {
        const li=document.createElement('li');
        li.textContent=choice;
        li.addEventListener('click',()=> selectAnswer(choice));
        choicesList.appendChild(li);
         
        
    });
   }


  function selectAnswer(choice){
    const correctAnswer=questions[currentQuestionIndex].answer
    if(choice===correctAnswer){
        score++;

    }
    nextBtn.classList.remove('hidden');

  }

  function showResult(){
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent=`${score} out of ${questions.length}`;
  }

     

});