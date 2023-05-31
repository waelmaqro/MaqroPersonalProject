"use client";
import FlowCarousel from "@/Components/FlowCarousel";
import {
  FeatureCard,
  TrustedByCompanies,
  GetStarted,
  BlogCard,
  Hero,
} from "../Components/Index";
import PricingCards from "@/Components/PricingCards";
import { BlogData } from "@/Components/ComponentData";
import CustomMediaQuery from "./Queries/CustomMediaQuery";
import { Carousel } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  const isSmallScreen = CustomMediaQuery("(max-width: 1199px)");

  return (
    <main className="flex flex-col  bg-gray-800 overflow-hidden ">
      <section className="h-screen w-screen bg-[url('/landingimage.jpg')] bg-fixed bg-cover bg-opacity-50 flex justify-center items-center">
        <Hero
          heading="Porche, full spectrum - full synergy."
          text="Experience luxury and performance like never before with Porche iconic
      lineup of precision-engineered vehicles."
          button1="Join us now"
          button2="Request Demo"
        />
      </section>
      {/* Body */}
      <section className="z-[20] bg-gray-800 py-10">
        {/* Trusted Section */}
        <section className="flex flex-col items-center justify-center text-white bg-gray-800 w-screen gap-10 mt-[100px] z-[20]">
          <h2 className="heading xxl:text-5xl sm:text-3xl xxs:text-2xl text font-bold opacity-80">
            Trusted by
          </h2>
          <TrustedByCompanies />
        </section>

        {/* Feature Section */}
        <section className="my-[200px] flex flex-col gap-[100px] justify-center items-center ">
          {isSmallScreen ? (
            <Carousel leftControl=" " rightControl=" " className="py-10">
              <FeatureCard
                title="Feature"
                imageUrl="/landingimage.jpg"
                description=" Experience luxury and performance like never before with Porche
                iconic lineup of precision-engineered vehicles."
                flipSwitch={false}
              />
              <FeatureCard
                title="Feature"
                imageUrl="/landingimage.jpg"
                description=" Experience luxury and performance like never before with Porche
                iconic lineup of precision-engineered vehicles."
                flipSwitch={true}
              />
            </Carousel>
          ) : (
            <>
              <FeatureCard
                title="Feature"
                imageUrl="/landingimage.jpg"
                description=" Experience luxury and performance like never before with Porche
                iconic lineup of precision-engineered vehicles."
                flipSwitch={false}
              />
              <FeatureCard
                title="Feature"
                imageUrl="/landingimage.jpg"
                description=" Experience luxury and performance like never before with Porche
                iconic lineup of precision-engineered vehicles."
                flipSwitch={true}
              />
            </>
          )}
        </section>

        {/* Carousel Section */}
        <section className="my-[100px] z-[21] bg-[url('/landingimage2.jpg')] bg-fixed bg-cover flex justify-center">
          <FlowCarousel />
        </section>

        {/* Pricing Cards Section */}
        <section className="my-[100px] flex justify-center items-center flex-col gap-4 ">
          <h2 className="heading xxl:text-5xl sm:text-3xl xxs:text-2xl text font-bold opacity-80 text-white text-center">
            Pricing
          </h2>
          <p className="md:max-w-[70%] xxs:w-[85%] sm:w-[70%] text-white  xxl:text-3xl xxs:text-xl xxs:max-w-screen flex flex-col md:gap-4 xxs:gap-2  justify-center items-center opacity-80 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <PricingCards />
        </section>

        {/* Get Started Section */}
        <section className="my-[100px] flex justify-center ">
          <GetStarted
            header="Get started!"
            text="Maecenas ullamcorper ullamcorper est, in condimentum ex volutpat ut.
            Quisque consequat imperdiet varius."
            button="Sign up"
          />
        </section>

        {/* Blog Section */}
        <section className="my-[100px] flex justify-center items-center flex-col gap-4">
          <h2 className="heading xxl:text-5xl sm:text-3xl xxs:text-2xl text font-bold opacity-80 text-white">
            What&apos;s new?
          </h2>
          <p className="md:max-w-[70%] xxs:w-[85%] sm:w-[70%] text-center text-white  xxl:text-3xl xxs:text-xl xxs:max-w-screen flex flex-col md:gap-4 xxs:gap-2  justify-center items-center opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            gravida velit vitae commodo fringilla.
          </p>
          <div className="flex justify-center items-center gap-4 md:flex-row xxs:flex-col px-4 max-w-[1500px]">
            {BlogData.map((data, index) => (
              <BlogCard
                key={index}
                imgSrc={data.imageSrc}
                authorName={data.author}
                blogTitle={data.text}
                duration={data.duration}
                date={data.date}
              />
            ))}
          </div>
          <Link href="/blog">
          <button className="px-8 py-3  bg-gray-700 hover:opacity-75 text-white rounded-md min-w-[200px] transition duration-300">
            See more articles
          </button>
          </Link>
        </section>
      </section>
    </main>
  );
}
