import barba from '@barba/core' ;
import mojs from "@mojs/core";




barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave() {
          const spinner = new mojs.Shape({
            parent:           '#spinner',
            shape:            'circle',
            stroke:           '#FC46AD',
            strokeDasharray:  '125, 125',
            strokeDashoffset: {'0': '-125'},
            strokeWidth:      4,
            fill:             'none',
            left:             '50%',
            top:              '50%',
            rotate:            {'-90': '270'},
            radius:           20,
            isShowStart:      true,
            duration:         2000,
            easing:           'back.in',
          })
          });
        },
        enter() {
          // create your amazing enter animation here
        }
      }]
})


.then({
  rotate:            {'-90': '270'},
  strokeDashoffset: {'-125': '-250'},
  duration:         3000,
  easing:           'cubic.out',
});

spinner.play();

const button = document.querySelector(".start")
button.addEventListener("click",start)
function start(){

}
var transition = Barba.BaseTransition.extend({
  start: function() {
      // Animationselement erstellen
      this.animationElement = document.createElement('div');
      this.animationElement.classList.add('page-transition');
      document.body.appendChild(this.animationElement);

      // Animation starten
      this.pageTransition();
  },

  pageTransition: function() {
      var tl = new mojs.Timeline();

      // Animationseffekte definieren
      var burst = new mojs.Burst({
          parent: this.animationElement,
          duration: 1000,
          shape: 'circle',
          fill: 'white',
          x: '50%',
          y: '50%',
          opacity: { 1: 0 },
          radius: { 0: 200 },
      });

      tl.add(burst);

      // Animation beenden und zur nächsten Seite wechseln
      tl.on('complete', function() {
          this.animationElement.parentNode.removeChild(this.animationElement);
          this.done();
      }.bind(this));

      tl.play();
  },
});

// Barba.js initialisieren
Barba.Pjax.start();
Barba.Prefetch.init();

// Seitenwechsel-Transition hinzufügen
Barba.Pjax.getTransition = function() {
  return transition;
};