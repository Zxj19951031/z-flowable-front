<template>
  <el-container>
    <el-header style="height: 40px; padding: 0">
      <el-row type="flex" justify="end">
        <el-button-group>
          <el-button type="primary" icon="el-icon-finished" size="mini" @click="save">保存</el-button>
          <el-button type="primary" icon="el-icon-upload" size="mini">保存并发布</el-button>
        </el-button-group>
      </el-row>
    </el-header>
    <el-main id="process-canvas-main">
      <el-row style="height: 100%">
        <!--流程画布-->
        <el-col :span="18" style="height: 100%">
          <div id="canvas" style="height: 100%"></div>
        </el-col>
        <!--bpmn组件属性-->
        <el-col :span="6" style="height: 100%">
          <ProcessProperties
              ref="processProperties"
              v-if="currentElement.type ==='bpmn:Process'"/>
          <StartEventProperties
              ref="startEventProperties"
              v-if="currentElement.type==='bpmn:StartEvent'"
              :modeler="this.modeler"
              :element-id="this.currentElement.id"
              :key="this.currentElement.id"/>
          <UserTaskProperties
              ref="userTaskProperties"
              v-if="currentElement.type==='bpmn:UserTask'"
              :modeler="this.modeler"
              :element-id="this.currentElement.id"
              :key="this.currentElement.id"/>
          <EndEventProperties
              ref="endEventProperties"
              v-if="currentElement.type==='bpmn:EndEvent'"
              :modeler="this.modeler"
              :key="this.currentElement.id"/>
        </el-col>
      </el-row>
    </el-main>

  </el-container>
</template>

<script>
import CustomModeler from '@/components/customBpmnModeler'
// import BpmnModeler from 'bpmn-js/lib/Modeler'
import StartEventProperties from "@/components/processElements/StartEventProperties";
import ProcessProperties from "@/components/processElements/ProcessProperties";
import EndEventProperties from "@/components/processElements/EndEventProperties";
import UserTaskProperties from '@/components/processElements/UserTaskProperties';
import BpmnHelper from "@/js/BpmnHelper";


export default {
  name: 'ProcessManager',
  components: {StartEventProperties, ProcessProperties, EndEventProperties,UserTaskProperties},
  data() {
    return {
      modeler: null,
      diagramXML: null,
      currentElement: {}
    }
  }
  ,
  mounted() {
    this.modeler = new CustomModeler({
      container: document.getElementById('canvas'),
    })
    // this.modeler = new BpmnModeler({
    //   container: document.getElementById('canvas'),
    // })
    this.modeler.on('element.changed', (event) => {
      let element = event.element;
      console.log('element.changed')
      console.log(element)
    })
    this.modeler.on('element.click', (e) => {
      console.log('element.click',e.element)
      this.currentElement = e.element;

    })
    this.create()
  },
  methods: {
    create() {
      this.modeler.importXML(BpmnHelper.getXml())
    },
    save() {
      this.modeler.saveXML({format: true}, (err, xml) => {
        if (err) {
          console.error(err)
        }
        this.diagramXML = xml;
        console.log(this.diagramXML)
      })
    }
  }
}
</script>

<style scoped>
#process-canvas-main {
  height: 521px;
  border-width: 1px;
  border-style: solid;
  border-color: #efefef;
  padding: 0;
}

#canvas {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTQwIDBIMHY0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+) repeat !important;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #efefef;
}
</style>
