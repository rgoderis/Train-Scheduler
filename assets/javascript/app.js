  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWD1SAsbOxri31S5xHHHE-GGcRPtZMJsw",
    authDomain: "trainscheduler-2e567.firebaseapp.com",
    databaseURL: "https://trainscheduler-2e567.firebaseio.com",
    projectId: "trainscheduler-2e567",
    storageBucket: "",
    messagingSenderId: "322959206384",
    appId: "1:322959206384:web:6aa67b4086335381a5df35"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   create var to reference database
// var database = firebase.database();

// variables for input info
var trainName = "";
var trainDestination = "";
var trainTime = "";
var trainFrequency = "";


$(document).ready(function(){


// set click listener to #train-submit
$("#train-submit").on("click", function(){
    alert("You clicked the button")
});

// save train information from input 

// push saved train information to database

// retrieve train information from database to display in train display div

});