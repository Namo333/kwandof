import { Button } from '@/components/ui/button'
import TestForm from './activeComp/TestForm'

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
                <TestForm
                    buttonText='Пройти тест'
                />
            </main>
        </section>
    )
}

export default Test