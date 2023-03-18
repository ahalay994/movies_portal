import { App } from 'vue';
import { ModuleNamespace } from 'vite/types/hot';

export function registerLayouts(app: App<Element>) {
    const layouts = import.meta.globEager<string, ModuleNamespace>('./*.vue');
    Object.entries(layouts).forEach(([, layout]) => app.component(layout?.default?.name, layout?.default));
}
