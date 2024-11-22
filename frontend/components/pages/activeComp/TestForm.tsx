"use client"

import { FC, useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

// Define the schema for each step
const step1Schema = z.object({
  service: z.enum(["money", "refinancing", "increase", "bankruptcy"], {
    required_error: "Пожалуйста, выберите услугу",
  }),
})

const step2Schema = z.object({
  amount: z.string().min(1, "Пожалуйста, введите сумму").refine((val) => Number(val) >= 50000, {
    message: "Сумма должна быть не менее 50.000",
  }),
})

const step3Schema = z.object({
  creditHistory: z.enum(["bad", "average", "good"], {
    required_error: "Пожалуйста, оцените вашу кредитную историю",
  }),
})

const step4Schema = z.object({
  incomeConfirmation: z.enum(["official", "indirect", "none"], {
    required_error: "Пожалуйста, выберите вариант подтверждения дохода",
  }),
})

const step5Schema = z.object({
  lastName: z.string().min(2, { message: "Фамилия должна содержать минимум 2 символа." }),
  firstName: z.string().min(2, { message: "Имя должно содержать минимум 2 символа." }),
  email: z.string().email({ message: "Введите корректный адрес почты." }),
  phone: z.string().regex(/^\+?[0-9\s\-]{10,15}$/, { message: "Введите корректный номер телефона." }),
  message: z.string().min(5, { message: "Сообщение должно быть не менее 5 символов." }),
})

const formSchema = z.object({
  step1: step1Schema,
  step2: step2Schema,
  step3: step3Schema,
  step4: step4Schema,
  step5: step5Schema,
})

type FormData = z.infer<typeof formSchema>

interface MultiStepTestFormProps {
  buttonClass?: string
  buttonText?: string
  svgColor?: string
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const MultiStepTestForm: FC<MultiStepTestFormProps> = ({ buttonClass, buttonText, svgColor, buttonProps }) => {
  const [step, setStep] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      step1: { service: undefined },
      step2: { amount: "" },
      step3: { creditHistory: undefined },
      step4: { incomeConfirmation: undefined },
      step5: { lastName: "", firstName: "", email: "", phone: "", message: "" },
    },
  })
  
  const onSubmit = async (data: FormData) => {
    // Преобразование вложенной структуры в плоскую
    const flattenedData = {
      ...data.step1,
      ...data.step2,
      ...data.step3,
      ...data.step4,
      ...data.step5,
    };
  
    try {
      const response = await fetch('http://localhost:8000/submit-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(flattenedData), // Отправляем преобразованные данные
      });
  
      if (!response.ok) {
        throw new Error('Ошибка отправки формы');
      }
  
      toast({
        title: "Форма успешно отправлена!",
        description: "Спасибо за прохождение теста.",
      });
  
      setStep(1);
      form.reset();
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Ошибка!",
        description: error.message || "Произошла ошибка при отправке данных.",
        variant: "destructive",
      });
    }
  };
  

  const nextStep = async () => {
    const stepKey = `step${step}` as keyof FormData
    const isValid = await form.trigger(stepKey)
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 5))
    }
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FormField
            control={form.control}
            name="step1.service"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {[
                      { value: "money", label: "Получить деньги за 1 час" },
                      { value: "refinancing", label: "Рефинансирование" },
                      { value: "increase", label: "Увеличить имеющийся кредит" },
                      { value: "bankruptcy", label: "Банкротство" },
                    ].map((option) => (
                      <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={option.value} id={option.value} />
                        </FormControl>
                        <Label
                          htmlFor={option.value}
                          className="flex flex-1 items-center space-x-3 space-y-0 cursor-pointer rounded-lg border p-4 transition-colors hover:bg-muted data-[state=checked]:border-primary data-[state=checked]:bg-primary/10"
                        >
                          {option.label}
                        </Label>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 2:
        return (
          <FormField
            control={form.control}
            name="step2.amount"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Введите сумму (от 50.000)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 3:
        return (
          <FormField
            control={form.control}
            name="step3.creditHistory"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {[
                      { value: "bad", label: "Плохая (есть текущие просрочки)" },
                      { value: "average", label: "Средняя (просрочки были, сейчас нет)" },
                      { value: "good", label: "Хорошая (платежи вовремя или досрочно)" },
                    ].map((option) => (
                      <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={option.value} id={option.value} />
                        </FormControl>
                        <Label
                          htmlFor={option.value}
                          className="flex flex-1 items-center space-x-3 space-y-0 cursor-pointer rounded-lg border p-4 transition-colors hover:bg-muted data-[state=checked]:border-primary data-[state=checked]:bg-primary/10"
                        >
                          {option.label}
                        </Label>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 4:
        return (
          <FormField
            control={form.control}
            name="step4.incomeConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {[
                      { value: "official", label: "Да, официальный доход" },
                      { value: "indirect", label: "Да, косвенный доход" },
                      { value: "none", label: "Не могу подтвердить доход" },
                    ].map((option) => (
                      <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={option.value} id={option.value} />
                        </FormControl>
                        <Label
                          htmlFor={option.value}
                          className="flex flex-1 items-center space-x-3 space-y-0 cursor-pointer rounded-lg border p-4 transition-colors hover:bg-muted data-[state=checked]:border-primary data-[state=checked]:bg-primary/10"
                        >
                          {option.label}
                        </Label>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 5:
        return (
          <>
            <div className="flex gap-[10px]">
              <FormField
                control={form.control}
                name="step5.lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Фамилия" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="step5.firstName"
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
            <FormField
              control={form.control}
              name="step5.email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Почта" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="step5.phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Номер телефона" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="step5.message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Сообщение" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className={buttonClass || "bg-[#457AE9] text-white px-[30px] rounded-[16px] p-[15px]"}
          {...buttonProps}
          onClick={() => setIsDialogOpen(true)}
        >
          {buttonText || "Оставить заявку"}
          <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" 
              fill={svgColor || "white"} 
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Тест на получение кредита</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 5) * 100}%` }}></div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Вопрос {step}</h2>
              {renderStep()}
            </div>
            <div className="flex justify-between">
              <Button type="button" onClick={prevStep} disabled={step === 1} variant="outline">
                Назад
              </Button>
              {step < 5 ? (
                <Button type="button" onClick={nextStep}>
                  Далее
                </Button>
              ) : (
                <Button type="submit">Отправить</Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default MultiStepTestForm

