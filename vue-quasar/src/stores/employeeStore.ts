import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEmployee } from '@/models/IEmployee'
import { EmployeeEnum } from '@/const/enum'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<IEmployee[]>([])
  const employeeOptions = ref<{ label: string; value: string }[]>([])
  const journalisteOptions = ref<{ label: string; value: string }[]>([])
  const opsOptions = ref<{ label: string; value: string }[]>([])
  const opvOptions = ref<{ label: string; value: string }[]>([])
  const filmMakerOptions = ref<{ label: string; value: string }[]>([])
  const driverOptions = ref<{ label: string; value: string }[]>([])

  const loadEmployees = async () => {
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees) {
      employees.value = JSON.parse(storedEmployees)
    } else {
      employees.value = []
      console.log('No employees found in local storage.')
    }
  }

  const getEmployeesByEmployeeType = (employeeType: string) => {
    const storedEmployees: IEmployee[] = employees.value || []
    const journalists = storedEmployees.filter(
      (employee: IEmployee) => employee.role?.label === employeeType,
    )

    employeeOptions.value = journalists.map((journalist) => ({
      label: `${journalist.firstName} ${journalist.lastName} - ${journalist.role?.label}`,
      value: `${journalist.firstName} ${journalist.lastName}`,
    }))

    switch (employeeType) {
      case (employeeType = EmployeeEnum.JOURNALISTE):
        journalisteOptions.value = employeeOptions.value
        break
      case (employeeType = EmployeeEnum.OPS):
        opsOptions.value = employeeOptions.value
        break
      case (employeeType = EmployeeEnum.OPV):
        opvOptions.value = employeeOptions.value
        break
      case (employeeType = EmployeeEnum.REALISATEUR):
        filmMakerOptions.value = employeeOptions.value
        break
      case (employeeType = EmployeeEnum.PARC):
        driverOptions.value = employeeOptions.value
        break
      default:
        break
    }
  }

  return {
    employees,
    journalisteOptions,
    opsOptions,
    opvOptions,
    filmMakerOptions,
    driverOptions,
    loadEmployees,
    getEmployeesByEmployeeType,
  }
})
