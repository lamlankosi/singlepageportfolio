<template>
  <div class="container">
    <div class="row">
      <h2>Education</h2>
      <EducationCard v-for="Info in education" :key="Info.id" :educationInfo="Info" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import EducationCard from './EducationCard.vue'

const store = useStore()
const education = computed(() => store.state.education)

onMounted(() => {
  store.dispatch('fetchEducation')
})
</script>

<style>
/* Add any custom styles here */
</style>
