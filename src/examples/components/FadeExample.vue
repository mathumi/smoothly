<template>
  <section class="fade-example">
    <!-- Example 1 -->
    <div class="mb--md demo">
      <Fade :duration="1" :delay="0.5">
        <Card>
          <Fade :delay="1" :duration="1"><div>Card</div></Fade>
        </Card>
      </Fade>
    </div>

    <!-- Example 2 -->
    <div class="mb--md demo">
      <button class="button button--st button--primary" @click="toggle">Show Popup</button>
        <Fade :duration="0.5">
          <Popup arrowPosition="left" v-if="showToggleCard">
            Card
          </Popup>
        </Fade>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Fade from '@/slide/Fade.vue';
import Card from '@/examples/lib/card.vue';
import Popup from '@/examples/lib/Popup.vue';
import Any from '@/slide/Any.vue';

@Component({
  name: 'FadeExample',
  components: {
    Fade,
    Card,
    Popup,
    Any
  },
})
export default class FadeExample extends Vue {

  showToggleCard:boolean = false;

  toggle() {
    this.showToggleCard = !this.showToggleCard;
  }

}
</script>

<style lang="scss" scoped></style>
