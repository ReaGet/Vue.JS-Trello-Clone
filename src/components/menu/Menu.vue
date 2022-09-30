<template>
  <div class="menu">
    <Item
      v-for="item in items"
      :icon="item.icon"
      :path="item.path"
      :color="item.color"
      :active="item.active"
    >
      {{ item.title }}
    </Item>
  </div>
</template>

<script>
import Item from "@/components/menu/Item";
import DashboardIcon from "@/components/icons/DashboardIcon";

export default {
  components: {Item},
  name: "Menu",
  props: {
    items: {
      type: Object
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">

</style>