<template>
  <router-view/>
  <navBar />
</template>

<script>
  import navBar from '@/components/navBar.vue'
  export default{
    components: {
      navBar
    }
  }
</script>

<style src="@/assets/css/style.css">

</style>
