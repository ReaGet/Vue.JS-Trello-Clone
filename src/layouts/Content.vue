<template>
  <div class="content">
    <div class="content__top">
      <h1 class="title">Desk</h1>
    </div>
    <Desk />
  </div>
</template>

<script>
import Desk from "@/views/Desk";
export default {
  components: {Desk},
  name: "Content"
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
  background-color: $dark;
  padding: 30px 20px 10px 35px;
  overflow: hidden;

  &__top {
    padding: 0 0px;
  }

  .title {
    color: $title;
  }
}
</style>