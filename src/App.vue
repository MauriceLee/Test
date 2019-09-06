<template>
  <div id="app" class="container">
    <div class="row no-gutters">
      <div class="col-sm">
        <router-link :to="'/'">
          <button type="button" class="btn btn-outline-primary btn-block">Home</button>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link :to="'Equipment'">
          <button type="button" class="btn btn-outline-primary btn-block">Equipment</button>
        </router-link>
      </div>
      <div class="col-sm">
        <router-link :to="'Todolist'">
          <button type="button" class="btn btn-outline-primary btn-block">Todolist</button>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
.row {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
