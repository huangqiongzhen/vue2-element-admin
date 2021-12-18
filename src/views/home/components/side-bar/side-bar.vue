<template>
  <div class="side-bar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      />
    </el-scrollbar>
  </div>
</template>

<script>
import variables from 'styles/variables.scss'

export default {
  name: 'SideBar',
  data() {
    return {
      activeMenu: '1',
      isCollapse: false,
      variables: variables
    }
  },
  mounted() {
    console.log(variables)
  }

}
</script>

<style lang="scss" scoped>
</style>
