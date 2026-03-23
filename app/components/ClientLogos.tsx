"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const clients = [
  { name: "daydream", src: "/assets/clients_daydream.svg" },
  { name: "Luzia", src: "/assets/clients_luzia.svg" },
  { name: "Xref", src: "/assets/clients_xref.svg" },
  { name: "MD101", src: "/assets/clients_md101.svg" },
  { name: "Queensland Basketball", src: "/assets/clients_queensland_basketball.svg" },
  { name: "Cercli", src: "/assets/clients_cercli.svg" },
  { name: "Pearly", src: "/assets/clients_pearly.svg" },
  { name: "Audeo Labs", src: "/assets/clients_audeo_labs.svg" },
  { name: "Tunnel", src: "/assets/clients_tunnel.svg" },
  { name: "Brightstar", src: "/assets/clients_brightstar.svg" },
  { name: "Series", src: "/assets/clients_series.svg" },
  { name: "RapidID", src: "/assets/clients_rapidid.svg" },
];

const VISIBLE_COUNT = 6;
const SWAP_INTERVAL = 2500;

export function ClientLogos() {
  const [visibleIndices, setVisibleIndices] = useState<number[]>(
    Array.from({ length: VISIBLE_COUNT }, (_, i) => i)
  );

  useEffect(() => {
    const hiddenIndices = () =>
      clients
        .map((_, i) => i)
        .filter((i) => !visibleIndices.includes(i));

    const interval = setInterval(() => {
      setVisibleIndices((prev) => {
        const hidden = clients
          .map((_, i) => i)
          .filter((i) => !prev.includes(i));
        if (hidden.length === 0) return prev;

        // Pick a random visible slot to swap
        const slotToSwap = Math.floor(Math.random() * VISIBLE_COUNT);
        // Pick a random hidden logo to bring in
        const newLogoIndex =
          hidden[Math.floor(Math.random() * hidden.length)];

        const next = [...prev];
        next[slotToSwap] = newLogoIndex;
        return next;
      });
    }, SWAP_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 md:grid-cols-6 md:gap-8">
      {visibleIndices.map((clientIndex, slot) => (
        <div
          key={slot}
          className="relative flex h-8 items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={clientIndex}
              src={clients[clientIndex].src}
              alt={clients[clientIndex].name}
              className="h-5 max-w-[100px] object-contain opacity-40 grayscale md:h-6 md:max-w-[120px]"
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 0.4, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
