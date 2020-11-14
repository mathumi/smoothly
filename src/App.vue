<template>
  <!-- <div>
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
      <translate :list="true" translateX="20px">
        <template v-if="showList">
          <div class="card" v-for="i in 5" :key="i"> <h4><b>John Doe{{i}}</b></h4>
            <p>Architect & Engineer</p>
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p></div>
        </template>
      </translate>
    </div>

    dajksdbja
  </div> -->
  <Index />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SlideHeight from './slide/SlideHeight.vue';
import SlideWidth from './slide/SlideWidth.vue';
import Scale from './slide/Scale.vue';
import Fade from './slide/Fade.vue';
import Translate from './slide/Translate.vue';
import Index from './examples/Index.vue';

@Component({
  name: 'App',
  components: {
    SlideHeight,
    SlideWidth,
    Scale,
    Fade,
    Translate,
    Index,
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

