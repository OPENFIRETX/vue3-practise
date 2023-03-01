

import {  onBeforeUnmount, onMounted, ref } from 'vue';

export default function () {

    const x = ref(-1);
    const y = ref(-1);


    const clickHandler = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener("click", clickHandler)
    })
    onBeforeUnmount(() => {
        window.removeEventListener("click", clickHandler)
    })
    return {
        x, y
    };


}

