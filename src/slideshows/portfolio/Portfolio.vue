<template lang="pug">
#IntroducingEagle.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Hi, I'm Doug!
        img(src='./assets/me.jpg')
        p Maximize your browser, or turn your device on it's side!
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide.boredYet(enter='fadeIn', :mouseNavigation='false', :keyboardNavigation='false')
      h3 And Who Are You ?
      .center
        p What shall I call you ?
        input.center(v-model='username')
        p.
          {{ username }}<span v-if='username.length'>,</span> I got you.
          Tell me what you like, I'll skip the rest:

        .inline(v-for='category, name in slideCategories')
            eg-toggle(:key='name', v-model='category.show', :width='30',
                      on-text='', off-text='', on-color='#ffeeaa',
                      @change='changeMessage(category.changeMessage)')
              p.label {{ category.name }}
              eg-triggered-message(:trigger='!category.show',
                                  :duration='3', position='top right',
                                  enter='bounceInRight', leave='bounceOutRight')
                p(v-html="message(category.name)")

      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=6, enter='bounceInDown')
      h3 First, What I Do

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=2')
          img(src='./assets/icons/basic_share.svg')
          h4 STRATEGY
          p Listen and help you define clear goals

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=3')
          img(src='./assets/icons/basic_lightbulb.svg')
          h4 CREATE
          p Draw, build, and tinker, until it's right

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 4")
         img(src='./assets/icons/basic_display.svg')
         h4 BEAUTIFY
         p Make it look good on any device

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 5")
          img(src='./assets/icons/basic_paperplane.svg')
          h4 DEPLOY
          p Help put it out for the world to see

      eg-transition(enter='fadeIn' leave='fadeOut')
        eg-modal(v-if='step >= 6')
          h3 You right now:
          .center
            img(:src="preloadedImages['youRightNow']",
                :style="{height: '10em'}")

    websites(:skip="!slideCategories.themes.show", :inserted='true', firstSlide=1)

    mobileapps(:skip="!slideCategories.slideReuse.show", :inserted='true', firstSlide=1)

    opensource(:skip="!slideCategories.interactivity.show", :inserted='true', firstSlide=1)

    slide(enter='zoomIn', leave='fadeOut')
      h3 What Are You Waiting For, {{ username }} ?!?!
      p.center Think I can help ?
      .center
        img.computerkid.shadowbox(src='https://i.imgur.com/kfiMFxV.gif')
      p.center.
        Contact me today!

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'My Portfolio',
    description: 'Click this to start the magic',
    path: 'portfolio'
  },
  components: {
    'websites': require('../websites/Websites'),
    'mobileapps': require('../mobileapps/Mobileapps'),
    'opensource': require('../opensource/Opensource')
  },
  data: function () {
    return {
      username: 'Tracy',
      slideCategories: {
        themes: {
          show: true,
          name: 'Websites'
        },
        slideReuse: {
          show: true,
          name: 'Mobile Apps'
        },
        interactivity: {
          show: true,
          name: 'Open Source'
        }
      },
      preloadedImages: {
        computerKid: 'https://i.imgur.com/kfiMFxV.gif',
        youRightNow: 'https://media.giphy.com/media/l4FGx257ZwUoRUjcY/giphy.gif',
        bretagne: 'http://i.imgur.com/rYkJ6I8.jpg',
        forrestRoad: 'http://i.imgur.com/hxTMFZW.jpg',
        starrySky: 'http://i.imgur.com/yO2ivoD.jpg',
        cityBokeh: 'http://i.imgur.com/kmmHith.jpg',
        darkWoods: 'http://i.imgur.com/FL9mwpd.jpg'
      }
    }
  },
  methods: {
    message: function (name) {
      return {
        'Websites': 'You probably want to see that, ' + this.username,
        'Mobile Apps': 'Seriously ' + this.username + ' you <em>want</em> to see this.',
        'Open Source': 'Eh, you can visit me on Github then.'
      }[name]
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/src/themes/agrume/agrume';
#IntroducingEagle {
  .frontpage {
    img {
      height: 7em;
    }
    img.control-schema {
      width: 8em;
      height: 3em;
    }
  }
  .heart {
    width: 1em;
    height: 0.8em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    background-image: url('./assets/heart.svg');
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: contain;

  }

  .quarter {
    text-align: center;
    p {
      margin-top: 0;
      text-align: center;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0
    }
  }
  .boredYet {
    p {
      margin-bottom: 0.3em;
      margin-top: 1.3em;
    }
    .button {
      border: none;
    }
    .button.prev {
      float: left;
    }
    .button.next {
      float: right;
    }
  }
  img.computerkid {
    height: 6.5em;
  }

  a {
    color: black;
  }
}
</style>
