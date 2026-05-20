import Image from "next/image";

import { siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

/** Preset heights for the full wordmark (1536×1024, transparent PNG). */
const sizeClasses = {
  header: "block w-auto max-w-[min(72vw,16rem)] sm:max-w-none sm:h-36 lg:h-48",
  footer: "h-20 w-auto sm:h-28 lg:h-36",
  drawer: "h-16 w-auto sm:h-20",
  page: "h-20 w-auto sm:h-24 md:h-28",
  inline: "h-14 w-auto sm:h-16 md:h-20",
} as const;

export type BrandLogoSize = keyof typeof sizeClasses;

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ size = "header", className, priority }: BrandLogoProps) {
  return (
    <Image
      src={siteConfig.logo.src}
      alt={siteConfig.name}
      width={siteConfig.logo.width}
      height={siteConfig.logo.height}
      className={cn(sizeClasses[size], className)}
      priority={priority}
    />
  );
}
