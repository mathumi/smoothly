<template>
  <section class="play-ground" id="playGround">
    <div class="play-ground__menu">
      <div class="lead play-ground__menu-head">
        Animations
      </div>
      <div class="play-ground__list">
        <ul>
          <li v-for="anime in animationList">
            <a class="link" @click="setActive(anime)">{{ anime.displayName }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="play-ground__content">
      <Fade :duration="0.4">
      <component :is="animeComponent" />
      </Fade>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SlideHeight from '@/slide/SlideHeight.vue';
import Fade from '@/slide/Fade.vue';
import Any from '@/slide/Any.vue';
import { animations } from '@/examples/constants/animations';
//Examples
import FadeExample from '@/examples/components/FadeExample.vue';
import SlideHeightExample from '@/examples/components/SlideHeightExample.vue';
import SlideWidthExample from '@/examples/components/SlideWidthExample.vue';
import ScaleExample from '@/examples/components/ScaleExample.vue';
import TranslateExample from '@/examples/components/TranslateExample.vue';

@Component({
  name: 'PlayGround',
  components: {
    SlideHeight,
    Any,
    Fade,
    FadeExample,
    SlideHeightExample,
    SlideWidthExample,
    ScaleExample,
    TranslateExample
  },
})
export default class PlayGround extends Vue {
  animationList: any = [];
  active: string  = 'slideWidth';

  created() {
    this.animationList = animations;
  }

  setActive(anime) {
    this.active = anime.name;
  }

  get animeComponent() {
    switch(this.active) {
      case 'slideHeight':
        return 'SlideHeightExample';
      case 'slideWidth':
        return 'SlideWidthExample';
      case 'scale':
        return 'ScaleExample';
      case 'translate':
        return 'TranslateExample';
      default:
        return 'FadeExample'
    }
  }
}
</script>

<style lang="scss" scoped>
.play-ground {
  display: flex;
  height: 100vh;
  &__ {
    &menu {
      padding: $space_md $space_xl;
      background: $muted_bg;
      flex-basis: 13%;
      &- {
        &head {
          color: $primary;
          padding-bottom: $space_mi;
          margin-bottom: $space_st;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 40%;
            height: 4px;
            background: $primary_bg;
          }
        }
      }
    }
    &list {
      ul {
        list-style-type: disc;
        padding-left: $space_st;
      }
      li {
        margin-bottom: $space_xs;
      }
    }
    &content {
      padding: $space_md $space_xl;
      flex: 1;
      max-width: 50%;
    }
  }
}
</style>
