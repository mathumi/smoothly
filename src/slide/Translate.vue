<template>
  <transition
    v-if="!list"
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    mode="out-in"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @leave="leave"
    @before-leave="beforeLeave"
    ><slot></slot
  ></transition>
  <transition-group
    v-else
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    mode="out-in"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @leave="leave"
    @before-leave="beforeLeave"
    ><slot></slot
  ></transition-group>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'translate',
  props: {
    translateFromX: {
      type: String,
      default: '0',
    },
     translateToX: {
      type: String,
      default: '',
    },
    translateFromY: {
      type: String,
      default: '0',
    },
    translateToY: {
      type: String,
      default: '',
    },
    list: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 0.25,
    },
    hideTillDelay: {
      type: Boolean,
      default: true,
    },
  },
})
export default class Translate extends Vue {
  translateFromX!: string;
  translateToX!: string;
  translateFromY!: string;
  translateToY!: string;
  list!: boolean;
  delay!: number;
  timing = 0;
  hideTillDelay!: boolean;

  show: boolean = !this.hideTillDelay;

  beforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = `translate(${this.translateFromX},${this.translateFromY})`;
    el.style.transition = `transform 0.5s ease`;
  }

  enter(el) {
    setTimeout(() => {
      let timing = 0.5;
      if (this.list) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        el.style.transitionDelay = `${index * this.delay}s`;
      } else {
        //el.style.transitionDelay = `${this.delay}s`;
      }
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = `translate(${this.translateToX || 0},${this
          .translateToY || 0})`;
      });
    }, this.delay * 1000);
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {}

  beforeLeave(el) {
    el.style.transform = 'scale(1)';
    el.style.transition = `transform 0.5s ease`;
  }

  leave(el) {
    setTimeout(() => {
      el.style.transform = 'scale(0)';
    }, 10);
  }

  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterLeave(el) {
    window.setTimeout(() => {
      el.style.transform = '';
      el.style.transition = '';
    });
  }
}
</script>
