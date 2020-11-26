const mix = require('laravel-mix');

mix.styles([
    'assets/css/main.css'
],'build/css/main.css');

mix.styles([
    'assets/css/noscript.css'
],'build/css/noscript.css')

mix.scripts([
    'assets/js/jquery.min.js',
    'assets/js/browser.min.js',
    'assets/js/breakpoints.min.js',
    'assets/js/util.js',
    'assets/js/main.js',
], 'build/js/script.js')
