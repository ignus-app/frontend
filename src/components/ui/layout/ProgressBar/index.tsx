interface ProgressBarProps {
  progress: number
  color?: string
}

export function ProgressBar({ progress, color }: ProgressBarProps) {
  return (
    <div className="h-2 w-full rounded-xl bg-gray-50">
      <div
        role="progressbar"
        aria-label="Mostra em porcentegam os 4 tipos de status possiveis de uma usina foto-voltaica"
        aria-valuenow={progress}
        className="duration h-2 rounded-xl transition-all duration-500 ease-in-out"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
        }}
      />
    </div>
  )
}
