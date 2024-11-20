import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { Button } from '@/components/ui/button';
import TestForm from "./activeComp/TestForm";

const Faq = () =>{
    return (
        <section className="flex flex-col gap-[30px]">
            <div className="max-w-[450px] m-auto">
                <h2 className="text-gray-800 font-semibold text-lg sm:text-xl text-center">FAQ</h2>
                <h3 className="italic text-[24px] sm:text-[28px] lg:text-[35px] font-extrabold leading-tight text-center mt-2">
                    ОТВЕТЫ НА САМЫЕ ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                </h3>
            </div>
            <div className="flex justify-between items-center gap-[20px] max-md:flex-col">
                <Accordion type="single" collapsible className="w-full flex flex-col gap-[20px]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Что делает кридитный брокер?</AccordionTrigger>
                        <AccordionContent>
                        Кредитный брокер помогает выбрать лучший кредит, собрать документы и сопровождать сделку до конца.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Что делает кридитный брокер?</AccordionTrigger>
                        <AccordionContent>
                        Кредитный брокер помогает выбрать лучший кредит, собрать документы и сопровождать сделку до конца.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full flex flex-col gap-[20px]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Что делает кридитный брокер?</AccordionTrigger>
                        <AccordionContent>
                        Кредитный брокер помогает выбрать лучший кредит, собрать документы и сопровождать сделку до конца.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Что делает кридитный брокер?</AccordionTrigger>
                        <AccordionContent>
                        Кредитный брокер помогает выбрать лучший кредит, собрать документы и сопровождать сделку до конца.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex items-center justify-center gap-5 max-[380px]:flex-col max-[380px]:gap-2 w-full">
                <TestForm/>
                <Button className="bg-white text-black px-[30px] rounded-[16px] border-2 border-black p-[15px]">
                    Узнать больше
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill="black" stroke="black" strokeWidth="0.1"/>
                    </svg>
                </Button>
            </div>
        </section>
    )
}

export default Faq