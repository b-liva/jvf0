<template>
  <div>
    <p>{{ msg }}</p>
    <div>
      <ul>
        <li v-for="cn in countries" :key="cn.name">{{cn.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import {getCountries} from "../graphql/query/cns.js";
import {computed} from "vue";

export default {
  setup(){
    const {result} = useQuery(getCountries);
    console.log(result)
    const countries = computed(() => result.value?.countries ?? [])
    return {
      countries,
    }
  },
  name: "Mine",
  data() {
    return {
      msg: 'hello there',
    }
  }
}
</script>

<style scoped>

</style>