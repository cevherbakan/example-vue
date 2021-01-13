<template>
<div class="row" >
<div v-for="i in 15" class="col-xs-3 bg-light text-dark card " style="height:300px;width:250px;margin-right:10px;margin-bottom:10px;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <router-link class="nav-item" tag="a" to="/exam-types">
               <a class="btn btn-info text-white">
               <i class="fas fa-arrow-right"></i>
                    Buraya Tıkla </a>
              </router-link>
  </div>
</div>
</div>
</template>
<script>
</script>