import Slider from './modules/Slider';
import PlayVideo from './modules/PlayVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();
    const player = new PlayVideo('.showup .play', '.overlay');
    player.init();
});