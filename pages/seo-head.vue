<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>{{ title }} 👋</h1>
        <ul>
            <li v-for="mountain in mountains" :key="mountain.title">
                <NuxtLink :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }">
                    {{ mountain.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '12345',
                mountains: []
            }
        },
        head() {
            return {
                title: this.mountains.map(o => o.title).join(', '),
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The amazing Nuxt application that teaches me all the cool features of Nuxt'
                    }
                ]
            };
        },
        async asyncData() {
            const mountains = await fetch('https://api.nuxtjs.dev/mountains').then((res) => res.json())

            //console.log('title = ', mountains[0].title);
            //this.title = mountains[0].title;

            return { mountains }
        }
    }
</script>

<style scoped>
    h1 {
        font-family: Nunito;
    }
</style>
