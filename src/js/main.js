import Slider from './modules/slider/Slider';
import PlayVideo from './modules/playVideo';
import MainSlider from './modules/slider/Slider-main';
import MiniSlider from './modules/slider/Slider-mini';
import Difference from './modules/difference';
import Form from './modules/form';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({ btns: '.next', container: '.page' });
    slider.render();
    const modulePageSlider = new MainSlider({ container: '.moduleapp', btns: '.next' });
    modulePageSlider.render();
    new PlayVideo('.showup .play', '.overlay').init();
    new PlayVideo('.module__video-item .play', '.overlay').init();
    const showUp = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUp.init();
    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
    });
    modulesSlider.init();
    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    })
    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();
    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});