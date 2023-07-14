import { COLUMNS_COLOR } from '@/constants'
import { VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from 'victory'

interface ColumnsChartProps {
  data: [
    {
      x: string
      y: number
    },
  ]
}

export function ColumnsChart({ data }: ColumnsChartProps) {
  return (
    <VictoryChart theme={VictoryTheme.grayscale}>
      <VictoryBar
        horizontal
        data={data}
        alignment="start"
        barWidth={20}
        barRatio={10}
        height={300}
        style={{
          data: { fill: '#09253a' },
          labels: { fill: '#18181b' },
        }}
        labels={({ datum }) => String(datum.y).replace('.', ',')}
        labelComponent={
          <VictoryLabel dy={-10} dx={8} style={{ fontSize: '.625rem' }} />
        }
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'data',
                    mutation: (props) => {
                      const fill = props.style && props.style.fill
                      return fill === COLUMNS_COLOR.normal
                        ? { style: { fill: COLUMNS_COLOR.active } }
                        : null
                    },
                  },
                ]
              },
            },
          },
        ]}
      />
    </VictoryChart>
  )
}
