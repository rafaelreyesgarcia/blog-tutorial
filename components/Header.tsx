import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href='/'>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt='logo'
            className="rounded-full"
          />
        </Link>
      </div>
      <div>
        <Link
          href='www.github.com/rafaelreyesgarcia'
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#7901FA] flex items-center rounded-full"
        >
          Repositories
        </Link>
      </div>
    </header>
  )
}

export default Header