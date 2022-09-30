<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <div class="logo">
        <div class="icon__wrapper">
          <LogoIcon/>
        </div>
        <div class="logo__text">
          Logo
        </div>
      </div>
    </div>
    <Menu :items="menu1" />
    <ToggleBlock title="To-Do">
      <Menu :items="menu2" />
    </ToggleBlock>
    <ToggleBlock title="test dropdown">
      <Menu :items="menu3" />
    </ToggleBlock>
  </div>
</template>

<script>
import Menu from "@/components/menu/Menu";
import Item from "@/components/menu/Item";
import ToggleBlock from "@/components/ToggleBlock";

export default {
  components: {ToggleBlock, Item, Menu},
  name: "Sidebar",
  data() {
    return {
      menu1: [
        {path: '/dashboard', icon: 'DashboardIcon', title: 'Dashboard', active: false },
        {path: '/team', icon: 'TeamIcon', title: 'Team', active: false },
      ],
      menu2: [
        {path: '/desk', icon: 'DeskIcon', title: 'Desk', color: '#eb4e49', active: true },
        {path: '/reports', icon: 'ReportIcon', title: 'Reports', active: false },
      ],
      menu3: [
        {path: '/desk', icon: 'DeskIcon', title: 'Matvey', color: '#94c694', active: false },
        {path: '/reports', icon: 'ReportIcon', title: 'PHP', color: '#848db8', active: false },
      ]
    }
  }
}
// eb4e49
</script>

<style scoped lang="scss">
  @import "@/assets/styles/mixins.scss";
  @import '@/assets/styles/variables.scss';
  .sidebar {
    width: 300px;
    min-height: 100vh;
    background-color: $dark-light;
    flex-shrink: 0;
    color: #fff;
    padding: 30px 20px;

    &__top {
      color: $gray;
      font-weight: 600;
      font-size: 18px;
      padding: 0 0 0 15px;
      margin-bottom: 30px;

      @include screen-size('small') {
        padding: 0;
        display: flex;
        justify-content: center;
      }
    }

    @include screen-size('small') {
      width: 50px;
      padding: 15px 0;

      .logo__text {
        display: none;
      }
    }
  }

  ::v-deep .icon__wrapper {
    height: 26px;
    width: 26px;
    align-items: center;
    display: flex;
  }

  .logo {
    display: flex;
    align-items: center;
    color: $title;

    &__text {
      margin-left: 10px;
    }

    .icon__wrapper {
      width: 30px;
      height: 30px;
    }

    svg {
      fill: $title;
    }
  }
</style>