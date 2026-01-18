<script setup>
import {provide, shallowRef} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Title from './components/Title.vue'
import dayjs from "dayjs";
import Swal from 'sweetalert2';
import {getData} from "@/assets/utils.js";

const statue = shallowRef(0)
const data = shallowRef({})
// 0 -> 未获取信息
// 1 -> 正常获取信息
// -1 -> 报错
//const API = "https://gitee.com/nkapi/eatinnkdata/raw/master/data.json"
const API = "http://192.168.18.5:3000/data.json"
// provide("statue",statue)
provide("statue",statue)
provide("data",data)


const getDataByDetail = (details)=>{
  let ret = new Set()
  for(const detail of details){
    for(const data of detail){
      ret.add(data)
    }
  }
  return [...ret]
}

try {
  const curData = localStorage.getItem("data")
// 若无数据或已过期
  // 无数据默认过期
  if (!curData || dayjs(getData(getData(JSON.parse(curData),"days",[]),-1,"1971-12-31")).isBefore(dayjs())) {
    fetch(API).then((res) => {
      if (!res.ok) {
        throw new Error("请求失败，请稍后刷新页面尝试")
      }
      return res.json()
    }).then((json) => {
      console.log(json)
      const detailN = getData(getData(json,"detail",{}),"north",[])
      const detailS = getData(getData(json,"detail",{}),"south",[])
      const json_modify = {
        "south": {
          mon: getDataByDetail(getData(detailS,0,[])),
          tue: getDataByDetail(getData(detailS,1,[])),
          wed: getDataByDetail(getData(detailS,2,[])),
          thu: getDataByDetail(getData(detailS,3,[])),
          fri: getDataByDetail(getData(detailS,4,[]))
        },
        "north": {
          mon: getDataByDetail(getData(detailN,0,[])),
          tue: getDataByDetail(getData(detailN,1,[])),
          wed: getDataByDetail(getData(detailN,2,[])),
          thu: getDataByDetail(getData(detailN,3,[])),
          fri: getDataByDetail(getData(detailN,4,[]))
        },
        ...json
      }
      data.value = json_modify
      statue.value = 1
      localStorage.setItem("data", JSON.stringify(json_modify))
    }).catch((err) => {
      console.error(err)
      data.value = "出现错误，请稍等再尝试: " + err.toString()
      statue.value = -1
    })
  } else {
    const val = JSON.parse(curData)
    if ("north" in val && "south" in val && "detail" in val && "days" in val) {
      data.value = val
      statue.value = 1
    } else {
      data.value = "数据错误，请刷新页面"
      localStorage.removeItem("data")
      statue.value = -1
    }
  }
}catch(err) {
  data.value = "数据获取错误，请刷新页面"
  console.error(err)
  localStorage.removeItem("data")
  statue.value = -1
}



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
let clickcount = 0
let curTimer = []
function advance(){
  const curTime = dayjs().unix()
  curTimer.push(curTime)
  if(curTimer.length > 3){
    if((curTime - curTimer.shift()) < 3){
      Swal.fire({
        icon: "info",
        title: "设置",
        text: "请选择您要配置的项目",
        allowOutsideClick: false,
        background: "var(--color-background)",
        color: "var(--color-text)",
        showDenyButton: true,
        showCancelButton: true,
          confirmButtonText: "关于开发者",
          denyButtonText: "删除本地存储",
          cancelButtonText: "取消"
      }).then((result) => {
        if(result.isConfirmed){
          Swal.fire({
            icon: "info",
            title: "关于开发者",
            html: "Copyright 2025-2026 APG<br>Follow MIT LICENSE:<a href='https://mit-license.org/'>Click here</a><br>Github Repo:<a href='https://github.com/APGPerson/eatinnk'>Click here</a>",
            background: "var(--color-background)",
            color: "var(--color-text)",
            confirmButtonText: "确认",
          }).then(r => {
            Swal.fire({
              icon: "info",
              title: "Use open-source code",
              html: "Copyright - 2026 gharsh11032000 (Harsh Gupta) <a href='https://uiverse.io/gharsh11032000/heavy-dog-45'>Click here</a><br>Harsh Gupta <a href='https://uiverse.io/gharsh11032000/loud-chicken-53'>Click here</a><br>Copyright - 2026 Spacious74 (VishalS) <a href='https://uiverse.io/Spacious74/horrible-horse-4'>Click here</a><br><b>Vue.js</b> and <b>Vue.js Router</b> and <b>SweetAlert2</b> and <b>Day.js</b> follow MIT LICENSE <a href='https://mit-license.org/'>Click here</a><br>",
              background: "var(--color-background)",
              color: "var(--color-text)",
              confirmButtonText: "确认",
            })
          })
        }else if(result.isDenied){
          Swal.fire({
            icon: "error",
            title: "删除本地存储",
            text: "请确认是否删除本地存储，删除后您需要重新下载所有数据(建议数据有误时操作)",
            showCancelButton: true,
            background: "var(--color-background)",
            color: "var(--color-text)",
            confirmButtonText: "确认",
            cancelButtonText: "取消"
          }).then(res => {
            if(res.isConfirmed){
              try{
                localStorage.clear()
                Swal.fire({
                  icon: "success",
                  title: "成功",
                  text: "数据删除成功，请重新刷新页面",
                  background: "var(--color-background)",
                  color: "var(--color-text)",
                  confirmButtonText: "确认"
                }).then(r => {
                  location.reload()
                })
              }catch(err){
                console.error(err)
                Swal.fire({
                  icon: "error",
                  title: "错误",
                  text: "数据删除失败，请尝试手动删除",
                  background: "var(--color-background)",
                  color: "var(--color-text)",
                  confirmButtonText: "确认"
                })
              }

            }
          })
        }
      })
      curTimer = []
    }
  }
}

</script>

<template>
  <header>
    <img alt="NK logo" class="logo" src="@/assets/logo.png" width="125" height="125" style="image-orientation: from-image;" @click="advance()"/>
    <div class="texts">
      <Title msg="食在南开" />
      <p>连续点击校徽3次进入设置</p>
    </div>

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

.texts{
  place-items: center;
}

.texts p{
  font-size: 1rem;
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
