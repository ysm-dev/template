"use client"

import type { FormValues } from "app/profile/_components/ProfileForm"
import { API_URL } from "app/profile/_components/ProfileFormData"
import { FormField } from "components/ui/form"
import { Input } from "components/ui/input"
import { UploadIcon } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { type Control, useFormContext } from "react-hook-form"

type Props = {
  control: Control<FormValues>
}

export const TOKEN = ``

export function FileInput({ control }: Props) {
  const { setValue } = useFormContext<FormValues>()
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    setValue("profileURL", url)

    const formData = new FormData()

    formData.append("image", file)

    const res = await fetch(`${API_URL}/users/me/image`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: formData,
    }).then<{ profileImageUrl: string }>((r) => r.json())

    setValue("profileURL", res.profileImageUrl)
  }

  return (
    <FormField
      control={control}
      name="file"
      render={({ field }) => (
        <Input
          {...field}
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      )}
    />
  )
}
