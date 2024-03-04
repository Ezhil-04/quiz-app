



const questions=[
    {
    question:"which is the largest continent in the world",
    answers:[
        {text:"asia",correct:"true"},
        {text:"australia",correct:"false"},
        {text:"antartica",correct:"false"},
        {text:"north america",correct:"false"}
    ]
    ,crt:"australia"
},
{
    question:"which is the smallest continent in the world",
    answers:[
        {text:"asia",correct:"false"},
        {text:"australia",correct:"true"},
        {text:"antartica",correct:"false"},
        {text:"north america",correct:"false"}
    ]
    
},    {
    question:"which is the largest country in the world",
    answers:[
        {text:"china",correct:"false"},
        {text:"russia",correct:"true"},
        {text:"antartica",correct:"false"},
        {text:"India",correct:"false"}
    ]
},    {
    question:"which continent is an island",
    answers:[
        {text:"asia",correct:"false"},
        {text:"australia",correct:"true"},
        {text:"antartica",correct:"false"},
        {text:"north america",correct:"false"}
    ]
},]
let q=document.querySelector(".question");
let choice=document.querySelector(".choice");
let next=document.getElementById("btn-final");
let final=document.querySelector(".answer")
const play=document.createElement("button")
play.style.display="none"
play.classList.add("playagain")

final.appendChild(play)
play.innerHTML="play again"
let curquestionindex=0;
let score=0;

startgame()

function startgame()
{
  
    q.classList.remove("score")
    score=0;
    curquestionindex=0;
    next.innerHTML="next";
    resetstate();

}

function showquestion(){
   
let curquestion=questions[curquestionindex];
let questionnum=curquestionindex+1;
q.innerHTML=questionnum +"."+curquestion.question;

curquestion.answers.forEach(answer=>{
const button=document.createElement("button");
button.innerHTML=answer.text;
button.classList.add("btn")
choice.appendChild(button)
button.addEventListener("click",checkanswer)
button.dataset.correct=answer.correct;


})
}


function checkanswer(e)
{
    const selectedbtn=e.target;
const iscorrect=selectedbtn.dataset.correct==="true";
if(iscorrect){
    selectedbtn.classList.add("correct");
    
    next.style.display="block"
    score++;
    

    
}
else{
    selectedbtn.classList.add("incorrect");
    next.style.display="block"
}
Array.from(choice.children).forEach(button=>{
  if( button.dataset.correct==="true")
  {
    button.classList.add("correct")
}
button.disabled = true;
})


}




 function resetstate()
{
     next.style.display="none";
 
    while(choice.firstChild){
        choice.removeChild(choice.firstChild)
    }
    showquestion();
}


next.addEventListener("click",changequestion)

function changequestion()
{
    curquestionindex++;
   if(curquestionindex<questions.length){
    
    next.innerHTML="next";
    resetstate();
   }
   else{
    resetstate1();
   }

}

function resetstate1()
{
     next.style.display="none";
    while(choice.firstChild){
        choice.removeChild(choice.firstChild)
    }
    
    showscore();
}
function showscore(){


    q.innerHTML="";
    q.classList.add("score")

   let result=document.createElement("h2");
    result.innerHTML=`you have scored ${score} out of ${questions.length}`
    q.appendChild(result);

    const img=document.createElement("img");
    img.classList.add("imgclass")
     if(score>questions.length*80/100)
    {  img.src="pic/excellence.png"  }

   else if(score>=questions.length*50 /100)
    {
    img.src="pic/like.png"
    }
    else if(score<questions.length*50/100){
        img.src="pic/dislike.png"
 }


choice.appendChild(img)
 final.style.display="flex"
 final.style.alignItems="end"
   
 play.style.display="block"
    play.addEventListener("click",startnew)
    
}

function startnew()
{ 


    play.style.display="none"
    final.style.display="flex"
    final.style.alignItems="center"
    q.classList.remove("score")
    score=0;
    curquestionindex=0;
    next.innerHTML="next";
    resetstatenew();

}

function resetstatenew()
{   
    
     next.style.display="none";
 
    while(choice.firstChild){
        choice.removeChild(choice.firstChild)
    }
    showquestion();


    play.style.display="none";
}












