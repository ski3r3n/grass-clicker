"use client";

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

import { addGrassAndCheck } from "@/utils/game";
import { Item, resetItems } from "@/constants/items";

import Content from "@/components/Content";
import Header from "@/components/Header";

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  const [grassPerClick, setGrassPerClick] = useState<number>(1);
  const [perSecond, setPerSecond] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [items, setItems] = useState<Item[]>(resetItems());

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    if (perSecond != 0) {
      const id = setInterval(() => {
        addGrassAndCheck(1, amount, setAmount, setItems);
      }, 1000 / perSecond);
      setIntervalId(id);
    }
  }, [perSecond]);

  return (
    <div className="w-full max-h-screen">
      <Image
        unoptimized
        alt="Grass Clicker Background"
        src="/background.png"
        layout="fill"
        objectFit="cover"
        className="absolute z-[-4] opacity-80 w-full h-full"
      />
      <div className="h-screen p-3">
        <Header amount={amount} perSecond={perSecond} />
        <Content
          items={items}
          setItems={setItems}
          amount={amount}
          setAmount={setAmount}
          perSecond={perSecond}
          setPerSecond={setPerSecond}
          grassPerClick={grassPerClick}
          setGrassPerClick={setGrassPerClick}
          onClick={() =>
            addGrassAndCheck(grassPerClick, amount, setAmount, setItems)
          }
        />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
