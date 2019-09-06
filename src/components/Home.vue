<template>
  <div class="Home">
    <div class="jumbotron jumbotron-fluid">
      <h1>SnowBoarding For Life</h1>
      <p>
          <br />
          I am a engineer from taiwan.
          <br />
          Named Maurice.
          <br />
          Someone likes snowboarding very much.
          <br />
          Hope one day I can go to Niseko in Japan Hokkaido.
          <br />
          So I build this website and a Todolist program to help me to get my dream.
      </p>
    </div>

    <div class="card-group">
      <div class="card">
        <img src="../assets/img1.jpg" class="card-img-top" alt="im1">
        <div class="card-body">
          <h5 class="card-title">About Niseko United</h5>
          <p class="card-text">
            Niseko United is comprised of four resorts on the one mountain, Niseko Annupuri (1,308m).
            <br /><br />
            100km south of Sapporo, Niseko Annupuri is a part of the Niseko-Shakotan-Otaru Kaigan Quasi-National Park and is the most eastern park of the Niseko Volcanic Group.
            <br /><br />
            Seasonal winds from the Eurasian continent pick up moisture over the warm currents of the Sea of Japan to from snow clouds and in turn some of the driest, lightest powder in the world.
            <br /><br />
            With its rich variety of terrain and beautiful winter woods, Niseko offers an unforgettable experience for all levels of skier/snowborder.
          </p>
        </div>
      </div>

      <div class="card text-center">
        <img src="../assets/img2.jpg" class="card-img-top" alt="img2">
        <div class="card-body">
          <h5 class="card-title">Current Weather</h5>
          <p class="card-text">

          </p>
          <h5 class="card-title"><br /><br />Website Link</h5>
          <a class="btn btn-primary btn-lg" href="http://www.niseko.ne.jp" role="button">Push Me</a>
        </div>
      </div>

      <div class="card">
        <img src="../assets/img3.jpg" class="card-img-top" alt="img3">
        <div class="card-body">
          <h5 class="card-title">Niseko United PV 2018</h5>
          <div class="video-container">
            <iframe title="NISEKO UNITED PV 2018" src="https://www.youtube.com/embed/G_qFhknHEiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  padding: 0;
}
h1 {
  font-size: 28px;
}
.card-title {
  text-align: center;
  font-size: 27px;
}
.video-container {
position: relative;
padding-bottom: 56.25%;
padding-top: 30px;
height: 0;
overflow: hidden;
}
.video-container iframe, .video-container object, .video-container embed {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
</style>
