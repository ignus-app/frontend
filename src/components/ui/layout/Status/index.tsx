'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, LightbulbOff, MonitorOff, Unplug } from 'lucide-react'

import { STATUS_COLOR } from '@/constants'
import { DonutChart } from '../Charts/DonutChart'
import { Legend } from '../Legend'

const initialDonuts = [
  {
    id: '2302a3e9-18ac-4710-8daf-91af0ef82565',
    label: 'Normal',
    value: 0,
    color: '#bebebe',
  },
  {
    id: 'af257fc3-2b49-431a-a261-9dc21b8fba0b',
    label: 'Offline',
    value: 0,
    color: '#bebebe',
  },
  {
    id: '88ba314d-c2ec-4ff5-9fa0-60d4c7b1349a',
    label: 'Sem Geração',
    value: 0,
    color: '#bebebe',
  },
  {
    id: '6849f498-4761-413a-be58-6925fd955227',
    label: 'Não Monitorada',
    value: 100,
    color: '#bebebe',
  },
]

const donutData = [
  {
    id: '2302a3e9-18ac-4710-8daf-91af0ef82565',
    label: 'Normal',
    value: 450,
    color: STATUS_COLOR.normal,
  },
  {
    id: 'af257fc3-2b49-431a-a261-9dc21b8fba0b',
    label: 'Offline',
    value: 120,
    color: STATUS_COLOR.offline,
  },
  {
    id: '88ba314d-c2ec-4ff5-9fa0-60d4c7b1349a',
    label: 'Sem Geração',
    value: 300,
    color: STATUS_COLOR.semGeracao,
  },
  {
    id: '6849f498-4761-413a-be58-6925fd955227',
    label: 'Não Monitorada',
    value: 1200,
    color: STATUS_COLOR.naoMonitorada,
  },
]

const total = 1620

export function Status() {
  const [selectedLegend, setSelectedLegend] = useState('')
  const [chartDonutData, setchartDonutDataData] = useState(initialDonuts)

  function handleSelectLegend(id: string) {
    setSelectedLegend((prevSelectedLegend) =>
      prevSelectedLegend === id ? '' : id,
    )
  }

  useEffect(() => {
    setchartDonutDataData(donutData)
  }, [donutData])

  return (
    <div className="flex items-center gap-12">
      <DonutChart
        data={chartDonutData}
        colors={chartDonutData.map((status) => status.color)}
        selectedLegend={selectedLegend}
        total={total}
      />

      <div id="legends" className="flex w-full flex-col gap-1 pr-4">
        {chartDonutData?.map((status) => {
          return (
            <Legend
              key={status.id}
              active={selectedLegend}
              label={status.label}
              color={status.color}
              id={status.id}
              value={status.value}
              total={total}
              handleSelectLegend={() => handleSelectLegend(status.id)}
              icon={
                status.label === 'Normal'
                  ? CheckCircle
                  : status.label === 'Offline'
                  ? LightbulbOff
                  : status.label === 'Sem Geração'
                  ? Unplug
                  : status.label === 'Não Monitorada'
                  ? MonitorOff
                  : CheckCircle
              }
            />
          )
        })}
      </div>
    </div>
  )
}
