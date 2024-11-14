import Image from 'next/image'

const OurApproach = () =>{
    return (
        <section>
            <h2 className="text-gray-800 font-semibold sm:text-xl text-lg text-center">НАШ ПОДХОД</h2>
            <h3 className="italic text-[28px] sm:text-[35px] font-extrabold leading-tight text-center">
                ЭТАПЫ ПОЛУЧЕНИЯ КРЕДИТА
            </h3>
            <div className="flex flex-col gap-[28px] mt-[40px]">
                <div className="flex justify-between gap-[28px]">
                    <div className="bg-[#F6F7F9] w-full h-max p-[30px] rounded-[10px]">
                        <div className="flex flex-col gap-[10px]">
                            <div className="bg-[#457AE9] rounded-full p-[20px] text-white w-[40px] h-[40px] flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <h3 className="italic text-[28px] sm:text-[35px] max-w-md  font-extrabold leading-tight">ПРЕИМУЩЕСТВА РАБОТЫ 
                                С НАМИ
                            </h3>
                            <p className="text-[#0000007a] max-w-md leading-[23px]">
                                Many desktop publishing packages and web page editors now use Lorem  Ipsum as their default model text, and a search for 'lorem ipsum' will  uncover many web sites.
                            </p>
                        </div>
                        <div className="flex">
                            <Image
                                src='/img/down.svg'
                                alt="bg"
                                width={412.14}
                                height={286.66}
                                quality={50}
                                loading="lazy"
                                className='w-full'
                            />
                        </div>
                    </div>

                    <div className="bg-[#F6F7F9] w-full h-max p-[30px] rounded-[10px]">
                        
                    </div>
                </div>

                <div className="bg-[#F6F7F9] w-full h-max p-[30px] rounded-[10px]">

                </div>
                <div className="flex gap-[28px] justify-between">
                    <div className="bg-[#F6F7F9] w-full h-[300px] p-[30px] rounded-[10px]">

                    </div>

                    <div className="bg-[#F6F7F9] w-full h-[300px] p-[30px] rounded-[10px]">
                        
                    </div>

                    <div className="bg-[#F6F7F9] w-full h-[300px] p-[30px] rounded-[10px]">
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurApproach