<script setup>
import {provide, ref} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Title from './components/Title.vue'

const statue = ref(0)
const data = ref({})
// 0 -> 未获取信息
// 1 -> 正常获取信息
// -1 -> 报错
//const API = "https://gitee.com/nkapi/eatinnkdata/raw/master/data.json"
const API = "http://localhost:8000/data.json"
// provide("statue",statue)
provide("statue",statue)
provide("data",data)
fetch(API).then((res)=>{
  if(!res.ok){
    throw new Error("请求失败，请稍后刷新页面尝试")
  }
  return res.json()
}).then((json)=>{
  console.log(json)
  data.value = json
  statue.value = 1
}).catch((err)=>{
  console.error(err)
  data.value = "出现错误，请稍等再尝试: " + err.toString()
  statue.value = -1
})


// const data = {
//   days: ["2025-12-31","2026-1-1","2026-1-2","2026-1-3","2026-1-4"],
//   north: {
//     mon: ["酸菜鱼","麻婆豆腐","珍珠奶茶"],
//     tue: ["米饭"],
//     wed: ["bbddcdd"],
//     thu: ["dd"],
//     fri: ["无"]
//   },
//   south: {
//     mon: ["披萨"],
//     tue: ["意面","温丝黛"],
//     wed: ["精美炒菜"],
//     thu: ["番茄牛肉面","包子","奶茶","鸡排","红烧牛肉面","肉夹馍"],
//     fri: ["无","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]
//   }
// }

</script>

<template>
  <header>
    <img alt="NK logo" class="logo" src="@/assets/logo.png" width="125" height="125" style="image-orientation: from-image;"/>
    <Title msg="食在南开" />
  </header>
  <RouterView v-slot="{Component,route}">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path"></component>
    </Transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


header {
  display: flex;
  flex-direction: column;
  place-items: center;
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 4rem;
  margin-right: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-bottom: 0;
    margin-right: 4rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
