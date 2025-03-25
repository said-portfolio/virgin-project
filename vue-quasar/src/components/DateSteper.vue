<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step :name="1" title="Date de début" icon="event" :done="done1">
        <div class="q-pa-md">
          <div class="q-gutter-sm">
            <q-badge color="teal"> Heur de début: {{ startDate }} </q-badge>
          </div>

          <div class="q-gutter-md row items-start">
            <q-date v-model="startDate" mask="YYYY-MM-DD HH:mm" color="secondary" />
            <q-time v-model="startDate" mask="YYYY-MM-DD HH:mm" color="secondary" />
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done1 = true
                step = 2
              }
            "
            color="primary"
            label="Continue"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Date de fin" icon="event" :done="done2">
        <div class="q-pa-md">
          <div class="q-gutter-sm">
            <q-badge color="teal"> Heur de fin: {{ endDate }} </q-badge>
          </div>

          <div class="q-gutter-md row items-start">
            <q-date v-model="endDate" mask="YYYY-MM-DD HH:mm" color="negative" />
            <q-time v-model="endDate" mask="YYYY-MM-DD HH:mm" color="negative" />
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
  <q-btn label="Reset" push color="white" text-color="primary" @click="reset" class="q-mb-md" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { format } from 'date-fns'

// Initialize form fields
const title = ref('')
const today = format(new Date(), 'yyyy-MM-dd HH:mm')
const startDate = ref(today)
const endDate = ref(today)
const model = ref(today)

const step = ref(1)
const done1 = ref(false)
const done2 = ref(false)
const done3 = ref(false)

// Function to handle form submission
const submitForm = () => {
  console.log({
    title: title.value,
    startDate: startDate.value,
    endDate: endDate.value,
  })
}
const reset = () => {
  done1.value = false
  done2.value = false
  startDate.value = today
  endDate.value = today
  step.value = 1
}
</script>

<style scoped>

</style>
