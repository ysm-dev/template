import type { FormValues } from "app/profile/_components/ProfileForm"
import { FormControl, FormField, FormItem, FormLabel } from "components/ui/form"
import { Input } from "components/ui/input"
import type { Control } from "react-hook-form"

type Props = {
  control: Control<FormValues>
}

export function NameInput({ control }: Props) {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => {
        return (
          <FormItem className="">
            <FormLabel className="text-lg">닉네임</FormLabel>
            <FormControl className="mt-2.5">
              <Input {...field} className="h-12 text-md" />
            </FormControl>
          </FormItem>
        )
      }}
    />
  )
}
