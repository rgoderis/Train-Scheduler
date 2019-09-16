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
  firebase.initializeApp(firebaseConfig);

//   create var to reference database
var database = firebase.database();

// variables for input info
var trainName = "";
var trainDestination = "";
var trainTime = "";
var trainFrequency = "";

$(document).ready(function(){

// set click listener to #train-submit
$("#train-submit").on("click", function(event){
    // prevent page from refreshing
    event.preventDefault();

    // save train information from input
    trainName = $("#train-name").val().trim();
    trainDestination = $("#train-destination").val().trim();
    trainTime = $("#train-time").val().trim();
    trainFrequency = $("#train-frequency").val().trim();
    
    console.log(trainName)
    console.log(trainDestination)
    console.log(trainTime)
    console.log(trainFrequency)
  // initial database info
    database.ref().set({
      trainName: trainName,
      trainDestination: trainDestination,
      trainTime: trainTime,
      trainFrequency: trainFrequency
    })
});

// push saved train information to database

// retrieve train information from database to display in train display div

});