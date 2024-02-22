import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Content/>
  </React.StrictMode>
);

function Header(){
  return(
    <div id="headerdiv">
      <h1 id="header">Quiz....</h1>
    </div>
  );
}
function Content(){

  
function displayScore(event){
  event.preventDefault();
  let a1=event.target.q1.value;
  let a2=event.target.q2.value;
  let a3=event.target.q3.value;
  let a4=event.target.q4.value;
  let a5=event.target.q5.value;
  let x=0;
  if(a1=='OOPs'){
      x++;
  }
  if(a2=='Strcutured Language')
  {
    x++;
  }
  if(a3=='8'){
    x++;
  }
  if(a4=='False'){
    x++;
  }
  if(a5=='Yes')
  {
    x++;
  }
  // alert(x)
  document.getElementById("displayScore").innerHTML="Total Score is : "+x;
}


  return(
    <div>
    <form onSubmit={displayScore}>
   
    <Question
    ques="What is java"
    op1="OOPs"
    op2="Strcutured Language"
    name="q1"/>

    <Question
    ques="What is Sql"
    op1="OOPs"
    op2="Strcutured Language"
    name="q2"/>
    <Question
    ques="How many primitive data types are there"
    op1="9"
    op2="8"
    name="q3"/>
    <Question
    ques="Is java dynamically typed language"
    op1="True"
    op2="False"
    name="q4"/>
    <Question
    ques="Does java support multithreading?"
    op1="Yes"
    op2="No"
    name="q5"/>
   
    <br/>
    <br/>
    <input type="submit"></input>
    <p id="displayScore"></p>
    </form>
    </div>
  )
}
function Question(props){
  return (
    <div>
    <h3 id="question">{props.ques}</h3>
    <input class="input"type="radio" name={props.name} value={props.op1} /><label>{props.op1}</label>
    <br/>
    <input class="input" type="radio" name={props.name} value={props.op2}/><label>{props.op2}</label>
    </div>
  );
}

