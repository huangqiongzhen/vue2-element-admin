<template>
  <div class="nav-bar">
    <div class="menu-icon">
      <span :class="['iconfont',sidebarActive?'icon-zhediecaidan':'icon-zhediecaidan1' ]" @click="toggleHandle()" />
    </div>
    <div class="right-menu">
      <div class="right-menu-item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  data() {
    return {
      classObj: 'icon-zhediecaidan'
    }
  },
  computed: {
    ...mapGetters(['sidebarActive'])
  },
  methods: {
    toggleHandle() {
      this.$store.dispatch('setSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
    overflow: hidden;
    width: 100%;
    height: 50px;
    padding: 0 16px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    line-height: 50px;

    .menu-icon {
        cursor: pointer;
        float: left;
    }
    .right-menu {
        float: right;
    }
}
</style>
