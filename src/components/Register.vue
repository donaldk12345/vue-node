<template>
<div class="container mt-4">
    <div class="">
      <div class="col-md-6 m-auto">
                  <div class="card mb-4">
                    <h5 class="card-header text-center text-muted">Inscription</h5>
                    <div class="card-body">
                       <form @submit.prevent="handleSubmit">
                         <div class="mb-3">
                        <label for="nom" class="form-label">Nom</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Entrez votre nom"
                          v-model="name"
                          name="name"
                        />
                       </div>
                        <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Entrez votre email"
                          v-model="email"
                          name="email"
                        />
                       </div>
                        <div class="mb-3">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Entrez votre mot de passe"
                          v-model="password"
                          name="password"
                        />
                       </div>
                      
                       
                       <div class="mb-3 mt-3">
                      <button class="btn btn-primary d-grid w-100" type="submit">Je m'inscrire</button>
                     </div>
                      </form>
                    </div>
                  </div>
                </div>
                </div>
          </div>
</template>
<script>
import axios from 'axios'
export default {

    
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
     data(){
        return{
            name: '',
            email: '',
            password: '',
            users: []
           
            

        }
     },

     methods: {
        async  handleSubmit(){
            await axios.post('http://localhost:8000/api/register',{
               name: this.name,
               email: this.email,
               password: this.password,
               
            }).then(
            res => {
                console.log(res)
                this.$router.push('/login');
            }
           ).catch(
            err => {
                console.log(err)
            }
           );
           
           //this.$router.push('/login');

         

        }
     }
  
      
       
}
</script>
<style>
body{
    background-color: #f5f5f9;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid #d9dee3;
  border-radius: 0.5rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.5rem 1.5rem;
}

.card-title {
  margin-bottom: 0.875rem;
}

.card-subtitle {
  margin-top: -0.4375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link + .card-link {
  margin-left: 1.5rem;
}

.card-header {
  padding: 1.5rem 1.5rem;
  margin-bottom: 0;
  background-color: transparent;
  border-bottom: 0 solid #d9dee3;
}
.card-header:first-child {
  border-radius: 0.5rem 0.5rem 0 0;
}

.card-footer {
  padding: 1.5rem 1.5rem;
  background-color: transparent;
  border-top: 0 solid #d9dee3;
}
.card-footer:last-child {
  border-radius: 0 0 0.5rem 0.5rem;
}

.card-header-tabs {
  margin-right: -0.75rem;
  margin-bottom: -1.5rem;
  margin-left: -0.75rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
.btn-primary {
  color: #fff;
  background-color: #696cff;
  border-color: #696cff;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4);
}
.btn-primary:hover {
  color: #fff;
  background-color: #5f61e6;
  border-color: #5f61e6;
  transform: translateY(-1px);
}
.btn-check:focus + .btn-primary, .btn-primary:focus, .btn-primary.focus {
  color: #fff;
  background-color: #5f61e6;
  border-color: #5f61e6;
  transform: translateY(0);
  box-shadow: none;
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #595cd9;
  border-color: #595cd9;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: none;
}
.btn-primary.disabled, .btn-primary:disabled {
  box-shadow: none;
}

.btn-outline-primary {
  color: #696cff;
  border-color: #696cff;
  background: transparent;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #5f61e6;
  border-color: #5f61e6;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4);
  transform: translateY(-1px);
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  color: #fff;
  background-color: #5f61e6;
  border-color: #5f61e6;
  box-shadow: none;
  transform: translateY(0);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #595cd9;
  border-color: #595cd9;
}
</style>