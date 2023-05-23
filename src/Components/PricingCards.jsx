"use client";
import React from "react";
import { Tabs } from "flowbite-react";

const PricingCards = () => {
  return (
    <div className="z-20 my-[100px] text-white">
      <Tabs.Group aria-label="Pills" style="pills">
        <Tabs.Item active={true} title="Monthly">
          
        </Tabs.Item>
        <Tabs.Item title="Yearly"></Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default PricingCards;
