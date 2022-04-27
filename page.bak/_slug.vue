
<template>
    <div>
        <h1>{{ this.slug }}</h1>
        <p>Path: {{ $route.path }}</p>
        <hr />
        <h3>_slug.vue</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        async asyncData({ params }) {
            const slug = params.slug
            return { slug }
        },
    }
</script>
