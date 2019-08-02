import vueImagePreview from './src/index.vue';
vueImagePreview.install = Vue => Vue.component(vueImagePreview.name, vueImagePreview);
export default vueImagePreview;