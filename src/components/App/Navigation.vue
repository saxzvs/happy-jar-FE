<template>
  <nav class="flex-space-evenly flex-align-center" data-test="nav-wrapper">
    <router-link
        v-for="(menu, index) of menus"
        :key="index"
        :to="menu.url"
        class="link"
        data-test="nav-router">
      <font-awesome-icon :icon="menu.icon" />
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
  }
}
</script>

<style lang="scss">

nav {
  width: 100%;
  height: 8vh;
  position: fixed;
  bottom: 0;
  background: #000;
}

.link {
  color: #fff;
}
</style>
