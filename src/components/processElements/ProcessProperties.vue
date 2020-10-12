<template>
  <el-container>
    <el-header>
      <span>流程属性</span>
      <el-divider></el-divider>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="流程编号">
          <el-input v-model="form.id" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="流程名称">
          <el-input v-model="form.name" size="mini"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "ProcessProperties",
  data() {
    return {
      form: {
        id: null,
        name: this.id
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.el-container {
  overflow: scroll;
  height: 100%;
  padding: 10px;
}

.el-header {
  height: 5px;
}

.el-main {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
