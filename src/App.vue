<template>
  <el-container>
    <el-aside width="200px">
      <Nav/>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: 'App',
  components: {Nav}
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
</style>
