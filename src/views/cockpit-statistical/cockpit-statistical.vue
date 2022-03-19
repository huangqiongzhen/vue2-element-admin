<template>
  <div class="cockpit-statistical">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: 'CockpitStatistical'
}
</script>

<style lang="scss" scoped>
.cockpit-statistical {
    overflow: hidden;
    width: 100%;
    height: 100%;
}
</style>
