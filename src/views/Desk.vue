<template>
  <div class="desk">
    <Card
      v-for="i in 0"
    />
    <Card/>
    <CardCreate />
  </div>
</template>

<script>
import Card from "@/components/desk/Card";
import CardCreate from "@/components/desk/CardCreate";
export default {
  components: {Card, CardCreate},
  name: "Desk"
}
</script>

<style scoped lang="scss">
  @import '@/assets/styles/mixins.scss';
  @import '@/assets/styles/variables.scss';
  .desk {
    padding: 30px 0px;
    display: flex;
    flex-grow: 1;
    overflow-x: auto;
    align-items: flex-start;
    @include scrollbar;
  }
</style>