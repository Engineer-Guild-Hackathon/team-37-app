"use client"

import { useState } from "react"

export default function TaskPage({ params }: { params: { id: string } }) {
  const [task, setTask] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`DAO: ${params.id} に課題を投稿しました\n内容: ${task}`)
    setTask("")
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{params.id.toUpperCase()} DAO 課題投稿</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="課題の内容を入力してください"
          className="w-full border p-2 rounded"
          rows={5}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          投稿する
        </button>
      </form>
    </main>
  )
}
