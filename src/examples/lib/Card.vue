<template>
  <section class="card">
      <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

//Examples
@Component({
  name: 'Card',
  components: {
      
  },
})
export default class Card extends Vue {

}
</script>

<style lang="scss" scoped>
    .card {
        padding: $space_st $space_md;
        background: white;
        border-radius: $radius_st;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 20, 0.08), 0 2px 4px 0 rgba(0, 0, 20, 0.08);
          border: 1px solid #eee;
    }
</style>
