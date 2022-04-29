<template>
    <p v-html="html"></p>
</template>
<script>
export default {
    data() {
        return {
            html: '<h6>Banner</h6><img src="https://softauthor.com/wp-content/uploads/2020/04/create-a-banner-hero-unit-in-css-1-1024x365.png" style="width:300px"/>'
        }
    }
}
</script>