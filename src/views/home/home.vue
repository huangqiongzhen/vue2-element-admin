<template>
  <div class="home">
    <el-container>
      <el-aside>
        <side-bar />
      </el-aside>
      <el-main class="main-container">
        <nav-bar />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { SideBar, NavBar } from './components'
export default {
  name: 'Home',
  components: {
    SideBar,
    NavBar
  }
}
</script>

<style lang="scss" scoped>

</style>
