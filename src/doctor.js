export default class Doctor {
  getDoctorName(searchURL) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = searchURL;
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
