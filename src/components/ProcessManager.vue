<template>
  <el-container>
    <el-main>
      <!--    搜索行-->
      <el-row>搜索行</el-row>
      <el-row>
        <el-table :data="tableData" width="100%">
          <el-table-column
              prop="name"
              label="名称"
              width="180">
          </el-table-column>
          <el-table-column
              prop="status"
              label="状态">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="editProcess(scope.row)">
                <i class="el-icon-edit"></i>编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-main>

    <!--  流程图编辑start  -->
    <el-dialog
        title="编辑流程"
        :visible.sync="dialogVisible"
        width="74%" top="80px">
      <ProcessCanvas/>
    </el-dialog>
    <!--   流程图编辑end -->
  </el-container>
</template>

<script>

import ProcessCanvas from "@/components/ProcessCanvas";

export default {
  name: 'ProcessManager',
  components: {ProcessCanvas},
  data() {
    return {
      //表格数据
      tableData: [{
        //流程名称
        name: '测试名称',
        //流程状态
        status: 0,
      }],
      dialogVisible: false
    }
  },
  methods: {
    //编辑流程
    editProcess(row) {
      console.log(row)
      this.dialogVisible = true;

    }
  }

}
</script>

<style scoped>
</style>
