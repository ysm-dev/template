import { FileInput } from "app/profile/_components/FileInput"
import type { FormValues } from "app/profile/_components/ProfileForm"
import { API_URL } from "app/profile/_components/ProfileFormData"
import { FormField } from "components/ui/form"
import { Input } from "components/ui/input"
import { UploadIcon } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import type { Control } from "react-hook-form"

type Props = {
  control: Control<FormValues>
}

export function ProfileImage({ control }: Props) {
  const fileRef = useRef<HTMLInputElement>(null)

  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]

  //   if (!file) return

  //   const formData = new FormData()

  //   formData.append("image", file)

  //   const res = await fetch(`${API_URL}/users/me/image`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: formData,
  //   })
  // }

  return (
    <FormField
      control={control}
      name="profileURL"
      render={({ field }) => {
        return (
          <div
            role="button"
            className="group relative aspect-square size-[182px] min-w-[182px] cursor-pointer overflow-hidden rounded-md"
            onClick={() => {
              const fileInput =
                document.querySelector<HTMLInputElement>('input[name="file"]')

              fileInput?.click()
            }}
          >
            <Image
              className="aspect-square size-full object-cover"
              src={field.value}
              unoptimized
              alt="Profile"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 hidden size-full bg-black/20 group-hover:block" />
            <UploadIcon className="absolute inset-0 m-auto hidden size-12 rounded bg-white/80 p-2 group-hover:block" />
            <FileInput control={control} />
          </div>
        )
      }}
    />
  )
}
