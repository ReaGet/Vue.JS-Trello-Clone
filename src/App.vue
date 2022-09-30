<template>
  <div class="container">
    <Sidebar />
    <Content />
  </div>
</template>

<script>
import Sidebar from "@/layouts/Sidebar";
import Content from "@/layouts/Content"

export default {
  components: {Content, Sidebar}
}
</script>

<style scoped>
  .container {
    display: flex;
  }
</style>