let a = document.querySelector(".cross-btn");
let b = document.querySelector(".container4");
let c = document.querySelector(".container3");
let mybutton = document.querySelector(".navigation");
let chat = document.querySelector(".chat-txt");
let message = document.querySelector(".message");
let modal = document.getElementById('open-modal')
let myModal = document.querySelector('.modal')
let closeModal = document.querySelector('.close-btn')


// modal.addEventListener('click',()=>{
//   setTimeout(() => {
//     myModal.style.opacity = 1
//   }, 200);
//   myModal.style.display = "block"
// })

// closeModal.addEventListener('click',()=>{
//   myModal.style.opacity = 0
//   setTimeout(() => {
//     myModal.style.display = "none"
//   }, 200);

// })

c.addEventListener("click", () => {
  if (window.innerWidth <= 956) {
    b.style.visibility = "visible";
    b.style.display = "block";
    setTimeout(() => {
      b.style.opacity = "1";
    }, 10);
  }
});

a.addEventListener("click", () => {
  if (window.innerWidth <= 956) {
    // b.style.visibility = "hidden";
    b.style.opacity = "0";
    setTimeout(() => {
      b.style.display = "none";
    }, 200);
  
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 956) {
    b.style.display = "none";
  } else {
    b.style.display = "block";
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function whatsapp() {
  setTimeout(() => {
    let url1 = "https://wa.me/+919977228802?text=" + "Message : " + "%0a";
    window.open(url1, "_blank").focus();
  }, 300);
}

chat.addEventListener("click", whatsapp);
message.addEventListener("click", whatsapp);

// document.addEventListener('DOMContentLoaded', function () {
//   var modal = document.querySelector('.modal');
//   var closeButton = modal.querySelector('.close-btn img');
//   var videos = modal.querySelectorAll('.videos iframe');

//   // Event listener for the close button
//   closeButton.addEventListener('click', function () {
//     // Pause the videos when the modal is closed
//     pauseVideos();
//     // Close the modal
//     setTimeout(() => {
//       myModal.style.display = "none"
//     }, 200);
//   });

//   function pauseVideos() {
//     videos.forEach(function (video) {
//       // Get the video's src attribute
//       var videoSrc = video.src;
//       // Update the src attribute to pause the video
//       video.src = videoSrc;
//     });
//   }
// });
