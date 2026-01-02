<script setup>
import WeekShow from '../components/WeekShow.vue'
import SelectRoute from "@/components/SelectRoute.vue";
</script>

<template>
  <main>
    <SelectRoute :now="'south'"/>
    <div class="container">
      <WeekShow :now="'south'"/>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>