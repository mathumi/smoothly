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
  name: 'any',
  props: {
    property: {
      type: String,
      default: 'all',
    },
    list: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 0.25,
    },
    delay: {
      type: Number,
      default: 0.25,
    },
  },
})
export default class Any extends Vue {
  duration!:number;
  timing = this.duration;
  list!: boolean;
  delay!: number;
  property!: string;

  beforeEnter(el) {
    el.style.opacity = 0;
    if (this.list) {
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${index * this.delay}s`;
    }
    el.style.transition = `${this.property} ${this.duration}s ease`;
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
