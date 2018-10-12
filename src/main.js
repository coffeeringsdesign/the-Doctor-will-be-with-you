import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor from './doctor.js';

$(document).ready(function() {
  // $("#userSearch").submit(function() {
  //   const symptom = $("#medicalIssueInput").val();
  //   $("#medicalIssueInput").val("");
  $("#userSearch").submit(function() {
    const doctorName = $("#doctorNameInput").val();
    $("#doctorNameInput").val("");
    console.log(doctorName);

    let doctorResult = new Doctor();
    let promise = doctorResult.getDoctorName(doctorName);

    promise.then(function(response) {
      const body = JSON.parse(response);
      $("#doctorInfoBreakdown").append(`This Doctor matches your search: ${body}`);
    }, function(error) {
      $(".errorDisplay").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
