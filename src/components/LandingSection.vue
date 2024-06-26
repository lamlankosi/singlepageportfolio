<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <img src="https://lamlankosi.github.io/project_images/Images/LN_logo.png" alt="landing">
        </div>
        <div class="col">
            <div id="details">
                <h1 class="display-1">Lamla Nomnganga</h1>
                <span>{{ jobTitle[0].title }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { computed, onMounted, onMounyed} from 'vue'
    const jobTitle = computed(() => this.$store.state.jobTitle)
    onMounted(() => {
        this.$store.dispatch('fetchJobTitle')
    }) 
</script>

<style>

</style>