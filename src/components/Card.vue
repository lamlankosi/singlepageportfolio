<template>
  <div class="card">
    <div class="card-header">
        <slot name="cardHeader"></slot>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'cardComp'
    }
</script>
    

<style>
    .card{
        width: 18rem;
    }
</style>