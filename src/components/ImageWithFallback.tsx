"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackClassName?: string;
  isCircular?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  isCircular = false,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-sand",
          isCircular ? "rounded-full" : "rounded-xl",
          fallbackClassName || className
        )}
        role="img"
        aria-label={alt}
      >
        <User className="w-1/3 h-1/3 text-warm-gray-light" strokeWidth={1} />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", isCircular ? "rounded-full" : "rounded-xl", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-sand animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          isCircular ? "rounded-full" : "rounded-xl"
        )}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
