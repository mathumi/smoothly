<template>
  <section class="fade-example">
    <button class="button button--st button--primary" @click="toggle">
      Toggle Popup
    </button>
    <div>
    <Toggle :duration="0.25">
      <Card v-if="showToggleCard" key="card1">
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        
      </Card>
      <Card v-else key="card2">
        <div>Card2</div>
        <div>Card2</div>
        <div>Card2</div>
      </Card>
    </Toggle>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Toggle from '@/slide/Toggle.vue';
import Card from '@/examples/lib/card.vue';

@Component({
  name: 'ScaleExample',
  components: {
    Toggle,
    Card,
  },
})
export default class ToggleExample extends Vue {
  showToggleCard: boolean = false;

  toggle() {
    this.showToggleCard = !this.showToggleCard;
  }
}
</script>

<style lang="scss" scoped></style>
