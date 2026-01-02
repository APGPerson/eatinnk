<script setup>
import WeekShow from '../components/WeekShow.vue'
import SelectRoute from "@/components/SelectRoute.vue";
</script>

<template>
  <main>
    <SelectRoute :now="'north'"/>
    <div class="container">
      <WeekShow :now="'north'"/>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>