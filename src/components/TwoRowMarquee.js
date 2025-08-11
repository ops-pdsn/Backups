'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const topRowImages = [
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (1).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (11).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (2).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (12).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (3).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (13).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (4).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (14).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (5).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (20).webp",
]

const bottomRowImages = [
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (15).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (6).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (16).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (7).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (17).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (8).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (18).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/outdoor.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (19).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (21).webp",
]

export default function TwoRowMarquee() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
              Gallery
            </span>
            <h2 className="text-3xl font-bold text-gray-900 capitalize">
              Immersive Works in Action
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              A curated look at our campaigns, spotlighting their impact across varied environments.
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Top Row */}
          <div className="relative h-40 sm:h-48 md:h-64 w-full overflow-hidden bg-gray-50 rounded-md">
            <div className="absolute inset-0 flex min-w-[200%] animate-marquee-left will-change-transform">
              {[...topRowImages, ...topRowImages].map((src, idx) => (
                <div
                  key={idx}
                  className="relative h-full w-1/2 sm:w-1/3 md:w-1/6 p-2 flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Top item ${idx}`}
                    width={300}
                    height={300}
                    loading="lazy"
                    unoptimized
                    className="object-cover w-full h-full rounded border border-gray-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative h-40 sm:h-48 md:h-64 w-full overflow-hidden bg-gray-50 rounded-md">
            <div className="absolute inset-0 flex min-w-[200%] animate-marquee-right will-change-transform">
              {[...bottomRowImages, ...bottomRowImages].map((src, idx) => (
                <div
                  key={idx}
                  className="relative h-full w-1/2 sm:w-1/3 md:w-1/6 p-2 flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Bottom item ${idx}`}
                    width={300}
                    height={300}
                    loading="lazy"
                    unoptimized
                    className="object-cover w-full h-full rounded border border-gray-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-left {
          animation: marqueeLeft 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 45s linear infinite reverse;
        }
      `}</style>
    </section>
  )
}
