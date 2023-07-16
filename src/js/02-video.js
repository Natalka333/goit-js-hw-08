import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.ready().then(() => {
  const onTimeUpdate = throttle(data => {
    const currentTime = data.seconds;
    localStorage.setItem(VIDEO_KEY, currentTime);
  }, 1000);

  player.on('timeupdate', onTimeUpdate);

  const saveTime = localStorage.getItem(VIDEO_KEY);
  if (saveTime) {
    const currentTime = parseFloat(saveTime);
    player.setCurrentTime(currentTime).catch(error => {
      console.error('Failed to set current time:', error);
    });
  }
});
