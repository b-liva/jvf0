import { createApp, provide, h } from 'vue'
import App from './App.vue'
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core'
import './assets/main.css'
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://countries.trevorblades.com/',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
provideApolloClient(apolloClient)
const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})
app.mount("#app");