<template>
  <div class="item">
    <div class="item__content">
      Create new components
    </div>
    <div class="item__info">
      <div class="item__tags">
        <div class="tag">#BL-43</div>
      </div>
      <div class="item__bottom">
        <div class="item__followers">
          <a class="follower" href="#" v-for="i in ~~(Math.random() * 4 + 4)">
            <img
              :src="this.images[~~(Math.random() * this.images.length)]"
              :style="{'background-color': this.colors[~~(Math.random() * this.colors.length)]}"
              alt="123"
            >
          </a>
        </div>
        <div class="item__comment">
          <CommentIcon
            color="#656565"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      images: [
          // 'https://gravatar.com/avatar/832e8dca51b6ab9ea9ddb19b3096b669?s=400&d=robohash&r=x',
          // 'https://gravatar.com/avatar/e9932775376b95b865ac91870cf690df?s=400&d=robohash&r=x',
          // 'https://gravatar.com/avatar/3d690434791276b8a74440b2d3ab9d59?s=400&d=robohash&r=x',
          // 'https://gravatar.com/avatar/29706a2b92676d090564664e06cd3036?s=400&d=robohash&r=x',
          // 'https://gravatar.com/avatar/7a0e59003c2e0c9c4cfd6af066c635d7?s=400&d=robohash&r=x',
          // 'https://gravatar.com/avatar/af840a8f41d2025d63329d776f55cbcf?s=400&d=robohash&r=x',
          // 'https://gravatar.com/avatar/d138f54086a5731d34c3f1fdb6c98f88?s=400&d=robohash&r=x'
          'https://avatars.dicebear.com/v2/avataaars/4b2e6ee8046debf8f894987a734e036c.svg',
          'https://avatars.dicebear.com/v2/avataaars/09c5bdd22f88b22878eb8934f69b23a4.svg',
          'https://avatars.dicebear.com/v2/avataaars/e745876c59d6840f5757429a74ecd577.svg',
          'https://avatars.dicebear.com/v2/avataaars/21497c1082b5c0e6ab6edf73e5eab843.svg',
          'https://avatars.dicebear.com/v2/avataaars/0a4cb8cfaf77d4346b39469be4e062eb.svg',
          'https://avatars.dicebear.com/v2/avataaars/07a6aca3e708f59b162fce23660cb48e.svg',
          'https://avatars.dicebear.com/v2/avataaars/7f7d521d4dccff82fa12e0761cde5469.svg'

      ],
      colors: [
          '#fdc958',
          '#bd89ab',
          '#9cd6eb',
          '#c6b1a6',
          '#a6c6b4',
          '#b8a6c6',
          '#a6b7c6',
          '#c6b6a6',
          '#c6a6bb'
      ],
    }
  },
  methods: {
    // Пока не знаю как при каждом вызове получать новое значение
    getImage() {
      return this.images[~~(Math.random() * this.images.length)];
    },
    getColor() {
      return this.colors[~~(Math.random() * this.colors.length)];
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/styles/variables.scss";
  .item {
    background-color: $dark;
    border-radius: 5px;
    min-height: 100px;
    padding: 10px;
    color: $subtitle;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & + & {
      margin-top: 10px;
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__tags {
      display: flex;
      color: $subtitle;
      margin-top: 10px;

      .tag {
        border-width: 1px;
        border-style: dashed;
        border-color: $gray-dark;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all .1s;

        &:hover {
          color: $title;
          border-color: $subtitle;
        }
      }
    }

    &__followers {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-right: 5px;
      margin-top: 10px;
    }
    &__comment {
      flex-shrink: 0;
      svg {
        cursor: pointer;
        width: 18px;
        height: 18px;
        transition: fill .05s;
        &:hover {
          fill: #ffffff;
        }
      }
    }
  }

  .follower {
    display: block;
    height: 30px;
    width: 30px;
    //background-color: #84b89b;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid $dark;
    flex-shrink: 0;

    img {
      padding: 3px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    & + & {
      margin-left: -4px;
    }
  }
</style>