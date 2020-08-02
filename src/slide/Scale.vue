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
  name: 'scale',
  props: {
    transformOrigin: {
      type: String,
      default: 'top center',
    },
    list: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 0.25,
    },
  },
})
export default class Scale extends Vue {
  transformOrigin!: string;
  timing = 0;
  list!: boolean;
  delay!: number;

  beforeEnter(el) {
    el.style.transform = 'scale(0)';
    if (this.list) {
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${index * this.delay}s`;
    }
    el.style.transition = `transform 0.5s ease`;
    el.style.transformOrigin = this.transformOrigin;
  }
  // ------------------------------------------------------------------------------
  //  Animate size from 0px to its width
  // ------------------------------------------------------------------------------
  enter(el) {
    let timing = 0.5;
    setTimeout(() => {
      el.style.transform = 'scale(1)';
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
