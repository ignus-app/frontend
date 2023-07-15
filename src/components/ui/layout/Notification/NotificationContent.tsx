interface NotificationContentProps {
  text: string
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <p className="text-sm leading-relaxed text-zinc-100">{text}</p>
      <div className="flex items-center gap-1 text-xxs text-zinc-400">
        <span>Mensagem</span>
        <span>Há 3 min</span>
      </div>
    </div>
  )
}
