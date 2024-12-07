import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

function Hero() {
  return (

         <div className="bg-white dark:bg-black py-24 sm:py-32 rounded-md drop-shadow-xl">
    <section
  className="flex w-full !scroll-mt-36 flex-col items-center justify-center gap-4 pb-10 md:gap-6 md:pb-16 lg:pb-20"
  id="hero"
>
  <div>
    <a
      className="group mb-4 flex items-center gap-2 rounded-full border bg-gradient-to-r from-muted/50 to-muted px-5 py-1 text-xs text-muted-foreground shadow-sm sm:mb-3 sm:text-sm"
      href="/background"
    >

      View the Background
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right w-4 transition-transform group-hover:translate-x-1"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  </div>
  <h1 className="lg:leading-tighter max-w-4xl animate-gradient text-pretty bg-gradient-to-r from-primary via-muted-foreground via-20% to-primary bg-[length:200%_auto] bg-clip-text text-center text-5xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
  <div>UV and Desalination.</div>
  <div className="flex items-baseline justify-center gap-3 sm:gap-4 md:gap-5">
    Made <span className="text-black">Simple.</span>
  </div>
</h1>

  <p className="max-w-2xl text-pretty text-center text-muted-foreground md:text-xl">
  Portable UV Purifier and Desalination System that can keep Ocean Exploration Trips longer
  </p>
  <div className="mt-2 flex flex-col items-center gap-2 sm:mt-4">
    <div className="flex gap-4 md:gap-5">
      <Button size="lg" className="lg:text-lg" asChild>
      <Link href="/solution">
        View our Solution
        </Link>
      </Button>
    </div>
    <p
      className="sm mt-2 text-center text-sm md:text-base"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-gift mr-1.5 inline-block text-sky w-4 h-4 mb-1"
      >
        <rect x={3} y={8} width={18} height={4} rx={1} />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
      <span>
        <span className="font-semibold text-sky">Built</span> by Middle School Engineers
      </span>
    </p>
  </div>
  <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
>
  <div
    style={{
      clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
    className="relative left-[calc(50%-14rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e8c56b] to-[#f3b702] opacity-50 sm:left-[calc(50%-35rem)] sm:w-[80rem]"
  />
</div>
<div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <Image 
              alt="Prototype"
              src="/prototype.jpeg"
              width={1000}
              height={1000}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%] dark:-inset-x-0" />
            </div>
            </div>
          </div>
</section>

</div>

  )
}
export default Hero