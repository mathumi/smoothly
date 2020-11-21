<template>
  <transition :mode="mode" @enter="enter" @before-leave="beforeLeave">
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'toggle',
  props: {
    delay: {
      type: Number,
      default: 0.25,
    },
    duration: {
      type: Number,
      default: 0.25,
    },
  },
})
export default class Toggle extends Vue { 
  parent: any;
  duration!:number;
  constructor() {
    super();
    this.parent = null;
  }

  mounted() {
    this.parent = this.$el.parentNode;
  }

  enter(el) {
    if (!this.parent) {
      return;
    }
    this.parent.style['opacity'] = '0';
    el.style.opacity = '0';
    window.setTimeout(() => {
      this.setTiming(el.clientHeight);
      this.parent!.style['height'] = el.clientHeight + 'px';
      this.resetElement(el);
    }, 0);
  }

  setTiming(elHeight) {
    const durationTemp = ((elHeight / 10) * 1) / 100;
    // minDuration = 0.5,
    const duration = this.duration || (durationTemp < 0.5 ? 0.5 : durationTemp);

    this.parent!.style[
      'transition'
    ] = `all ${duration}s ease, height ${duration}s ease`;
  }

  resetElement(el) {
    window.setTimeout(() => {
      this.parent!.style['opacity'] = '1';
      el.style.opacity = '1';
      this.parent!.style['height'] = 'auto';
    }, 400);
  }

  beforeLeave(el) {
    if (!this.parent) {
      return;
    }
    this.setTiming(el.clientHeight);
    this.parent!.style['height'] = el.clientHeight + 'px';
    this.parent.style['opacity'] = '0';
  }
}
</script>
