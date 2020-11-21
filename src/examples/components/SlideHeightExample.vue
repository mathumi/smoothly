<template>
  <section class="fade-example">
    <button class="button button--st button--primary" @click="toggle">
      Toggle Popup
    </button>
    <SlideHeight>
      <Card v-if="showToggleCard">
        <div>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>

        
      </Card>
    </SlideHeight>
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
import SlideHeight from '@/slide/SlideHeight.vue';
import Card from '@/examples/lib/card.vue';
import Popup from '@/examples/lib/Popup.vue';
import Any from '@/slide/Any.vue';

@Component({
  name: 'SlideHeightExample',
  components: {
    SlideHeight,
    Card,
    Popup,
    Any,
  },
})
export default class SlideHeightExample extends Vue {
  showToggleCard: boolean = false;

  toggle() {
    this.showToggleCard = !this.showToggleCard;
  }
}
</script>

<style lang="scss" scoped></style>
