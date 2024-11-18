'use client'

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Массив отзывов с данными
const reviews = [
  {
    avatar: "🧔‍♂️", // Вместо emoji можно добавить URL картинки
    name: "Сергей Мирошниченко",
    text: "Я — пенсионер, и думал, что с кредитом будут проблемы. Однако в «Кванто Финанс» меня встретили с вниманием и заботой. Консультация была отличной, все объяснили ясно и подробно. Благодарю за профессионализм и ответственность!",
  },
  {
    avatar: "👩‍🦳",
    name: "Марина Кузнецова",
    text: "Очень довольна работой компании. Все оформили быстро, без лишних вопросов и проблем. Спасибо за профессионализм!",
  },
  {
    avatar: "👨‍💻",
    name: "Алексей Иванов",
    text: "Получил кредит на выгодных условиях. Процесс оформления был простым, и сотрудники оказались настоящими профессионалами.",
  },
  {
    avatar: "👩‍🔧",
    name: "Анна Сидорова",
    text: "Сотрудники очень вежливые и компетентные. Помогли выбрать подходящий вариант кредита. Спасибо за помощь!",
  },
  {
    avatar: "👨‍🏫",
    name: "Иван Петров",
    text: "Сотрудники очень вежливые и компетентные. Помогли выбрать подходящий вариант кредита. Спасибо за помощь!",
  },
];

const ReviewsSlider = () => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <div className="p-4 text-center flex flex-col items-center justify-center h-full gap-[25px]">
                <div className="flex items-center justify-center gap-[10px]">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100">
                        <span className="text-4xl">{review.avatar}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                </div>
                <p className=" text-lg text-gray-600">{review.text}</p>
                {/* <div className="flex items-center justify-center gap-[10px]">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100">
                        <span className="text-4xl">{review.avatar}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                </div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReviewsSlider;
