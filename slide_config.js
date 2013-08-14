var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'CoffeeScript',
    subtitle: 'New age of frontend development',
    //eventInfo: {
    //  title: 'Google I/O',
    //  date: '6/x/2013'
    //},
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    //analytics: 'UA-XXXXXXXX-1',
    favIcon: 'images/coffee/coffeescript_logo.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ]
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Andrey Kucherenko',
    company: 'Senior Software Engineer<br>EPAM Systems',
    twitter: '@a_kucherenko',
    www: 'http://kucherenko.org/',
    github: 'http://github.com/kucherenko'
  }]
};

