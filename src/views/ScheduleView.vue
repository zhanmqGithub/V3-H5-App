<script lang="ts" setup>
import { ref } from 'vue'
import type { ChipType } from '@varlet/ui'
import { Dialog } from '@varlet/ui'
const experimentList = ref<{ [key: string]: Experiment<ChipType>[] }[]>([
  {
    '2025-08-11': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508001',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508002',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
    '2025-08-15': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508021',
        manufacturers: '北汽集团',
        color: 'primary',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508022',
        manufacturers: '北汽集团',
        color: 'danger',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508031',
        manufacturers: '北汽集团',
        color: 'success',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508032',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
  },
  {
    '2025-08-14': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508001',
        manufacturers: '北汽集团',
        color: 'danger',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508002',
        manufacturers: '北汽集团',
        color: 'danger',
      },
    ],
    '2025-08-15': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508021',
        manufacturers: '北汽集团',
        color: 'success',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508022',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508031',
        manufacturers: '北汽集团',
        color: 'success',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508032',
        manufacturers: '北汽集团',
        color: 'danger',
      },
    ],
  },
  {
    '2025-08-11': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508001',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508002',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
    '2025-08-15': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508021',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508022',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508031',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508032',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
  },
  {
    '2025-08-11': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508001',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508002',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
    '2025-08-15': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508021',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508022',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508031',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508032',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
  },
  {
    '2025-08-11': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508001',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508002',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
    '2025-08-15': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508021',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508022',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508031',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508032',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
  },
  {
    '2025-08-17': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508001',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508002',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
    '2025-08-15': [
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508021',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508022',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508031',
        manufacturers: '北汽集团',
        color: 'warning',
      },
      {
        norm: 'C-NCAP',
        form: 'MPDB',
        vehicleModel: '奥迪A6',
        scheduleDate: '2025-10-01',
        personInCharge: '管理员',
        serialNumber: '2508032',
        manufacturers: '北汽集团',
        color: 'warning',
      },
    ],
  },
])
interface Column {
  title: string
  field: string
}
const columns = ref<Column[]>([
  {
    title: '序号',
    field: 'rowIndex',
  },
  {
    title: '周一',
    field: '2025-08-11',
  },
  {
    title: '周二',
    field: '2025-08-12',
  },
  {
    title: '周三',
    field: '2025-08-13',
  },
  {
    title: '周四',
    field: '2025-08-14',
  },
  {
    title: '周五',
    field: '2025-08-15',
  },
  {
    title: '周六',
    field: '2025-08-16',
  },
  {
    title: '周日',
    field: '2025-08-17',
  },
])
async function createDialog(message: string) {
  await Dialog({
    title: '查看',
    message,
    cancelButton: false,
    confirmButtonText: '关闭',
  })
}
</script>
<template>
  <div>
    <NavBar title="排程" :back="false"></NavBar>

    <var-table scroller-height="30rem" full-width="50rem" :elevation="false">
      <thead style="position: sticky; top: 0">
        <tr>
          <th v-for="column in columns" :key="column.field" class="text-center">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(date, index) in experimentList" :key="index">
          <td v-for="(column, colIndex) in columns" :key="column.field">
            <template v-if="colIndex === 0">{{ index + 1 }}</template>
            <div v-else class="w-full flex flex-col pt-1">
              <var-chip
                :round="false"
                :type="experiment.color"
                class="mb-1 w-full"
                v-for="experiment in date[column.field]"
                :key="experiment.serialNumber"
                @click="createDialog(JSON.stringify(experiment))"
              >
                {{ experiment.norm }}
              </var-chip>
            </div>
          </td>
        </tr>
      </tbody>
      <!-- <template #footer>
        <div class="table-example-footer">
          <var-pagination
            :simple="false"
            :current="1"
            :total="100"
            :size-option="[5, 10]"
          />
        </div>
      </template> -->
    </var-table>
  </div>
</template>
