export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex min-h-[478px] w-full flex-col bg-zinc-970">
        <div
          className="grid w-full flex-1 grid-cols-2 pt-[7.5625rem]
          md:grid-cols-1 md:pt-[5.5625rem] xl:grid-cols-2 2xl:grid-cols-2 2xl:pt-[7.5625rem]"
        >
          <div className="flex min-h-[30rem] w-full flex-col p-6 text-zinc-50">
            Project
          </div>
          <div className="flex min-h-[30rem] w-full flex-col p-6 text-zinc-50">
            Important
          </div>
        </div>
      </div>
      <div className="flex h-[478px] w-full flex-col bg-zinc-50">T</div>
    </div>
  )
}
