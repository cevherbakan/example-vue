<template>
<div >


<div v-show="stution=='true' ">
<div class="vertical-nav bg-white" id="sidebar" >
  <div class="py-4 px-3 mb-4 bg-light">
    <div class="media d-flex align-items-center">
      <div class="media-body">
        <h4 class="m-0">Kullanıcı: {{stution}}</h4>
        <p class="font-weight-light text-muted mb-0">Tip1/Tip2</p>
      </div>
    </div>
  </div>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Menü</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">

                

                <router-link class="nav-item" tag="li" to="/exam-types">
                    <a class="nav-link text-dark font-italic bg-light" href="#">
                    <i class="fa fa-th-large mr-3 fa-fw"></i>
                    Türler</a>
                </router-link>
 

    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-address-card mr-3 fa-fw"></i>
                Ana
            </a>
    </li>
        <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-address-card mr-3 fa-fw"></i>
                Deneme
            </a>
    </li>

  </ul>

<hr>

  <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                Geçmiş
            </a>
    </li>

    <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                İstatik
      </a>
    </li>
        <li class="nav-item">
      <a href="#" class="nav-link text-dark font-italic">
        <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                Ayarlar
      </a>
    </li>
  </ul>
</div>
<!-- End vertical navbar -->
</div>

<!-- Page content holder -->
<div class="page-content p-5" id="content">
  <!-- Toggle button -->
  
  <!-- Demo content -->
  
 
            <slot></slot>
 
  


</div>

</div>
</template>



<style>


.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: auto;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}
</style>

<script>
    export default {

      data: function() {
      return {
        stution: this.$store.state.login
      };
}
      
      
    }
</script>