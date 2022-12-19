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
                    <form>
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
                       
                          name="email"
                        />
                       </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nouveau mot de passe </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Entrez nouveau mot de passe "
                         
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
                         
                          name="password"
                        />
                       </div>
                       
                       <div class="d-flex justify-content-center mb-2">
                        <button type="button" class="btn btn-primary">Enregistrer</button>
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
  
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
  
    props: ['user']
  
  }
  </script>