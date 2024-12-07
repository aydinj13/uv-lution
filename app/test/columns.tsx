"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Test = {
  id: string
  test1: number
  test2: number
  test3: number
}

export const columns: ColumnDef<Test>[] = [
  {
    accessorKey: "id",
    header: "Type",
  },
  {
    accessorKey: "test1",
    header: "Test 1",
  },
  {
    accessorKey: "test2",
    header: "Test 2",
  },
  {
    accessorKey: "test3",
    header: "Test 3",
  },
]
