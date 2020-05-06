<template>
    <div id="collapse" >
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:"slCollapse",
    components: {},
    props: {

    },
    data() {
        return {

        };
    },
    computed: {},
    watch: { },
    created() { },
    mounted() { },
    methods: { },
};
</script>

<style scoped lang="scss">
$grey:#ddd;
$border-radius:4px;
#collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>
