/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
export default function PaletteProvider(palette, create, elementFactory, globalConnect) {
    this.create = create
    this.elementFactory = elementFactory
    this.globalConnect = globalConnect

    palette.registerProvider(this)
}

PaletteProvider.$inject = [
    'palette',
    'create',
    'elementFactory',
    'globalConnect'
]

PaletteProvider.prototype.getPaletteEntries = function () {
    const {
        create,
        elementFactory
    } = this;

    function createStartEvent() {
        return function (event) {
            const shape = elementFactory.createShape({
                type: 'bpmn:StartEvent'
            });
            create.start(event, shape);
        }
    }

    function createUserTask() {
        return function (event) {
            const shape = elementFactory.createShape({
                type: 'bpmn:UserTask',
            });
            create.start(event, shape);
        }
    }

    function createEndEvent() {
        return function (event) {
            const shape = elementFactory.createShape({
                type: 'bpmn:EndEvent',
            });
            create.start(event, shape);
        }
    }

    function createExclusiveGateway() {
        return function (event) {
            const shape = elementFactory.createShape({
                type: 'bpmn:ExclusiveGateway'
            });
            create.start(event, shape)
        }
    }

    return {
        'create.start-event': {
            group: 'model',
            className: 'bpmn-icon-start-event-none',
            title: '创建开始事件',
            action: {
                dragstart: createStartEvent(),
                click: createStartEvent()
            }
        },
        'create.user-task': {
            group: 'model',
            className: 'bpmn-icon-user-task',
            title: '创建用户任务',
            action: {
                dragstart: createUserTask(),
                click: createUserTask()
            }
        },
        'create.end-event': {
            group: 'model',
            className: 'bpmn-icon-end-event-none',
            title: '创建结束事件',
            action: {
                dragstart: createEndEvent(),
                click: createEndEvent()
            }
        },
        'create.exclusive-gateway': {
            group: 'model',
            className: 'bpmn-icon-gateway-xor',
            title: '创建排他网关',
            action: {
                dragstart: createExclusiveGateway(),
                click: createExclusiveGateway()
            }
        },
    }
}
