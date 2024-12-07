
import Link from "next/link";
import { Button } from "./ui/button";


function Navbar() {

  return (
    <header
  className="sticky right-0 top-0 h-14 w-full transition-[top] duration-500 ease-in-expo z-40 bg-background md:h-16"
  style={{ top: 0 }}
>
  <div className="flex h-full w-full">
    <div className="mx-auto flex h-full w-full max-w-[84rem] items-center justify-between gap-8 px-6 sm:px-8">
      <Link className="flex flex-shrink-0 items-center gap-4" href="/#hero">
      <svg
  version="1.0"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="30px"
  height="30px"
  viewBox="0 0 64 64"
  enableBackground="new 0 0 64 64"
  xmlSpace="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <path
          fill="#394240"
          d="M40,56H24c-2.211,0-4,1.789-4,4s1.789,4,4,4h16c2.211,0,4-1.789,4-4S42.211,56,40,56z"
        />
        <path
          fill="#394240"
          d="M32,0C16.539,0,4,12.539,4,28c0,9.445,4.695,17.781,11.863,22.844C16.438,51.25,17.375,52,20,52 
          s21.812,0,24,0s3.559-0.742,4.133-1.148C55.305,45.781,60,37.445,60,28C60,12.539,47.461,0,32,0z M43.891,44H36V28 
          c0-2.211-1.789-4-4-4s-4,1.789-4,4v16h-7.891C15.215,40.359,12,34.578,12,28c0-11.047,8.953-20,20-20s20,8.953,20,20 
          C52,34.578,48.785,40.359,43.891,44z"
        />
      </g>
      <path
        fill="#ffcc00"
        d="M43.891,44H36V28c0-2.211-1.789-4-4-4s-4,1.789-4,4v16h-7.891C15.215,40.359,12,34.578,12,28 
        c0-11.047,8.953-20,20-20s20,8.953,20,20C52,34.578,48.785,40.359,43.891,44z"
      />
    </g>
  </g>
</svg>

        <span className="font-bold text-md">UV Lution</span>
      </Link>
      <nav className="ml-auto hidden items-center space-x-6 md:flex lg:space-x-8">
        <Link
          className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          href="/background"
        >
          Background
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          href="/problem"
        >
          Problem
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          href="/solution"
        >
          Solution
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          href="/media"
        >
          Media
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          href="/future"
        >
          Future
        </Link>
        <Button asChild>
        <Link href="/team">
          Meet the Team
        </Link>
        </Button>
      </nav>
      <div className="md:hidden">
        <button>
          <span className="sr-only">open menu</span>
          <svg width={22} height={20} viewBox="0 0 22 20">
            <path
              fill="transparent"
              strokeWidth={2}
              className="stroke-primary"
              strokeLinecap="round"
              d="M 2 4 L 20 4"
            />
            <path
              fill="transparent"
              strokeWidth={2}
              className="stroke-primary"
              strokeLinecap="round"
              d="M 8 10 L 20 10"
              opacity={1}
            />
            <path
              fill="transparent"
              strokeWidth={2}
              className="stroke-primary"
              strokeLinecap="round"
              d="M 6 16 L 20 16"
            />
          </svg>
        </button>
      </div>
      <div className="pointer-events-none fixed left-0 top-14 z-10 -mt-1 flex h-[calc(100vh-3.25rem)] w-full flex-col gap-7 overflow-auto md:hidden">
        <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-500 ease-in-expo" />
        <div className="flex w-full -translate-y-full flex-col gap-7 rounded-b-md bg-background px-6 pb-6 pt-2 transition-transform duration-500 ease-in-expo sm:px-8">
          <nav className="flex flex-col items-start">
            <Link
              className="w-full border-t py-3 first-of-type:border-none"
              href="/Background"
            >
              Background
            </Link>
            <Link
              className="w-full border-t py-3 first-of-type:border-none"
              href="/Problem"
            >
              Problem
            </Link>
            <Link
              className="w-full border-t py-3 first-of-type:border-none"
              href="/#faq"
            >
              FAQ
            </Link>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-2 w-full"
              href="/#contact"
            >
              Contact
            </Link>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-3 w-full"
              href="/auth/login"
            >
              Get started
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>

  );
}

export default Navbar;