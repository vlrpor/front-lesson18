function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

    
  if(hh > 12){
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  const t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();


function syncFn() {
  console.log("start fn");
  for (let i = 0; i < 10; i++) {
    // do nothing
    console.log("for");
  }
  console.log("end fn");
}

function asyncFn() {
  console.log("start fn");
  // setTimeout(() => {
  //  for (let i = 0; i < 10; i++) {
  //    // do nothing
  //    console.log("for");
  //  }
  // }, 0);

  setInterval(() => {
    // for (let i = 0; i < 10; i++) {
    //  // do nothing
    //  console.log("for");
    // }
    console.log("for");
  }, 2000);

  console.log("end fn");
}

const startTimeout = document.querySelector(".startTimeout");
const stopTimeout = document.querySelector(".stopTimeout");
const startInterval = document.querySelector(".startInterval");
const stopInterval = document.querySelector(".stopInterval");

let timeoutId = null;
let intervalId = null;

startTimeout.addEventListener("click", () => {
  console.log("click");
  timeoutId = setTimeout(() => {
    console.log("timeout");
  }, 5000);
});

stopTimeout.addEventListener("click", () => {
  console.log("stop timeout");
  clearTimeout(timeoutId);
});

startInterval.addEventListener("click", () => {
  console.log("start interval");
  intervalId = setInterval(() => {
    console.log("interval");
  }, 5000);
});

stopInterval.addEventListener("click", () => {
  console.log("stop interval");
  clearInterval(intervalId);
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slidesWrapper = document.querySelector(".slides-wrapper");

const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");

let currentSlide = 0;

function loadSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  loadSlides();
}

function goToPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide -= 1;
  }
  loadSlides();
}

loadSlides();

// remove this code
nextBtn.addEventListener("click", goToNextSlide);
prevBtn.addEventListener("click", goToPrevSlide);

let sliderIntervalId = null;

// sliderIntervalId = setInterval(goToNextSlide, 2000);

stopAutoSlides.addEventListener("click", () => {
  clearInterval(sliderIntervalId);
});

document.addEventListener("keyup", (e) => {
  console.log(e, e.code, e.key);

  if (e.code === "ArrowRight") {
    goToNextSlide();
    console.log(currentSlide);
  }

  if (e.code === "ArrowLeft") {
    goToPrevSlide();
  }
});

// add this
slidesWrapper.addEventListener("mouseenter", () => {
  // console.log("mouse eneter");
});

slidesWrapper.addEventListener("mouseleave", () => {
  // console.log("mouse leave");
});