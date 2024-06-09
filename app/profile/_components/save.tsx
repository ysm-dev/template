"use server"

import { API_URL } from "app/profile/_components/ProfileFormData"

const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU4MCwidGVhbUlkIjoiNS0zIiwiaWF0IjoxNzE3OTM1NjU4LCJpc3MiOiJzcC10YXNraWZ5In0.hZPl-BsGpIf-OmwvFh9YMyc8Wf4fiyknxc-YrimLrFA`

export const save = async (formData: FormData) => {
  const body = new FormData()

  const file = formData.get("file") as File

  body.append("image", file)

  const { profileImageUrl } = await fetch(`${API_URL}/users/me/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: body,
  }).then<{ profileImageUrl: string }>((r) => r.json())

  const data = await fetch(`${API_URL}/users/me`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickname: formData.get("name"),
      profileImageUrl,
    }),
  }).then<{ nickname: string }>((r) => r.json())

  console.log(data)
}
