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
    translateX: {
      type: String,
      default: '',
    },
    translateY: {
      type: String,
      default: '',
    },
    list: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Translate extends Vue {
  translateX!: string;
  translateY!: string;
  list!: boolean;
  timing = 0;

  beforeEnter(el) {
    el.style.transform = `translate(0,0)`;
    el.style.transition = `transform 0.5s ease`;
  }
  // ------------------------------------------------------------------------------
  //  Animate div from 0px to its width
  // ------------------------------------------------------------------------------
  enter(el) {
    let timing = 0.5;
    if (this.list) {
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${index * 0.25}s`;
    }
    setTimeout(() => {
      el.style.transform = `translate(${this.translateX || 0},${this
        .translateY || 0})`;
    }, 20);
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {
    el.style.opacity = 1;
  }

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
