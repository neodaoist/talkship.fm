import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"
import { KitSignupForm } from "@/components/kit-signup-form"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#221e1f] flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center gap-8 max-w-xl">
        <Image
          src="/images/logo.png"
          alt="Talk Ship Logo"
          width={400}
          height={400}
          priority
          className="w-full max-w-[400px] h-auto"
        />

        <p className="text-white/80 text-base sm:text-lg font-normal text-center leading-relaxed">
          Creative conversations with artists, builders, and creators who ship.
          Each episode, we sit down with people who consistently ship their
          creative work &ndash; exploring how they got started, what drives their
          vision, and wisdom from along the path. New episodes weekly.
        </p>

        <h2 className="text-white text-xl sm:text-2xl font-medium text-center">
          They&apos;re making, they&apos;re shipping, we&apos;re talking. 🎙️🚢
        </h2>

        <h2 className="text-white text-xl sm:text-2xl font-medium italic text-center">
          Coming Soon | Autumn 2026
        </h2>

        <div className="w-full max-w-md flex justify-center">
          <KitSignupForm />
        </div>

        <div className="flex items-center gap-6 mt-2">
          <a
            href="https://instagram.com/talkshipfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://tiktok.com/@talkshipfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Follow us on TikTok"
          >
            <TikTokIcon className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/@talkshipfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Subscribe on YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        <p className="text-white/40 text-sm mt-4">
          &copy; {new Date().getFullYear()} Talk Ship. All rights reserved.
        </p>
      </div>
    </main>
  )
}
