<template>
  <div class="wrapper">
    <navBar />
    <main class="container-fluid">
      <router-view/>
    </main>
 <Footer />
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'
import Footer from '@/components/Footer'
  export default{
    components: {
      navBar,
      Footer
    }
  }
</script>

<style src="@/assets/css/style.css">

</style>
