<template>
  <div class="form-container">
    <q-stepper v-model="activeStep" flat animated>
      <!-- Step 1 -->
      <q-step name="step1" title="Select Employees" subtitle="Choose the required employees">
        <div class="form-inputs">
          <q-input v-model="title" label="Title" outlined color="secondary" class="gap-1" />
          <JournalisteInput class="gap-1" />
          <OpsInput class="gap-1" />
          <OpvInput class="gap-1" />
          <ChauffeurInput class="gap-1" />
          <RealisateurInput class="gap-1" />
        </div>
        <q-btn label="Next" color="secondary" @click="activeStep = 'step2'" class="form-btn" />
      </q-step>

      <!-- Step 2 -->
      <q-step name="step2" title="Select Dates" subtitle="Choose start and end dates">
        <div class="form-inputs">
          <div class="date-picker gap-1">
            <q-date
              v-model="startDate"
              mask="YYYY-MM-DD HH:mm"
              label="Start Date"
              outlined
              color="secondary"
            />
            <q-time
              v-model="startDate"
              mask="YYYY-MM-DD HH:mm"
              label="Start Time"
              outlined
              color="secondary"
            />
          </div>
        </div>
        <div class="form-btns">
          <q-btn label="Next" color="secondary" @click="activeStep = 'step3'" class="form-btn" />
          <q-space />
          <q-btn label="Previous" color="primary" @click="activeStep = 'step1'" class="form-btn" />
        </div>
      </q-step>
      <q-step name="step3" title="Select Dates" subtitle="Choose start and end dates">
        <div class="form-inputs">
          <div class="date-picker gap-1">
            <div class="date-picker">
              <q-date
                v-model="endDate"
                mask="YYYY-MM-DD HH:mm"
                label="End Date"
                outlined
                color="secondary"
              />
              <q-time
                v-model="endDate"
                mask="YYYY-MM-DD HH:mm"
                label="End Time"
                outlined
                color="secondary"
              />
            </div>
          </div>
        </div>
        <q-btn label="Previous" color="primary" @click="activeStep = 'step2'" class="form-btn"
      /></q-step>
      <q-btn label="Submit" color="primary" @click="submitForm" class="form-btn" />
    </q-stepper>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { format } from 'date-fns'
import ChauffeurInput from '@/components/Inputs/ChauffeurInput.vue'
import JournalisteInput from '@/components/Inputs/JournalisteInput.vue'
import OpsInput from '@/components/Inputs/OpsInput.vue'
import OpvInput from '@/components/Inputs/OpvInput.vue'
import RealisateurInput from '@/components/Inputs/RealisateurInput.vue'

const title = ref('')
const today = format(new Date(), 'yyyy-MM-dd HH:mm')
const startDate = ref(today)
const endDate = ref(today)
const activeStep = ref('step1') // Controls the active step in the stepper

const submitForm = () => {
  console.log('Form Submitted:', { startDate: startDate.value, endDate: endDate.value })
}
</script>

<style scoped>
.form-container {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 8px;
}

.form-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.form-inputs {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.date-picker {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.date-picker > * {
  flex: 1;
}

.form-btn {
  width: 100%;
  max-width: 200px;
}
.form-btns {
  display: flex;
  justify-content: space-between;
}
.gap-1 {
  margin-bottom: 1rem;
}
</style>
