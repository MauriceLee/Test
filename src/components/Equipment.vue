<template>
  <div>
    <b-jumbotron>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="black"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >

        <b-carousel-slide>
          <h3>Snowboard</h3>
          <p class="carotext">Your best and important friend for snowboarding.</p>
          <template v-slot:img>
            <img
              class="d-block"
              width="512"
              height="340"
              src="../assets/img4.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <h3>Clothes</h3>
          <p class="carotext">Keep your body warm and protect your body.</p>
          <template v-slot:img>
            <img
              class="d-block"
              width="512"
              height="340"
              src="../assets/img5.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <h3>Goggles</h3>
          <p class="carotext">Protect your eyes and let you see clearly.</p>
          <template v-slot:img>
            <img
              class="d-block"
              width="512"
              height="340"
              src="../assets/img6.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

      </b-carousel>
      <b-button
        v-b-modal.modal-center
        variant="info"
      >Cart (0)</b-button>
    </b-jumbotron>

    <b-modal id="modal-center" centered title="BootstrapVue">
      <p class="my-4">Vertically centered modal!</p>
    </b-modal>

    <b-card-group deck>
      <b-card>
        <b-card-img :src="require('../assets/img4.jpg')"></b-card-img>
        <div class="mycard">
          <h2>Snowboard</h2>
          <h5>
            <b-badge variant="danger">特價：6999 NTD</b-badge>
          </h5>
          <b-card-text>
            Your best and important friend for snowboarding.
          </b-card-text>
        </div>
        <template v-slot:footer>
          <b-button variant="outline-info">Buy</b-button>
        </template>
      </b-card>

      <b-card>
        <b-card-img :src="require('../assets/img5.jpg')"></b-card-img>
        <div class="mycard">
          <h2>Clothes</h2>
          <h5>
            <b-badge variant="success">售價：2000 NTD</b-badge>
          </h5>
          <b-card-text>
            Keep your body warm and protect your body.
          </b-card-text>
        </div>
        <template v-slot:footer>
          <b-button variant="outline-info">Buy</b-button>
        </template>
      </b-card>

      <b-card>
        <b-card-img :src="require('../assets/img6.jpg')"></b-card-img>
        <div class="mycard">
          <h2>Goggles</h2>
          <h5>
            <b-badge variant="success">售價：780 NTD</b-badge>
          </h5>
          <b-card-text>
            Protect your eyes and let you see clearly.
          </b-card-text>
        </div>
        <template v-slot:footer>
          <b-button variant="outline-info">Buy</b-button>
        </template>
      </b-card>
    </b-card-group>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .d-block {
    margin: auto;
    opacity: 0.6;
  }
  h3,
  .carotext {
    font-family: monospace;
  }
  h3 {
    font-size: 2.15rem;
  }
  .jumbotron {
    padding: 0;
    margin-bottom: 1rem;
  }
  .card-body {
    padding: 0;
  }
  .mycard {
    padding: 20px;
  }
  h2 {
    margin-bottom: 6px;
  }
  .badge {
    line-height: 1.1;
  }
</style>
