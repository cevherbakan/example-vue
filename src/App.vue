<template>
    <div>
            <HorizantalMenu/>
        <VerticalMenu>
        <router-view> </router-view>
        </VerticalMenu>

    </div>
</template>
<script>
    import HorizantalMenu from "./components/header/HorizantalMenu";
    import VerticalMenu from "./components/header/VerticalMenu";
    export default {
    components: {
            HorizantalMenu,
            VerticalMenu
        },
        created(){
            this.$store.dispatch("initAuth")
        }
    }
</script>