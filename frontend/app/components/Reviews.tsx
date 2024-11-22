import ReviewsSlier from "./activeComp/ReviewsSlider"

const Reviews = () => {
    return (
        <section id="reviews">
            <div className="max-w-[450px] m-auto">
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