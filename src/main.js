import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor from './doctor.js';

$(document).ready(function() {
  // $("#userSearch").submit(function() {
  //   const symptom = $("#medicalIssueInput").val();
  //   $("#medicalIssueInput").val("");
  $("#userSearch").submit(function() {
    event.preventDefault();


    const doctorName = $("#doctorNameInput").val();
    $("#doctorNameInput").val("");

    const doctorResult = new Doctor();

    const promise = doctorResult.getDoctorName(doctorName);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      if (body.length === 0) {
        $("#errorDisplay").text("We are very sorry but there are no Doctors that meets that criteria");
      } else {
        for(let i=0; i <= body.data.length; i++){

          let doctorName = `"Dr. ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`;
          let city = body.data[i].practices[0].visit_address.city;
          let state = body.data[i].practices[0].visit_address.state;
          let zip = body.data[i].practices[0].visit_address.zip;
          let street;
          let street2;
          let phone;
          let acceptsNewPatients;
          let website;
          let biography;

          if (body.data[i].practices[0].visit_address.street === undefined) {
            street = "";
          } else {
            street = body.data[i].practices[0].visit_address.street;
          }

          if (body.data[i].practices[0].visit_address.street2 === undefined) {
            street2 = "";
          } else {
            street2 = body.data[i].practices[0].visit_address.street2;
          }

          if (body.data[i].practices[0].accepts_new_patients === true) {
            acceptsNewPatients = "Yes";
          } else if (body.data[i].practices[0].accepts_new_patients === false) {
            acceptsNewPatients = "No";
          } else {
            acceptsNewPatients = "Unknown";
          }

          if (body.data[i].practices[0].phones[0].number === undefined) {
            phone = "currently unavailable";
          } else {
            phone = body.data[i].practices[0].phones[0].number;
          }

          if (body.data[i].practices[0].website === undefined) {
            website = "currently unavailable";
          } else {
            website = body.data[i].practices[0].website;
          }

          if (body.data[i].profile.bio === undefined) {
            biography = "currently unavailable";
          } else {
            biography = body.data[i].profile.bio;
            console.log(biography, website, phone, acceptsNewPatients, street, street2, city, state, zip, doctorName);
          }
        }
      }

    }, function(error) {
      $(".errorDisplay").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
