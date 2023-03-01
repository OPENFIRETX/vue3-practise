<!--  -->
<template>
    <div>
        <div>x:{{ x }}</div>
        <div>y:{{ y }}</div>
    </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import clickPositions from "./hooks/click";
import ajax from './hooks/ajax'

interface Id {
    id: number,
    add:string
}
export default defineComponent({
    name: "hookA",
    setup() {
        const { x, y } = clickPositions()

        const { loading, data, err } = ajax<Id>("aa")
        return {
            x, y
        };
    }

})

</script>
<style lang='less' scoped></style>