import { Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#053658] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* WHY CITYLAILA Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-600 pb-2">WHY CITYLAILA?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-1">→</div>
                <p className="text-sm leading-relaxed">
                  Instant confirmation. Purchase anytime you need it anywhere you want it.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-1">→</div>
                <p className="text-sm leading-relaxed">100k + Happy customers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-1">→</div>
                <p className="text-sm leading-relaxed">Get the lowest prices and last-minute deals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-1">→</div>
                <p className="text-sm leading-relaxed">Have a question? Live chat our experts 24*7</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-1">→</div>
                <p className="text-sm leading-relaxed">Discover and connect with 500+ experiences</p>
              </div>
            </div>

            {/* Social Media and Get In Touch */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001.017.001z" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
              <button className="bg-[#0B78C4] hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* CONNECT WITH US Section */}
      <div className="space-y-6">
  <h3 className="text-lg font-semibold mb-6 border-b border-slate-600 pb-2">CONNECT WITH US</h3>
  <div className="space-y-2">
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <p className="text-sm">Mail: hello@citylaila.com</p>
    </div>

    <div className="flex items-start gap-3 ">
      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
      <p className="text-sm">Company: CityLaila FZ-LLC</p>
    </div>

    <div className="flex items-start gap-3 border-t pt-3 border-slate-600">
      <svg className="w-8 h-8 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <p className="text-sm leading-relaxed">
        Dubai office: FDRK0968, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates
      </p>
    </div>

    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <p className="text-sm">Phone / WhatsApp: (+971) 506800227</p>
    </div>

    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <p className="text-sm">Phone: (+971) 44511625</p>
    </div>

    
 <div className="flex items-center gap-3 border-t pt-3 border-slate-600">
  <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  <p className="text-sm leading-relaxed flex items-center gap-3">
    Egypt: Alexandria, Egypt  
    <span className="text-sm flex items-center gap-2">  
      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Phone: (+971) 44511625
    </span>
  </p>
</div>

   <div className="flex items-center gap-3 border-t pt-3 border-slate-600">
  <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  <p className="text-sm leading-relaxed flex items-center gap-2">
    Singapore: Singapore city
    <span className="text-sm flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Phone: (+65) 92310720
    </span>
  </p>
</div>

  </div>
</div>


          {/* IMPORTANT LINKS Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-600 pb-2">IMPORTANT LINKS</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-blue-400">→</div>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-400">→</div>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  FAQs
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-400">→</div>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  Privacy & Policy
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-400">→</div>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  Terms of Condition
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-400">→</div>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  Refund & Returns
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-400">→</div>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-blue-400">→</div>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  Manish Aryan - Co-founder and CEO
                </Link>
              </div>
            </div>

            {/* Call Now Button */}
            <div className="pt-6">
              <button className="bg-[#FB5A10] hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                Call Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
