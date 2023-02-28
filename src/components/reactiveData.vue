<!--  -->
<template>
    <div>
        响应式原理
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {

        const user = {
            name: "名字",
            age: 22,
            wife: {
                name: "谢谢",
                age: 12
            }
        }

        const proxyUser = new Proxy(user, {
            get(target, prop) {
                console.log("get调用");
                return Reflect.get(target, prop)
            },
            set(target, prop, val) {
                console.log("更改了");
                return Reflect.set(target, prop, val)
            },
            deleteProperty(target, p) {
                console.log("删除调用");
                return Reflect.deleteProperty(target, p)
            },
        })



        console.log(proxyUser.name);

        proxyUser.name = "改了"
        console.log(proxyUser);

        return {
        };
    },

})

</script>
<style lang='less' scoped></style>