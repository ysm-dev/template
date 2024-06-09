import { ProfileForm } from "app/profile/_components/ProfileForm"
import { ProfileFormProvider } from "app/profile/_components/ProfileFormProvider"

export const API_URL = `https://sp-taskify-api.vercel.app/5-3`

export async function ProfileFormData() {
  const defaultValues = {
    email: "myemail@gmail.com",
    name: "myname",
    profileURL: "https://avatars.githubusercontent.com/u/47269252?v=4",
  }

  return <ProfileFormProvider defaultValues={defaultValues} />
}
