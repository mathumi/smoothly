<template>
  <section class="fade-example">
    <button class="button button--st button--primary" @click="toggle">
      Toggle Popup
    </button>
    <SlideWidth :duration="0.25">
      <Card v-if="showToggleCard">
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        
      </Card>
    </SlideWidth>
    <!-- Example 1 -->

    <!-- Example 2 -->
    <!-- <div class="mb--md demo">
      <button class="button button--st button--primary" @click="toggle">Show Popup</button>
        <Fade :duration="0.5">
          <Popup arrowPosition="left" v-if="showToggleCard">
            Card
          </Popup>
        </Fade>
    </div> -->
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SlideWidth from '@/slide/SlideWidth.vue';
import Card from '@/examples/lib/card.vue';
import Popup from '@/examples/lib/Popup.vue';
import Any from '@/slide/Any.vue';

@Component({
  name: 'SlideWidthExample',
  components: {
    SlideWidth,
    Card,
    Popup,
    Any,
  },
})
export default class SlideWidthExample extends Vue {
  showToggleCard: boolean = false;

  toggle() {
    this.showToggleCard = !this.showToggleCard;
  }
}
</script>

<style lang="scss" scoped></style>
