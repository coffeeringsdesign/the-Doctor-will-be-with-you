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
      }
      $("#doctorNameDisplay").text(`Dr. ${body.data[0].profile.first_name} ${body.data[0].profile.last_name}
      Accepting New Patients: ${body.data[0].practices[0].accepts_new_patients}
      Address: ${body.data[0].practices[0].visit_address.street},  ${body.data[0].practices[0].visit_address.street2}, ${body.data[0].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state}, ${body.data[0].practices[0].visit_address.zip}
      Phone: ${body.data[0].practices[0].phones[0].number},
      ${body.data[0].practices[0].phones[0].type},
      Biography: ${body.data[0].profile.bio}`);





    }, function(error) {
      $(".errorDisplay").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
