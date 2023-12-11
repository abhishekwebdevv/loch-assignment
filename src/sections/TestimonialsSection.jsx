import { TestimonialCard } from "../components";
import logo from "../assets/logo.svg";
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
      </div>
    </section>
  );
}
