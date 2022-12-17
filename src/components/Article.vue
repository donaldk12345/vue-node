<!-- eslint-disable vue/multi-word-component-names -->
<template>
     
     <div class="container mt-4">
    <div class="col-md-12 d-flex">

        <div class="card card-table flex-fill">
            <div class="col-md p-3">
                <a routerLink="/createcalendar" class="btn btn-outline-secondary btn-sm">Add Calendar</a>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
                        <thead>
                            <tr>

                                <th>Id</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th class="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="article in this.articles" :key="article.id">
                                <td> {{ article.id }}  </td>
                                <td>  {{  article.title }}  </td>
                                <td> {{ article.category.name  }} </td>
                                <td>  {{ article.author }} </td>
                                <td class="text-end">
                                    <div class="actions">
                                        <a href="#" class="btn btn-sm bg-success-light me-2" data-bs-toggle="modal" data-bs-target="#smallModal">
                                            <i class="fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-sm bg-danger-light">
                                            <i class="fas fa-trash"></i>
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

</div>
 </template>
<script>
   import axios from 'axios';
   export default {


    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Article',

    props: ['user'],

    data(){

        return{
            articles: []
        }
    },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/articles').then((response) =>{
        
    this.articles= response.data;
    console.log('Mes articles',this.articles)
           });
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

    </style>