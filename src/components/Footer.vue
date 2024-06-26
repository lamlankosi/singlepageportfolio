<template>
  <footer class="container-fluid">
    <div class="row">
        <p class="lead">lamla's portfolio &copy;<span class="shadow">{{ cYear }}</span>
        </p>
        
    </div>
  </footer>
</template>

<script>
export default {
    name: 'footerComp',
    data(){
        return{
            cYear: new Date().getUTCFullYear()
        }
    }
}
</script>

<style>

</style>