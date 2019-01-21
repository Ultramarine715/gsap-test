const main = document.querySelector('.main-js');

const maxWidthAside = main.offsetWidth * 0.4;
const minWidthMain = main.offsetWidth * 0.9;

const tl = new TimelineMax();

function startTween() {
  tl.to('.headline-js', 1.5, {
    opacity: 1,
    y: 100
  })
  .to('.aside-js', 2, {
    width: maxWidthAside,
    ease:Power3.easeInOut
  }, "myFirstCount")
  .from('.liked-btn-js', .5, {
    scale: 0,
    ease:Back.easeOut
  })
  .from('.liked-text-js', .5, {
    scale: 0
  }, "mySecondCount")
  .from('.share-js', .5, {
    scale: 0
  }, "mySecondCount+=0")
  .staggerFrom('.link-js', .8, {
    opacity: 0,
    y: '-=20'
  }, 0.2)
  // .staggerTo('.link-js', .8, {
  //   opacity: 0,
  //   y: '-=20',
  //   delay: 1
  // }, 0.2)
  // .to('.liked-text-js', 0.5, {
  //   scale: 0
  // }, "myThirdCount")
  // .to('.share-js', .5, {
  //   scale: 0
  // }, "myThirdCount+=0")
  // .to('.liked-btn-js', 0.5, {
  //   scale: 0,
  //   ease:Back.easeIn
  // })
  // .to('.aside-js', 2, {
  //   width: 150,
  //   ease:Power3.easeInOut
  // })
}


document.addEventListener("DOMContentLoaded", function() {

startTween();

  setTimeout(function() {
    tl.reverse();
  }, 7000)
});
