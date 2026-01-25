import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"

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
    <main className="min-h-screen bg-[#221e1f] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/images/logo.png"
          alt="Talk Ship Logo"
          width={400}
          height={400}
          priority
          className="w-full max-w-[400px] h-auto"
        />
        <p className="text-white/80 text-xl tracking-widest uppercase font-light">creative conversations</p>
        
        <div className="flex items-center gap-6 mt-4">
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
      </div>
    </main>
  )
}
