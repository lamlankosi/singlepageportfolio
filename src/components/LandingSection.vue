<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <img src="https://lamlankosi.github.io/project_images/Images/LN_logo.png" alt="landing">
        </div>
        <div class="col">
            <div id="details">
                <h1 class="display-1">Lamla Nomnganga</h1>
                <p v-if="jobTitle?.length"></p>
                <span>{{ jobTitle[0]?.title}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { computed, onMounted} from 'vue'
    import {useStore} from 'vuex'
    const store = useStore()
    const jobTitle = computed(() => store.state.jobTitle)
    onMounted(() => {
        store.dispatch('fetchJobTitle')
    }) 
</script>

<style>

</style>