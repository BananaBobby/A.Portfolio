import { Component } from '../lib/component';
import registry from '../lib/registry';

class ContentSlider extends Component {
    constructor(root) {
        super(root);

        this.selectors = {
            scroll: '.js-content-slider__scroll',
            item: '.js-content-slider__item',
            control: '.js-content-slider__control',
            reset: '.js-content-slider__reset',
        };

        this.state = {
            activeIndex: 0,
        };

        this.handlers = {
            'control@click': this._handleControlClick,
            'reset@click': this._handleReset,
            'window@keydown': this._handleKeyDown,
            'scroll@scroll': this._handleScroll,
        };

        this.items = this.root.querySelectorAll(this.selectors.item);
        this.scroll = this.root.querySelector(this.selectors.scroll);
    }

    _handleScroll = () => {
        const height = this.scroll.clientHeight;
        const scroll = this.scroll.scrollTop;
        const nextIndex = Math.floor(scroll / height);

        if (nextIndex !== this.state.activeIndex) {
            this.setState({ activeIndex: nextIndex });
        }
    };

    _handleControlClick = (e) => {
        e.preventDefault();
        const el = e.target;
        const direction = el.getAttribute('data-direction');
        const delta = direction === 'next' ? 1 : -1;

        this.setSlide(this.state.activeIndex + delta);
    };

    _handleReset = () => {
        this.setSlide(0);
    };

    _handleKeyDown = (e) => {
        switch (e.which) {
            case 40: {
                e.preventDefault();
                const index = Math.min(this.items.length -1, this.state.activeIndex + 1);
                this.setSlide(index);
                break;
            }

            case 38: {
                e.preventDefault();
                const index = Math.max(0, this.state.activeIndex - 1);
                this.setSlide(index);
                break;
            }

            case 27: {
                this._handleReset();
                break;
            }
        }
    };

    setSlide = (index) => {
        const item = this.items[index];

        item.scrollIntoView({ behavior: 'smooth' });
        this.setState({ activeIndex: index });
    };

    onMount() {}
}

registry.register('ContentSlider', ContentSlider);