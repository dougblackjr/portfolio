<template lang='pug'>
.frontpage
  .content
    h1
      span.grey Hi, I'm 
      span Doug!
    h2(class='no-margin') Full Stack Web Developer

    p(class='white').
      I make machines serve their human masters, typically with web and mobile applications!
      Skilled in: PHP, ExpressionEngine, Laravel, Wordpress, Vue.js, Javascript, Ionic/Angular, and various others.
      If you have a problem, I can solve it.

    .thumbnails
      .box-card(v-for='slideshow in slideshows')
        router-link(:to='slideshow.infos.path' @click.native="click")
          .embedded-slideshow-container
            component(:is="slideshow", :embedded='true',
                      :keyboardNavigation='false',
                      :mouseNavigation='false')
        .caption
          h3 {{slideshow.infos.title}}
          p.thumbnail-description {{slideshow.infos.description}}

    h2 <a href="http://dougblackjr.com/#contact">Contact me to get started!</a>
</template>

<script>
import slideshows from 'slideshows/slideshows'

export default {
  data: function () {
    return {
      slideshows: slideshows.list
    }
  },
  mounted: function () {
    console.log(this.slideshows)
    document.currentSlide = {}
  },
  methods: {
    click: function (evt) {
      evt.stopPropagation()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "node_modules/eagle.js/src/themes/frontpage/frontpage";
.frontpage {
  background-image: url(../static/port-bg.png);
  background-size: 100%;
  background-repeat: none;
}

.white {
  color: white;
  text-shadow: 1px 1px #0e0e30;
}

.caption {
  color: white;
  background: rgba(0,0,0,0.5);
}

.no-margin {
  margin: 0;
}

.logo {
  display: inline-block;
  width: 130px;
  height:90px;
  margin-right: 0.1em;
  background-image: url(./logo.svg);
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
}
</style>
