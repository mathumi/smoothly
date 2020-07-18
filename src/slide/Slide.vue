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
  name: 'slide',
})
export default class slide extends Vue {
  elHeight = 0;
  timing = 0;

  beforeEnter(el) {
    el.style.opacity = 0;
  }
  // ------------------------------------------------------------------------------
  //  Animate div from 0px to its height
  // ------------------------------------------------------------------------------
  enter(el) {
    this.elHeight = el.clientHeight;
    el.style.height = 0;
    el.style.display = 'none';
    let timing = this.elHeight / 1000;
    timing = timing >= 0.4 ? timing : 0.4;
    el.style.transition = `opacity ${timing}s, height ${timing}s`;
    el.style.display = '';
    setTimeout(() => {
      el.style.height = this.elHeight;
    }, 10);
  }
  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterEnter(el) {
    el.style.opacity = 1;
    el.style.transition = '';
    window.setTimeout(() => {
      el.style.height = 'auto';
    }, 100);
  }

  beforeLeave(el) {
    el.style.opacity = 0;
    this.elHeight = el.clientHeight;
    el.style.height =  this.elHeight;
    let timing = this.elHeight / 1000;
    timing = timing >= 0.4 ? timing : 0.4;
    el.style.transition = `opacity ${timing}s, height ${timing}s`;
  }

  leave(el) {
    setTimeout(()=>{
       el.style.height = 0;
    },10)
  }
  

  // ------------------------------------------------------------------------------
  //  Reset values
  // ------------------------------------------------------------------------------
  afterLeave(el) {
    window.setTimeout(() => {
      el.style.height = 'auto';
      el.style.opacity = 0;
      el.style.transition = '';
      el.style.display = '';
    });
  }
}
</script>
