export default class Doctor {
  getDoctorName(doctorName) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&user_location=45.521586, -122.673244&user_key=0212a1b5a6f10681f89dbecd1f758cc3`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }

      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
