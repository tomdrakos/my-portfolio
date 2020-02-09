// Source code licensed under Apache License 2.0. 
// Copyright © 2017 William Ngan. (https://github.com/williamngan/pts)


window.demoDescription = "Nearest point demo in Op guide.";

//// Demo code starts (anonymous function wrapper is optional) ---

// (function() {
  
//   let run = Pts.quickStart( "#pt", "#e2e6ef" );
//   let pts;

//   run( (time, ftime)  => {
//     // would be better to init this in player's `start` function, but we are lazy here.
//     if (!pts) pts = Create.distributeRandom( space.innerBound, 100 );

//     let t = space.pointer;
//     pts.sort( (a,b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq() );
    
//     form.fillOnly("#123", 1);
//     form.alpha(0.2);
//     pts.forEach( (p, i) => form.point( p, 20 - 20*i/pts.length, "circle" ) )

//     form.fillOnly("#fff").points( pts, 2, "circle" );

//     let three = pts.slice(0, 3);
//     let threeLines = three.map( (p) => [p, space.pointer] );
//     form.strokeOnly("#f05", 2).lines( threeLines );
//     form.fillOnly("#f05").points( three, 3, "circle" );
//   });

//   //// ----  

//   space.bindMouse().bindTouch().play();

// })();

setTimeout(() => {
    animateText();
}, 1000);


function animateText() {
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
//textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml11 .line',
//     scaleY: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700
//   })
//   .add({
//     targets: '.ml11 .line',
//     translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
//     easing: "easeOutExpo",
//     duration: 700,
//     delay: 100
//   }).add({
//     targets: '.ml11 .letter',
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=775',
//     delay: (el, i) => 34 * (i+1)
//   }).add({
//     targets: '.ml11',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

}



// particlesJS("particles-js", {
//   "particles": {
//       "number": {
//           "value": 20,
//           "density": {
//               "enable": true,
//               "value_area": 800
//           }
//       },
//       "color": {
//           "value": "#ffffff"
//       },
//       "shape": {
//           "type": "circle",
//           "stroke": {
//               "width": 0,
//               "color": "#000000"
//           },
//           "polygon": {
//               "nb_sides": 5
//           },
//           "image": {
//               "src": "img/github.svg",
//               "width": 100,
//               "height": 100
//           }
//       },
//       "opacity": {
//           "value": 0.07215354273894853,
//           "random": false,
//           "anim": {
//               "enable": false,
//               "speed": 1,
//               "opacity_min": 0.1,
//               "sync": false
//           }
//       },
//       "size": {
//           "value": 7.891476416322726,
//           "random": true,
//           "anim": {
//               "enable": false,
//               "speed": 40,
//               "size_min": 0.1,
//               "sync": false
//           }
//       },
//       "line_linked": {
//           "enable": true,
//           "distance": 150,
//           "color": "#ffffff",
//           "opacity": 0.4,
//           "width": 1
//       },
//       "move": {
//           "enable": true,
//           "speed": 6,
//           "direction": "none",
//           "random": false,
//           "straight": false,
//           "out_mode": "out",
//           "bounce": false,
//           "attract": {
//               "enable": false,
//               "rotateX": 600,
//               "rotateY": 1200
//           }
//       }
//   },
//   "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//           "onhover": {
//               "enable": false,
//               "mode": "grab"
//           },
//           "onclick": {
//               "enable": true,
//               "mode": "push"
//           },
//           "resize": true
//       },
//       "modes": {
//           "grab": {
//               "distance": 400,
//               "line_linked": {
//                   "opacity": 1
//               }
//           },
//           "bubble": {
//               "distance": 400,
//               "size": 40,
//               "duration": 2,
//               "opacity": 8,
//               "speed": 3
//           },
//           "repulse": {
//               "distance": 200,
//               "duration": 0.4
//           },
//           "push": {
//               "particles_nb": 4
//           },
//           "remove": {
//               "particles_nb": 2
//           }
//       }
//   },
//   "retina_detect": true
// });
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update)