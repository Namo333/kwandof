import Link from "next/link"
import Image from 'next/image'

import Container from "./Container"
import InputForm from "./activeComp/ContcatForm";

const FooterSection = () => {
    return (
        <section className="w-full bg-[url('/img/footer.png')] bg-center h-auto lg:h-[700px] bg-cover text-white">
            <Container>
                <main className="flex flex-col justify-between pt-[80px] gap-[40px]">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] flex-grow">
                        {/* Левая колонка */}
                        <div className="flex flex-col gap-[10px] flex-grow lg:w-1/2">
                            <div className="">
                                <h2 className=" font-semibold sm:text-xl text-lg">КОНТАКТЫ</h2>
                                <h3 className="italic text-[28px] sm:text-[35px] font-extrabold leading-tight">СВЯЗАТЬСЯ С НАМИ</h3>
                                <p className="text-[#ffffff67] pb-[35px] pt-[10px] text-[15px] sm:text-[18px] max-w-md leading-[23px]">
                                    Какой бы ни была ваша цель – мы доставим вас туда.
                                </p>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex gap-[15px]">
                                    <svg
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 9.43841C0 8.21422 0.56058 7.05744 1.52142 6.29888L7.02142 1.95677C8.47466 0.809478 10.5253 0.809479 11.9786 1.95677L17.4786 6.29888C18.4394 7.05744 19 8.21422 19 9.43841V16C19 18.2091 17.2091 20 15 20H13.5C12.9477 20 12.5 19.5523 12.5 19V16C12.5 14.8954 11.6046 14 10.5 14H8.5C7.39543 14 6.5 14.8954 6.5 16V19C6.5 19.5523 6.05228 20 5.5 20H4C1.79086 20 0 18.2091 0 16L0 9.43841Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <div>
                                        <h2 className="font-medium text-[18px] sm:text-[20px]">Наш адрес: </h2>
                                        <p className="text-[#ffffff67] my-[10px] text-[15px] sm:text-[18px] max-w-md leading-[23px]">
                                            м. Павелецкая, 5-й Монетчиковский переулок, 18
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-[15px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0621 20.9693C17.1077 22.9236 12.1028 21.0873 7.88327 16.8677C3.66372 12.6482 1.82739 7.64325 3.7817 5.68893L5.06847 4.40216C5.9568 3.51383 7.42054 3.53731 8.33784 4.45461L10.3309 6.4477C11.2482 7.36499 11.2717 8.82874 10.3834 9.71706L10.107 9.99345C9.62737 10.4731 9.58045 11.2468 10.0261 11.7868C10.456 12.3078 10.9194 12.8266 11.4219 13.3291C11.9244 13.8316 12.4432 14.295 12.9641 14.7249C13.5042 15.1705 14.2779 15.1236 14.7575 14.644L15.0339 14.3676C15.9222 13.4793 17.386 13.5028 18.3033 14.4201L20.2964 16.4131C21.2137 17.3304 21.2371 18.7942 20.3488 19.6825L19.0621 20.9693Z" fill="white" stroke="white" strokeWidth="1.5"/>
                                        <path d="M17.6267 9.75071C17.3827 9.15553 17.0191 8.5979 16.5358 8.11463C16.0798 7.65865 15.5576 7.30918 15.0002 7.06622" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M15.0002 3.66341C16.3348 4.14691 17.587 4.92365 18.657 5.99364C19.7539 7.09049 20.5426 8.37883 21.0231 9.75113" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    <div className="">
                                        <h2 className="font-medium text-[18px] sm:text-[20px]">Напишите нам: </h2>
                                        <p className="text-[#ffffff67] my-[10px] text-[15px] sm:text-[18px] max-w-md leading-[23px]">info@credit-ipoteka.com</p>
                                    </div>
                                </div>


                                <div className="flex gap-[15px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 3.5C4 2.67157 4.67157 2 5.5 2H10.5C11.3284 2 12 2.67157 12 3.5V11.5C12 12.3284 11.3284 13 10.5 13H4V3.5Z" fill="white" stroke="white" stroke-width="1.5"/>
                                        <path d="M11 4H18.0362C18.8535 4 19.3257 4.9272 18.845 5.58817L16.8555 8.32366C16.3455 9.02496 16.3455 9.97504 16.8555 10.6763L18.845 13.4118C19.3257 14.0728 18.8535 15 18.0362 15H12C11.4477 15 11 14.5523 11 14V4Z" fill="white" stroke="white" strokeWidth="1.5"/>
                                        <path d="M4 22L4 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <div className="">
                                        <h2 className="font-medium text-[18px] sm:text-[20px]">FAQ: </h2>
                                        <p className="text-[#ffffff67] my-[10px] text-[15px] sm:text-[18px] max-w-md leading-[23px]">Найдите ответы на все ваши вопросы в нашем разделе часто задаваемых вопросов.</p>
                                        <a href="" className="text-[#457AE9] flex items-center gap-[5px]">
                                            Посетить FAQ
                                            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill="#457AE9" strokeWidth="0.2"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>




                            </div>
                        </div>

                        <div className="flex-grow lg:w-1/2">
                            <div className="mx-auto w-full">
                                <InputForm />
                            </div>
                        </div>
                    </div>

                    {/* Нижний блок */}
                    <div className="flex items-center justify-between mt-auto pt-10">
                        <Link href="/" className="text-white font-bold">
                            <Image src="/img/Logo.svg" width={100} height={100} alt="Logo" />
                        </Link>
                        <p className="text-[#ffffff67]">© 2024 Kwando Finance. by namo</p>
                    </div>
                </main>
            </Container>
        </section>
    );
};

export default FooterSection