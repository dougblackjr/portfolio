<template lang='pug'>
#ThemesSlideshow
  .eg-slideshow

    slide.local-eg-theme-forest-road(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInLeft')
        h3 Mobile Apps

    slide.local-eg-theme-artic(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInUp')
        h3 Apps created with Ionic and Angular<br />for iOS, Android, Kindle, and Windows Phone (RIP)

    slide.local-eg-theme-na(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='zoomIn')
      a(class='site-link' href="http://nurseryalert.net") nurseryalert.net

    slide.local-eg-theme-artica(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInUp')
        img(src='./assets/potomac.jpeg')
      h1 Social networking app<br/> with admin backend
      a(class='site-link' href='https://itunes.apple.com/us/app/potomac-prayer-network/id768702417?mt=8') https://itunes.apple.com/us/app/potomac-prayer-network/id768702417?mt=8

</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Mobile Apps',
    description: 'Phones and tablets !',
    path: 'mobileapps'
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

  .site-link {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1rem;
    color: black;
    background: white;
  }

  // LOCAL THEMES FOR SLIDES

  .local-eg-theme-artic {
    background-color: #11a9e2;
    background-image: none;
    color: #fff;
    h1 {
      font-weight: bold;
      font-size: 3em;
    }
    h1, p {
      font-family: "Comfortaa", Helvetica, Arial, sans-serif;
      margin-top: 0;
      position: absolute;
      top:50%;
      left:50%;
      transform: translateX(-50%) translateY(-50%);
      width: 80%;

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

  .local-eg-theme-artica {
    background-color: #11a9e2;
    background-image: none;
    color: #fff;
    h1 {
      font-weight: bold;
      font-size: 3em;
    }
    h1, p {
      font-family: "Comfortaa", Helvetica, Arial, sans-serif;
      margin-top: 0;
      position: absolute;
      top:50%;
      left:50%;
      transform: translateX(-50%) translateY(-50%);
      width: 80%;

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

  .local-eg-theme-forest-road {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      margin-top: 50%;
      text-align: left;
      color: rgba(255, 255, 255, .9);
    }
    background-image: url(http://i.imgur.com/hxTMFZW.jpg);
    background-position: center;
    background-size: cover;

  }

  .local-eg-theme-city {
    @import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
    @import './assets/monokai';
    .eg-code-block {
      margin-top: 10%;
    }
    .code-box {
      box-shadow: 0 0 0.25em 0.25em #ddd
    }
    background-image: url(http://i.imgur.com/kmmHith.jpg);
    background-position: center;
    background-size: cover;
  }

  .local-eg-theme-na {
    @import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
    @import './assets/monokai';
    .eg-code-block {
      margin-top: 10%;
    }
    .code-box {
      box-shadow: 0 0 0.25em 0.25em #ddd
    }
    background-image: url(./assets/na.png);
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
  }

}

</style>
