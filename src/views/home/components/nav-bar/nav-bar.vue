<template>
  <div class="nav-bar">
    <div class="menu-icon">
      <span :class="['iconfont',sidebarActive?'icon-zhediecaidan':'icon-zhediecaidan1' ]" @click="toggleHandle()" />
    </div>
    <div class="right-menu" />
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
.nav-bar{
  padding: 0 16px;
  width: 100%;
  height:50px;
  line-height:50px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .menu-icon{
    float: left;
    cursor: pointer;
  }
  .right-menu{
    float: right;
  }
}
</style>
