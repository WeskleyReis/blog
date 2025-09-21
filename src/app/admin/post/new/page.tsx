import { Button } from "@/components/Button"
import { InputCheckbox } from "@/components/InputCheckbox"
import { InputText } from "@/components/InputText"

export const dynamic = 'force-dynamic'

export default async function AdminPostNewPage() {
  return (
    <div className='flex flex-col gap-6'>
      <InputText placeholder="Digite seu nome" />
      <InputCheckbox labelText="Testando" />
    </div>
  )
}
