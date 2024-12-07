import Image from "next/image"

function Background() {
  return (
    <div>
        <div className="ml-10">
            <p className="mt-10 lg:text-3xl md:text-2xl sm:text-lg font-bold">Problem</p>
            <p className="text-gray-700 mt-7 md:text-lg">UV is the most effective <a href="https://bbc.uk/" target="_blank"><span className="text-blue-500 underline">(BBC, 2003)</span></a></p>
        </div>
        <div className="m-10">
        <Image src="/uvwater-example.jpg" alt="" width={500} height={200} className="border-2 rounded-lg" />
        </div>
    </div>
  )
}
export default Background