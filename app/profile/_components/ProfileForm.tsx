"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { EmailInput } from "app/profile/_components/EmailInput"
import { TOKEN } from "app/profile/_components/FileInput"
import { NameInput } from "app/profile/_components/NameInput"
import { API_URL } from "app/profile/_components/ProfileFormData"
import { ProfileImage } from "app/profile/_components/ProfileImage"
import { Button } from "components/ui/button"
import { Form } from "components/ui/form"
import { Loader2Icon, LoaderIcon } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  profileURL: z.string(),
  file: z.any(),
})

export type FormValues = z.infer<typeof FormSchema>

type Props = {
  defaultValues: FormValues
}

export function ProfileForm({ defaultValues }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form

  const onSubmit = handleSubmit(async ({ name, profileURL }) => {
    const res = await fetch(`${API_URL}/users/me`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: name,
        profileImageUrl: profileURL,
      }),
    }).then((r) => r.json())
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <fieldset
          disabled={isSubmitting}
          className="flex max-w-[620px] flex-col gap-6 rounded-lg bg-white px-7 py-8"
        >
          <h2 className="font-bold text-2xl text-[#333236]">프로필</h2>
          <div className="flex gap-4">
            <ProfileImage control={control} />

            <div className="flex grow flex-col">
              <EmailInput control={control} />
              <div className="grow" />
              <NameInput control={control} />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="h-8 w-20 bg-[#5534DA] hover:bg-[#5534DA]/80"
            >
              {isSubmitting ? (
                <Loader2Icon className="size-5 animate-spin" />
              ) : (
                "저장"
              )}
            </Button>
          </div>
        </fieldset>
      </form>
    </Form>
  )
}
