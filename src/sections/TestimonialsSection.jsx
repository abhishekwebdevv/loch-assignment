import { TestimonialCard } from "../components";
import logo from "../assets/logo.svg";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Swiper, SwiperSlide } from "swiper/react";

export function TestimonialsSection() {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-medium text-white sm:text-right text-center">
        Testimonials
      </h2>
      <div className="border-b border-gray-50/50 w-full mt-4" />

      <div className="flex flex-col sm:flex-row w-full items-end gap-x-10 py-10">
        <img
          src={logo}
          alt="logo"
          width="60px"
          height="60px"
          className="order-2 inline-flex self-center mt-10 sm:mt-0 sm:self-end sm:inline-block sm:order-1"
        />
        <Swiper
          slidesPerView={1.1}
          breakpoints={{
            450: {
              slidesPerView: 1.5,
            },
          }}
          className="sm:-mr-16 w-full h-auto self-stretch order-1 sm:order-2"
          draggable
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <TestimonialCard
              title="Jack F"
              subtitle="Ex Blackrock PM"
              content="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              title="Yash P"
              subtitle="Research, 3poch Crypto Hedge Fund"
              content="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              title="Shiv S"
              subtitle="Co-Founder Magik Labs"
              content="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
            />
          </SwiperSlide>
        </Swiper>
        {/* <CarouselProvider
          totalSlides={3}
          className="w-full mt-10 -mr-16"
          dragEnabled
          visibleSlides={1.7}
          isIntrinsicHeight
        >
          <Slider>
            <Slide index={0}>
              <TestimonialCard
                title="Jack F"
                subtitle="Ex Blackrock PM"
                content="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
              />
            </Slide>
            <Slide index={1}>
              <TestimonialCard
                title="Yash P"
                subtitle="Research, 3poch Crypto Hedge Fund"
                content="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
              />
            </Slide>

            <Slide index={2}>
              <TestimonialCard
                title="Shiv S"
                subtitle="Co-Founder Magik Labs"
                content="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
              />
            </Slide>
          </Slider>
        </CarouselProvider> */}
      </div>
    </section>
  );
}
