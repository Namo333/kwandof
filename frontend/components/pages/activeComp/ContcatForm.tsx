"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Схема валидации формы
const FormSchema = z.object({
  lastName: z.string().min(2, { message: "Фамилия должна содержать минимум 2 символа." }),
  firstName: z.string().min(2, { message: "Имя должно содержать минимум 2 символа." }),
  email: z.string().email({ message: "Введите корректный адрес почты." }),
  phone: z.string().regex(/^\+?[0-9\s\-]{10,15}$/, { message: "Введите корректный номер телефона." }),
  message: z.string().min(5, { message: "Сообщение должно быть не менее 5 символов." }),
})

const InputForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/api/submit-simple-form/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        toast({ title: result.message })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.detail || "Ошибка отправки формы")
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки формы",
        description: String(error),
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px]">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Фамилия" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Поле "Имя" */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Поле "Почта" */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Почта" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Поле "Номер телефона" */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Номер телефона" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Поле "Сообщение" */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className="max-h-[200px] min-h-[200px]" placeholder="Сообщение" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Кнопка отправки */}
        <Button type="submit" className="w-full bg-[#457AE9]">
          Отправить заявку
          <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill="white" strokeWidth="0.2"/>
          </svg>
        </Button>
      </form>
    </Form>
  )
}

export default InputForm
