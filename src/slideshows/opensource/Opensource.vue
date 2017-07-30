<template lang='pug'>
  slide(:steps=4, enter='bounceInRight' leave='bounceOutDown')
    .opensource-content
      h1 Open Source
      h3 I believe in the open source community! I have...
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2") Produced a number of ExpressionEngine add-ons
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3") Contributed to large projects and organizations, such as JSON-LD and Spatie
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          h3(v-if="step >= 4") You can see more at my <a href="https://github.com/dougblackjr" target="_blank">Github!</a>

</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Open Source',
    description: 'Investing in the community !',
    path: 'opensource'
  }
}
</script>

<style lang='scss'>
.opensource-content {
  @import url(https://fonts.googleapis.com/css?family=Forum);

  text-align: center;
  margin-top: 10%;

  h3 {
    font-family: 'Forum';
    color: rgba(0, 0, 0, 0.75);
    letter-spacing: 1.5px;
  }

  h1 {
    font-size: 2.5em;
    font-family: 'Forum';
    color: rgba(0, 0, 0, 0.75);
    letter-spacing: 1.5px;
  }

  p {
    font-size: 1.25rem;
    font-family: 'Forum';
    color: rgba(0, 0, 0, 0.75);
    letter-spacing: 1.5px;
  }

  a {
    color: rgba(0,0,0, 0.75);
    text-decoration: none;
    font-style: italic;
  }

}

body {
  background-image: url(https://i.imgur.com/niok0mA.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
