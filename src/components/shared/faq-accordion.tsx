"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/constants/faq";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full space-y-3">
      {items.map((row) => (
        <AccordionItem
          key={row.id}
          value={row.id}
          className="rounded-xl border border-border px-4 data-[state=open]:bg-muted/55"
        >
          <AccordionTrigger className="min-h-[48px] items-center py-4 text-left text-base hover:no-underline md:text-[1.06rem]">
            <span className="break-words pr-3 font-semibold text-primary">{row.question}</span>
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground pb-6 md:text-[1.05rem]">
            {row.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
