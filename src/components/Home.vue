<template>

  <div class="container  mt-3">
      
  <div class="mt-2 text-center " v-if="user" > email {{ user.email}} <br> nom: {{user.name }} </div>

  </div>
  </template>

<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',

  props: ['user']

}
</script>