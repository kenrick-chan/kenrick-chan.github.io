import { useState } from "react";
import type { FaqItem } from "../types/event";

interface FAQProps {
  items: FaqItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section id="faq" className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <span className="tag-label">good to know</span>
        <h2 className="mt-2 font-display text-3xl text-sage-dark sm:text-4xl">
          Frequently asked questions
        </h2>

        <ul className="mt-8 divide-y divide-sage-light/40">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-body font-medium text-ink"
                >
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={`text-sage-dark transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 font-body text-ink/70">{item.answer}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
