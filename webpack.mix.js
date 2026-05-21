let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.sass('src/sass/sections/product-reels-slideshow.scss','assets/product-reels-slideshow.css')
    .js('src/js/components/collection-categories.js','assets/collection-categories.js')