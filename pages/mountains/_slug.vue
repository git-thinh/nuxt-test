<template>
    <article>
        <SocialHead :title="mountain.title"
                    :description="mountain.description"
                    :image="mountain.image" />
        <h1>{{ mountain.title }}</h1>
        <section>
            <img :src="mountain.image" :alt="mountain.title" />
            <p>{{ mountain.description }}</p>
        </section>
        <button @click="goBack">Back</button>
    </article>
</template>
<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        async asyncData({ $axios, params }) {
            const mountain = await $axios.$get(`https://api.nuxtjs.dev/mountains/${params.slug}`);
            return { mountain };
        },
        //   async asyncData({ params }) {
        //     const mountain = await fetch(
        //       `https://api.nuxtjs.dev/mountains/${params.slug}`
        //     ).then((res) => res.json());
        //     return { mountain };
        //   },
        head() {
            return {
                title: this.mountain.title,
                link: [
                    {
                        hid: "canonical",
                        rel: "canonical",
                        href: `https://nuxtjs.org/mountains/${this.$route.params.slug}`,
                    },
                ],
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The amazing Nuxt application that teaches me all the cool features of Nuxt'
                    }
                ]
            };
        },
        methods: {
            goBack() {
                return this.$router.go(-1);
            },
        },
    };
</script>
<style scoped>
    article {
        max-width: 600px;
        margin: 0 auto;
    }

    img {
        height: 200px;
    }

    p {
        text-align: left;
    }
</style>
