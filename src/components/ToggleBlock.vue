<template>
  <div class="toggle">
    <div
        class="toggle__header"
        :class="{reverse: show}"
        @click="toggleContent"
    >{{ title }}</div>
    <div class="toggle__content">
      <slot v-if="show"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleBlock",
  data() {
    return {
      show: true,
    }
  },
  props: {
    title: {
      type: String,
    }
  },
  methods: {
    toggleContent() {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";
@import '@/assets/styles/variables';

.toggle {
  margin: 30px 0;
  &__header {
    padding: 0 15px;
    color: $gray;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 10px;
    cursor: pointer;
    text-transform: uppercase;
    user-select: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      border: solid $gray;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      right: 15px;
      top: 1px;
      transform: rotateZ(45deg);
    }

    &.reverse:after {
      top: 9px;
      transform: translateY(-50%) rotateZ(-135deg);
    }

    @include screen-size('small') {
      display: none;
    }
  }
}
</style>