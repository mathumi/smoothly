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
import { parse } from 'querystring';

@Component({
  name: 'slide-height',
  props: {
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
    duration: {
      type: Number,
      default: 0.5,
    },
  },
})
export default class SlideHeight extends Vue {
  list!: boolean;
  delay!: number;
  childrenLength: number = 0;
  hideTillDelay!: boolean;
  duration!: number;
  beforeEnter(el) {
    this.hideTillDelay && (el.style.opacity = 0);
  }

  // ------------------------------------------------------------------------------
  //  Animate div from 0px to its height
  // ------------------------------------------------------------------------------
  enter(el) {
    const computedProperties = computedBoxProperties(el);
    el.style.overflow = 'hidden';
    el.style.paddingTop = el.style.paddingBottom = el.style.height = 0;
    //el.style.display = 'none';
    if (this.list) {
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${index * this.delay}s`;
    }

    let timing =
      this.duration || parseInt(computedProperties)['height'] / 1000;
    timing = timing >= 0.6 ? timing : 0.6;

    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transition = `height ${timing}s, padding-top ${timing}s, padding-bottom ${timing}s, opacity ${timing}s`;
      ['height', 'paddingTop', 'paddingBottom'].forEach((prop) => {
        el.style[prop] = computedProperties[prop];
      });
    });
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {
    el.style.opacity = '';
    window.setTimeout(() => {
      this.reset(el);
    }, 100);
  }

  beforeLeave(el) {}

  leave(el) {
    const computedProperties = computedBoxProperties(el);

    el.style.overflow = 'hidden';
    el.style.height = parseInt(computedProperties['height']);

    let timing =
      this.duration || parseInt(computedProperties['height']) / 1000;
    timing = timing >= 0.6 ? timing : 0.6;

    setTimeout(() => {
      el.style.transition = `height ${timing}s, padding-top ${timing}s, padding-bottom ${timing}s, opacity ${timing}s`;
      el.style.paddingTop = el.style.paddingBottom = 0;
      el.style.height = 1;
    });
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
    el.style.height = '';
    el.style.opacity = '';
    el.style.transition = '';
    el.style.overflow = '';
    el.style.paddingTop = '';
    el.style.paddingBottom = '';
  }
}
</script>

//
<style lang="scss" scoped>
// .slide-list {
//   $total: var(--total);
//   @for $i from 1 through $total {
//     .delay:nth-child(#{$i}) {
//       transition-delay: 0.2s * $i;
//     }
//   }
// }
//
</style>
