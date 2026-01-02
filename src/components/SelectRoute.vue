<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const {now} = defineProps({
  "now": {
    type: String,
    required: true
  }
})

const redirect = (name)=>{
  console.log(`${now} -> ${name}`)
  if(name === now) return
  console.log("Redirecting...")
  router.push({
    name: name
  })
}

// style from https://uiverse.io/Spacious74/horrible-horse-4
</script>

<template>
  <div class="Routes">
    <div class="Route" :class="[{ ['activecontainer']: now === 'north' }, { ['container']: now !== 'north' }]" @click="redirect('north')">
      <div class="button" :class="{'active': now === 'north'}">北院食堂</div>
    </div>
    <div class="Route" :class="[{ ['activecontainer']: now === 'south' }, { ['container']: now !== 'south' }]" @click="redirect('south')">
      <div class="button":class="{'active': now === 'south'}">南院食堂</div>
    </div>
  </div>
</template>

<style scoped>
.Routes {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.Route {
  flex: 1;
  text-align: center;
}


.button {
  font-size: 1.4em;
  padding: 0.6em 0.8em;
  border-radius: 0.5em;
  border: none;
  background: var(--color-background);
  color: var(--color-text);
  cursor: pointer;
  box-shadow: 2px 2px 3px #000000b4;
}

.container {
  position: relative;
  padding: 3px;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  border-radius: 0.9em;
  transition: all 0.4s ease;
  margin: 0 1em;
}

.container::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  filter: blur(0);
  transition: filter 0.4s ease;
}

.container:hover::before {
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  filter: blur(1.2em);
}

.container:active::before {
  filter: blur(0.2em);
}

.activecontainer {
  position: relative;
  padding: 3px;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  border-radius: 0.9em;
  transition: all 0.4s ease;
  margin: 0 1em;
}

.activecontainer::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  filter: blur(1.2em);
  transition: filter 0.4s ease;
}

.button.active {
  font-size: 1.4em;
  padding: 0.6em 0.8em;
  border-radius: 0.5em;
  border: none;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000b4;
}
</style>