<template>
  <div>
    <button @click="toggle(1)">Toggle Height</button>
    <button @click="toggle(2)">Toggle Width</button>
    <button @click="toggle(3)">Toggle Size</button>
    <button @click="toggle(4)">Toggle Fade</button>
    <div class="flex mb--st">
      <component :is="component">
        <div v-if="showCard">
          <div class="card">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </component>
      <div>gdgfd</div>
    </div>

    <div class="">
      <slide-height :list="true">
        <template v-if="showList">
          <div class="card" v-for="i in 5" :key="i"> <h4><b>John Doe{{i}}</b></h4>
            <p>Architect & Engineer</p>
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p></div>
        </template>
      </slide-height>
    </div>

    dajksdbja
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SlideHeight from './slide/SlideHeight.vue';
import SlideWidth from './slide/SlideWidth.vue';
import Scale from './slide/Scale.vue';
import Fade from './slide/Fade.vue';

@Component({
  name: 'App',
  components: {
    SlideHeight,
    SlideWidth,
    Scale,
    Fade,
  },
})
export default class App extends Vue {
  message: string = 'Hello';
  showCard: boolean = true;
  showList: boolean = false;
  component: string = 'slide-height';

  toggle(type) {
    this.showCard = !this.showCard;
    switch (type) {
      case 1:
        this.component = 'slide-height';
        break;
      case 2:
        this.component = 'slide-width';
        break;
      case 3:
        this.component = 'scale';
        break;
      case 4:
        this.component = 'fade';
        break;
    }
  }

  mounted() {
    setTimeout(() => {
      this.showList = true;
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 8px 16px;
  min-width: 80px;
  //min-height: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>

<style lang="scss">
* {
  box-sizing: border-box;
}
.flex {
  display: flex;
}
.mb--st {
  margin-bottom: 20px;
}
</style>
