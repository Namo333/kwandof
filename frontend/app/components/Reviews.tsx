import ReviewsSlier from "./activeComp/ReviewsSlider"

const Reviews = () => {
    return (
        <section>
            <div className="max-w-[450px] m-auto">
                <h2 className="text-gray-800 font-semibold text-lg sm:text-xl text-center">ОТЗЫВЫ</h2>
                <h3 className="italic text-[24px] sm:text-[28px] lg:text-[35px] font-extrabold leading-tight text-center mt-2">
                    ОТЗЫВЫ НАШИХ ДОВОЛЬНЫХ КЛИЕНТОВ
                </h3>
            </div>
            <div className="flex flex-col items-center justify-center">
                <ReviewsSlier/>
            </div>
        </section>
    )
}

export default Reviews