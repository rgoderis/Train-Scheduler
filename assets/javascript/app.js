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
var trainName;
var trainDestination;
var firstTrain;
var trainFrequency;
var trainNextArrival;
var trainMinutesAway;


$(document).ready(function(){

// set click listener to #train-submit
$("#train-submit").on("click", function(event){
    // prevent page from refreshing
    event.preventDefault();

    // save train information from input
    trainName = $("#train-name").val().trim();
    trainDestination = $("#train-destination").val().trim();
    firstTrain = $("#train-time").val().trim();
    trainFrequency = $("#train-frequency").val().trim();
    
  // initial database info  
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firstTrain: firstTrain,
      frequency: trainFrequency
    }

  // push newTrain information to database
    database.ref().push(newTrain)

    // log the newTrain info
    console.log(newTrain.name)
    console.log(newTrain.destination)
    console.log(newTrain.firstTrain)
    console.log(newTrain.frequency)

    // clear text boxes
    $("#train-name").val("")
    $("#train-destination").val("")
    $("#train-time").val("")
    $("#train-frequency").val("")
});



// retrieve train information from database to display in train display div


});