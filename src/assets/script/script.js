let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add("playing");
  } catch (err) {
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove("playing");
  }
}
activeMenu();
function activeMenu() {
  let navLink = document.querySelectorAll('.nav__link');
  
  navLink.forEach(item => {
    let navText = document.querySelector('.nav__text');
    item.addEventListener('click', function () {
      item.classList.toggle('active');
    })
  }) 

}



