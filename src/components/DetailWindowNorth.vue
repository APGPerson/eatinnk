<script setup>
import WindowButton from './WindowButton.vue'
import WindowText from "@/components/WindowText.vue";
import {getData} from "@/assets/utils.js";
import {ref, watchEffect} from "vue";

const {data,id} = defineProps(["data","id"])
const selected = ref(null)

let showdata = []
const showdatawindow = ref(["请选择项目"])
watchEffect(()=>{
  selected.value = null
  showdatawindow.value = ["请选择项目"]
  const data_ = data
  const id_ = id
  try{
    showdata = getData(data_,id_,[])
    console.log(showdata)
  }catch{
    showdata = []
  }
})


function change(index) {
  selected.value = index
  showdatawindow.value = getData(showdata,index,["无"],true)

}
</script>

<template>
  <div class="container">
  <div class="buttons">
    <WindowButton text="精美炒菜" :select="selected === 0" @clickbutton="change(0)"></WindowButton>
    <WindowButton text="精美炒菜" :select="selected === 1" @clickbutton="change(1)"></WindowButton>
    <WindowButton text="精美炒菜" :select="selected === 2" @clickbutton="change(2)"></WindowButton>
    <WindowButton text="窗口4" :select="selected === 3" @clickbutton="change(3)"></WindowButton>
    <WindowButton text="窗口5" :select="selected === 4" @clickbutton="change(4)"></WindowButton>
    <WindowButton text="窗口6" :select="selected === 5" @clickbutton="change(5)"></WindowButton>
    <WindowButton text="窗口7" :select="selected === 6" @clickbutton="change(6)"></WindowButton>
    <WindowButton text="窗口8" :select="selected === 7" @clickbutton="change(7)"></WindowButton>
  </div>
    <WindowText>
      <ul>
        <TransitionGroup name="list">
        <li v-for="show in showdatawindow" :key="show"> {{ show }} </li>
        </TransitionGroup>
      </ul>
    </WindowText>
  </div>
</template>

<style scoped>
.buttons {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  flex-wrap: wrap
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
}


.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>