import Navbar from "@/components/Navbar"
import Testing from "@/components/Testing"
import { Test, columns } from "./columns"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Test[]> {
  return [
    {
      id: "Tap Water",
      test1: 284,
      test2: 263,
      test3: 403,
    },
    {
      id: "UV Lution Water",
      test1: 108,
      test2: 158,
      test3: 166,
    },
  ]
}
 
export default async function Page() {
  const data = await getData()
 
  return (
    <div>
      <Navbar />
      <Testing />
    <div className="container mx-auto p-5">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}