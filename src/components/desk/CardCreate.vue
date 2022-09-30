<template>
  <div
      class="card card--create"
      :class="{is_creating: is_creating}"
      v-click-outside="onClickOutside"
  >
    <span
        v-show="!is_creating"
        class="card__title"
        @click="onClick"
    >
      +&nbsp;Create Card
    </span>
    <form v-show="is_creating" @submit.prevent="createCard">
      <input
          type="text"
          class="card__name"
          v-model.trim="cardName"
          placeholder="Введите название"
      />

    </form>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      is_creating: false,
      cardName: '',
    }
  },
  methods: {
    createCard() {
      console.log(this.cardName)
    },
    onClickOutside() {
      this.is_creating = false;
    },
    onClick() {
      this.is_creating = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.card {
  background-color: $dark-hover;
  width: 300px;
  min-height: 50px;
  border-radius: 5px;
  flex-shrink: 0;
  padding: 10px;
  transition: background-color .1s ease-in-out;
  user-select: none;

  &--create {
    cursor: pointer;
    display: flex;
  }

  &__title {
    color: $subtitle;
    font-weight: 600;
    transition: color .1s ease-in-out;
    padding: 5px 10px;
    width: 100%;
  }

  form {
    width: 100%;
  }

  &__name {
    padding: 10px 10px;
    border-radius: 2px;
    border: none;
    outline: none;
    font-size: 14px;
    width: 100%;
    //box-shadow: 0 0 0px 3px $green;
    box-shadow: 0 0 0px 3px $blueGreen;
    background-color: #f1f1f1;
  }

  &:not(.is_creating):hover {
    background-color: $dark-light;
    .card__title {
      color: $title;
    }
  }

  & + & {
    margin-left: 20px;
  }
}
</style>