export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Our terrace plaster was bubbling everywhere. HydroProof XPress fixed the slopes, replaced failed sheets, and ran a proper water test—no repeat leaks through two monsoon seasons.",
    name: "Ananya Krishnan",
    role: "Homeowner • Madhapur",
    location: "Hyderabad",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "They found a stubborn bathroom leak behind our vanity without tearing up half the house. Photo updates kept our designer in the loop.",
    name: "Rajesh Patel",
    role: "Residential • Jubilee Hills",
    location: "Hyderabad",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Parking deck leaks were reaching electrical gear. They contained it overnight, upgraded the waterproofing in stages, and gave reports our building manager could follow.",
    name: "Facility Manager",
    role: "IT Park • Raidurg",
    location: "Hyderabad",
    rating: 5,
  },
];
