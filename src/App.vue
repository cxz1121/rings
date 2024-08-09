<template>
  <div>
    <!-- <div id="radar"> -->
      <!-- <Radar v-model="options"></Radar> -->
    <!-- </div> -->
    <!-- <div id="ring"></div> -->
    <Ring></Ring>
  </div>
</template>

<script>
import initRing from './utils/ring'
import initRadar from './utils/radar';
import Radar from './components/Radar.vue';
import Ring from './components/Rings.vue'
export default {
  components: {
    Ring
  },
  data() {
    return {
      options: {
        items: [
          { text: 'Brand', max: 100 },
          { text: 'Content', max: 100 },
          { text: 'Usability', max: 100 },
          { text: 'Usability', max: 100 },
          { text: 'Usability', max: 100 },
          { text: 'Function', max: 100 }
        ],
        center: ['50%', '50%'],
        radius: 100,
        value: [60, 73, 85, 40, 90, 22],
        lineColor: 'blue',
        backgroundColor: 'rgba(12,79,241,0.5)'
      },
      options2: {

      }
    }
  },
  mounted() {
    // initRadar('#radar', this.options);
    // initRing('#ring', this.options2)
  }
}
</script>

<style scoped>
#radar {
  width: 300px;
  height: 300px;
}
#ring {
  width: 100vw;
  height: 100vh;
}
</style>