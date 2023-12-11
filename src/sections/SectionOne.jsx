import bell from "../assets/bell.svg";
import { ReminderCard } from "../components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function SectionOne() {
  return (
    <section className="sm:flex gap-5">
      <div className="sm:w-1/2 flex flex-col gap-4">
        <img src={bell} alt="bell-icon" className="h-6 w-6" />
        <p className="text-white text-3xl font-normal text-center sm:text-left">
          Get notified when a highly correlated whale makes a move
        </p>

        <p className="text-gray-300 font-normal text-center sm:text-left">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>

      <div className="sm:w-1/2 mt-10 sm:mt-0">
        <Swiper
          slidesPerView={1.1}
          breakpoints={{
            450: {
              slidesPerView: 1.5,
            },
          }}
          className="h-3/4 sm:-mr-16"
          draggable
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <ReminderCard
              type={1}
              text="We’ll be sending notifications to you here"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReminderCard
              type={2}
              text="Notify me when any wallets move more than"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReminderCard
              type={3}
              text="Notify me when any wallet dormant for"
              caption="becomes active"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
