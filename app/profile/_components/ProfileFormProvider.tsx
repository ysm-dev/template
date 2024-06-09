"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ProfileForm } from "app/profile/_components/ProfileForm"
import { save } from "app/profile/_components/save"
import { Form } from "components/ui/form"
import type { PropsWithChildren } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  profileURL: z.string(),
  file: z.any(),
})

export type FormValues = z.infer<typeof FormSchema>

type Props = PropsWithChildren<{
  defaultValues: FormValues
}>

export function ProfileFormProvider({ defaultValues, children }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })

  const { control } = form

  return (
    <Form {...form}>
      <form action={save}>
        <ProfileForm control={control} />
      </form>
    </Form>
  )
}
