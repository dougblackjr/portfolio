<template lang='pug'>
#ThemesSlideshow
  .eg-slideshow

    slide.local-eg-theme-dougblackjr(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInDown')
        h3 Sites I've Done
      a(class='site-link' href='http://dougblackjr.com' target='_blank') dougblackjr.com

    slide.local-eg-theme-aces(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInUp')
        h3 Created in Grav, custom image gallery
      a(class='site-link' href='http://aceshomeimprovementllc.com' target='_blank') aceshomeimprovementllc.com

    slide.local-eg-theme-ngu(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInLeft')
        h3 Custom video bg<br />mobile first design
      a(class='site-link' href='http://nevergiveuppa.com' target='_blank') nevergiveuppa.com

    slide.local-eg-theme-joes(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInUp')
        h3 Custom logo design, landing page
      a(class='site-link' href='http://joeritchiegeneralcontractor.net' target='_blank') joeritchiegeneralcontractor.net

    slide.local-eg-theme-evangel(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInLeft')
        h3 Wordpress site<br />custom theming
      a(class='site-link' href='http://theevangelhope.com' target='_blank') theevangelhope.com

    slide.local-eg-theme-city(enter='fadeIn' leave='none')
      eg-transition(enter='flipInX')
        eg-code-block(lang='html', class='code-web').
          MOBILE FIRST DESIGN
          55% of online shopping is done on mobile devices
          It's more than essential...
          IT'S EXPECTED!
          I develop all sites with mobile in mind
      eg-phone-block
        eg-transition(enter='flipInY')
          img(src='./assets/mobile1.png' class='iphone-image')
        eg-transition(enter='flipInY')
          img(src='./assets/mobile2.png' class='iphone-image')
        eg-transition(enter='flipInY')
          img(src='./assets/mobile4.png' class='iphone-image')

</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Websites',
    description: 'All things internet !',
    path: 'websites'
  }
}
</script>

<style lang='scss'>
#ThemesSlideshow {
  // STYLES THAT ARE GLOBAL FOR THIS PARTICULAR SLIDESHOW
  h3 {
    font-weight: normal;
    text-transform: uppercase;
  }
  .eg-slide-content {
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
  .eg-phone-block {
    text-align: center;
  }
  .iphone-image {
    max-width: 30%;
    padding: 0.5rem;
  }
  .site-link {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1rem;
    color: black;
    background: white;
  }

  // LOCAL THEMES FOR SLIDES

  .local-eg-theme-joes {
    @import url(https://fonts.googleapis.com/css?family=Comfortaa);
    background-color: #11a9e2;
    background-image: url(./assets/joe.png);
    background-position: center;
    background-size: cover;
    color: #fff;
    h1 {
      font-weight: bold;
      font-size: 3em;
    }
    h3, p {
      font-family: "Comfortaa", Helvetica, Arial, sans-serif;
      margin-top: 0;
      position: absolute;
      top:5%;
      left:5%;
      /*transform: translateX(-50%) translateY(-50%);*/
      width: 20%;

      text-shadow: 0 0.01em 0 #ccc,
                   0 0.02em 0 #c9c9c9,
                   0 0.03em 0 #bbb,
                   0 0.04em 0 #b9b9b9,
                   0 0.05em 0 #aaa,
                   0 0.06em 0.01em rgba(0,0,0,.1),
                   0 0 0.05em rgba(0,0,0,.1),
                   0 0.01em 0.03em rgba(0,0,0,.3),
                   0 0.03em 0.05em rgba(0,0,0,.2),
                   0 0.05em 0.1em rgba(0,0,0,.25),
                   0 0.1em 0.1em rgba(0,0,0,.2),
                   0 0.2em 0.2em rgba(0,0,0,.15);
    }
  }

  .local-eg-theme-dougblackjr {
    @import url(https://fonts.googleapis.com/css?family=Pompiere);
    h3 {
      // letter-spacing: 1px;
      font-family: 'Pompiere';
      text-transform: none;
      font-size: 3em;
      color: rgba(255, 255, 255, .6);
    }
    background-image: url(./assets/dougblackjr.png);
    background-position: center;
    background-size: cover;
  }

  .local-eg-theme-ngu {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      text-align: left;
      color: rgba(255, 255, 255, .9);
    }
    background-image: url(./assets/ngu.png);
    background-position: center;
    background-size: cover;
  }

  .local-eg-theme-evangel {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      color: rgba(255, 255, 255, .9);
      background: black;
    }
    background-image: url(./assets/evangel.png);
    background-position: center;
    background-size: cover;
  }

  .local-eg-theme-aces {
    @import url(https://fonts.googleapis.com/css?family=Cabin);
    h3 {
      position: absolute;
      background: white;
      font-family: 'Cabin';
      color: rgba(0, 0, 0, .8);
      font-size: 1.5em;
      top: 28%;
      right: 10%;
      width: 20%;
      float: left;
    }
    background-image: url(./assets/aces.png);
    background-position: center;
    background-size: cover;
  }

  .local-eg-theme-city {
    @import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
    @import './assets/monokai';
    .code-web {
      margin-top: 10%;
    }
    .code-box {
      box-shadow: 0 0 0.25em 0.25em #ddd
    }
    background-image: url(http://i.imgur.com/kmmHith.jpg);
    background-position: center;
    background-size: cover;
  }
}

</style>
