import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client/core";
import {provideApolloClient} from '@vue/apollo-composable'

import {defineCustomElement} from 'vue'
import Customer from "./customer/Customer.ce.vue";



const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://countries.trevorblades.com/',
})


// Cache implementation
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})
provideApolloClient((apolloClient));

const CustomerElement = defineCustomElement(Customer);

export {CustomerElement}

//register
export function register() {
    customElements.define('customer-card', CustomerElement);
}
register();
