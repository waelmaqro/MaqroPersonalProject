"use client";
import React from "react";
import { Hero, FeatureCard, GetStarted } from "../../Components/Index";
import CustomMediaQuery from "../Queries/CustomMediaQuery";
import { FeatureCardData } from "@/Components/ComponentData";
import { Carousel } from "flowbite-react";

export default function features() {
  const isSmallScreen = CustomMediaQuery("(max-width: 1199px)");
  return (
    <main className="flex flex-col justify-center items-center  bg-gray-800 overflow-hidden w-screen">
      {/* Hero */}
      <section className="my-10">
        <Hero
          heading="Feature name"
          text="Experience luxury and performance like never before with Porche iconic
      lineup of precision-engineered vehicles."
          showButtons={false}
        />
      </section>

      {/* Feature Cards */}
      <section className="flex flex-col justify-center items-center gap-[100px]">
        {isSmallScreen ? (
          <Carousel leftControl=" " rightControl=" " className="py-10">
            {FeatureCardData.map((data, index) => (
              <FeatureCard
                title={data.title}
                imageUrl={data.imageUrl}
                description={data.description}
                flipSwitch={data.switch}
                key={index}
                divid={data.id}
                
              />
            ))}
          </Carousel>
        ) : (
          FeatureCardData.map((data, index) => (
            <FeatureCard
              title={data.title}
              imageUrl={data.imageUrl}
              description={data.description}
              flipSwitch={data.switch}
              key={index}
              divid={data.id}
            />
          ))
        )}
      </section>

      <section className="flex flex-col justify-center items-center gap-10">
        <GetStarted
        header="Get started!"
        text="Maecenas ullamcorper ullamcorper est, in condimentum ex volutpat ut.
        Quisque consequat imperdiet varius."
        button="Sign up" />
      </section>
    </main>
  );
}
