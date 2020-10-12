<template>
  <el-container>
    <el-header>
      <span>结束事件属性</span>
      <el-divider></el-divider>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="事件编号">
          <el-input v-model="form.id" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="事件名称">
          <el-input v-model="form.name" size="mini"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "EndEventProperties",
  props: ['modeler'],
  data() {
    return {
      form: {
        id: null,
        name: this.id
      }
    }
  },
  methods: {},
  watch: {
    'form.id': {
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue);
        console.log(this.element.type);
      },
      immediate: true
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
