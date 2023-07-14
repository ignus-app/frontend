import { VictoryPie } from 'victory'

interface DonutChartProps {
  data: {
    id: string
    label: string
    value: number
    color: string
  }[]
  colors: string[]
  selectedLegend: string
  total: number
}

export function DonutChart({
  data,
  colors,
  selectedLegend,
  total,
}: DonutChartProps) {
  return (
    <div
      id="chart"
      className="relative flex max-h-max w-full max-w-[15.625rem]"
    >
      <VictoryPie
        innerRadius={90}
        animate={{
          easing: 'elastic',
          onLoad: { duration: 1000 },
        }}
        padAngle={data[0].value > 0 ? 2 : 0}
        data={data}
        x="label"
        y="value"
        colorScale={colors}
        style={{
          labels: {
            display: 'none',
          },
          data: {
            strokeOpacity: 0.5,
            strokeWidth: 10,
            fillOpacity: ({ datum }) =>
              datum.id === selectedLegend || selectedLegend === '' ? 1 : 0.3,
            stroke: ({ datum }) =>
              datum.id === selectedLegend ? datum.color : 'none',
          },
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2
        -translate-y-1/2 flex-col items-center"
      >
        <span className="text-xl laptop:text-2xl desktop:text-2xl">Total</span>
        <span className="text-base text-gray-400 laptop:text-lg desktop:text-lg">
          {total}
        </span>
      </div>
    </div>
  )
}
