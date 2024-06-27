<template>
    <div class="container">
      <div class="row">
          <h2>About</h2>
          <p v-if="about">{{ about }}</p>
          <Spinner v-else />
      </div>
    </div>
</template>
  
<script setup>
  import Spinner from './Spinner.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  const about = computed(() => store.state.about)
  
  onMounted(() => {
    store.dispatch('fetchAbout')
  })
</script>
  
<style>
</style>
  