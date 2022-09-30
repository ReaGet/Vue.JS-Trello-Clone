export default {
    name: 'click-outside',
    mounted(el, binding, vnode) {
        el.handleOutsideClick = function (event) {
            console.log(el, event.target, el.contains(event.target))
            if (!(el == event.target || el.contains(event.target))) {
                binding.value();
            }
        }

        document.addEventListener('click', el.handleOutsideClick)
        document.addEventListener('touchstart', el.handleOutsideClick)
    },
    unmounted(el) {
        document.removeEventListener('click', el.handleOutsideClick)
        document.removeEventListener('touchstart', el.handleOutsideClick)
    }
}