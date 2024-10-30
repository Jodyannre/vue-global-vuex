<template>
    <h3>Counter</h3>
    <h3> {{ counter }} x 2 = {{ times2 }}</h3>
    <button @click="increment">Increment</button>
</template>
  
<script lang="ts" setup>
  import {defineComponent, computed} from 'vue';
  import { mapState, mapMutations, mapGetters } from 'vuex';
  import { useStore } from 'vuex';


  //Option API - opción 1
  /*
  export default defineComponent({
    name: 'HelloWorld',
    computed: {
      counter() {
        // TODO: Read the counter from the store
        return this.$store.state.counter
      },
      times2() {
        // TODO: Read the times2 from the store
        return this.$store.getters.times2 
      }
    },
    methods: {
      increment() {
        // TODO: Call the setCounter mutation from the store
        this.$store.commit('setCounter', this.counter + 1)
      }
    },  
  });
  */
 
  // Option API - opción 2 - Mapeo
  /*
  export default defineComponent({
    name: 'HelloWorld',
    computed: {
      ...mapState(['counter']),
      ...mapGetters(['times2'])
    },
    methods: {
      ...mapMutations(['setCounter']),
      increment() {
        this.setCounter(this.counter + 1)
      }
    },  
  });
  */

  // Composition API
  /*
  export default defineComponent({
    name: 'HelloWorld',
    setup() {
      const store = useStore();
      const counter = computed(()=> store.state.counter);
      const times2 = computed(()=> store.getters.times2);
      const increment = () => store.commit('setCounter', counter.value + 1);
      return { counter, times2, increment }
    }
  });
  */

  // Composition API con setup
    const store = useStore();
    const counter = computed(()=> store.state.counter);
    const times2 = computed(()=> store.getters.times2);
    const increment = () => store.commit('setCounter', counter.value + 1);


</script>
  
<style scoped>
</style>
  