import { Button } from '@/components/ui/button'

const Test = () => {
    return (
        <section className="w-full bg-[url('/img/content.png')] bg-center h-auto lg:h-[500px] p-[40px] bg-cover rounded-[20px] flex items-center justify-center">
            <main className='flex flex-col text-white items-center justify-center'>
                <h3 className="italic text-[24px] sm:text-[28px] lg:text-[35px] font-extrabold leading-tight text-center mt-2">
                    ПРОСТОЙ ТЕСТ
                </h3>
                <p className="text-[#ffffff67] my-[15px] max-w-md leading-[23px] text-center">
                    Пройдите простой тест за 1 минуту и увеличьте шансы на одобрение кредита!
                </p>
                <Button className="bg-[#457AE9] text-white px-[30px] rounded-[16px] p-[15px]">
                    Оставить заявку
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill="white" stroke="black" strokeWidth="0.1"/>
                    </svg>
                </Button>
            </main>
        </section>
    )
}

export default Test