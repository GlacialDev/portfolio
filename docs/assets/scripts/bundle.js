!function(e){function t(l){if(o[l])return o[l].exports;var n=o[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,l){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),n=o(2),r=o(3),s=o(4),i=o(5);Object(l.a)(150),Object(n.a)(150),Object(r.a)(),Object(s.a)(),Object(i.a)()},function(e,t,o){"use strict";t.a=function(e){function t(){s&&(r=window.scrollY,r+=n,window.scroll(0,r),r>l&&(s=!1))}const o=document.querySelector(".arrow__link");let l,n,r,s=!1;o&&o.addEventListener("click",o=>{o.preventDefault(),l=window.innerHeight,n=l/e,s=!0,setInterval(function(){t()},1)})}},function(e,t,o){"use strict";t.a=function(e){function t(){s&&(r=l,l+=n,window.scroll(0,l),r<0&&(s=!1))}const o=document.querySelector(".arrow__link-b");let l,n,r,s=!1;o&&o.addEventListener("click",o=>{o.preventDefault(),l=window.scrollY,n=-l/e,s=!0,setInterval(function(){t()},1)})}},function(e,t,o){"use strict";t.a=function(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".header__menu"),o=document.body;t&&e&&t.addEventListener("click",l=>{l.preventDefault(),t.classList.toggle("active"),e.classList.toggle("active"),o.classList.toggle("overflow")})}},function(e,t,o){"use strict";t.a=function(){function e(e){return e<u.length-1?e++:e=0,e}function t(){d=e(d),g=e(g),f=e(f),i="url(../images/works/slides/"+u[d]+");",c="url(../images/works/slides/"+u[g]+");",a="url(../images/works/slides/"+u[f]+");",console.log(d),console.log(g),console.log(f),console.log("-------------"),console.log(i),console.log(c),console.log(a),n.style.backgroundImage=i,r.style.backgroundImage=c,s.style.backgroundImage=a}const o=document.querySelector(".slider"),l=document.querySelectorAll(".slider__btn"),n=document.querySelector(".slider__bottom-left"),r=document.querySelector(".slider__top"),s=document.querySelector(".slider__bottom-right");let i,c,a,u=["slide0.png","slide1.jpg","slide2.jpg","slide3.jpg","slide4.jpg"],d=0,g=1,f=2;console.log(n),console.log(r),console.log(s),console.log("------------- start"),console.log(d),console.log(g),console.log(f),console.log("------------- "),o&&(l[0].addEventListener("click",e=>{e.preventDefault(),t()}),l[1].addEventListener("click",e=>{e.preventDefault(),t()}))}},function(e,t,o){"use strict";t.a=function(){google.maps.event.addDomListener(window,"load",function(){var e={center:new google.maps.LatLng(59.941827,30.215237),zoom:16,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#86a77a"},{visibility:"on"}]}]},t=document.getElementById("map");if(t)var o=new google.maps.Map(t,e);new google.maps.Marker({position:{lat:59.941671,lng:30.209733},map:o,title:"Наш маркер: Большой театр",icon:{url:"assets/images/svg/map_marker.svg"}}).addListener("click",function(){window.open("https://www.google.com/maps/place/59%C2%B056'30.1%22N+30%C2%B012'35.0%22E/@59.941685,30.2075293,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d59.9416853!4d30.2097182?hl=ru-RU")})})}}]);