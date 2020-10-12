<template>
  <el-container>
    <el-row>
      <el-menu
          :default-active="this.$route.path"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <el-menu-item class="menuItem" v-for="(item,index) in navList" :key="index" :index="item.name"
                      style="padding-left: 10px">
          <template slot="title">
            <i :class="item.icon"></i>
            <span> {{ item.navItem }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-row>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {name: '/components/process/ProcessManager', navItem: '流程管理', icon: 'el-icon-coin'},
        {name: '/components/process/FormManager', navItem: '表单管理', icon: 'el-icon-coin'},
      ]
    }
  },
  name: "Nav",
  methods:
      {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        }
        ,
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  height: 100%;
}
</style>
