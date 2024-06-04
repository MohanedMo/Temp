
// Do This Function when scroll
window.onscroll = () =>  {
    topButtonFun();
    progressBarFunc()
    statsUpCount()
};

// ***************** Top Button Section *******************

// Get the top button
let topButton = document.querySelector(".topBtn");

// When the user scrolls down 20px from the top of the document, show the button

function topButtonFun() {
  if (document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topButton.onclick = () => {
  document.documentElement.scrollTop = 0;
};

// ***************** Skills Section *******************

// Get Progress Bar Elements

let progs = document.querySelectorAll(".prog");
let skillSection = document.querySelector(".skills");

// To make progress bar play a once
let isProgress = false;
// Progress Bar Function 
function progressBarFunc(){
          if (!isProgress) {
    if (
      document.documentElement.scrollTop >= skillSection.offsetTop &&
      document.documentElement.scrollTop <= skillSection.offsetTop + 40
    ) {
      progs.forEach(function (p) {
        var value = parseInt(p.getAttribute("data-value"), 10);
        console.log(value)
        var currentWidth = 0;
        var increment = value / 100; // Increment value for smoothness

        function animate() {
          if (currentWidth < value) {
            currentWidth += increment;
            p.style.width = currentWidth + "%";
            p.setAttribute("data-progress", parseInt(currentWidth) + "%");
            requestAnimationFrame(animate);
          }
        }
        animate();
      });
      isProgress = true;
    }
  }
    }


// ***************** Latest Evens Section *******************

// My Birthday counting down to
let countDownDate = new Date(`Jul 22, ${new Date().getFullYear()} 23:59:59`).getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Put current Year in Latest Event
let currentYear = document.querySelector(".current-year") 
currentYear.innerHTML = new Date().getFullYear()

// ***************** Stats Section *******************

function statsUpCount() {
    var counters = document.querySelectorAll('.stats .card .state');
    let stateSection = document.querySelector(".stats");

    console.log(stateSection.offsetTop)
    console.log("mo" + document.documentElement.scrollTop)

    if (
        document.documentElement.scrollTop + 200 >= stateSection.offsetTop &&
        document.documentElement.scrollTop + 200 <= stateSection.offsetTop + 50
      ){
    counters.forEach(function(counter) {
        var updateCount = function() {
            var target = +counter.getAttribute('data-value');
            var count = +counter.innerText;
            var increment = target / 400; // Adjust the divisor to control the speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Adjust the timeout to control the speed
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}
}
