import Image from 'next/image';
import { Button } from '@/components/ui/button';
import TestForm from './activeComp/TestForm';

const OurApproach = () => {
    return (
        <section className="">
            <h2 className="text-gray-800 font-semibold text-lg sm:text-xl text-center">НАШ ПОДХОД</h2>
            <h3 className="italic text-[24px] sm:text-[28px] lg:text-[35px] font-extrabold leading-tight text-center mt-2">
                ЭТАПЫ ПОЛУЧЕНИЯ КРЕДИТА
            </h3>
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-10">
                {/* Первый ряд карточек */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-max">
                    {/* Карточка 1 */}
                    <div className="bg-[#F6F7F9] w-full lg:w-1/2 p-6 sm:p-8 rounded-lg relative overflow-hidden h-[560px]">
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#457AE9] rounded-full p-4 text-white w-10 h-10 flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <h3 className="italic text-lg sm:text-xl lg:text-[28px] font-extrabold leading-tight">
                                ОСТАВИТЬ ЗАЯВКУ НА САЙТЕ
                            </h3>
                            <p className="text-[#0000007a] text-sm sm:text-base leading-relaxed">
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites.
                            </p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0">
                            <Image
                                src="/img/down.png"
                                alt="bg"
                                width={412.14}
                                height={286.66}
                                loading="lazy"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Карточка 2 */}
                    <div className="bg-[#F6F7F9] w-full lg:w-1/2 p-6 sm:p-8 rounded-lg relative overflow-hidden h-[560px]">
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#457AE9] rounded-full p-4 text-white w-10 h-10 flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <h3 className="italic text-lg sm:text-xl lg:text-[28px] font-extrabold leading-tight">
                                АНАЛИЗ ВАШИХ ДАННЫХ
                            </h3>
                            <p className="text-[#0000007a] text-sm sm:text-base leading-relaxed">
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for orem ipsum will uncover many web sites.
                            </p>
                        </div>
                        <div className="absolute bottom-0">
                            <Image
                                src="/img/analiz.svg"
                                alt="bg"
                                width={1}
                                height={1}
                                loading="lazy"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Второй ряд карточек */}
                <div className="bg-[#F6F7F9] w-full h-auto p-6 sm:p-8 rounded-lg flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
                    <div className="flex flex-col gap-4 lg:w-2/3">
                        <div className="bg-[#457AE9] rounded-full p-4 text-white w-10 h-10 flex items-center justify-center font-bold text-xl">
                            3
                        </div>
                        <h3 className="italic text-lg sm:text-xl lg:text-[28px] font-extrabold leading-tight">
                            ПОДБОР ОПТИМАЛЬНОЙ КРЕДИТНОЙ ПРОГРАММЫ
                        </h3>
                        <p className="text-[#0000007a] text-sm sm:text-base leading-relaxed">
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites.
                        </p>
                    </div>
                    <div className="lg:w-1/3">
                        <Image
                            src="/img/vibor.svg"
                            alt="bg"
                            width={1}
                            height={1}
                            loading="lazy"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Третий ряд карточек */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-max">
                    {/* Карточка 4 */}
                    <div className="bg-[#F6F7F9] w-full lg:w-1/3 h-[390px] p-6 sm:p-8 rounded-lg relative overflow-hidden">
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#457AE9] rounded-full p-4 text-white w-10 h-10 flex items-center justify-center font-bold text-xl">
                                4
                            </div>
                            <h3 className="italic text-lg sm:text-xl lg:text-[28px] font-extrabold leading-tight">
                                АНАЛИЗ ВАШИХ ДАННЫХ
                            </h3>
                        </div>
                        <div className="absolute bottom-0">
                            <Image
                                src="/img/car.svg"
                                alt="bg"
                                width={1}
                                height={1}
                                loading="lazy"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Карточка 5 */}
                    <div className="bg-[#F6F7F9] w-full lg:w-1/3 h-[390px] p-6 sm:p-8 rounded-lg relative overflow-hidden">
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#457AE9] rounded-full p-4 text-white w-10 h-10 flex items-center justify-center font-bold text-xl">
                                5
                            </div>
                            <h3 className="italic text-lg sm:text-xl lg:text-[28px] font-extrabold leading-tight">
                                ПОЛУЧЕНИЕ ДЕНЕГ
                            </h3>
                        </div>
                        <div className="absolute bottom-0">
                            <Image
                                src="/img/bank.svg"
                                alt="bg"
                                width={1}
                                height={1}
                                loading="lazy"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Итоговая карточка */}
                    <div className="bg-[url('/img/fon.svg')]  bg-cover w-full lg:w-1/3 h-auto p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center gap-6">
                        <h3 className="italic text-lg sm:text-xl lg:text-[28px] text-center text-white font-extrabold leading-tight">
                            ВСЕ В ОДНОЙ КОМПАНИИ
                        </h3>
                        <TestForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
