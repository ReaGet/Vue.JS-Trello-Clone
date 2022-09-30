<template>
  <div class="menu__item" :class="{active}">
    <div class="icon__wrapper">
      <component :is="icon" :color="color"></component>
    </div>
    <div class="menu__title">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    icon: {
      type: Object,
    },
    path: {
      type: String,
    },
    color: {
      type: String,
      default: '#999999',
    },
    active: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";
@import '@/assets/styles/variables.scss';
.menu {
  &__item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover,
    &.active {
      background-color: $dark-hover;
      .menu__title {
        color: #ffffff;
      }
    }

    & + & {
      margin-top: 5px;
    }

    @include screen-size('small') {
      border-radius: 0;
    }
  }
  &__title {
    padding-left: 10px;
    color: $gray;
    font-weight: 600;

    @include screen-size('small') {
      display: none;
    }
  }
}
</style>