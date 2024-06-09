"use client"

import type { FormValues } from "app/profile/_components/ProfileFormProvider"
import { FormField } from "components/ui/form"
import { Input } from "components/ui/input"
import { useRef } from "react"
import { type Control, useFormContext } from "react-hook-form"

type Props = {
  control: Control<FormValues>
}

export const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU4MCwidGVhbUlkIjoiNS0zIiwiaWF0IjoxNzE3OTM1NjU4LCJpc3MiOiJzcC10YXNraWZ5In0.hZPl-BsGpIf-OmwvFh9YMyc8Wf4fiyknxc-YrimLrFA`

export function FileInput({ control }: Props) {
  const { setValue } = useFormContext<FormValues>()
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    setValue("profileURL", url)
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
          onChange={(e) => {
            handleFileChange(e)
            field.onChange(e)
          }}
        />
      )}
    />
  )
}
