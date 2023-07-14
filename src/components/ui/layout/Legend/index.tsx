import { ElementType } from 'react'
import { ProgressBar } from '@/components/ui/layout/ProgressBar'

interface LegendProps {
  active: string
  color: string
  id: string
  handleSelectLegend: (id: string) => void
  label: string
  value: number
  total: number
  icon: ElementType
}

export function Legend({
  active,
  color,
  id,
  handleSelectLegend,
  label,
  value,
  total,
  icon: Icon,
}: LegendProps) {
  const percentage = Math.round((value / total) * 100)

  return (
    <div className="flex w-full items-center gap-2">
      <div
        className={`group flex items-center justify-center rounded-md bg-slate-200 p-2
        ${id === active ? 'font-bold' : 'font-normal'}`}
        style={{ backgroundColor: color }}
        data-state={id === active ? 'active' : 'inactive'}
      >
        <Icon
          className={` font-extrabold text-zinc-50 transition-all duration-300 ease-in-out ${
            id === active ? 'h-7 w-7' : 'h-5 w-5'
          }`}
        />
      </div>
      <button
        className={`group peer flex w-full rounded-md p-2`}
        onClick={() => handleSelectLegend(id)}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full flex-col items-start gap-1">
            <div className="flex w-full justify-between">
              <span className="text-base">{label}</span>
              <span className="text-sm">{percentage}%</span>
            </div>
            <ProgressBar progress={percentage} color={color} />
          </div>
        </div>
      </button>
    </div>
  )
}
