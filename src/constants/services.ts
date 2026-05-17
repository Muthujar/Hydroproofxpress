import {
  Droplets,
  Home,
  Landmark,
  PaintBucket,
  Shield,
  Toilet,
  type LucideIcon,
} from "lucide-react";

export type ServiceSlug =
  | "terrace-waterproofing"
  | "bathroom-leakage-repair"
  | "roof-waterproofing"
  | "wall-crack-repair"
  | "water-tank-waterproofing"
  | "basement-waterproofing"
  | "exterior-wall-coating";

export type ServiceItem = {
  slug: ServiceSlug;
  title: string;
  shortDesc: string;
  description: string;
  iconKey: keyof typeof SERVICE_ICONS;
  /** Unsplash decorative image paths */
  imageSrc: string;
  imageBlur?: string;
  highlights: readonly string[];
};

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  terrace: Droplets,
  bathroom: Toilet,
  roof: Home,
  wall: Shield,
  tank: Landmark,
  basement: Landmark,
  exterior: PaintBucket,
};

/** Display labels for enquiry form selects */
export const serviceTypeOptions = [
  { value: "terrace-waterproofing", label: "Terrace Waterproofing" },
  { value: "bathroom-leakage-repair", label: "Bathroom Leakage Repair" },
  { value: "roof-waterproofing", label: "Roof Waterproofing" },
  { value: "wall-crack-repair", label: "Wall Crack Repair" },
  { value: "water-tank-waterproofing", label: "Water Tank Waterproofing" },
  { value: "basement-waterproofing", label: "Basement Waterproofing" },
  { value: "exterior-wall-coating", label: "Exterior Wall Coating" },
  { value: "other", label: "Multiple / Other" },
] as const;

export const services: ServiceItem[] = [
  {
    slug: "terrace-waterproofing",
    title: "Terrace Waterproofing",
    shortDesc: "Terraces that stay dry through heavy rain.",
    description:
      "We fix spots where water pools, adjust slopes where needed, and apply layered waterproofing plus reflective top coats suited to Hyderabad weather—so the slab lasts longer and leaks don’t come back quickly.",
    iconKey: "terrace",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop",
    highlights: ["Finding damp zones before work starts", "Heat-saving overlays where useful", "Workmanship plans from 5–10 years"],
  },
  {
    slug: "bathroom-leakage-repair",
    title: "Bathroom Leakage Repair",
    shortDesc: "Stop leaks from ruining ceilings and cupboards below.",
    description:
      "We trace the leak with tests on drains, grout gaps, and pipe entries before breaking tiles. When possible we repair only what’s needed; bigger retiling is suggested only if the waterproof layer under the floor is beyond repair.",
    iconKey: "bathroom",
    imageSrc:
      "https://images.unsplash.com/photo-1581578731548-c64603569634?w=900&q=80&auto=format&fit=crop",
    highlights: ["Sealing joints and edges", "Quick steps to limit damage", "Schedules that respect neighbours"],
  },
  {
    slug: "roof-waterproofing",
    title: "Roof Waterproofing",
    shortDesc: "Strong waterproofing for concrete and sheet-metal roofs.",
    description:
      "Liquid or sheet-based systems over joints and cracks, with sun-stable finishes that cut roof heat and stop water creeping into ducts and ceiling gaps.",
    iconKey: "roof",
    imageSrc:
      "https://images.unsplash.com/photo-1632778149955-e80f8eafca93?w=900&q=80&auto=format&fit=crop",
    highlights: ["Cooler roof surfaces where designed", "Edges and overlaps checked", "Skylights sealed properly"],
  },
  {
    slug: "wall-crack-repair",
    title: "Wall Crack Repair",
    shortDesc: "Fix cracks safely before you repaint.",
    description:
      "We tell harmless cracks apart from structural ones, inject epoxy or PU where needed, bridge gaps with flexible coatings, and repaint so small seasonal movement doesn’t reopen lines straight away.",
    iconKey: "wall",
    imageSrc:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop",
    highlights: ["Clear assessment first", "Controlled injection where suitable", "Finish matched to existing walls"],
  },
  {
    slug: "water-tank-waterproofing",
    title: "Water Tank Waterproofing",
    shortDesc: "Safe inner lining for drinking and storage tanks.",
    description:
      "Food-safe coatings inside overhead tanks and sumps, plus reinforcement where walls are weak—all done with safe access and drying time planned so your water supply isn’t risky.",
    iconKey: "tank",
    imageSrc:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80&auto=format&fit=crop",
    highlights: ["Out-of-use windows planned with you", "Drying steps explained", "Water safety kept in mind"],
  },
  {
    slug: "basement-waterproofing",
    title: "Basement Waterproofing",
    shortDesc: "Keep basement walls and floors dry inside and out.",
    description:
      "Coatings and crystalline treatments, drains where useful, and vapour barriers before wood or epoxy floors—we coordinate with your engineer when groundwater pressure is high.",
    iconKey: "basement",
    imageSrc:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80&auto=format&fit=crop",
    highlights: ["Backup sump plans where needed", "Dry joins between levels", "Pipe and cable holes sealed"],
  },
  {
    slug: "exterior-wall-coating",
    title: "Exterior Wall Coating",
    shortDesc: "Outer walls that shed rain and slow algae growth.",
    description:
      "Thick, stretchy coatings that handle driving rain and sun on plaster or insulated façades—washable finishes for apartments and villas with lasting colour.",
    iconKey: "exterior",
    imageSrc:
      "https://images.unsplash.com/photo-1600566753376-12c8abfbfcb6?w=900&q=80&auto=format&fit=crop",
    highlights: ["Safe scaffolding setup", "Colour that lasts", "Sample patches before full coat"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
