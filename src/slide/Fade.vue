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
  name: 'fade',
  props: {
    list: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
  },
})
export default class Fade extends Vue {
  timing = 0;
  list!: boolean;
  duration!: number;
  delay!: number;

  beforeEnter(el) {
    el.style.opacity = 0;
    if (this.list) {
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${index * this.delay * 1000}s`;
    }
    el.style.transition = `opacity ${this.duration}s ease`;
  }

  enter(el) {
    setTimeout(() => {
      el.style.opacity = 1;
    }, this.delay * 1000 || 0);
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {
    
  }

  beforeLeave(el) {
    el.style.opacity = 1;
  }

  leave(el) {
    window.setTimeout(() => {
      el.style.opacity = 0;
    });
  }

  afterLeave(el) {}
}
</script>
