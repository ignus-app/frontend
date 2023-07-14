import {
  Activity,
  Boxes,
  Coins,
  FileSpreadsheet,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  ScrollText,
} from 'lucide-react'
import { ReactNode } from 'react'

interface Card {
  id: string
  icon: ReactNode
  label: string
  description: string
  href: string
}

export function useCard() {
  const cardData: Card[] = [
    {
      id: '021fe7a0-193a-44a6-80fb-6d6664b1e28a',
      icon: <Activity className="h-4 w-4 text-skin-inverted" />,
      label: 'Monitoramento de Usinas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
    {
      id: 'bd2d3fad-32cc-4a5a-ac46-154cec139afb',
      icon: <Boxes className="h-4 w-4 text-skin-inverted" />,
      label: 'Integração Digital',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
    {
      id: '0b4af967-80ab-422a-8bae-458d8e4ac3c4',
      icon: <LayoutDashboard className="h-4 w-4 text-skin-inverted" />,
      label: 'Dashboard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
    {
      id: '54216af5-0dcf-44d0-8d42-d13b7e4d5e4a',
      icon: <FileSpreadsheet className="h-4 w-4 text-skin-inverted" />,
      label: 'Relatórios',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
    {
      id: 'dfa7c049-3843-4f39-b647-35ec820cf993',
      icon: <ScrollText className="h-4 w-4 text-skin-inverted" />,
      label: 'Fatura Digital',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
    {
      id: 'a0ff0aff-b3f0-4586-8fb4-a1eef7c20d1e',
      icon: <HeartPulse className="h-4 w-4 text-skin-inverted" />,
      label: 'Saúde da Usina',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
    {
      id: 'd91e72c0-0373-41f8-8ff8-50b16254d812',
      icon: <LineChart className="h-4 w-4 text-skin-inverted" />,
      label: 'Análise Financeira',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
    {
      id: '4ebda587-c243-4138-967c-3b7c7f9b7fa4',
      icon: <Coins className="h-4 w-4 text-skin-inverted" />,
      label: 'Gestão de Créditos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor elit a ligula tempor, in hendrerit elit convallis. Nullam sit amet ultrices sem.',
      href: '/',
    },
  ]

  return { cardData }
}
