"use client"
 
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
 
const chartData = [
  { month: "Tap Water", average: 317, minimum: 263, maximum: 403 },
  { month: "UV Lution", average: 144, minimum: 108, maximum: 166 },
]
 
const chartConfig = {
  average: {
    label: "Average",
    color: "#fcc603",
  },
  minimum: {
    label: "Minimum",
    color: "#eddc6b",
  },
  maximum: {
    label: "Maximum",
    color: "#f2a602",
  },

} satisfies ChartConfig

import Image from "next/image"

function Testing() {
  return (
    <div>
    <div className="ml-10">
        <p className="mt-10 lg:text-4xl md:text-3xl sm:text-2xl font-bold">Testing</p>
        <p className="text-zinc-600 mt-2">Conducted on 12/01/2024</p>
        <p className="mt-3 mr-5 md:text-lg sm:md">We wanted to make sure that our prototype successfully purified the water and our goal was over a <span className="font-bold text-yellow-500">50%</span> bacteria removal rate since this was only our first prototype.</p>

    </div>
    <div className="m-10 space-y-10 md:flex md:space-y-0 md:space-x-10 md:justify-center">
  <div className="text-center">
    <Image
      src="/tapwater-test.jpeg"
      alt="Tap Water Bacteria"
      width={300}
      height={300}
      className="border-2 rounded-lg mx-auto"
    />
    <p className="mt-2 text-sm text-gray-500">Bacteria Colonies (Normal Tap Water)</p>
  </div>
  <div className="text-center">
    <Image
      src="/uvwater-test.jpeg"
      alt="UV Water Bacteria"
      width={300}
      height={300}
      className="border-2 rounded-lg mx-auto"
    />
    <p className="mt-2 text-sm text-gray-500">Bacteria Colonies (After UV Lution)</p>
  </div>
</div>
<div className="p-10">
        <p className="lg:text-3xl md:text-2xl sm:text-lg font-bold">Conducting the Experiment</p>
        <p className="mt-3 mr-5 md:text-lg sm:md">In this experiment we used agar plates that contained samples of tap water (since we do not live close to an ocean) as well as also using water from our prototype. After doing this we placed the agar plates in an incubator for roughly 48 hours. Once we finished this process we were able to see bacteria colonies on the plates (see above) which we then counted for our data.</p>
    </div>
<div className="p-10">
        <p className="lg:text-3xl md:text-2xl sm:text-lg font-bold">Conclusion</p>
        <p className="mt-3 mr-5 md:text-lg sm:md">After testing our UV prototype and comparing it to normal tap water, we found that it had a <span className="font-bold text-yellow-500">54.57%</span> bacteria removal rate (based on the difference in colonies).</p>
        <br />
        <p className="mr-5 md:text-lg sm:md">Our goal is to reach a <span className="font-bold text-yellow-500">90%</span> bacteria colony removal rate based on colonies by the end of 2024, and a <span className="font-bold text-yellow-500">99.9%</span> removal rate by March 2025, which would be considered safe. We also aim to include a functionality for salt desalination to allow ocean explorers to have safe drinking water from the ocean. Once we have this feature, we will be running tests soon after.</p>

    </div>
<div className="p-10">
  <div className="rounded-lg border-2">
  <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="average" fill="var(--color-average)" radius={4} />
        <Bar dataKey="minimum" fill="var(--color-minimum)" radius={4} />
        <Bar dataKey="maximum" fill="var(--color-maximum)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
    <p className="text-center mt-5 font-bold text-zinc-700"># of Bacteria Colonies</p>
    </div>
</div>
  )
}
export default Testing