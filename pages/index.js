import 'tailwindcss/tailwind.css'



export default function Home() {

  const title = "tes upload srcipt"
  return (
    <div className="flex flex-col  justify-center items-center w-full h-screen bg-sky-300">
      <span className="text-4xl font-semibold text-sky-800">Tes Tailwin NEXT</span>
      <span className="text-grey-800">Di deploy melalu github dan firebase</span>

      <span>{title}</span>
    </div>
  )
}
