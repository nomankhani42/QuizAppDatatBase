  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getDatabase , set , ref , push} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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


  var Question=document.getElementById('Question');
  var Option=document.getElementById('Option');
  var option_parent=document.getElementById('option_parent');
  var correctoptionelem=document.getElementById('correctoption');
  var correctoption;

  var optionArray=[];



  window.render =function(){
    option_parent.innerHTML='';
    for(var i=0;i<optionArray.length;i++){
      option_parent.innerHTML+=`<li class="mt-2" onclick="correctAnswer('${optionArray[i]}');">${optionArray[i]}</li>`;
    }
  }
  window.addOption =function(){


    optionArray.push(Option.value);
    console.log(optionArray)
    Option.value='';
    render()
  }

  window.correctAnswer =function(a){
  correctoption =a;

  correctoptionelem.innerHTML=correctoption;
  
  
  }



  window.submitQuestion =function(){


    var QuestionObj={
      questionD:Question.value,
      optionsD:optionArray,
      correctoptionD:correctoption
    }

            QuestionObj.id=push(ref(db,'questions')).key
          const reference=ref(db,`Question/${QuestionObj.id }`);
          set(reference,QuestionObj)

    console.log(QuestionObj);
  }