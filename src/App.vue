<template>

    <div id="app">
      <Nav :user="user" /> 
         
       <router-view :user="user" />
     </div>
</template>

<script>
import axios from 'axios' 
import Nav from  './components/Nav.vue'

export default {
  name: 'App',

    data(){

      return {
        user: null
      }

    },
  created(){

   
// eslint-disable-next-line no-unused-vars
const token = window.localStorage.getItem('jwt');

 axios.get('http://localhost:8000/api/user',{

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }


 }

 ).then((response) =>{

  this.user= response.data;
  console.log(this.user);

});
},
  components: {
    Nav
  
  }

}
</script>

<style>

</style>