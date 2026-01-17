import Image from "next/image"

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
      </div>
    </main>
  )
}
