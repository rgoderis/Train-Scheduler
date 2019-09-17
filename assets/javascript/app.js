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
database.ref().on("child_added", function(snap){
  console.log(snap.val());

  var tName = snap.val().name;
  var tDestination = snap.val().destination;
  var tFirstTrain = snap.val().firstTrain;
  var tFrequency = snap.val().frequency;

  // calculate next arrival
  // make sure first train time is sanitized as HH:mm
  var firstTrainConverted = moment(tFirstTrain, "HH:mm").subtract(1, "years");
  console.log(firstTrainConverted);

  // get the current time
  var currentTime = moment();
  console.log("Current time: " + moment(currentTime).format("hh:mm"));

  // diffence between current time and first arrival
  var diff = moment().diff(moment(firstTrainConverted), "minutes");
  console.log("Difference in time: " + diff);

  // Time apart (remainder)
  var tRemainder = diff % tFrequency;
  console.log(tRemainder);

  // minutes until next train
  var minTillTrain = tFrequency - tRemainder;
  console.log("minutes until next train: " + minTillTrain);

  // calculate next train arrival
  var nextTrain = moment().add(minTillTrain, "minutes");
  console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"))




  // display results inside table
  var newRow = $("<tr>").append(
    $("<td>").text(tName),
    $("<td>").text(tDestination),
    $("<td>").text(tFrequency),
    $("<td>").text(moment(nextTrain).format("hh:mm")),
    $("<td>").text(minTillTrain),
  );
  $("#train-body").append(newRow)

});

});