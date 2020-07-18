<template>
<div>
  <button @click="toggle">Toggle</button>
  <slide>
    <div class="card" v-if="showCard">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </slide>
  <div>gdgfd</div>
</div>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Slide from './slide/Slide.vue';

@Component({
  name: 'App',
  components: {
    Slide,
  },
})
export default class App extends Vue {
  message: string = 'Hello';
  showCard: boolean = true;

  toggle() {
    this.showCard = !this.showCard;
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 8px 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>