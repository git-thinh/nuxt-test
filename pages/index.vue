<template>
    <div>
        <h1>Mountains - Lazy Loading Components</h1>
        <LazyMountainsList v-if="show" />
        <button v-if="!show" @click="showList">Show List</button>
        <hr />
        <h1>
            Hello Nuxters! 👋
            <span v-if="$nuxt.isOffline">we are offline &#128556</span>
            <span v-if="$nuxt.isOnline">we are online &#128512</span>
        </h1>
        <p>I am rendered on the {{ renderedOn }} side </p>
        <div>
            <p>{{ content }}</p>
        </div>
        <button @click="refresh">Refresh</button>
        <hr />
        <h1>Hello Nuxters! 👋</h1>
        <img src="~/assets/mountains-2.jpg" alt="mountains" />
        <p>
            This page is rendered on the <strong>{{ rendering }}</strong>
        </p>
        <p v-if="rendering === 'server'">
            First load or hard refresh is done on server side.
        </p>
        <p v-if="rendering === 'client'">Navigation is done on client side.</p>
        <ul>
            <li>Refresh the page for server side rendering.</li>
            <li>Click the links to see client side rendering.</li>
        </ul>

        <NuxtLink to="/about">About Page</NuxtLink>
        <hr />
        <ul>
            <li v-for="mountain in mountains" :key="mountain.id">
                <NuxtLink :to="`${mountain.continent.toLowerCase()}/${mountain.slug}`">
                    {{ mountain.title }}
                </NuxtLink>
            </li>
        </ul>
        <hr />
        <h2>Data fetched using asyncData</h2>
        <ul>
            <li v-for="mountain in mountains" :key="mountain.title">
                <NuxtLink :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }">
                    {{ mountain.title }}
                </NuxtLink>
            </li>
        </ul>
        <hr />
        <h1>Data fetched using fetch hook</h1>
        <p>Fetching is at component level</p>
        <Mountains />
        <hr />
    </div>
</template>

<script>
    export default {
        async asyncData({ $axios, $config }) {
            const mountains = await $axios.$get(`/mountains`)
            //const mountains = await fetch('https://api.nuxtjs.dev/mountains').then((res) => res.json())
            return {
                mountains,
                rendering: process.server ? 'server' : 'client',
                content: 'Seconds: ' + new Date().getSeconds(),
                renderedOn: process.client ? 'client' : 'server'
            };
        },
        data() {
            return {
                show: false,
                msg: 'Vue tooltip plugin'
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => this.$nuxt.$loading.finish(), 5000)
            })
        },
        methods: {
            showList() {
                this.show = true
            },
            refresh() {
                this.$nuxt.refresh()
            }
        },
    }
</script>
