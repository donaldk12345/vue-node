<template>

      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style="color: #fe4066;">Node-API</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav m-1">
              <li class="nav-item">
                  <router-link to="/">Home</router-link>
              </li>

              <li class="nav-item">
                  <router-link to="/calendar">Calendar</router-link>
              </li>
            
            </ul>
            
               <ul class="navbar-nav  don" v-if="!user">
               
                  <li class="nav-item">
                 <router-link to="/register">Register</router-link>
                 </li>

                <li class="nav-item">
                   <router-link to="/login">Login</router-link>
                   </li>

            
              </ul>
            <ul class="navbar-nav  don" v-if="user">
               
             <li class="nav-item">
                <a href="javascript:void(0)" @click="handleClick">Logout</a>
                </li>

         
           </ul>
              
            
      
          </div>
        </div>
     </nav>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Nav',

    props: ['user'],

    methods: {
      handleClick(){
        localStorage.removeItem('jwt');
        this.$router.push('/login');
      }
    }
    
}
</script>
<style>
nav .collapse ul li{
  color:#696cff!important;
}
a{
  color:#4b4b4b85!important;
  margin:5px!important;
  text-decoration:none!important;
}
</style>