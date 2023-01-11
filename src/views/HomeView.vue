<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-6">text</div>
          <div class="col-md-6">
            <img src="@/assets/images/home.png" class="img-fluid" alt=".." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-image: url(../assets/images/header-bg.png);
}
</style>
