"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Fa = {
  question: string;
  answer: React.ReactNode;
};

type FaProps = {
  data: Fa[];
};

export function FA({ data }: FaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {data.map((fa, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-600"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                suppressHydrationWarning
              >
                <span className="font-semibold text-lg">{fa.question}</span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-2 text-neutral-400 leading-relaxed">
                    {fa.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}