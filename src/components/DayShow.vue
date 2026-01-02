<script setup>
import {computed} from 'vue'
const {date,top,bottom,showline,all} = defineProps({
  "date":{
    type:Number,
    required: true
  },
  "top":{
    type:Boolean,
    default: false
  },"bottom":{
    type:Boolean,
    default: false
  },"showline":{
    type:Boolean,
    default: true
  },"all":{
    type:Boolean,
    default: false
  }
});
// const colors = computed(() => {
//   if(date === -1) return {}//{background: "#250f30"};
//   else if(date === 0) return {}//{background: "#331543"}
//   else return {} //{background: "#1e0c27"}
// })
</script>
<template>
  <div class="item"  :class="[{['top']: top},{['bottom']: bottom},{['all']: all},{['cardBox']: date === 0},{['line']: showline}]">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details" :class="{gray: date === -1}">
      <h3 :class="[{purple: date >= 0}]">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 1.5rem;
  width: 100%;
  display: flex;
  position: relative;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.item.top{
  border-radius: 2rem 2rem 0 0;
}
.item.bottom{
  border-radius: 0 0 2rem 2rem;
}
.item.all{
  border-radius: 2rem;
}


.item:hover{
  background: #f3efef;
}

@media (prefers-color-scheme: dark) {
  .item:hover{
    background: #363535;
  }
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

.gray{
  color: #808080;
}


@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .line.item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .line.item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}



.item.cardBox {
  background: linear-gradient(315deg, #91126b 0%, #4a0072 100%);
  background-size: 800% 800%;
  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
  transition: .4s ease-in-out;
  border-radius: 10px;
  color: var(--vt-c-text-dark-2);
}
.item.cardBox:hover {
  background: linear-gradient(315deg, #91126b 0%, #4a0072 100%);
  animation: none
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}




</style>
