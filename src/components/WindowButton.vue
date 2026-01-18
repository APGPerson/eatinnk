<style scoped>
.animated-button {
  margin-right: 1rem;
  margin-top: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 1rem 2rem;
  border: 4px solid;
  border-color: transparent;
  font-size: 1.1em;
  background-color: inherit;
  border-radius: 1rem;
  font-weight: 600;
  color: var(--color-text);
  box-shadow: 0 0 0 2px #cfa6e4;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: #cfa6e4;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
}

.animated-button .arr-2 {
  left: -25%;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;

  aspect-ratio: 1 / 1;
  background-color: #cfa6e4;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: #212121;
  border-radius: 12px;
}

.animated-button:hover .arr-1 {
  right: -25%;
}

.animated-button:hover .arr-2 {
  left: 16px;
}

.animated-button:hover .text {
  transform: translateX(12px);
}

.animated-button:hover svg {
  fill: #212121;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px #cfa6e4;
}

.animated-button:hover .circle {
  width: 115%;
  opacity: 1;
}

.select{
  margin-right: 1rem;
  margin-top: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 1rem 2rem;
  border: 4px solid;
  border-color: transparent;
  font-size: 1.1em;
  background-color: #cfa6e4;
  border-radius: 1rem;
  font-weight: 600;
  color: black;
  box-shadow: 0 0 0 2px #cfa6e4;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}


.select.floor{
  background-color: #bbe4a6;
  box-shadow: 0 0 0 2px #bbe4a6;
  color: black;
}
.floor.animated-button{
  box-shadow: 0 0 0 2px #bbe4a6;
}
.floor.animated-button:active {
  box-shadow: 0 0 0 4px #bbe4a6;
}
.floor.animated-button .circle{
  background-color: #bbe4a6;
}
.floor.animated-button svg{
  fill: #bbe4a6;
}
.floor.animated-button:hover svg {
  fill: #212121;
}
.floor.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: #212121;
  border-radius: 12px;
}
</style>

<script setup>
const {text,select,floor} = defineProps({
  text: String,
  select: Boolean,
  floor: {
    type: Boolean,
    default: false,
    required: false
  }
});
const emit = defineEmits(["clickbutton"])
</script>

<template>
  <!--  Button by gharsh11032000 in UIVERSE-->
  <button :class="{'animated-button': !select,'select': select,'floor': floor}" @click="emit('clickbutton',text)">
    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg" v-if="!select">
      <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
      ></path>
    </svg>
    <span class="text">{{ text }}</span>
    <span class="circle" v-if="!select"></span>
    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg" v-if="!select">
      <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
      ></path>
    </svg>
  </button>
</template>
