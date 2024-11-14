import Image from 'next/image'
import { Button } from '@/components/ui/button'



const Advantages = () => {
    return (
        <section className="flex justify-between items-center gap-[20px] max-md:flex-col">
            <div className="">
                <h2 className="text-gray-800 font-semibold sm:text-xl text-lg">ПРЕИМУЩЕСТВА</h2>
                <h3 className="italic text-[28px] sm:text-[35px] font-extrabold leading-tight">ПРЕИМУЩЕСТВА РАБОТЫ 
                С НАМИ</h3>
                <p className="text-[#0000007a] my-[15px] max-w-md leading-[23px]">
                    Мы поможем вам найти лучшие условия кредита, упростим процесс и предложим индивидуальные
                    решения, которые соответствуют вашим потребностям и возможностям. Мы обеспечим поддержку
                    на каждом этапе оформления.
                </p>
                <Button className="bg-[#457AE9] text-white px-[30px] rounded-[16px] p-[15px]">
                    Оставить заявку
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill="white" stroke="black" strokeWidth="0.1"/>
                    </svg>
                </Button>
            </div>

            <div className="flex flex-col gap-6">
                <div >
                    <Image
                        src='/img/Frame 10.svg'
                        alt="bg"
                        width={1}
                        height={1}
                        className='w-full'
                    />
                </div>

                <div className="flex gap-6">
                    <div>
                        <Image
                            src='/img/Frame 11.svg'
                            alt="bg"
                            width={1}
                            height={1}
                            className='w-full'
                        />
                    </div>

                    <div>
                        <Image
                            src='/img/Frame 12.svg'
                            alt="bg"
                            width={1}
                            height={1}
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages
