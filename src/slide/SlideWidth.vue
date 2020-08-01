<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    mode="out-in"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @leave="leave"
    @before-leave="beforeLeave"
    ><slot></slot
  ></transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'slide-width',
})
export default class SlideWidth extends Vue {
  elWidth = 0;
  timing = 0;

  beforeEnter(el) {
    el.style.opacity = 0;
  }
  // ------------------------------------------------------------------------------
  //  Animate div from 0px to its width
  // ------------------------------------------------------------------------------
  enter(el) {
    this.elWidth = el.clientWidth;
    el.style.width = 0;
    let timing = this.elWidth / 1000;
    timing = timing >= 0.4 ? timing : 0.4;
    el.style.transition = `opacity ${timing}s, height ${timing}s, width ${timing}s, padding ${timing}s, border ${timing}s`;
    el.style.display = '';
    setTimeout(() => {
      el.style.width = this.elWidth;
    }, 10);
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {
    el.style.opacity = 1;
    el.style.transition = '';
    window.setTimeout(() => {
      el.style.width = 'auto';
    }, 100);
  }

  beforeLeave(el) {
    el.style.opacity = 0;
    this.elWidth = el.clientWidth;
    el.style.width = this.elWidth;
    let timing = this.elWidth / 1000;
    timing = timing >= 0.4 ? timing : 0.4;
    el.style.transition = `opacity ${timing}s, width ${timing}s, padding ${timing}s, border ${timing}s`;
  }

  leave(el) {
    setTimeout(() => {
      el.style.width = 0;
    }, 10);
  }

  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterLeave(el) {
    window.setTimeout(() => {
      el.style.width = 'auto';
      el.style.opacity = 0;
      el.style.transition = '';
      el.style.display = '';
    });
  }
}
</script>
