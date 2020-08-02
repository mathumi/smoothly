<template>
  <div class="container-fluid tm-main" :style="{backgroundImage:`url(${bgImg})`}">
    <div class="row tm-main-row">
      <!-- Sidebar -->
      <div id="tmSideBar" class="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar">
        <button id="tmMainNavToggle" class="menu-icon">&#9776;</button>

        <div class="inner">
          <nav id="tmMainNav" class="tm-main-nav">
            <ul>
              <li>
                <a
                  href="#intro"
                  id="tmNavLink1"
                  class="scrolly"
                  :class="{ active: active === 'tm-section-1' }"
                  data-bg-img="constructive_bg_01.jpg"
                  data-page="tm-section-1"
                  @click="select"
                >
                  <i class="fas fa-home tm-nav-fa-icon"></i>
                  <span>Introduction</span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  id="tmNavLink2"
                  class="scrolly"
                  :class="{ active: active === 'tm-section-2' }"
                  data-bg-img="constructive_bg_02.jpg"
                  data-page="tm-section-2"
                  data-page-type="carousel"
                  @click="select"
                >
                  <i class="fas fa-map tm-nav-fa-icon"></i>
                  <span>Our Products</span>
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  class="scrolly"
                  :class="{ active: active === 'tm-section-3' }"
                  data-bg-img="constructive_bg_03.jpg"
                  data-page="tm-section-3"
                  @click="select"
                >
                  <i class="fas fa-users tm-nav-fa-icon"></i>
                  <span>Our Company</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="scrolly"
                  :class="{ active: active === 'tm-section-4' }"
                  data-bg-img="constructive_bg_04.jpg"
                  data-page="tm-section-4"
                  @click="select"
                >
                  <i class="fas fa-comments tm-nav-fa-icon"></i>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 tm-content">
        <!-- section 1 -->
        <section
          id="tm-section-1"
          :class="{ show: active === 'tm-section-1' }"
          class="tm-section"
        >
          <div class="ml-auto">
            <header class="mb-4">
              <h1 class="tm-text-shadow">Constructive Design</h1>
            </header>
            <p class="mb-5 tm-font-big">
              Aenean fermentum vestibulum ipsum, ut pretium erat sodales
              sodales. Pellentesque quis orci vitae dui commodo sodales et ut
              quam. Etiam vitae egestas purus, ut malesuada enim.
            </p>
            <a
              href="#"
              class="btn tm-btn tm-font-big"
              data-nav-link="#tmNavLink2"
              >Continue...</a
            >
            <!-- data-nav-link holds the ID of nav item, which means this link should behave the same as that nav item  -->
          </div>
        </section>

        <!-- section 2 -->
        <section
          id="tm-section-2"
          class="tm-section"
          :class="{ show: active === 'tm-section-2' }"
        >
          <div>
            <header class="mb-4">
              <h2 class="tm-text-shadow">Our Products</h2>
            </header>
            <div class="tm-img-container">
              <div class="tm-img-slider">
                <a
                  href="@/examples/img/gallery-img-01.jpg"
                  class="tm-slider-img"
                  ><img
                    src="@/examples/img/gallery-img-01-tn.jpg"
                    alt="Image"
                    class="img-fluid"
                /></a>
                <a
                  href="@/examples/img/gallery-img-02.jpg"
                  class="tm-slider-img"
                  ><img
                    src="@/examples/img/gallery-img-02-tn.jpg"
                    alt="Image"
                    class="img-fluid"
                /></a>
                <a
                  href="@/examples/img/gallery-img-03.jpg"
                  class="tm-slider-img"
                  ><img
                    src="@/examples/img/gallery-img-03-tn.jpg"
                    alt="Image"
                    class="img-fluid"
                /></a>
                <a
                  href="@/examples/img/gallery-img-04.jpg"
                  class="tm-slider-img"
                  ><img
                    src="@/examples/img/gallery-img-04-tn.jpg"
                    alt="Image"
                    class="img-fluid"
                /></a>
                <a
                  href="@/examples/img/gallery-img-05.jpg"
                  class="tm-slider-img"
                  ><img
                    src="@/examples/img/gallery-img-05-tn.jpg"
                    alt="Image"
                    class="img-fluid"
                /></a>
                <a
                  href="@/examples/img/gallery-img-06.jpg"
                  class="tm-slider-img"
                  ><img
                    src="@/examples/img/gallery-img-06-tn.jpg"
                    alt="Image"
                    class="img-fluid"
                /></a>
              </div>
            </div>
          </div>
        </section>

        <!-- section 3 -->
        <section
          id="tm-section-3"
          class="tm-section"
          :class="{ show: active === 'tm-section-3' }"
        >
          <div class="row mb-4">
            <header class="col-xl-12">
              <h2 class="tm-text-shadow">Our Company</h2>
            </header>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
              <div class="media tm-bg-transparent-black tm-border-white">
                <i class="fab fa-apple tm-icon-circled tm-icon-media"></i>
                <div class="media-body">
                  <h3>HTML Templates</h3>
                  <p>
                    We provide a variety of templates for you at no cost. Please
                    spread a word about
                    <a href="https://plus.google.com/+tooplate" target="_parent"
                      >Tooplate</a
                    >
                    website. Thank you.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
              <div class="media tm-bg-transparent-black tm-border-white">
                <i
                  class="fas fa-map-pin mr-4 tm-icon-circled tm-icon-media"
                ></i>
                <div class="media-body">
                  <h3>Free Images</h3>
                  <p>
                    Photos by
                    <a href="https://unsplash.com" target="_blank"
                      >Unsplash.com</a
                    >
                    website, ac ornare arcu finibus sed. Aenean ultrices nisi
                    sit amet facilisis viverra.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
              <div class="media tm-bg-transparent-black tm-border-white">
                <i class="fab fa-fly mr-4 tm-icon-circled tm-icon-media"></i>
                <div class="media-body">
                  <h3>Phasellus eleifend</h3>
                  <p>
                    Phasellus feugiat scelerisque sapien, ac ornare arcu finibus
                    sed. Aenean ultrices nisi sit amet facilisis viverra.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
              <div class="media tm-bg-transparent-black tm-border-white">
                <i class="fab fa-linode mr-4 tm-icon-circled tm-icon-media"></i>
                <div class="media-body">
                  <h3>Phasellus eleifend</h3>
                  <p>
                    Phasellus feugiat scelerisque sapien, ac ornare arcu finibus
                    sed. Aenean ultrices nisi sit amet facilisis viverra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- section 4 -->
        <section
          id="tm-section-4"
          class="tm-section"
          :class="{ show: active === 'tm-section-4' }"
        >
          <div class="tm-bg-transparent-black tm-contact-box-pad">
            <div class="row mb-4">
              <div class="col-sm-12">
                <header><h2 class="tm-text-shadow">Contact Us</h2></header>
              </div>
            </div>
            <div class="row tm-page-4-content">
              <div class="col-md-6 col-sm-12 tm-contact-col">
                <div class="contact_message">
                  <form action="#contact" method="post" class="contact-form">
                    <div class="form-group">
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        class="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        class="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        id="contact_message"
                        name="contact_message"
                        class="form-control"
                        rows="9"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="btn tm-btn-submit tm-btn ml-auto"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 tm-contact-col">
                <div class="tm-address-box">
                  <p>
                    Aliquam interdum, nisl sedd faucibus tempor, massa velit
                    laoreet ipsum, et faucibus sapien magna at enim. Suspendisse
                    a dictum tortor.
                  </p>
                  <p>
                    Curabitur venenatis leo in augue convallis, vulputate
                    sollicitudin ex maximus.
                  </p>
                  <address>
                    120-240 Aliquam nec neque augue<br />
                    Suspendisse tincidunt nunc,<br />
                    vitae sagis justo 11000
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- .tm-content -->
      <footer class="footer-link">
        <p class="tm-copyright-text">
          Copyright &copy; 2018 Constructive Co. Ltd. - Design: Tooplate
        </p>
      </footer>
    </div>
    <!-- row -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Covid',
  props: {},
})
export default class Covid extends Vue {
  active: string = 'tm-section-1';
  bgImg: string = 'constructive_bg_01.jpg';
  select(e) {
    const section =
      e.target.getAttribute('data-page') ||
      e.target.parentNode.getAttribute('data-page');
    const bgImg =
      e.target.getAttribute('data-bg-img') ||
      e.target.parentNode.getAttribute('data-bg-img');
    this.bgImg = require(`@/examples/img/${bgImg}`);
    this.active = section;
  }
}
</script>
<style lang="scss">
@import '@/examples/css/fontawesome-all.min.scss';
@import '@/examples/css/bootstrap.min.scss';
@import '@/examples/css/tooplate-style.scss';
</style>
