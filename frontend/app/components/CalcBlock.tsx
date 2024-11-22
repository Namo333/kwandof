"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "./Container";
import TestForm from "./activeComp/TestForm";

// Определение типов пропсов для InfoBlock
interface InfoBlockProps {
  bgColor: string; // bgColor должен быть строкой (CSS класс для фона)
  title: string;   // title должен быть строкой (заголовок блока)
  value: string;   // value должен быть строкой (значение, которое будет отображаться)
}

// Компонент для каждого информационного блока
const InfoBlock: React.FC<InfoBlockProps> = ({ bgColor, title, value }) => (
  <div className="bg-white h-[190px] p-[15px] rounded-[15px] flex flex-col w-full sm:w-[240px] lg:w-[240px] justify-between">
    <div className={`p-[15px] flex ${bgColor} items-center gap-[10px] rounded-[10px] w-full h-[60px]`}>
      <div className="flex flex-col">
        <p className="text-sm">Account Number</p>
        <p className="text-sm">•••••••• 1989</p>
      </div>
    </div>
    <div>
      <h2 className="text-base sm:text-lg">{title}</h2>
      <p className="font-semibold text-xl sm:text-2xl">{value}₽</p>
    </div>
  </div>
);

const CalcBlock = () => {
  const [creditAmount, setCreditAmount] = useState(500000); // сумма кредита
  const [interestRate, setInterestRate] = useState(50); // процентная ставка
  const [loanTerm, setLoanTerm] = useState(6); // срок кредита

  // Функции расчёта
  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const termInMonths = loanTerm * 12;
    const payment = (creditAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonths));
    return payment.toFixed(2); // Возвращаем строку с двумя знаками после запятой
  };
  
  const calculateTotalRepayment = () => {
    const totalRepayment = parseFloat(calculateMonthlyPayment()) * loanTerm * 12; // Сначала получаем число, а потом форматируем
    return totalRepayment.toFixed(2); // Возвращаем строку
  };
  
  const calculateOverpayment = () => {
    const overpayment = parseFloat(calculateTotalRepayment()) - creditAmount; // Сначала получаем число
    return overpayment.toFixed(2); // Возвращаем строку
  };

  return (
    <section className='bg-[url("/img/calc.svg")] bg-center h-auto lg:h-[620px] bg-cover'>
      <Container>
        <main className="flex flex-col lg:flex-row justify-between py-[50px] lg:py-[100px] gap-[20px]">
          {/* Блок ввода значений */}
          <div className="flex flex-col gap-[20px] lg:gap-[30px] w-full lg:w-[500px]">
            <div>
              <h3 className="italic text-[28px] sm:text-[35px] text-white font-extrabold leading-tight">
                ВСЕ В ОДНОЙ ПЛАТФОРМЕ ДЛЯ ЭКОНОМИИ ВРЕМЕНИ
              </h3>
            </div>
            <div className="flex flex-col gap-[20px] w-full lg:w-[424px]">
              {/* Сумма кредита */}
              <div className="text-white">
                <div className="flex justify-between">
                  <p className="pb-[13px] text-sm sm:text-base">Сумма кредита</p>
                  <p className="text-sm sm:text-base">{creditAmount}</p>
                </div>
                <Slider
                  value={[creditAmount]}
                  onValueChange={(value) => setCreditAmount(value[0])}
                  max={1000000}
                  step={1}
                  className="lg:opacity-100 lg:pointer-events-auto opacity-0 pointer-events-none"
                />
                <Input
                  type="number"
                  value={creditAmount}
                  onChange={(e) => setCreditAmount(Number(e.target.value))}
                  className="lg:hidden"
                />
              </div>

              {/* Процентная ставка */}
              <div className="text-white">
                <div className="flex justify-between">
                  <p className="pb-[13px] text-sm sm:text-base">Процентная ставка (%)</p>
                  <p className="text-sm sm:text-base">{interestRate}</p>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  max={100}
                  step={0.1}
                  className="lg:opacity-100 lg:pointer-events-auto opacity-0 pointer-events-none"
                />
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="lg:hidden"
                />
              </div>

              {/* Срок кредита */}
              <div className="text-white">
                <div className="flex justify-between">
                  <p className="pb-[13px] text-sm sm:text-base">Срок кредита (лет)</p>
                  <p className="text-sm sm:text-base">{loanTerm}</p>
                </div>
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  max={30}
                  step={1}
                  className="lg:opacity-100 lg:pointer-events-auto opacity-0 pointer-events-none"
                />
                <Input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="lg:hidden"
                />
              </div>
            </div>
            <TestForm
              buttonClass="bg-white px-[20px] lg:px-[30px] rounded-[16px] py-[10px] lg:py-[15px] w-full lg:w-[200px]"
              svgColor="black"
            />
          </div>

          <div className="flex flex-wrap gap-[20px] lg:gap-[30px] justify-center items-center w-full max-w-[1440px] mx-auto">
            <InfoBlock bgColor="bg-[#CAACFF]" title="Ежемесячный платеж" value={calculateMonthlyPayment()} />
            <InfoBlock bgColor="bg-[#9DFF08]" title="Сумма возврата" value={calculateTotalRepayment()} />
            <InfoBlock bgColor="bg-[#FBD83C]" title="Переплата" value={calculateOverpayment()} />
          </div>
        </main>
      </Container>
    </section>
  );
};

export default CalcBlock;
