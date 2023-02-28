<template>
  <div class="home">
    <reactiveData></reactiveData>
    <h2>{{ num }}</h2>
    <button @click="addNum">++</button>

    <div>{{ RMA.team }}</div>
    <div>{{ RMA.player }}</div>
  </div>
</template>

<script lang="ts">
import reactiveData from "@/components/reactiveData.vue";
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components:{reactiveData},
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
