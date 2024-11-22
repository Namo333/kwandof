import Image from 'next/image'
import { Button } from '@/components/ui/button'
import TestForm from './activeComp/TestForm'


const Advantages = () => {
    return (
        <section className="flex justify-between items-center gap-[20px] max-md:flex-col">
            <div className="">
                <h3 className="italic text-[28px] sm:text-[35px] font-extrabold leading-tight">ПРЕИМУЩЕСТВА РАБОТЫ 
                С НАМИ</h3>
                <p className="text-[#0000007a] my-[15px] max-w-md leading-[23px]">
                    Мы поможем вам найти лучшие условия кредита, упростим процесс и предложим индивидуальные
                    решения, которые соответствуют вашим потребностям и возможностям. Мы обеспечим поддержку
                    на каждом этапе оформления.
                </p>
                <TestForm/>
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
