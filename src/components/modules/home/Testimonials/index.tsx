"use client";

import so from "../../../../assets/so.png";
import so1 from "../../../../assets/so1.png";
import so2 from "../../../../assets/so2.png";
import user1 from "../../../../assets/user1.jpg";
import user2 from "../../../../assets/user2.jpg";

import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import NMContainer from "@/components/ui/core/NMContainer";

const Testimonials = () => {
  return (
    <>
      <NMContainer>
      <h1 className="text-5xl font-bold text-center mt-10 pb-20">Testimonials</h1>
      <div className="max-w-[1200px] m-auto w-full px-4 py-8 p-5 pb-20">
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          modules={[Grid, Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            580: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            440: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            460: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            415: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            410: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            409: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            389: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            377: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            426: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            430: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-danger-700 dark:shadow-black/30 ">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#8D1C2F]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-danger-800 dark:bg-danger-800">
                <Image src={so} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Fatima Akter</h4>
                <hr />
                <p className="mt-4">
                  Finding a rental used to be stressful, but thanks to
                  BasaKhuji.com, I got my ideal apartment quickly. The app is
                  user-friendly and has great listings
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={so1} width={100} height={100} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Md. Rahim Uddin</h4>
                <hr />
                <p className="mt-4">
                  BasaKhuji.com made my house-hunting experience so easy! I
                  found the perfect rental within days, without any hassle.
                  Highly recommend this app to anyone looking for a home!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#6590D5]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={so2} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Sadia Rahman</h4>
                <hr />
                <p className="mt-4">
                  BasaKhuji.com is a game-changer! I didn’t have to run around
                  or rely on brokers. The listings are verified and trustworthy.
                  Highly recommended!.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 mb-3 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto mb-3 -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={user1} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="mt-4">
                  Finding a rental used to be stressful, but thanks to
                  BasaKhuji.com, I got my ideal apartment quickly. The app is
                  user-friendly and has great listings.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#F7E4BE]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden mb-3 rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={user2} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Mithila Hossain</h4>
                <hr />
                <p className="mt-4">
                  Finding a rental used to be stressful, but thanks to
                  BasaKhuji.com, I got my ideal apartment quickly. The app is
                  user-friendly and has great listings
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={so2} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="mt-4">
                  Finding a rental used to be stressful, but thanks to
                  BasaKhuji.com, I got my ideal apartment quickly. The app is
                  user-friendly and has great listings
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={so2} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="mt-4">
                  Finding a rental used to be stressful, but thanks to
                  BasaKhuji.com, I got my ideal apartment quickly. The app is
                  user-friendly and has great listings
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={so2} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Mithila Hossain</h4>
                <hr />
                <p className="mt-4">
                  Finding a rental used to be stressful, but thanks to
                  BasaKhuji.com, I got my ideal apartment quickly. The app is
                  user-friendly and has great listings
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-danger-800">
                <Image src={so2} alt="" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="mt-4">
                  Finding a rental used to be stressful, but thanks to
                  BasaKhuji.com, I got my ideal apartment quickly. The app is
                  user-friendly and has great listings.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </NMContainer>
    </>
  );
};

export default Testimonials;
