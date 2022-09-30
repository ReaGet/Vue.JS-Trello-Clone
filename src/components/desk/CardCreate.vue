<template>
  <div
      class="card card--create"
      :class="{is_creating: is_creating}"
      v-click-outside="closeEditor"
  >
    <span
        v-show="!is_creating"
        class="card__title"
        @click="openEditor"
    >
      +&nbsp;Create Card
    </span>
    <form class="form" v-show="is_creating" @submit.prevent="createCard">
      <div class="form__row">
        <input
            type="text"
            class="form__input"
            v-model.trim="cardName"
            placeholder="Введите название"
        />
      </div>
      <div class="form__row form__row">
        <button class="form__button">Create Card</button>
        <div class="form__cancel">
          <CancelIcon
              color="#bd89ab"
              @click="closeEditor"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      is_creating: true,
      cardName: '',
    }
  },
  methods: {
    createCard() {
      console.log(this.cardName)
    },
    closeEditor() {
      this.is_creating = false;
    },
    openEditor(e) {
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
    display: flex;
  }

  &__title {
    color: $subtitle;
    font-weight: 600;
    transition: color .1s ease-in-out;
    padding: 5px 10px;
    width: 100%;
    cursor: pointer;
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

.form {
  width: 100%;

  &__input {
    padding: 10px 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 0.9rem;
    width: 100%;
    //box-shadow: 0 0 0px 3px $green;
    //box-shadow: 0 0 0px 3px $blueGreen;
    border: 3px solid $purple;
    background-color: #f1f1f1;
  }

  &__row {
    display: flex;
    align-items: center;

    & + & {
      margin-top: 10px;
    }
  }

  &__button {
    border: none;
    border-radius: 2px;
    background-color: $purple;
    padding: 10px 10px;
    font-size: 0.9rem;
    color: #fff;
    //font-weight: 600;
    cursor: pointer;
  }

  &__cancel {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>