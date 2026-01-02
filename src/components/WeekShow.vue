<script setup>
import DayShow from './DayShow.vue'
import IconMonday from './icons/IconMonday.vue'
import IconTuesday from './icons/IconTuesday.vue'
import IconWednesday from './icons/IconWednesday.vue'
import IconThursday from './icons/IconThursday.vue'
import IconFriday from './icons/IconFriday.vue'
import LoadingShow from './LoadingShow.vue';
import ErrorShow from './ErrorShow.vue';
import {inject, ref, shallowRef, watch} from "vue";
import dayjs from "dayjs";
let BaseVFor = []

const timenow = dayjs()
const statue = inject('statue')
let data = inject('data')
let ChangedVFor = shallowRef([])
let menu = null
let date = null

const {now} = defineProps({
  "now": {
    type: String,
    required: true
  }
})

let select = null //当前选择的项目
const clickDayShow = (index) => {
  if (select === null) {
    ChangedVFor.value = [BaseVFor[index]]
    select = {...ChangedVFor.value[0].dayshow.vbind}
    console.log(select)
    ChangedVFor.value[0].dayshow.vbind["showline"] = false
    ChangedVFor.value[0].dayshow.vbind["top"] = false
    ChangedVFor.value[0].dayshow.vbind["bottom"] = false
    ChangedVFor.value[0].dayshow.vbind["all"] = true
  } else {
    ChangedVFor.value[0].dayshow.vbind = select
    select = null
    console.log("Back")
    ChangedVFor.value = [...BaseVFor]
  }

}

watch(statue, (newState) => {
  if (newState === 1) {
    console.log("Start Show")
    menu = data.value[now]

    date = data.value.days.map((TimeStr) => {
      const time = dayjs(TimeStr)
      if (time.isBefore(timenow, "date")) return -1
      else if (time.isAfter(timenow, "date")) return 1
      else return 0
    })

    console.log(date)


    BaseVFor = [
      {
        dayshow: {
          vbind: {'top': true, 'date': date[0]}, von: {
            "click": () => {
              clickDayShow(0)
            }
          }
        },
        dayshow_inner: IconMonday,
        heading: `周一 ${data.value.days[0]}`,
        menu: menu["mon"],
        index: 0
      }, {
        dayshow: {
          vbind: {'date': date[1]}, von: {
            "click": () => {
              clickDayShow(1)
            }
          }
        },
        dayshow_inner: IconTuesday,
        heading: `周二 ${data.value.days[1]}`,
        menu: menu["tue"],
        index: 1
      }, {
        dayshow: {
          vbind: {'date': date[2]}, von: {
            "click": () => {
              clickDayShow(2)
            }
          }
        },
        dayshow_inner: IconWednesday,
        heading: `周三 ${data.value.days[2]}`,
        menu: menu["wed"],
        index: 2
      }, {
        dayshow: {
          vbind: {'date': date[3]}, von: {
            "click": () => {
              clickDayShow(3)
            }
          }
        },
        dayshow_inner: IconThursday,
        heading: `周四 ${data.value.days[3]}`,
        menu: menu["thu"],
        index: 3
      }, {
        dayshow: {
          vbind: {'bottom': true, 'date': date[4]}, von: {
            "click": () => {
              clickDayShow(4)
            }
          }
        },
        dayshow_inner: IconFriday,
        heading: `周五 ${data.value.days[4]}`,
        menu: menu["fri"],
        index: 4
      }
    ]
    ChangedVFor.value = [...BaseVFor];
  }
}, {immediate: true})


</script>

<template>
  <!--  <DayShow :date="date[0]" top @click="clickDayShow(0)">-->
  <!--    <template #icon>-->
  <!--      <IconMonday/>-->
  <!--    </template>-->
  <!--    <template #heading>周一 {{ data.days[0] }}</template>-->
  <!--    <ul>-->
  <!--      <li v-for="item in menu['mon']">{{item}}</li>-->
  <!--    </ul>-->
  <!--  </DayShow>-->
  <Transition name="fadetrans">
    <LoadingShow v-if="statue === 0"></LoadingShow>
  </Transition>
  <Transition name="fadetrans">
    <ErrorShow v-if="statue === -1">
      {{ data }}
    </ErrorShow>
  </Transition>
  <TransitionGroup name="list">
    <DayShow v-for="thisele in ChangedVFor" :key="thisele.index" v-bind="thisele.dayshow.vbind"
             v-on="thisele.dayshow.von" v-show="statue === 1">
      <template #icon>
        <component :is="thisele.dayshow_inner"></component>
      </template>
      <template #heading>{{ thisele.heading }}</template>
      <ul>
        <li v-for="item in thisele.menu">{{ item }}</li>
      </ul>
    </DayShow>
  </TransitionGroup>

  <!--  <DayShow :date="date[1]" @click="clickDayShow(1)">-->
  <!--    <template #icon>-->
  <!--      <IconTuesday/>-->
  <!--    </template>-->
  <!--    <template #heading>周二 {{ data.days[1] }}</template>-->
  <!--    <ul>-->
  <!--      <li v-for="item in menu['tue']">{{item}}</li>-->
  <!--    </ul>-->
  <!--  </DayShow>-->

  <!--  <DayShow :date="date[2]" @click="clickDayShow(2)">-->
  <!--    <template #icon>-->
  <!--      <IconWednesday/>-->
  <!--    </template>-->
  <!--    <template #heading>周三 {{ data.days[2] }}</template>-->
  <!--    <ul>-->
  <!--      <li v-for="item in menu['wed']">{{item}}</li>-->
  <!--    </ul>-->
  <!--  </DayShow>-->

  <!--  <DayShow :date="date[3]" @click="clickDayShow(3)">-->
  <!--    <template #icon>-->
  <!--      <IconThursday/>-->
  <!--    </template>-->
  <!--    <template #heading>周四 {{ data.days[3] }}</template>-->
  <!--    <ul>-->
  <!--      <li v-for="item in menu['thu']">{{item}}</li>-->
  <!--    </ul>-->
  <!--  </DayShow>-->

  <!--  <DayShow :date="date[4]" bottom @click="clickDayShow(4)">-->
  <!--    <template #icon>-->
  <!--      <IconFriday/>-->
  <!--    </template>-->
  <!--    <template #heading>周五 {{ data.days[4] }}</template>-->
  <!--    <ul>-->
  <!--      <li v-for="item in menu['fri']">{{item}}</li>-->
  <!--    </ul>-->
  <!--  </DayShow>-->
</template>
<style scoped>
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


.fadetrans-enter-active,
.fadetrans-leave-active {
  transition: opacity 0.5s ease;
}

.fadetrans-enter-from,
.fadetrans-leave-to {
  opacity: 0;
}
</style>