webpackJsonp([1],[,,function(e,t,i){"use strict";t.a={list:[i(228)]}},function(e,t,i){var s=i(0)(i(11),i(241),null,null);e.exports=s.exports},function(e,t,i){i(32);var s=i(0)(i(18),i(242),null,null);e.exports=s.exports},function(e,t,i){i(34);var s=i(0)(i(19),i(244),"data-v-f766177c",null);e.exports=s.exports},,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(7),n=i.n(s),a=i(6),r=i(4),l=i.n(r),o=i(5),c=i.n(o),d=i(1),u=i(2);n.a.use(d.a),n.a.use(a.a);var p=[];u.a.list.forEach(function(e){p.push({path:"/"+e.infos.path,component:e})}),p.push({path:"*",component:c.a}),p.push({path:"/",name:"Home",component:c.a}),console.log(p);var I=new a.a({routes:p});new n.a({el:"#app",router:I,template:"<App/>",components:{App:l.a}})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{enter:{default:null},leave:{default:null}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=i.n(s);t.default={mixins:[n.a],props:{url:{default:"https://i.imgur.com/P7iyH.png"},enter:{default:null},leave:{default:null}},computed:{style:function(){return{"background-image":"url("+this.url+")","background-position":"center center","background-size":"cover"}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{skip:{default:!1},enter:{default:null},leave:{default:null},steps:{default:1},mouseNavigation:{default:!0},keyboardNavigation:{default:!0}},data:function(){return{step:1,active:!1,isSlide:!0,slideTimer:0}},mounted:function(){},methods:{nextStep:function(){this.step===this.steps?this.$parent.nextSlide():this.step++},previousStep:function(){1===this.step?this.$parent.previousSlide():this.step--}},watch:{step:function(e){this.$parent.step=e},active:function(e){var t=this;e?(this.slideTimer=0,this.timerUpdater=setInterval(function(){t.slideTimer++},1e3)):clearInterval(this.timerUpdater)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{firstSlide:{default:1},startStep:{default:1},lastSlide:{default:null},embedded:{default:!1},inserted:{default:!1},keyboardNavigation:{default:!0},mouseNavigation:{default:!0},onStartExit:{default:function(){return function(){this.$router.push("/")}}},onEndExit:{default:function(){return function(){this.$router.push("/")}}},skip:{default:!1}},data:function(){return{currentSlideIndex:1,currentSlide:null,step:this.startStep,slideshowTimer:0,slideTimer:0,slides:[],active:!0}},computed:{fullPageStyle:function(){return{fontSize:.04*Math.min(this.fullPageWidth,this.fullPageHeight)+"px"}},embeddedStyle:function(){return{fontSize:.04*Math.min(this.parentWidth,this.parentHeight)+"px"}},active:function(){return this.slides.some(function(e){return e.active})}},mounted:function(){this.isSlideshow=!0;var e=this;this.findSlides(),this.inserted||(this.currentSlide=this.slides[this.currentSlideIndex-1],this.currentSlide.step=this.startStep,this.keyboardNavigation&&window.addEventListener("keydown",this.keydown),this.mouseNavigation&&(window.addEventListener("click",this.click),window.addEventListener("wheel",this.wheel)),this.embedded&&(this.$el.className+=" embedded-slideshow")),window.addEventListener("resize",this.handleResize),this.preloadedImages&&setTimeout(function(){for(var t in e.preloadedImages)(new Image).src=e.preloadedImages[t]},1e3),this.handleResize(),this.timerUpdater=setInterval(function(){e.slideshowTimer++,e.slideTimer++},1e3),this.afterMounted()},beforeDestroy:function(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("click",this.click),window.removeEventListener("wheel",this.wheel),clearInterval(this.slideshowTimerUpdater)},methods:{nextStep:function(){this.step===this.currentSlide.steps?this.nextSlide():this.step++},previousStep:function(){1===this.step?this.previousSlide():this.step--},nextSlide:function(){for(var e=this.currentSlideIndex+1;e<this.slides.length+1&&(this.slides[e-1].skip||this.slides[e-1].$parent.skip);)e++;e<this.slides.length+1?this.currentSlideIndex=e:this.embedded||this.onEndExit()},previousSlide:function(){for(var e=this.currentSlideIndex-1;e>=1&&(this.slides[e-1].skip||this.slides[e-1].$parent.skip);)e--;e>=1?this.currentSlideIndex=e:this.embedded||this.onStartExit()},handleResize:function(e){var t=0,i=0;this.embedded?(t=this.$el.parentElement.clientWidth,i=this.$el.parentElement.clientHeight):(t=document.documentElement.clientWidth,i=document.documentElement.clientHeight),this.$el.style.fontSize=.04*Math.min(i,t)+"px"},click:function(e){this.mouseNavigation&&this.currentSlide.mouseNavigation&&(e.clientX<.1*document.documentElement.clientWidth?(e.preventDefault(),this.previousStep()):e.clientX>.9*document.documentElement.clientWidth&&(e.preventDefault(),this.nextStep()))},wheel:function(e){this.mouseNavigation&&this.currentSlide.mouseNavigation&&(e.preventDefault(),e.wheelDeltaY>0||e.deltaY>0?this.nextStep():(e.wheelDeltaY<0||e.deltaY<0)&&this.previousStep())},keydown:function(e){this.keyboardNavigation&&(this.currentSlide.keyboardNavigation||e.ctrlKey)&&(e.preventDefault(),"ArrowLeft"===e.key?this.previousStep():"ArrowRight"===e.key&&this.nextStep())},afterMounted:function(e){},findSlides:function(){var e=this,t=0;this.$children.forEach(function(i){i.isSlide?++t>=e.firstSlide&&(!e.lastSlide||t<=e.lastSlide)&&e.slides.push(i):i.isSlideshow&&(i.active=!1,i.slides.forEach(function(i){t++,i.active=!1,t>=e.firstSlide&&(!e.lastSlide||t<=e.lastSlide)&&e.slides.push(i)}))})}},watch:{currentSlide:function(e,t){t&&(t.active=!1,t.$parent!==e.$parent&&t.$parent!==this&&(t.$parent.active=!1)),this.slideTimer=0,this.step=1,e.step=1,e.$parent.step=1,e.active=!0,e.$parent.active=!0},currentSlideIndex:function(e){this.currentSlide=this.slides[e-1]},step:function(e){this.currentSlide&&(this.currentSlide.step=e,this.currentSlide.$parent.step=e)},active:function(e){this.$el.style.visibility=e?"visible":"hidden"}}}},function(e,t,i){"use strict";function s(){return Math.random().toString(36).substr(2,10)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(36),a=i.n(n);t.default={props:{id:{default:function(){return s()}},id2:{default:function(){return s()}},id3:{default:function(){return s()}},lang:{default:null}},mounted:function(){this.update()},methods:{update:function(){var e=document.getElementById(this.id),t=document.getElementById(this.id2);document.getElementById(this.id3).innerHTML=t.innerHTML,console.log(this.id),this.lang&&a.a.highlightBlock(e)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{enter:{default:null},leave:{default:null},active:{default:!0},arrow:{default:!0}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{default:null},label:{default:null},fontsize:{default:"0.7em"}},methods:{select:function(){this.$emit("input",this.label),console.log(this.label,this.value,this.value===this.label)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{default:!0},fontsize:{default:"0.8em"}},data:function(){return{checked:this.value}},methods:{toggle:function(){console.log(this.checked),this.checked=!this.checked}},watch:{checked:function(e){this.$emit("input",e)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{enter:{default:"slideInLeft"},leave:{default:"slideOutLeft"},trigger:{default:!1},position:{default:"left top"},duration:{default:3}},data:function(){return{active:!1,timeout:null,style:{top:this.position.indexOf("top")>=0?"0%":"none",bottom:this.position.indexOf("bottom")>=0?"0%":"none",left:this.position.indexOf("left")>=0?"0%":"none",right:this.position.indexOf("right")>=0?"0%":"none"}}},watch:{trigger:function(e,t){if(!t&&e){this.active=!0;var i=this;this.timeout=setTimeout(function(){i.active=!1},1e3*this.duration)}else t&&!e&&(this.active=!1,clearTimeout(this.timeout))}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(2);t.default={data:function(){return{slideshows:s.a.list}},mounted:function(){console.log(this.slideshows),document.currentSlide={}},methods:{click:function(e){e.stopPropagation()}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1);t.default={mixins:[s.a.slideshow],infos:{title:"Mobile Apps",description:"Phones and tablets !",path:"mobileapps"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1);t.default={mixins:[s.a.slideshow],infos:{title:"Open Source",description:"Investing in the community !",path:"opensource"}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1);t.default={mixins:[s.a.slideshow],infos:{title:"My Portfolio",description:"Click this to start the magic",path:"portfolio"},components:{websites:i(229),mobileapps:i(226),opensource:i(227)},data:function(){return{username:"Tracy",slideCategories:{themes:{show:!0,name:"Websites"},slideReuse:{show:!0,name:"Mobile Apps"},interactivity:{show:!0,name:"Open Source"}},preloadedImages:{computerKid:"https://i.imgur.com/kfiMFxV.gif",youRightNow:"https://media.giphy.com/media/l4FGx257ZwUoRUjcY/giphy.gif",bretagne:"http://i.imgur.com/rYkJ6I8.jpg",forrestRoad:"http://i.imgur.com/hxTMFZW.jpg",starrySky:"http://i.imgur.com/yO2ivoD.jpg",cityBokeh:"http://i.imgur.com/kmmHith.jpg",darkWoods:"http://i.imgur.com/FL9mwpd.jpg"}}},methods:{message:function(e){return{Websites:"You probably want to see that, "+this.username,"Mobile Apps":"Seriously "+this.username+" you <em>want</em> to see this.","Open Source":"Eh, you can visit me on Github then."}[e]}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1);t.default={mixins:[s.a.slideshow],infos:{title:"Websites",description:"All things internet !",path:"websites"}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){e.exports=i.p+"static/img/potomac.cb4b27a.jpeg"},function(e,t,i){e.exports=i.p+"static/img/controlsNext.30dfd83.svg"},function(e,t,i){e.exports=i.p+"static/img/controlsPrev.2870b27.svg"},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjEiIHk9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iNjIiIGhlaWdodD0iNDEiLz4NCgk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjIiIHkxPSI2MyIgeDI9IjQyIiB5Mj0iNjMiLz4NCgk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMzIiIHkxPSI2MyIgeDI9IjMyIiB5Mj0iNTEiLz4NCjwvZz4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxIiB5MT0iNDMiIHgyPSI2NCIgeTI9IjQzIi8+DQo8L3N2Zz4NCg=="},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yMSw0MHY1aDIybDAuMDAxLTUuMTA3QzQ5LDM2LjE5NSw1MywyOS41NjQsNTMsMjINCgljMC0xMS41OTgtOS40MDItMjEtMjEtMjFzLTIxLDkuNDAyLTIxLDIxQzExLDI5LjU2NSwxNC45OTgsMzYuMzA0LDIxLDQweiIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjI4IiB5MT0iNDUiIHgyPSIyNSIgeTI9IjI1Ii8+DQo8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMzYiIHkxPSI0NSIgeDI9IjM5IiB5Mj0iMjUiLz4NCjxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjI1LDI2IDI5LDI5IDMyLDI2IDM1LDI5IDM5LDI2ICIvPg0KPHJlY3QgeD0iMjEiIHk9IjQ1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iMjIiIGhlaWdodD0iNiIvPg0KPHJlY3QgeD0iMjMiIHk9IjUxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iMTgiIGhlaWdodD0iNiIvPg0KPHJlY3QgeD0iMjUiIHk9IjU3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iMTQiIGhlaWdodD0iNiIvPg0KPC9zdmc+DQo="},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMSwzMCA2MywxIDIzLDQxIA0KCSIvPg0KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIzNCw2MyA2MywxIDIzLDQxIA0KCSIvPg0KPC9zdmc+DQo="},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjUxIiBjeT0iMTMiIHI9IjEyIi8+DQo8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSIxMSIgY3k9IjQyIiByPSIxMCIvPg0KPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iNDgiIGN5PSI1NSIgcj0iOCIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjQwIiB5MT0iNTQiIHgyPSIyMCIgeTI9IjQ2Ii8+DQo8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTkiIHkxPSIzNSIgeDI9IjQxIiB5Mj0iMjEiLz4NCjwvc3ZnPg0K"},function(e,t,i){e.exports=i.p+"static/img/me.cc90c72.jpg"},function(e,t,i){e.exports=i.p+"static/img/mobile1.68e62aa.png"},function(e,t,i){e.exports=i.p+"static/img/mobile2.14175f2.png"},function(e,t,i){e.exports=i.p+"static/img/mobile4.188e18d.png"},function(e,t,i){var s=i(0)(i(9),i(233),null,null);e.exports=s.exports},function(e,t,i){var s=i(0)(i(10),i(238),null,null);e.exports=s.exports},function(e,t,i){var s=i(0)(i(12),null,null,null);e.exports=s.exports},function(e,t,i){i(25);var s=i(0)(i(13),i(231),"data-v-0a1f5ec1",null);e.exports=s.exports},function(e,t,i){i(33);var s=i(0)(i(14),i(243),null,null);e.exports=s.exports},function(e,t,i){i(30);var s=i(0)(null,i(239),null,null);e.exports=s.exports},function(e,t,i){i(29);var s=i(0)(i(15),i(237),"data-v-6b296324",null);e.exports=s.exports},function(e,t,i){i(24);var s=i(0)(i(16),i(230),"data-v-06d20f03",null);e.exports=s.exports},function(e,t,i){var s=i(0)(i(17),i(232),null,null);e.exports=s.exports},function(e,t,i){i(31);var s=i(0)(i(20),i(240),null,null);e.exports=s.exports},function(e,t,i){i(28);var s=i(0)(i(21),i(236),null,null);e.exports=s.exports},function(e,t,i){i(27);var s=i(0)(i(22),i(235),null,null);e.exports=s.exports},function(e,t,i){i(26);var s=i(0)(i(23),i(234),null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"eg-switch"},[i("div",{staticClass:"switch",style:{"font-size":e.fontsize},on:{click:e.toggle}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked}}),i("div",{staticClass:"slider",class:{checked:e.checked}}),i("div",{staticClass:"sliderdot",class:{checked:e.checked}})]),i("span",{class:{unchecked:!e.checked}},[e._t("default")],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"eg-code-block container"},[i("div",{staticClass:"box hljs code-box",attrs:{id:e.id}},[i("pre",[i("code",{class:e.lang?e.lang:"",attrs:{id:e.id3}})])]),i("div",{staticClass:"box comments-box"},[i("pre",[i("code",{attrs:{id:e.id2}},[e._t("default")],2)])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("eg-transition",{attrs:{enter:e.enter,leave:e.leave}},[e.active?i("div",{staticClass:"eg-triggered-message",style:e.style},[e._t("default")],2):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{"enter-active-class":e.enter?"animated "+e.enter:"","leave-active-class":e.leave?"animated "+e.leave:""}},[e._t("default")],2)},staticRenderFns:[]}},function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"ThemesSlideshow"}},[s("div",{staticClass:"eg-slideshow"},[s("slide",{staticClass:"local-eg-theme-dougblackjr",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInDown"}},[s("h3",[e._v("Sites I've Done")])]),s("a",{staticClass:"site-link",attrs:{href:"http://dougblackjr.com",target:"_blank"}},[e._v("dougblackjr.com")])],1),s("slide",{staticClass:"local-eg-theme-aces",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInUp"}},[s("h3",[e._v("Created in Grav, custom image gallery")])]),s("a",{staticClass:"site-link",attrs:{href:"http://aceshomeimprovementllc.com",target:"_blank"}},[e._v("aceshomeimprovementllc.com")])],1),s("slide",{staticClass:"local-eg-theme-ngu",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInLeft"}},[s("h3",[e._v("Custom video bg"),s("br"),e._v("mobile first design")])]),s("a",{staticClass:"site-link",attrs:{href:"http://nevergiveuppa.com",target:"_blank"}},[e._v("nevergiveuppa.com")])],1),s("slide",{staticClass:"local-eg-theme-joes",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInUp"}},[s("h3",[e._v("Custom logo design, landing page")])]),s("a",{staticClass:"site-link",attrs:{href:"http://joeritchiegeneralcontractor.net",target:"_blank"}},[e._v("joeritchiegeneralcontractor.net")])],1),s("slide",{staticClass:"local-eg-theme-evangel",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInLeft"}},[s("h3",[e._v("Wordpress site"),s("br"),e._v("custom theming")])]),s("a",{staticClass:"site-link",attrs:{href:"http://theevangelhope.com",target:"_blank"}},[e._v("theevangelhope.com")])],1),s("slide",{staticClass:"local-eg-theme-city",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"flipInX"}},[s("eg-code-block",{staticClass:"code-web",attrs:{lang:"html"}},[e._v("MOBILE FIRST DESIGN\n55% of online shopping is done on mobile devices\nIt's more than essential...\nIT'S EXPECTED!\nI develop all sites with mobile in mind")])],1),s("eg-phone-block",[s("eg-transition",{attrs:{enter:"flipInY"}},[s("img",{staticClass:"iphone-image",attrs:{src:i(214)}})]),s("eg-transition",{attrs:{enter:"flipInY"}},[s("img",{staticClass:"iphone-image",attrs:{src:i(215)}})]),s("eg-transition",{attrs:{enter:"flipInY"}},[s("img",{staticClass:"iphone-image",attrs:{src:i(216)}})])],1)],1)],1)])},staticRenderFns:[]}},function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"eg-theme-agrume",attrs:{id:"IntroducingEagle"}},[s("div",{staticClass:"eg-slideshow"},[s("slide",{attrs:{enter:"fadeIn",leave:"bounceOutLeft"}},[s("div",{staticClass:"center frontpage"},[s("h1",[e._v("Hi, I'm Doug!")]),s("img",{attrs:{src:i(213)}}),s("p",[e._v("Maximize your browser, or turn your device on it's side!")]),s("eg-triggered-message",{attrs:{trigger:e.slideTimer>=2,duration:6,position:"top right",enter:"bounceInRight",leave:"bounceOutRight"}},[s("p",[e._v("Next:")]),s("img",{staticClass:"control-schema",attrs:{src:i(207)}}),s("p",[e._v("Previous:")]),s("img",{staticClass:"control-schema",attrs:{src:i(208)}})])],1)]),s("slide",{staticClass:"boredYet",attrs:{enter:"fadeIn",mouseNavigation:!1,keyboardNavigation:!1}},[s("h3",[e._v("And Who Are You ?")]),s("div",{staticClass:"center"},[s("p",[e._v("What shall I call you ?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"center",domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),s("p",[e._v(e._s(e.username)),e.username.length?s("span",[e._v(",")]):e._e(),e._v(" I got you.\nTell me what you like, I'll skip the rest:\n")]),e._l(e.slideCategories,function(t,i){return s("div",{staticClass:"inline"},[s("eg-toggle",{key:i,attrs:{width:30,"on-text":"","off-text":"","on-color":"#ffeeaa"},on:{change:function(i){e.changeMessage(t.changeMessage)}},model:{value:t.show,callback:function(e){t.show=e},expression:"category.show"}},[s("p",{staticClass:"label"},[e._v(e._s(t.name))]),s("eg-triggered-message",{attrs:{trigger:!t.show,duration:3,position:"top right",enter:"bounceInRight",leave:"bounceOutRight"}},[s("p",{domProps:{innerHTML:e._s(e.message(t.name))}})])],1)],1)})],2),s("div",{staticClass:"button prev",on:{click:function(t){t.stopPropagation(),e.previousSlide(t)}}},[s("span",[e._v("< Prev. slide")]),s("br"),s("span",{staticClass:"small"},[e._v(" Ctrl + left")])]),s("div",{staticClass:"button next",on:{click:function(t){t.stopPropagation(),e.nextSlide(t)}}},[s("span",[e._v("Next slide >")]),s("br"),s("span",{staticClass:"small"},[e._v("Ctrl + right")])])]),s("slide",{attrs:{steps:6,enter:"bounceInDown"}},[s("h3",[e._v("First, What I Do")]),s("eg-transition",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[e.step>=2?s("div",{staticClass:"quarter"},[s("img",{attrs:{src:i(212)}}),s("h4",[e._v("STRATEGY")]),s("p",[e._v("Listen and help you define clear goals")])]):e._e()]),s("eg-transition",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[e.step>=3?s("div",{staticClass:"quarter"},[s("img",{attrs:{src:i(210)}}),s("h4",[e._v("CREATE")]),s("p",[e._v("Draw, build, and tinker, until it's right")])]):e._e()]),s("eg-transition",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[e.step>=4?s("div",{staticClass:"quarter"},[s("img",{attrs:{src:i(209)}}),s("h4",[e._v("BEAUTIFY")]),s("p",[e._v("Make it look good on any device")])]):e._e()]),s("eg-transition",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[e.step>=5?s("div",{staticClass:"quarter"},[s("img",{attrs:{src:i(211)}}),s("h4",[e._v("DEPLOY")]),s("p",[e._v("Help put it out for the world to see")])]):e._e()]),s("eg-transition",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[e.step>=6?s("eg-modal",[s("h3",[e._v("You right now:")]),s("div",{staticClass:"center"},[s("img",{style:{height:"10em"},attrs:{src:e.preloadedImages.youRightNow}})])]):e._e()],1)],1),s("websites",{attrs:{skip:!e.slideCategories.themes.show,inserted:!0,firstSlide:"1"}}),s("mobileapps",{attrs:{skip:!e.slideCategories.slideReuse.show,inserted:!0,firstSlide:"1"}}),s("opensource",{attrs:{skip:!e.slideCategories.interactivity.show,inserted:!0,firstSlide:"1"}}),s("slide",{attrs:{enter:"zoomIn",leave:"fadeOut"}},[s("h3",[e._v("What Are You Waiting For, "+e._s(e.username)+" ?!?!")]),s("p",{staticClass:"center"},[e._v("Think I can help ?")]),s("div",{staticClass:"center"},[s("img",{staticClass:"computerkid shadowbox",attrs:{src:"https://i.imgur.com/kfiMFxV.gif"}})]),s("p",{staticClass:"center"},[e._v("Contact me today!")])])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide",{attrs:{steps:4,enter:"bounceInRight",leave:"bounceOutDown"}},[i("div",{staticClass:"opensource-content"},[i("h1",[e._v("Open Source")]),i("h3",[e._v("I believe in the open source community! I have...")]),i("div",{staticClass:"center"},[i("eg-transition",{attrs:{enter:"bounceInLeft",leave:"bounceOutLeft"}},[e.step>=2?i("p",[e._v("Produced a number of ExpressionEngine add-ons")]):e._e()]),i("eg-transition",{attrs:{enter:"bounceInRight",leave:"bounceOutRight"}},[e.step>=3?i("p",[e._v("Contributed to large projects and organizations, such as JSON-LD and Spatie")]):e._e()]),i("eg-transition",{attrs:{enter:"bounceInLeft",leave:"bounceOutLeft"}},[e.step>=4?i("h3",[e._v("You can see more at my "),i("a",{attrs:{href:"https://github.com/dougblackjr",target:"_blank"}},[e._v("Github!")])]):e._e()])],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"eg-radio"},[i("div",{staticClass:"radiobutton",style:{"font-size":e.fontsize},on:{click:e.select}},[i("div",{staticClass:"radio"}),i("div",{staticClass:"radiodot",class:{checked:e.value===e.label}})]),e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("eg-transition",{attrs:{enter:e.enter,leave:e.leave}},[e.active?i("div",{staticClass:"eg-slide image-slide",style:e.style}):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"eg-modal"},[i("div",{staticClass:"content"},[e._t("default")],2)])},staticRenderFns:[]}},function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"ThemesSlideshow"}},[s("div",{staticClass:"eg-slideshow"},[s("slide",{staticClass:"local-eg-theme-forest-road",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInLeft"}},[s("h3",[e._v("Mobile Apps")])])],1),s("slide",{staticClass:"local-eg-theme-artic",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInUp"}},[s("h3",[e._v("Apps created with Ionic and Angular"),s("br"),e._v("for iOS, Android, Kindle, and Windows Phone (RIP)")])])],1),s("slide",{staticClass:"local-eg-theme-na",attrs:{enter:"fadeIn",leave:"fadeOut"}},[s("eg-transition",{attrs:{enter:"zoomIn"}}),s("a",{staticClass:"site-link",attrs:{href:"http://nurseryalert.net"}},[e._v("nurseryalert.net")])],1),s("slide",{staticClass:"local-eg-theme-artica",attrs:{enter:"fadeIn",leave:"none"}},[s("eg-transition",{attrs:{enter:"fadeInUp"}},[s("img",{attrs:{src:i(206)}})]),s("h1",[e._v("Social networking app"),s("br"),e._v(" with admin backend")]),s("a",{staticClass:"site-link",attrs:{href:"https://itunes.apple.com/us/app/potomac-prayer-network/id768702417?mt=8"}},[e._v("https://itunes.apple.com/us/app/potomac-prayer-network/id768702417?mt=8")])],1)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("eg-transition",{attrs:{enter:e.enter,leave:e.leave}},[e.active?i("div",{staticClass:"eg-slide"},[i("div",{staticClass:"eg-slide-content"},[e._t("default")],2)]):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("eg-transition",{attrs:{enter:e.enter,leave:e.leave}},[e.active?i("div",{staticClass:"eg-code-comment"},[e.arrow?i("span",[e._v("←")]):e._e(),e._t("default")],2):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"frontpage"},[i("div",{staticClass:"content"},[e._m(0),i("h2",{staticClass:"no-margin"},[e._v("Full Stack Web Developer")]),i("p",{staticClass:"white"},[e._v("I make machines serve their human masters, typically with web and mobile applications!\nSkilled in: PHP, ExpressionEngine, Laravel, Wordpress, Vue.js, Javascript, Ionic/Angular, and various others.\nIf you have a problem, I can solve it.\n")]),i("div",{staticClass:"thumbnails"},e._l(e.slideshows,function(t){return i("div",{staticClass:"box-card"},[i("router-link",{attrs:{to:t.infos.path},nativeOn:{click:function(t){e.click(t)}}},[i("div",{staticClass:"embedded-slideshow-container"},[i(t,{tag:"component",attrs:{embedded:!0,keyboardNavigation:!1,mouseNavigation:!1}})],1)]),i("div",{staticClass:"caption"},[i("h3",[e._v(e._s(t.infos.title))]),i("p",{staticClass:"thumbnail-description"},[e._v(e._s(t.infos.description))])])],1)})),e._m(1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[i("span",{staticClass:"grey"},[e._v("Hi, I'm ")]),i("span",[e._v("Doug!")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h2",[i("a",{attrs:{href:"http://dougblackjr.com/#contact"}},[e._v("Contact me to get started!")])])}]}}],[8]);