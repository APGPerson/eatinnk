<script setup>
</script>
<style scoped>
.card {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  width: 100%;
  place-items: center;
  padding: 2rem;
  color: var(--color-text);
  background: transparent;
  border: 2px solid #6f2d91;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transform-origin: center center;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card {
  flex: 1;
  font-size: 1.4em;
}

.footer {
  margin-top: 1rem;
  font-size: 0.5em;
}


.card:hover {
  background-color: #6f2d91;
  scale: 0.95;

  box-shadow: 0px 3px 187.5px 7.5px rgba(111, 45, 145, 0.4);
}
</style>

<template>
<!--  By Harsh Gupta -->
  <div class="card">
    <slot></slot>
<!--    <div class="footer">by Harsh Gupta</div>-->
    <p class="footer">*基于推测，不为准确性作保证</p>
  </div>
</template>
