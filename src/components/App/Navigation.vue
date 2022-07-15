<template>
  <nav class="nav" data-test="nav-wrapper">
    <router-link
        v-for="menu of menus"
        :key="menu.id"
        :to="menu.url"
        class="link"
        :data-test="`nav-router-${ menu.name }`">
      <font-awesome-icon
          :class="setActiveStyle(menu.url)"
          :icon="menu.icon"
          :data-test="`icon-${ menu.name }`" />
    </router-link>
  </nav>
</template>

<script>
import NavigationMenu from '@/assets/datas/navigationMenu';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navigation',
  components: {},
  data() {
    return {
      menus: NavigationMenu,
      icon: {
      },
    };
  },
  methods: {
    setActiveStyle(url) {
      let resultClass = 'menu fa-lg';

      if (this.$route.path === url) resultClass += ' selected';

      return resultClass;
    },
  },
};
</script>

<style lang="scss">
@import "./src/style/color";

.nav {
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 8vh;
  background: $navigation-background;

  .menu {
    color: $dark-gray;

    &.selected {
      color: $white;
    }
  }
}

</style>
