<template>
  <div class="home">
    <hookA></hookA>
    <reactiveData></reactiveData>
  </div>
</template>

<script lang="ts">
import reactiveData from "@/components/reactiveData.vue";
import hookA from "@/components/hookA.vue";
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: { reactiveData, hookA },
  setup(this, props, ctx) {

    const num = ref(0);
    const addNum = () => {
      num.value++
    }

    const RMA = reactive({
      team: "RMA",
      player: {
        name: "ronaldo",
        age: 25
      }
    })

    return {
      num, addNum,
      RMA
    }
  },
});
</script>
