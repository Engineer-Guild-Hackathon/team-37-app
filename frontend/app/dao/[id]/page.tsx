"use client"

import { useState } from "react"

export default function DaoPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { user: "Me", text: input }])
    setInput("")
  }

  return (
    <main className="p-8 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-4">{params.id.toUpperCase()} DAO チャット</h1>

      <div className="flex-1 border rounded p-4 mb-4 overflow-y-auto bg-gray-900 text-white">
        {messages.length === 0 ? (
          <p className="text-gray-400">まだメッセージがありません</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className="mb-2">
              <span className="font-bold">{msg.user}: </span>
              <span>{msg.text}</span>
            </div>
          ))
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="メッセージを入力..."
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          送信
        </button>
      </div>
    </main>
  )
}
