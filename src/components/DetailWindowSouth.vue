<script setup>
import WindowButton from './WindowButton.vue'
import WindowText from "@/components/WindowText.vue";
import {getData} from "@/assets/utils.js";
import {ref, watchEffect} from "vue";
const {data,id} = defineProps(["data","id"])
const selected = ref(null)
const nowfloor = ref(false)
// False -> 1F True -> 2F

let showdata = []
const showdatawindow = ref(["请选择项目"])

watchEffect(()=>{
  selected.value = null
  showdatawindow.value = ["请选择项目"]
  nowfloor.value = false
  const data_ = data
  const id_ = id
  try{
    showdata = getData(data_,id_,[])
    console.log(showdata)
  }catch{
    showdata = []
  }
})

function changefloor(){
  nowfloor.value = !nowfloor.value
  selected.value = null
  showdatawindow.value = ["请选择项目"]
}

function change(index) {
  selected.value = index
  const curIndex = (nowfloor.value ? 8 : 0) + index
  console.log(`Current index: ${curIndex}`)
  showdatawindow.value = getData(showdata,curIndex,["无"],true)
}
</script>

<template>
  <div class="container">
    <div class="buttons">
      <div class="floorbutton">
      <WindowButton text="1F" :select="nowfloor === false" @clickbutton="changefloor" style="flex: 1" floor></WindowButton>
      <WindowButton text="2F" :select="nowfloor === true" @clickbutton="changefloor" style="flex: 1" floor></WindowButton>
      </div>
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
        <li v-for="show in showdatawindow"> {{ show }} </li>
      </ul>
    </WindowText>
  </div>
</template>

<style scoped>
.floorbutton {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
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
</style>