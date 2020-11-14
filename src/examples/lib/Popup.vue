<template>
  <section class="popup" :class="classList">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

//Examples
@Component({
  name: 'Popup',
  components: {},
  props: {
    arrowPosition: {
      type: String,
      default: 'center',
    },
  },
})
export default class Popup extends Vue {
  arrowPosition!: string;

  get classList() {
    return {
      [`popup--${this.arrowPosition}`]: this.arrowPosition,
    };
  }


  mounted() {
   
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  width: 150px;
  height: 50px;
  text-align: center;
  padding: $space_st $space_md;
  background: white;
  max-width: 250px;
  margin-top: $space_xs;
  border-radius: $radius_st;
  border: 1px solid #eee;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 20, 0.08), 0 2px 4px 0 rgba(0, 0, 20, 0.08);
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 13px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    transform: rotate(45deg) translate(-50%, -50%);
  }
  &--{
      &left {
          &:before { 
              left: 30px;
              transform: rotate(45deg) translate(0%, -30px);
          }
      }
  }
}
</style>
