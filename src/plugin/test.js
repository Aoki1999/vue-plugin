import toastCom from './toast.vue';
var toast = {
    install: function(Vue) {
        Vue.prototype.$toast = function(opt) {
            // console.log(opt)
            var a = Vue.extend(toastCom)
            var vm = new a()

            // 数据对象合并
            Object.assign(vm, opt)
            document.body.appendChild(vm.$mount().$el)
            vm.show = true
        }
    }
}
export { toast }