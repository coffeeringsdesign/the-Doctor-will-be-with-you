import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor from './doctor.js';
import './sass/styles.scss';


$(document).ready(function() {
  $("#userSearch").submit(function() {
    $("#doctors").show();
    event.preventDefault();
    const doctorName = $("#doctorNameInput").val();
    $("#doctorNameInput").val("");

    const symptom = $("#symptomInput").val();
    $("#symptomInput").val("");
    let searchURL;

    if (doctorName === "") {
      searchURL = `https://api.betterdoctor.com/2016-03-01/doctors?&user_location=45.521586, -122.673244&limit=100&user_key=${process.env.exports.apiKey}&query=${symptom}`;
    } else if (symptom === "") {
      searchURL = `https://api.betterdoctor.com/2016-03-01/doctors?&user_location=45.521586, -122.673244&limit=100&user_key=${process.env.exports.apiKey}&name=${doctorName}`;
    }

    const doctorResult = new Doctor();

    const promise = doctorResult.getDoctorName(searchURL);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if (body.data.length === 0) {
        $("errorDisplay").text("");
        $("errorDisplay").text("We are very sorry but there are no Doctors that meets that criteria");
      } else {
        for(let i=0; i <= body.data.length; i++){

          let doctorName = `Dr. ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`;
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
          }


          $("#doctorCardDisplay").append(`<div class='card showDoctor' style='width: 18rem;' 'id=doctor${i}'>
          <div class='card-body'>
          <h4 class='card-title'>${doctorName}<h4>
          <h5>Address:</h5>
          <h6>${street}</h6>
          <h6>${street2}</h6>
          <h6>${city}, ${state} ${zip}</h6>
          <h6 class="break">Phone: ${phone}</h6>
          <h6 class="break">Is accepting new patients: ${acceptsNewPatients}</h6>
          <h6 class="break">Website: ${website}</h6>
          <button id="showBiography">Biography</button>
          <div id="biography">
          <p>${biography}</p>
          </div>
          </div>
          </div>
          `);

          $("#showBiography").click(function() {
            $("#biography").show();
          });
        }
      }

    }, function(error) {
      $(".errorDisplay").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
