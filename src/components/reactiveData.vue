<!--  -->
<template>
    <div>
        响应式原理
        <div>{{ all }}</div>
        watch: <input type="text" ref="ipt" v-model="watchNum">


        <div>{{ name }}:{{ age }}</div>
    </div>
</template>

<script lang='ts'>
import { reactive, defineComponent, computed, ref, watch, onMounted, onBeforeMount, toRefs } from 'vue';
export default defineComponent({

    setup(props, context) {
        console.log(props, context);

        const user = {
            name: "名字",
            age: 22,
            wife: {
                name: "谢谢",
                age: 12
            }
        }

        const num1 = ref(1);
        const num2 = ref(2);



        const all = computed({
            get() {
                return num1.value + num2.value
            },
            set(val) {
                console.log("set val", val);

            }
        })


        all.value = 5


        const watchNum = ref(0)
        watch(watchNum, (n, o) => {
            console.log("改变了", n, o);

        })

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

        onMounted(() => {
            console.log("v3 mount");

        })

        onBeforeMount(() => {
            console.log("v3 beforemount");
        })

        const state = reactive({
            name: "自来",
            age: 47
        })
        const { name, age } = toRefs(state)


        const ipt = ref<HTMLElement | null>();
        onMounted(() => {
            console.log(ipt.value);
            ipt.value && ipt.value.focus()

        })

        return {
            all, watchNum, name, age, ipt
        };
    },

})

</script>
<style lang='less' scoped></style>