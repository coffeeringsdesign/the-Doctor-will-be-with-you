import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  // $("#userSearch").submit(function() {
  //   const symptom = $("#medicalIssueInput").val();
  //   $("#medicalIssueInput").val("");
  $("#userSearch").submit(function() {
    const doctorName = $("#doctorNameInput").val();
    $("#doctorNameInput").val("");

    const promise = new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=37.773%2C-122.413%2C100&user_location=45.521586%2C-122.673244&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      $("#doctorInfoBreakdown").append(`This Doctor matches your search: ${body.....}`);
    }, function(error) {
      $(".errorDisplay").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
