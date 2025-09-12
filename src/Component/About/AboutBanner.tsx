import { FaChevronRight } from "react-icons/fa"
import about from '@/assests/aboutHero.jpg'
export default function AboutBanner() {
  const title = "Heritage Desert Experience"
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },

  ]

  return (
    <div className="relative h-[500px]   w-full overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${about.src})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm md:text-base">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <FaChevronRight className="text-white mx-2 text-xs" />}
              <span
                className={`${
                  index === breadcrumbs.length - 1
                    ? "text-orange-500 font-semibold"
                    : "text-white hover:text-orange-300 transition-colors"
                } drop-shadow-md`}
              >
                {crumb.href ? (
                  <a href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </a>
                ) : (
                  crumb.label
                )}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
