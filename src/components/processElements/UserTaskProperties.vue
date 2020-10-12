<template>
  <!--用户任务(审批)属性-->
  <el-container>
    <el-header>
      <span>审批</span>
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
import BpmnHelper from "@/js/BpmnHelper";


export default {
  name: "UserTaskProperties",
  props: ['modeler', 'elementId'],
  data() {
    return {
      form: {
        id: BpmnHelper.getBusinessObject(this.modeler.get('elementRegistry').get(this.elementId)).id,
        name: BpmnHelper.getBusinessObject(this.modeler.get('elementRegistry').get(this.elementId)).name,
      }
    }
  },
  methods: {},
  watch: {
    'form':
        {
          //更新ID
          handler: function () {
            console.log("111", this.elementId)
            BpmnHelper.updateProperties(this.modeler.get('elementRegistry').get(this.elementId), this.form)
          }
          ,
          deep: true,
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
