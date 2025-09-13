"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [daos, setDaos] = useState([
    { id: "math", name: "数学DAO" },
    { id: "english", name: "英語DAO" },
    { id: "ai", name: "AI DAO" },
  ])
  const [newDao, setNewDao] = useState("")

  const handleAddDao = () => {
    if (!newDao.trim()) return
    setDaos([...daos, { id: newDao.toLowerCase(), name: newDao + " DAO" }])
    setNewDao("")
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">DAO一覧</h1>
      <ul className="space-y-3 mb-6">
        {daos.map((dao) => (
          <li key={dao.id} className="border rounded-lg p-4 shadow">
            <Link href={`/dao/${dao.id}`} className="text-blue-600 hover:underline">
              {dao.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-xl mb-2">新しいコミュニティを作成</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newDao}
          onChange={(e) => setNewDao(e.target.value)}
          placeholder="例: 物理"
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={handleAddDao}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          作成
        </button>
      </div>
    </main>
  )
}
