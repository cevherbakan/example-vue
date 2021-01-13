<template>
<div class="sticky">
<div v-show="stution=='true'">

    <nav class="navbar navbar-expand-lg navbar-light shadow sticky " style="background-color:#2bbbad;">
            <button style="margin-right:20px;" id="sidebarCollapse" type="button" class="btn btn-light bg-white"><i style="font-size:24px;" class="fa fa-bars"></i></button>


        <a class="navbar-brand" href="#">Auth İşlemleri</a>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" tag="li" to="/">
                    <a class="nav-link" href="#">Anasayfa</a>
                </router-link>

            </ul>
            <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
                <li class="nav-item">
                    <a @click.prevent="logout" class="nav-link" href="#">Çıkış Yap</a>
                </li>

            </ul>
        </div>
      
    </nav>
    </div>
    <div>

</div>


</div>
</template>
<script>
    export default {
    data: function() {
      return {
        stution: this.$store.state.login
      };
},
        methods: {
            logout() {
                this.$store.dispatch("logout")
                this.$store.state.login = "false"
                this.stution ="false"
                location.reload();
            }
        },
        computed: {
            logoutClass() {
                return {
                    'd-none': !this.$store.getters.isAuthenticated
                }
            }
        }
    }
</script>

<style>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>