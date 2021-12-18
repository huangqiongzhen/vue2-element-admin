<template>
  <div class="home">
    <el-container>
      <el-aside :class="{'SideBar': sidebarActive}">
        <side-bar />
      </el-aside>
      <el-container>
        <el-header class="header">
          <nav-bar />
        </el-header>
        <el-main class="main-container" />
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { SideBar, NavBar } from './components'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    SideBar,
    NavBar
  },
  computed: {
    ...mapGetters(['sidebarActive'])
  }
}
</script>

<style lang="scss" scoped>

</style>
