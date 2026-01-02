<script setup>
</script>
<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">加载数据中...<br>请稍后</h4>
  </div>
<!--  lang="scss"-->
</template>

<style scoped>
.com__box{
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
}
.loading {
  margin-bottom: 1rem;
  width: 4rem;
  height: 4rem;
  border: 2px solid var(--color-text);
  border-top-color: transparent;
  border-radius: 100%;
  animation: circle infinite 0.75s linear;
}
@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>