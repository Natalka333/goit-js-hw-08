import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player('iframe');

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);
console.log('timeupdate');

// player.on('timeupdate', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
