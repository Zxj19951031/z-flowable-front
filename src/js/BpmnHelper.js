const getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject;

// 自定义的初始化视图，扩展了flowable
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:flowable="http://flowable.org/bpmn" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">\n' +
    '  <bpmn2:process id="Process_1">\n' +
    '    <bpmn2:startEvent id="Start_event" name="发起请假" flowable:initiator="initiator">\n' +
    '      <bpmn2:outgoing>Flow_0xe39so</bpmn2:outgoing>\n' +
    '    </bpmn2:startEvent>\n' +
    '    <bpmn2:sequenceFlow id="Flow_0xe39so" sourceRef="Start_event" targetRef="Activity_05k8p95" />\n' +
    '    <bpmn2:userTask id="Activity_05k8p95" name="直接主管审批">\n' +
    '      <bpmn2:incoming>Flow_0xe39so</bpmn2:incoming>\n' +
    '      <bpmn2:incoming>Flow_17otx3t</bpmn2:incoming>\n' +
    '      <bpmn2:outgoing>Flow_15aqn9k</bpmn2:outgoing>\n' +
    '    </bpmn2:userTask>\n' +
    '    <bpmn2:exclusiveGateway id="Gateway_0inpek4" name="审批通过？">\n' +
    '      <bpmn2:incoming>Flow_15aqn9k</bpmn2:incoming>\n' +
    '      <bpmn2:outgoing>Flow_1pt8idb</bpmn2:outgoing>\n' +
    '      <bpmn2:outgoing>Flow_184p8r0</bpmn2:outgoing>\n' +
    '    </bpmn2:exclusiveGateway>\n' +
    '    <bpmn2:sequenceFlow id="Flow_15aqn9k" sourceRef="Activity_05k8p95" targetRef="Gateway_0inpek4" />\n' +
    '    <bpmn2:endEvent id="Event_0cj4xql">\n' +
    '      <bpmn2:incoming>Flow_1pt8idb</bpmn2:incoming>\n' +
    '      <bpmn2:incoming>Flow_0lhsfk4</bpmn2:incoming>\n' +
    '    </bpmn2:endEvent>\n' +
    '    <bpmn2:sequenceFlow id="Flow_1pt8idb" name="N" sourceRef="Gateway_0inpek4" targetRef="Event_0cj4xql" />\n' +
    '    <bpmn2:sequenceFlow id="Flow_184p8r0" name="Y" sourceRef="Gateway_0inpek4" targetRef="Activity_0zpb6ri" />\n' +
    '    <bpmn2:userTask id="Activity_0zpb6ri" name="抄送二级主管">\n' +
    '      <bpmn2:incoming>Flow_184p8r0</bpmn2:incoming>\n' +
    '      <bpmn2:outgoing>Flow_1xn0h61</bpmn2:outgoing>\n' +
    '    </bpmn2:userTask>\n' +
    '    <bpmn2:sequenceFlow id="Flow_1xn0h61" sourceRef="Activity_0zpb6ri" targetRef="Activity_0vxnady" />\n' +
    '    <bpmn2:userTask id="Activity_0vxnady" name="抄送人事">\n' +
    '      <bpmn2:incoming>Flow_1xn0h61</bpmn2:incoming>\n' +
    '      <bpmn2:outgoing>Flow_0lhsfk4</bpmn2:outgoing>\n' +
    '    </bpmn2:userTask>\n' +
    '    <bpmn2:sequenceFlow id="Flow_0lhsfk4" sourceRef="Activity_0vxnady" targetRef="Event_0cj4xql" />\n' +
    '    <bpmn2:startEvent id="Event_1svm4ee" flowable:initiator="initiator">\n' +
    '      <bpmn2:outgoing>Flow_17otx3t</bpmn2:outgoing>\n' +
    '    </bpmn2:startEvent>\n' +
    '    <bpmn2:sequenceFlow id="Flow_17otx3t" sourceRef="Event_1svm4ee" targetRef="Activity_05k8p95" />\n' +
    '  </bpmn2:process>\n' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
    '      <bpmndi:BPMNEdge id="Flow_0lhsfk4_di" bpmnElement="Flow_0lhsfk4">\n' +
    '        <di:waypoint x="910" y="300" />\n' +
    '        <di:waypoint x="1090" y="300" />\n' +
    '        <di:waypoint x="1090" y="168" />\n' +
    '      </bpmndi:BPMNEdge>\n' +
    '      <bpmndi:BPMNEdge id="Flow_1xn0h61_di" bpmnElement="Flow_1xn0h61">\n' +
    '        <di:waypoint x="740" y="300" />\n' +
    '        <di:waypoint x="810" y="300" />\n' +
    '      </bpmndi:BPMNEdge>\n' +
    '      <bpmndi:BPMNEdge id="Flow_184p8r0_di" bpmnElement="Flow_184p8r0">\n' +
    '        <di:waypoint x="550" y="175" />\n' +
    '        <di:waypoint x="550" y="300" />\n' +
    '        <di:waypoint x="640" y="300" />\n' +
    '        <bpmndi:BPMNLabel>\n' +
    '          <dc:Bounds x="561" y="234" width="8" height="14" />\n' +
    '        </bpmndi:BPMNLabel>\n' +
    '      </bpmndi:BPMNEdge>\n' +
    '      <bpmndi:BPMNEdge id="Flow_1pt8idb_di" bpmnElement="Flow_1pt8idb">\n' +
    '        <di:waypoint x="575" y="150" />\n' +
    '        <di:waypoint x="1072" y="150" />\n' +
    '        <bpmndi:BPMNLabel>\n' +
    '          <dc:Bounds x="821" y="132" width="8" height="14" />\n' +
    '        </bpmndi:BPMNLabel>\n' +
    '      </bpmndi:BPMNEdge>\n' +
    '      <bpmndi:BPMNEdge id="Flow_15aqn9k_di" bpmnElement="Flow_15aqn9k">\n' +
    '        <di:waypoint x="470" y="150" />\n' +
    '        <di:waypoint x="525" y="150" />\n' +
    '      </bpmndi:BPMNEdge>\n' +
    '      <bpmndi:BPMNEdge id="Flow_17otx3t_di" bpmnElement="Flow_17otx3t">\n' +
    '        <di:waypoint x="308" y="150" />\n' +
    '        <di:waypoint x="370" y="150" />\n' +
    '      </bpmndi:BPMNEdge>\n' +
    '      <bpmndi:BPMNShape id="Activity_02m27tw_di" bpmnElement="Activity_05k8p95">\n' +
    '        <dc:Bounds x="370" y="110" width="100" height="80" />\n' +
    '      </bpmndi:BPMNShape>\n' +
    '      <bpmndi:BPMNShape id="Gateway_0inpek4_di" bpmnElement="Gateway_0inpek4" isMarkerVisible="true">\n' +
    '        <dc:Bounds x="525" y="125" width="50" height="50" />\n' +
    '        <bpmndi:BPMNLabel>\n' +
    '          <dc:Bounds x="522" y="103" width="55" height="14" />\n' +
    '        </bpmndi:BPMNLabel>\n' +
    '      </bpmndi:BPMNShape>\n' +
    '      <bpmndi:BPMNShape id="Event_0cj4xql_di" bpmnElement="Event_0cj4xql">\n' +
    '        <dc:Bounds x="1072" y="132" width="36" height="36" />\n' +
    '      </bpmndi:BPMNShape>\n' +
    '      <bpmndi:BPMNShape id="Activity_097son3_di" bpmnElement="Activity_0zpb6ri">\n' +
    '        <dc:Bounds x="640" y="260" width="100" height="80" />\n' +
    '      </bpmndi:BPMNShape>\n' +
    '      <bpmndi:BPMNShape id="Activity_0iqt9es_di" bpmnElement="Activity_0vxnady">\n' +
    '        <dc:Bounds x="810" y="260" width="100" height="80" />\n' +
    '      </bpmndi:BPMNShape>\n' +
    '      <bpmndi:BPMNShape id="Event_1svm4ee_di" bpmnElement="Event_1svm4ee">\n' +
    '        <dc:Bounds x="272" y="132" width="36" height="36" />\n' +
    '      </bpmndi:BPMNShape>\n' +
    '    </bpmndi:BPMNPlane>\n' +
    '  </bpmndi:BPMNDiagram>\n' +
    '</bpmn2:definitions>';
export default {
    getXml() {
        return xml;
    },
    //更新节点BusinessObject属性
    //通过命令行的方式会导致element 的id也随之改变，而外部为了区分每个子组件的key引用的就是element的id所以会导致form失去焦点
    //this.modeler.get('modeling').updateProperties(el,properties);
    updateProperties(element, properties) {
        console.log(element)
        let bo = getBusinessObject(element);
        Object.keys(properties).forEach(key => {
            bo.set(key, properties[key]);
        });
    },
    //获取BusinessObject属性
    getBusinessObject(element) {
        return getBusinessObject(element);
    }


}
