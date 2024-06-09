import type { FormValues } from "app/profile/_components/ProfileFormProvider"
import { FormControl, FormField, FormItem, FormLabel } from "components/ui/form"
import { Input } from "components/ui/input"
import type { Control } from "react-hook-form"

type Props = {
  control: Control<FormValues>
}

export function EmailInput({ control }: Props) {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => {
        return (
          <FormItem className="">
            <FormLabel className="text-lg">이메일</FormLabel>
            <FormControl>
              <Input
                {...field}
                disabled
                className="h-12 text-md placeholder:opacity-50"
                placeholder="your@email.com"
              />
            </FormControl>
          </FormItem>
        )
      }}
    />
  )
}
