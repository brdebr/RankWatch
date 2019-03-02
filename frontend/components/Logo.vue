<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :height="height" viewBox="0 0 423 423">
    <defs>
      <linearGradient id="linear-gradient" x1="393.68" y1="313.97" x2="393.68" y2="130.94" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#454a4f"/>
        <stop offset="1" stop-color="#fa9c1e"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="441.38" y1="347.14" x2="219.86" y2="125.56" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#454a4f"/>
        <stop offset="0.24" stop-color="#7d6440"/>
        <stop offset="0.49" stop-color="#b37c31"/>
        <stop offset="0.71" stop-color="#d98d27"/>
        <stop offset="0.89" stop-color="#f19820"/>
        <stop offset="1" stop-color="#fa9c1e"/>
      </linearGradient>
      <linearGradient id="linear-gradient-3" x1="198.21" y1="317.24" x2="293.51" y2="269.95" xlink:href="#linear-gradient-2"/>
    </defs>
    <title>RankWatch Logo</title>
    <g v-if="background" id="bg">
      <circle cx="211.5" cy="211.5" r="210" fill="#dce3f1" stroke="#0071bc" stroke-miterlimit="10" stroke-width="3"/>
    </g>
    <g id="logo">
      <path id="circle-top" d="M501.31,178.37a162,162,0,0,0-215.25.12l31.18,31.18a117.44,117.44,0,0,1,68.57-27.9,3.43,3.43,0,0,0-.06.57V283.16a3.84,3.84,0,0,0,3.84,3.84h8.32a3.84,3.84,0,0,0,3.84-3.84V182.34a3.43,3.43,0,0,0-.06-.57,117.5,117.5,0,0,1,68.44,27.79Z" transform="translate(-182.5 -88.5)" :stroke="dark ? '#FFF' : '#000'" stroke-miterlimit="10" stroke-width="4" :fill="flat ? flatColors[0] : 'url(#linear-gradient)'" />
      <path id="circle-right" d="M512.74,189.58l-31.15,31.14a118,118,0,0,1,2,155.29l-71.91-71.9a3.63,3.63,0,0,0-5.14,0l-6.17,6.17a3.63,3.63,0,0,0,0,5.14l72,72a118,118,0,0,1-157.3,0L284,418.61a162,162,0,0,0,228.78-229Z" transform="translate(-182.5 -88.5)" :stroke="dark ? '#FFF' : '#000'" stroke-miterlimit="10" stroke-width="4" :fill="flat ? flatColors[1] : 'url(#linear-gradient-2)'" />
      <path id="arrow" d="M302.24,296H275.81a117.56,117.56,0,0,1,30-75.15l-31.15-31.14A161.42,161.42,0,0,0,231.79,296H207.38c-4.43,0-7.2,4.2-5,7.56l47.43,71.92a6.19,6.19,0,0,0,10,0l47.43-71.92C309.44,300.2,306.67,296,302.24,296Z" transform="translate(-182.5 -88.5)" :stroke="dark ? '#FFF' : '#000'" stroke-miterlimit="10" stroke-width="4" :fill="flat ? flatColors[1] : 'url(#linear-gradient-3)'" />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 38
    },
    dark: {
      type: Boolean,
      default: false
    },
    background: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      flatColors: [
        "#fa9c1e",
        "#374258"
      ]
    }
  },
}
</script>

<style>
</style>
