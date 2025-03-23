"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import { cn } from "../../../lib/utils";

export function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch JSON data
    fetch("/Data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to load events:", err));
  }, []);

  const cards = events.map((event, index) => (
    <Card
      key={event.src}
      card={{
        ...event,
        content: <CustomContent text={event.content} imgSrc={event.src} />,
      }}
      index={index}
    />
  ));

  return (
    <div
      id="events"
      className="flex flex-col items-center justify-center w-full h-full py-20 "
    >
      <h2 className="mt-8 max-w-7xl pl-4 mx-auto text-xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Event Ledger So Far
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const CustomContent = ({ text, imgSrc }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {text}
        </span>
      </p>
      <Image
        src={imgSrc}
        alt="Event Image"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
