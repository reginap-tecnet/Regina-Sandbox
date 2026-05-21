let mix = require('laravel-mix');
require('laravel-mix-purgecss');
mix.disableNotifications();

mix.sass('src/sass/sections/header.scss','assets/header.css')
    .js('src/js/components/collection-categories.js','assets/collection-categories.js')