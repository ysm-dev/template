import { EmailInput } from "app/profile/_components/EmailInput"
import { NameInput } from "app/profile/_components/NameInput"
import type { FormValues } from "app/profile/_components/ProfileFormProvider"
import { ProfileImage } from "app/profile/_components/ProfileImage"
import { Button } from "components/ui/button"
import { Loader2Icon } from "lucide-react"
import { useFormStatus } from "react-dom"
import type { Control } from "react-hook-form"

type Props = {
  control: Control<FormValues>
}

export function ProfileForm({ control }: Props) {
  const { pending } = useFormStatus()

  return (
    <fieldset
      disabled={pending}
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
          {pending ? <Loader2Icon className="size-5 animate-spin" /> : "저장"}
        </Button>
      </div>
    </fieldset>
  )
}
