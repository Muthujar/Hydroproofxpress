import { z } from "zod";

import { serviceTypeOptions } from "@/constants/services";

const SERVICE_VALUES = serviceTypeOptions.map((o) => o.value);

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(22, "Phone number is too long")
    .regex(/^[\d\s()+-]+$/, "Use digits and common phone separators only"),
  serviceType: z
    .string()
    .trim()
    .min(1, "Choose a service")
    .refine((val) => (SERVICE_VALUES as readonly string[]).includes(val), {
      message: "Choose a valid service",
    }),
  location: z
    .string()
    .trim()
    .min(3, "Location helps us route the right crew")
    .max(200),
  message: z
    .string()
    .trim()
    .min(15, "A short summary (15+ characters) avoids back-and-forth")
    .max(2000),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
