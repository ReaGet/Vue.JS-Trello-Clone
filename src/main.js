import App from '@/App';
import {createApp} from "vue";
import Icons from '@/components/icons';
import Components from "@/components";
import Directives from "@/directives";
import '@/assets/styles/base.scss';

const app = createApp(App);

Icons.forEach(icon => {
    app.component(icon.name, icon);
});

Components.forEach(component => {
    app.component(component.name, component);
});

Directives.forEach(directive => {
    app.directive(directive.name, directive);
});

app.mount('#app');