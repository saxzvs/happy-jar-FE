<template>
  <nav class="flex-space-evenly flex-align-center" data-test="nav-wrapper">
    <router-link
        v-for="menu of menus"
        :key="menu.id"
        :to="menu.url"
        class="link"
        :data-test="`nav-router-${ menu.name }`">
      <font-awesome-icon :class="setActiveStyle(menu.url)" :icon="menu.icon" :data-test="`icon-${ menu.name }`" />
    </router-link>
  </nav>
</template>

<script>
import NavigationMenu from '@/assets/datas/navigationMenu'

export default {
  name: 'Navigation',
  components: {},
  data() {
    return {
      menus: NavigationMenu,
      icon: {
      },
    }
  },
  methods: {
    setActiveStyle(url) {
      // let resultClass = this.$route.path === url ? "menu selected" : "menu";


      let resultClass = "menu fa-lg";
      if (this.$route.path === url) resultClass += " selected"
      return resultClass;
    }
  }
}
</script>


<style lang="scss">
@import "./src/style/color";

nav {
  width: 100%;
  height: 8vh;
  position: fixed;
  bottom: 0;
  background: $navigationBgColor;
}

.menu {
  color: $dark-gray;

  &.selected {
    color: $white;
  }
}

</style>
