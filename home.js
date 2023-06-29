//
function updateDateTime() {
  var currentDate = new Date();
  var dateElement = document.getElementById("date");
  var timeElement = document.getElementById("time");

// Format the date
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString(undefined, options);

// Format the time
  var formattedTime = currentDate.toLocaleTimeString();

// Update the HTML elements
  dateElement.innerHTML = formattedDate;
  timeElement.innerHTML = formattedTime;
  }

// Update the date and time every second
  setInterval(updateDateTime, 1000);

