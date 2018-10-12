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
        for(let i = 0, i <= body.data.length; i++){

          let city = body.data[i].practices[0].visit_address.city;
          let state = body.data[i].practices[0].visit_address.state;
          let zip = body.data[i].practices[0].visit_address.zip;

          if (body.data[i].practices[0].visit_address.street === undefined) {
            let street = "";
          } else {
            let street = body.data[i].practices[0].visit_address.street;
          }

          if (body.data[i].practices[0].visit_address.street2 === undefined) {
            let street2 = "";
          } else {
            let street2 = body.data[i].practices[0].visit_address.street2;
          }

          if (body.data[i].practices[0].visit_address.street2 === undefined) {
            let street2 = "";
          } else {
            let street2 = body.data[i].practices[0].visit_address.street2;
          }

          if (body.data[i].practices[0].accepts_new_patients === true) {
            let acceptsNewPatients = "Yes";
          } else if (body.data[i].practices[0].accepts_new_patients === false) {
            let acceptsNewPatients = "No";
          } else {
            let acceptsNewPatients = "Unknown";
          }
        }
      }
      $("#doctorNameDisplay").text(`Dr. ${body.data[0].profile.first_name} ${body.data[0].profile.last_name}
      Accepting New Patients: ${body.data[0].practices[0].accepts_new_patients}


      Phone: ${body.data[0].practices[0].phones[0].number},
      Website: ${body.data[0].practices[0].website}
      Biography: ${body.data[0].profile.bio}`);






    }, function(error) {
      $(".errorDisplay").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
