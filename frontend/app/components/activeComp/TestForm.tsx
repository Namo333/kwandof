'use client'

import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

// Схема валидации
const FormSchema = z.object({
  purpose: z.string().min(1, { message: "Выберите вариант." }),
  amount: z.string().regex(/^\d+$/, { message: "Введите корректную сумму." }),
  creditHistory: z.string().min(1, { message: "Выберите вариант." }),
  income: z.string().min(1, { message: "Выберите вариант." }),
  name: z.string().min(2, { message: "Имя должно быть минимум 2 символа." }),
  surname: z.string().min(2, { message: "Фамилия должна быть минимум 2 символа." }),
  phone: z.string().regex(/^\+?[0-9\s\-]{10,15}$/, { message: "Введите корректный номер телефона." }),
  email: z.string().email({ message: "Введите корректный email." }),
  additionalInfo: z.string().optional(),
})

interface TestFormProps {
  buttonClass?: string
  buttonText?: string
  svgColor?: string
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const questions = [
  {
    id: 'purpose',
    question: 'Вам необходимо:',
    options: ['Получить деньги за 1 час', 'Рефинансирование', 'Увеличить имеющийся кредит', 'Банкротство'],
  },
  {
    id: 'amount',
    question: 'Какая сумма Вам необходима?',
    type: 'input',
  },
  {
    id: 'creditHistory',
    question: 'Как Вы оцениваете свою кредитную историю?',
    options: ['Плохая (есть текущие просрочки)', 'Средняя (просрочки были, сейчас нет)', 'Хорошая (платежи вовремя или досрочно)'],
  },
  {
    id: 'income',
    question: 'Можете ли Вы подтвердить доход?',
    options: ['Да, официальный доход', 'Да, косвенный доход', 'Не могу подтвердить доход'],
  },
  {
    id: 'personalInfo',
    question: 'Личная информация',
    type: 'personalInfo',
  },
]

const TestForm: FC<TestFormProps> = ({ buttonClass, buttonText, svgColor, buttonProps }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      purpose: "",
      amount: "",
      creditHistory: "",
      income: "",
      name: "",
      surname: "",
      phone: "",
      email: "",
      additionalInfo: "",
    },
  })

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Отправленные данные:", data)
    toast({ title: "Данные успешно отправлены!" })
    setIsOpen(false)
  }

  const renderQuestion = () => {
    const question = questions[currentQuestion]
    switch (question.type) {
      case 'input':
        return (
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="amount">{question.question}</Label>
                <FormControl>
                  <Input placeholder="Введите сумму" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 'personalInfo':
        return (
          <>
            {['name', 'surname', 'phone', 'email'].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field}
                render={({ field: innerField }) => (
                  <FormItem>
                    <Label htmlFor={field}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </Label>
                    <FormControl>
                      <Input placeholder={`Введите ${field}`} {...innerField} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="additionalInfo">Дополнительная информация</Label>
                  <FormControl>
                    <Input placeholder="Доп информация (опционально)" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </>
        )
      default:
        return (
          <FormField
            control={form.control}
            name={question.id}
            render={({ field }) => (
              <FormItem>
                <Label>{question.question}</Label>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value || ""}
                >
                  {question.options?.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={buttonClass || 'bg-[#457AE9] text-white px-[30px] rounded-[16px] p-[15px]'}
          {...buttonProps}
        >
          {buttonText || "Оставить заявку"}
          <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill={svgColor || 'white'} />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Тест</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="py-4">
              {renderQuestion()}
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
                Назад
              </Button>
              {currentQuestion === questions.length - 1 ? (
                <Button type="submit">Отправить</Button>
              ) : (
                <Button onClick={handleNext}>Вперед</Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default TestForm
