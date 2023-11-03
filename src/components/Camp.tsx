"use client";
import foldedMapSvg from "@/public/folded-map.svg";
import Image from "next/image";
import { PEOPLE_URL } from "@/src/data";
import quoteSvg from "@/public/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type CampSiteProps = {
  title: string;
  subtitle: string;
  peopleJoined: string;
};

function CampSite({ title, subtitle, peopleJoined }: CampSiteProps) {
  return (
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image src={foldedMapSvg} alt="map" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url, i) => (
            <Image className="inline-block h-10 w-10 rounded-full" src={url} key={i} alt="person" />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
    </div>
  );
}

function Camp() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <Swiper spaceBetween={50} autoplay={true} slidesPerView={"auto"} loop={true} modules={[Autoplay]} className="h-[340px] w-full lg:h-[400px] xl:h-[640px]">
        <SwiperSlide className="h-full w-full max-w-[1100px] bg-img-1 bg-cover bg-no-repeat lg:rounded-5xl">
          <CampSite title="Putuk Truno Camp" subtitle="Prigen, Pasuruan" peopleJoined="50+ Joined" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full max-w-[1100px] bg-img-2 bg-cover bg-no-repeat lg:rounded-5xl">
          <CampSite title="Mountain View Camp" subtitle="Somewhere in the Wilderness" peopleJoined="47+ Joined" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full max-w-[1100px] bg-img-3 bg-cover bg-no-repeat lg:rounded-5xl">
          <CampSite title="Sky View Camp" subtitle="Somewhere in the Wilderness" peopleJoined="43+ Joined" />
        </SwiperSlide>
      </Swiper>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 z-40">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That&apos;s why we are here for those of you who want to
            start an adventure
          </p>
          <Image src={quoteSvg} alt="camp-2" className="camp-quote" />
        </div>
      </div>
    </section>
  );
}

export default Camp;
