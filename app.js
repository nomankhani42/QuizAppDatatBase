  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getDatabase , set , ref , push,onChildAdded} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDrYW-fyBq28-XFMTV3fFQ4w0QNrjFdMiI",
    authDomain: "quizappwithdbfirebase.firebaseapp.com",
    databaseURL: "https://quizappwithdbfirebase-default-rtdb.firebaseio.com",
    projectId: "quizappwithdbfirebase",
    storageBucket: "quizappwithdbfirebase.appspot.com",
    messagingSenderId: "724272171243",
    appId: "1:724272171243:web:9e61f59ca77429afc456ae"
  };

  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const db=getDatabase();


  function getDataFromDataBase(){
    const reference=ref(db,'Question/');
    onChildAdded(reference,function(data){
           console.log(data.val())
           QuestionArray.push(data.val())
           renderQuestion();

    })
  }

  getDataFromDataBase()
















var QuestionArray = [
  
];


var Question = document.getElementById('Question');
var curretQuestion = document.getElementById('curretQuestion');
var TotalQuestion = document.getElementById('TotalQuestion');
var option_row = document.getElementById('option-row');

var index = 0;
window.renderQuestion=function() {
    option_row.innerHTML = '';
    curretQuestion.innerHTML = index + 1;
    TotalQuestion.innerHTML = QuestionArray.length;
    Question.innerHTML = QuestionArray[index].questionD;

    for (var i = 0; i < QuestionArray[index].optionsD.length; i++) {
        option_row.innerHTML += `<div class="col-md-5 m-2 p-2 text-center">
         <button onclick="checkQuestion('${QuestionArray[index].optionsD[i]}','${QuestionArray[index].correctoptionD}') ;" class="btn btn-primary">${QuestionArray[index].optionsD[i]}</button>
         </div>`;
    }

}
var score = 0;
window.checkQuestion= function(a, b) {
    if (a == b) {
        score += 10;
        console.log(score);
    }
    NextQuestion();
}
window.NextQuestion=function() {
    index++;
    if (index == QuestionArray.length) {
        result();
    }
    renderQuestion();
}


window.result =function (){
   var res=document.getElementById('res')
   res.innerHTML=`<h1 class="mt-5 py-5 text-center">Your Score is ${score}</h1>`
}