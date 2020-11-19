<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// js移动端屏幕适配
const dpr = window.devicePixelRatio
// 设计图宽度为标准的750px，html字号为100px，计算系数
const coe = 750 / 100
const docEl = document.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
const recalc = () => {
  const deviceWidth = docEl.clientWidth
  const html = document.querySelector('html')
  let fontSize = deviceWidth / coe
  html.style.fontSize = fontSize + 'px'
}
window.addEventListener(resizeEvt, recalc, false)
document.addEventListener('DOMContentLoaded', recalc, false)
</script>

<style lang="scss">

// css适配方案
// @media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
//   html {
//     font-size: 43px;
//   }
// }

// @media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 3) {
//   html {
//     font-size: 43px;
//   }
// }

// @media screen and (min-device-width: 360px) and (max-device-width: 640px) and (-webkit-min-device-pixel-ratio: 2) {
//   html {
//     font-size: 48px;
//   }
// }

// @media screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 2) {
//   html {
//     font-size: 50px;
//   }
// }

// @media screen and (min-device-width: 393px) and (-webkit-min-device-pixel-ratio: 2) {
//   html {
//     font-size: 52px;
//   }
// }

// @media screen and (min-device-width: 392px) and (-webkit-min-device-pixel-ratio: 2) {
//   html {
//     font-size: 52px;
//   }
// }

// @media screen and (min-device-width: 414px) and (-webkit-min-device-pixel-ratio: 2) {
//   html {
//     font-size: 55px;
//   }
// }

// @media screen and (min-device-width: 411px) and (-webkit-min-device-pixel-ratio: 2) {
//   html {
//     font-size: 55px;
//   }
// }

// @media screen and (min-device-width: 768px) {
//   html {
//     font-size: 102.4px;
//   }
// }

// @media screen and (min-device-width: 1024px) {
//   html {
//     font-size: 136.5px;
//   }
// }
</style>
