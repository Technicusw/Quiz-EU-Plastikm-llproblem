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
