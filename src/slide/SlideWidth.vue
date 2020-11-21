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
import { computedBoxProperties } from '@/utils/dom';

@Component({
  name: 'slide-width',
  props: {
    list: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 0.25,
    },
    duration: {
      type: Number,
      default: 0.5
    }
  },
})
export default class SlideWidth extends Vue {
  elWidth = 0;
  timing = 0;
  list!: boolean;
  delay!: number;
  duration!:number;

  beforeEnter(el) {
    el.style.opacity = 0;
  }
  // ------------------------------------------------------------------------------
  //  Animate div from 0px to its width
  // ------------------------------------------------------------------------------
  enter(el) {
    const computedProperties = computedBoxProperties(el);
     el.style.paddingLeft = el.style.paddingRight = 0;
     el.style.width = "1px";
    el.style.overflow = 'hidden';
    let timing = this.duration || parseInt(computedProperties)['width'] / 1000;

    timing = timing >= 0.5? timing : 0.5;
    if (this.list) {
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${index * this.delay}s`;
    }
    el.style.transition = `width ${timing}s, padding-right ${timing}s, padding-left ${timing}s, opacity ${timing}s`;
    setTimeout(() => {
       el.style.opacity = 1;
      ['width', 'paddingRight', 'paddingLeft'].forEach((prop) => {
        el.style[prop] = computedProperties[prop];
      },300);
    });
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {
     el.style.opacity = '';
    window.setTimeout(() => {
      this.reset(el);
    });
  }

  beforeLeave(){}

  leave(el) {
    const computedProperties = computedBoxProperties(el);
    el.style.overflow = 'hidden';
    el.style.width = parseInt(computedProperties['width']);

    let timing =
      this.duration || parseInt(computedProperties['width']) / 1000;
    timing = timing >= 0.6 ? timing : 0.6;
   el.style.transition = `width ${timing}s, padding-left ${timing}s, padding-right ${timing}s, opacity ${timing}s`;
    setTimeout(() => {
      el.style.paddingLeft = el.style.paddingRight = 0;
      el.style.width = "1px";
    },300);
  }

  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterLeave(el) {
    window.setTimeout(() => {
      this.reset(el);
    });
  }


  reset(el) {
    el.style.width = '';
    el.style.opacity = '';
    el.style.transition = '';
    el.style.overflow = '';
    el.style.paddingLeft = '';
    el.style.paddingRight = '';
  }
}
</script>
