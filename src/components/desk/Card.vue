<template>
  <div class="card">
    <div class="card__top">
      <div class="card__title">Title</div>
      <div class="card__edit">
        <EditIcon/>
      </div>
    </div>
    <div class="list" v-if="!empty">
      <Item v-for="i in ~~(Math.random() * 4 + 1)"/>
    </div>
    <div v-if="empty" class="list list--empty">
      <i>This card is empty. Please add new task :)</i>
    </div>
    <dov v-if="empty" class="card__bottom">
      <div class="card__add">
        +&nbsp;add new task
      </div>
    </dov>
  </div>
</template>

<script>
import Item from "@/components/desk/Item";
import EditIcon from "@/components/icons/EditIcon";
export default {
  components: {EditIcon, Item},
  name: "Card",
  data() {
    return {
      empty: Math.random() > 0.5,
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

    & + & {
      margin-left: 20px;
    }

    &__top {
      padding: 5px 10px;
      margin-bottom: 10px;
      font-size: 1.1rem;
      display: flex;
      justify-content: flex-start;

      &:hover {
        .card__edit {
          visibility: visible;
        }
      }
    }

    &__title {
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }

    &__edit {
      margin-left: 10px;
      cursor: pointer;
      visibility: hidden;
      transition: visibility .1s;
    }

    &__bottom {
      display: flex;
      padding: 0px 10px 0 10px;
      margin-top: 15px;
    }

    &__add {
      font-weight: 600;
      font-style: italic;
      color: #cebfda;
      cursor: pointer;
      user-select: none;

      &:hover {
        border-bottom: 1px dashed;
      }
    }
  }
  .list {
    &--empty {
      padding: 0 10px;
      //color: #b8a6c6;
      display: flex;
      color: #746e78;

      i {
        font-family: 'Montserrat';
        font-size: 0.8rem;
      }
    }
  }
</style>