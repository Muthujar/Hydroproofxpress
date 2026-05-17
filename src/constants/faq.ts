export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "How soon can someone visit for inspection?",
    answer:
      "Most home visits are fixed within 24–48 hours. If water is pouring in now, tell us—we often fit same-day visits when a crew is nearby.",
  },
  {
    id: "faq-2",
    question: "Do you provide workmanship warranty?",
    answer:
      "Yes. Work comes with written workmanship warranty for the agreed scope, plus manufacturer backing on branded materials where it applies.",
  },
  {
    id: "faq-3",
    question: "Do I need full tile removal if my bathroom is leaking?",
    answer:
      "Not always. We find where water is entering first. Small, targeted fixes come first; full retiling is suggested only when the hidden waterproof layer under the floor cannot be saved.",
  },
  {
    id: "faq-4",
    question: "Which chemicals or membranes do you use?",
    answer:
      "We use trusted-brand liquids, cement-based mixes, and stretchy sheets based on your surface, sun and rain exposure, and whether it’s living space—we don’t use one generic coating for everything.",
  },
  {
    id: "faq-5",
    question: "How long does curing take?",
    answer:
      "Most coatings need about 48–72 hours of drying before water testing. Large terraces or parking decks may need longer—we spell this out in the schedule before work starts.",
  },
  {
    id: "faq-6",
    question: "What payment milestones do you follow?",
    answer:
      "Usually a start payment for materials, then bills as stages finish (after checks you agree on), and final balance after we jointly confirm there’s no leak at handover.",
  },
];
