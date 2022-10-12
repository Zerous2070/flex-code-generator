import vdr from 'vue-draggable-resizable-gorkys/src/components/vue-draggable-resizable.vue';
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css';

const componentList: Record<string, any> = import.meta.glob('./**/*.vue', {
    eager: true
});

export default (app: any): void => {
    app.component('VueDraggable', vdr);
    Object.values(componentList).forEach(component => {
        app.component(component.default.name, component.default);
    });
};
