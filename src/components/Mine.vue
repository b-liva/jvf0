<template>
  <div>
    <p>{{ msg }}</p>
    <div>
      <ul>
        <li v-for="cn in continents" :key="cn.name">{{cn.name}}</li>
        *********************************************************
        <li v-for="country in countries" :key="country.name">{{country.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import {getCountries, getContinents} from "../graphql/query/country.graphql";
import {computed} from "vue";

export default {
  setup(){
    {result} = useQuery(getContinents);
    const countries = computed(() => result.value?.countries ?? [])
    {result, loading} = useQuery(getContinents);
    const continents = computed(() => result.value?.continents ?? [])
    return {
      countries,
      continents
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