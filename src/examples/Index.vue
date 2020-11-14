<template>
  <div class="app">
    <header class="header">
      <div class="header__logo">
        <i class="lead c-primary">Smoothly</i>
      </div>
    </header>
    <section class="banner">
      <div class="banner__wrap">
        <translate translateFromY="30px" translateToY="0px">
          <div class="banner__head" key="head">
            A functional, flexible JavaScript animation library
          </div>
           </translate>
           <translate translateFromY="30px" translateToY="0px" :delay="0.7">
             <div>
              <Any :duration="0.3">
                <router-link class="button button--curve" to="#playGround" >Get Started</router-link>
              </Any>
             </div>
           </translate>
          </div>
    </section>
    <PlayGround />
     <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PlayGround from '@/examples/components/PlayGround.vue';
import SlideHeight from '@/slide/SlideHeight.vue';
import Translate from '@/slide/Translate.vue';
import Any from '@/slide/Any.vue';

@Component({
  name: 'Index',
  components: {
    SlideHeight,
    Translate,
    Any,
    PlayGround
  },
})
export default class Index extends Vue {
  message: string = 'Hello';
  showCard: boolean = true;
  showList: boolean = false;
  component: string = 'slide-height';
}
</script>

<style lang="scss" src="@/styles/app.scss"></style>
<style lang="scss" scoped>
.banner {
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d2d2d3;
  // box-shadow: 0 1px 2px 0 rgba(0, 0, 20, 0.08), 0 2px 4px 0 rgba(0, 0, 20, 0.08);
  &__ {
    &head {
      font-size: $fs_h4;
      margin-bottom: $space_st;
    }
    &wrap {
      text-align: center;
    }
  }
}

.header {
  display: flex;
  padding: $space_st $space_md;
  border-bottom: 1px solid #d2d2d3;
  &__ {
    &logo {
    }
  }
}
</style>
