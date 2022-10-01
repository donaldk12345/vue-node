<template>
    <div class="container mt-4">
      <div class="col-md m-auto">

<div class="card card-table flex-fill">
<div class="card-body">
<div class="table-responsive">
<table class="table table-hover table-center mb-0">
<thead>
<tr>
<th>Name</th>
<th>Registered date</th>
<th>Login time</th>
<th>Logout time</th>
<th>Last login</th>
<th class="text-end">Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<h2 class="table-avatar">
<a href="general.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image"></a>
<a href="general.html">John Lee <span>#0001</span></a>
</h2>
</td>
<td>01 Oct 2019</td>
<td>01.00 PM</td>
<td>03.54 PM</td>
<td>11.00 PM</td>
<td class="text-end">
<div class="actions">
<a href="#" class="btn btn-sm bg-success-light me-2">
<i class="fe fe-pencil"></i>
</a>
<a href="#" class="btn btn-sm bg-danger-light">
<i class="fe fe-trash"></i>
 </a>
</div>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="general.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt="User Image"></a>
<a href="general.html">Joe <span>#0002</span></a>
</h2>
</td>
<td>23 Jan 2020</td>
<td>10.00 AM</td>
<td>03.12 PM</td>
<td>10.00 AM</td>
<td class="text-end">
<div class="actions">
<a href="#" class="btn btn-sm bg-success-light me-2">
<i class="fe fe-pencil"></i>
</a>
<a href="#" class="btn btn-sm bg-danger-light">
<i class="fe fe-trash"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="general.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-05.jpg" alt="User Image"></a>
<a href="general.html">Mary Wiley <span>#0003</span></a>
</h2>
</td>
<td>14 Feb 2020</td>
<td>12.03 PM</td>
<td>11.40 PM</td>
<td>10.00 AM</td>
<td class="text-end">
<div class="actions">
<a href="#" class="btn btn-sm bg-success-light me-2">
<i class="fe fe-pencil"></i>
</a>
<a href="#" class="btn btn-sm bg-danger-light">
<i class="fe fe-trash"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="general.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-06.jpg" alt="User Image"></a>
<a href="general.html">Amy Bond <span>#0004</span></a>
</h2>
</td>
<td>18 Apr 2020</td>
<td>09.10 AM</td>
<td>05.30 PM</td>
<td>06.00 PM</td>
<td class="text-end">
<div class="actions">
<a href="#" class="btn btn-sm bg-success-light me-2">
<i class="fe fe-pencil"></i>
</a>
<a href="#" class="btn btn-sm bg-danger-light">
<i class="fe fe-trash"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="general.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-07.jpg" alt="User Image"></a>
<a href="general.html">Clara Brady <span>#0005</span></a>
</h2>
</td>
<td>20 Apr 2020</td>
<td>01.00 PM</td>
<td>09.54 PM</td>
<td>08.00 AM</td>
<td class="text-end">
<div class="actions">
<a href="#" class="btn btn-sm bg-success-light me-2">
<i class="fe fe-pencil"></i>
</a>
<a href="#" class="btn btn-sm bg-danger-light">
<i class="fe fe-trash"></i>
</a>
</div>
</td>
</tr>
<tr>
<td>
<h2 class="table-avatar">
<a href="general.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/profiles/avatar-08.jpg" alt="User Image"></a>
<a href="general.html">Robert Martin <span>#0006</span></a>
</h2>
</td>
<td>08 Jun 2020</td>
<td>10.00 AM</td>
<td>07.00 PM</td>
<td>10.00 AM</td>
<td class="text-end">
<div class="actions">
<a href="#" class="btn btn-sm bg-success-light me-2">
<i class="fe fe-pencil"></i>
</a>
<a href="#" class="btn btn-sm bg-danger-light">
<i class="fe fe-trash"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
    <div class="">
      <div class="col-md-6 m-auto">
                  <div class="card mb-4">
                    <h5 class="card-header text-center text-muted">Mon Calendrier</h5>
                    <div class="card-body">
                    <form @submit.prevent="handleSubmit">
                        <div v-if="error" class="alert alert-danger">
                        {{ error }}
                         </div>  
               
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Titre</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Entrez le nom de l'évenement "
                          v-model="title"
                          name="text"
                        />
                       </div>
                        <div class="row">

                        <div class="col-md">
                        <label for="exampleFormControlInput1" class="form-label">Date de début</label>
                        <input
                          type="date"
                          class="form-control"
                          id="exampleFormControlInput1"
                          v-model="start_date"
                          name="start_date"
                        />
                       </div>
                       <div class="col-md">
                        <label for="exampleFormControlInput1" class="form-label">Date de fin</label>
                        <input
                          type="date"
                          class="form-control"
                          id="exampleFormControlInput1"
                         
                          v-model="end_date"
                          name="end_date"
                        />
                       </div>
                    
                        </div>
                       <div class="mb-3 mt-3">
                      <button class="btn btn-primary d-grid w-100" type="submit">Enregistrer</button>
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
// eslint-disable-next-line no-unused-vars
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

//import VueJwtDecode from 'vue-jwt-decode'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Calendar',
    data(){
        return {
          
           
            error: '',
            title: '',
            start_date: '',
            end_date: '',
            calendarOptions: {
            plugins: [ dayGridPlugin, interactionPlugin ],
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick,
            events: [
           { title: 'event 1', date: '2019-04-01' },
           { title: 'event 2', date: '2019-04-02' }
            ]
}
          
        }
    },
     
    methods: {
     
      
         handleSubmit(){
            this.error= '';
               axios.post('http://localhost:8000/api/calendars',{
               
                title: this.title,
                start_date: this.start_date,
                end_date: this.end_date
            }
            
          
             ).then(response => {

              

            console.log(response);
           
            }).catch(error=> {
              if(error){
                console.log(error)
                //this.error = 'Le mot de passe ou l\'email saisir est incorrect !';
              }
            })
             //this.$router.push('/');
           
          
          
          
           
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