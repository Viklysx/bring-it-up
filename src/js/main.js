import Slider from './modules/slider/Slider';
import PlayVideo from './modules/PlayVideo';
import MainSlider from './modules/slider/Slider-main';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({ btns: '.next', page: '.page' });
    slider.render();
    const player = new PlayVideo('.showup .play', '.overlay');
    player.init();
});