<template>
  <transition
    v-if="!list"
    @before-enter="beforeEnter"
    @enter="enter"
    mode="out-in"
    @leave="leave"
    @before-leave="beforeLeave"
    ><slot></slot
  ></transition>
  <transition-group
    v-else
    @before-enter="beforeEnter"
    @enter="enter"
    mode="out-in"
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

    let timing = this.duration || parseInt(computedProperties['height']) / 1000;
   //timing = timing >= 0.6 ? timing : 0.6;
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transition = `height ${timing}s, padding-top ${timing}s, padding-bottom ${timing}s, opacity ${timing}s`;
      ['height', 'paddingTop', 'paddingBottom'].forEach(prop => {
        el.style[prop] = computedProperties[prop];
      });
      el.addEventListener('transitionend', this.afterEnter);
    });
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(event) {
    const el = event.target;
    if (!el) {
      return;
    }
    window.setTimeout(() => {
      el.style.opacity = '';
      this.reset(el);
      el.removeEventListener('transitionend', this.afterEnter);
    });
  }

  beforeLeave(el) {}

  leave(el) {
    const computedProperties = computedBoxProperties(el);

    el.style.overflow = 'hidden';
    el.style.height = computedProperties['height'];
    console.log(el.style.height);

    let timing = this.duration || computedProperties['height'] / 1000;
    timing = timing >= 0.6 ? timing : 0.6;

    setTimeout(() => {
      el.style.transition = `height ${timing}s, padding-top ${timing}s, padding-bottom ${timing}s, opacity ${timing}s`;
      el.style.paddingTop = el.style.paddingBottom = 0;
      el.style.height = '1px';
    });
    el.addEventListener('transitionend', this.afterLeave);
  }

  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterLeave(event) {
    const el = event.target;
    if (!el) {
      return;
    }
    window.setTimeout(() => {
      el.style.opacity = '';
      this.reset(el);
      el.removeEventListener('transitionend', this.afterLeave);
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
