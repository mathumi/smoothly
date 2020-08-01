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
  name: 'fade',
})
export default class Fade extends Vue {
  timing = 0;

  beforeEnter(el) {
    el.style.opacity = 0;
    el.style.transition = `transform 0.5s ease`;
  }

  enter(el) {}
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {
    el.style.opacity = 1;
  }

  beforeLeave(el) {
    el.style.opacity = 1;
  }

  leave(el) {}

  afterLeave(el) {
    window.setTimeout(() => {
      el.style.opacity = 0;
    });
  }
}
</script>
