<template>
  <section class="fade-example">
      
      <div class="mb--md">
    <button class="button button--st button--primary" @click="toggle('card1')">
      Toggle Popup
    </button>
    <Translate :duration="0.25" translateFromX="-25px" translateToX="0">
      <Card v-if="showToggleCard['card1']">
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        
      </Card>
    </Translate>
      </div>
   <div class="mb--md">
         <button class="button button--st button--primary" @click="toggle('card2')">
      Toggle Popup
    </button>
     <Translate :duration="0.25" translateFromY="25px" translateToY="0">
      <Card v-if="showToggleCard['card2']">
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        
      </Card>
    </Translate>
   </div>
    </div>
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
import Translate from '@/slide/Translate.vue';
import Card from '@/examples/lib/card.vue';
import Popup from '@/examples/lib/Popup.vue';
import Any from '@/slide/Any.vue';

@Component({
  name: 'TranslateExample',
  components: {
    Translate,
    Card,
    Popup,
    Any,
  },
})
export default class TranslateExample extends Vue {
  showToggleCard: any = {
      card1: false,
      card2: false
  };

  toggle(card) {
    this.showToggleCard[card] = !this.showToggleCard[card];
  }
}
</script>

<style lang="scss" scoped></style>
