<template>

    <section >
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center" v-if="user">
                  <h5 class="my-3"> {{ user.name}}</h5>
                  <p class="text-muted mb-1"> {{ user.email }} </p>
                  
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-header">
                    <h5 class="text-muted text-center">   Modifier mon mot de passe </h5>
                 
                </div>
                <div class="card-body">
                    <form @submit.prevent="changePassword">
                           <!--  <div v-if="error" class="alert alert-danger">
                            {{ error }}
                         </div>  
                          <div v-if="success" class="alert alert-success">
                              {{ success }}
                          </div>  -->
               
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Ancien mot de passe </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Entrez votre ancien mot de passe "
                          v-model="old_password"
                          name="old_password"
                        />
                       </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nouveau mot de passe </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Entrez nouveau mot de passe "
                           v-model="password"
                          name="password"
                        />
                       </div>
                       <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Confirmation </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="confirmation du nouveau mot de passe "
                         
                         v-model="confirm_password"
                          name="confirm_password"
                        />
                       </div>
                       
                       <div class="d-flex justify-content-center mb-2">
                        <button type="submit" class="btn btn-primary">Enregistrer</button>
                       </div>
                      </form>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  
  <script>
import axios from 'axios';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    props: ['user'],
        data(){
        return {
            old_password: '',
            password: '',
            confirm_password: '',      
            //user: null,
            error: '',
            success:''
        }
    },
     methods: {

      userConnect(){
             const token = window.localStorage.getItem('jwt');
            console.log('Mon token',token);
      },
        
         async changePassword(){
       
             await axios.post('http://localhost:8000/api/change-password',{
               old_password: this.old_password,
               password: this.password,
               confirm_password: this.confirm_password,
               
            }).then(
            res => {
                console.log(res)
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