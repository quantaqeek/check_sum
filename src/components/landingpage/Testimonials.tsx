"use client";
import { testimonies } from "@/app/data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TiArrowBackOutline, TiArrowForwardOutline } from "react-icons/ti";

// Define the type for each card
type CardType = {
  id: number;
  image: string;
  descp: string;
  name: string;
  type: string;
  title: string;
};

const Testimonials = () => {
  const [cards, setCards] = useState<CardType[]>(testimonies);

  const resetCards = () => {
    setCards([...testimonies]); // Reset to the initial state
  };

  return (
    <section className="w-full flex items-center ">
      <div className="w-full flex flex-col flex-1 relative mb-8 min-h-screen">
        {cards.map((testimony) => (
          <Card
            key={testimony.id}
            id={testimony.id}
            type={testimony.type}
            url={testimony.image}
            txt={testimony.descp}
            cards={cards}
            name={testimony.name}
            title={testimony.title}
            setCards={setCards}
            resetCards={resetCards}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const Card = ({
  id,
  url,
  txt,
  cards,
  name,
  type,
  title,
  setCards,
  resetCards,
}: {
  id: number;
  name: string;
  type: string;
  title: string;
  url: string;
  txt: string;
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>;
  resetCards: () => void; // New prop for resetting cards
}) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-36, 36]);
  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prevCards) => {
        const updatedCards = prevCards.filter((card) => card.id !== id);
        if (updatedCards.length === 0) {
          // Reset cards when empty
          resetCards();
        }
        return updatedCards;
      });
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-2 sm:p-4 md:p-8">
      {isFront && (
        <div className="flex flex-col w-full items-center max-w-64 border-dashed border-b-[2px] border-t-[2px] mb-4">
          <h4 className="font-bold text-2xl text-primary-light">({type})</h4>
          <p className="font-semibold p-2 text-BrandTertiary-light">{title}</p>
        </div>
      )}

      <div className="w-full overflow-x-clip flex relative flex-col gap-6 items-center justify-center">
      {
          isFront && (
            <div className="md:absolute top-0 left-0 text-TextSecondary-light justify-center items-center">
            <p className="text-2xl font-bold">Swipe</p>
            <div className="w-full flex gap-2">
            <TiArrowBackOutline size={48}/>
            <TiArrowForwardOutline  size={48}/>
            </div>

          </div>
          )
         }
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          className={`hover:cursor-grab p-6 md:p-2 active:cursor-grabbing relative origin-bottom ${
            isFront ? "grayscale-0" : "grayscale"
          }`}
          style={{
            x,
            opacity,
            rotate,
            transition: "0.125s transform",
            boxShadow: isFront
              ? "0 20px 25px -5px rgb(0 0 0 /0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
              : "",
          }}
          animate={{
            scale: isFront ? 1 : 0.98,
          }}
          onDragEnd={handleDragEnd}
        >
        
          <Image
            src={url}
            alt="testimonial"
            width={350}
            height={350}
            style={{width: "auto", height: "auto"}}
            className="rounded-lg"
          />
        </motion.div>

        {isFront && (
          <div className="flex relative mb-8 text-background-light">
            <div className="absolute inset-0 w-full h-full bg-black/50" />
            <div className="relative max-w-full sm:max-w-md p-4 bg-transparent flex flex-col rounded-lg ">
              <div className="w-full flex flex-col">
                <p className="text-3xl font-bold font-anton">{name}</p>
                <p className="font-nanumMyeongjo text-sm">{txt} </p>
              </div>
              <ul className="w-full mt-4 flex gap-6 items-center justify-end ">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
