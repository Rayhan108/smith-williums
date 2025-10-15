'use client'
import { useTranslations } from "next-intl";

export default function AwardsSection() {
  const t = useTranslations("award.home");

  return (
    <section className="bg-white py-16 px-6 font-nunito">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t("title")}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* Review Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trustpilot Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">{t("trustpilot.label")}</span>
                </div>
              </div>

              <p className="text-gray-700 font-medium mb-3">{t("trustpilot.reviews")}</p>

              <div className="flex justify-center items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-xl font-bold text-gray-900">{t("trustpilot.rating")}</span>
              </div>

              <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                {t("trustpilot.badge")}
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">f</span>
                  </div>
                  <span className="font-bold text-blue-600">{t("facebook.label")}</span>
                </div>
              </div>

              <p className="text-gray-700 font-medium mb-3">{t("facebook.reviews")}</p>

              <div className="flex justify-center items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-xl font-bold text-gray-900">{t("facebook.rating")}</span>
              </div>

              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                {t("facebook.badge")}
              </div>
            </div>

            {/* Google Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <span className="text-blue-500 font-bold text-lg">G</span>
                    <span className="text-red-500 font-bold text-lg">o</span>
                    <span className="text-yellow-500 font-bold text-lg">o</span>
                    <span className="text-blue-500 font-bold text-lg">g</span>
                    <span className="text-green-500 font-bold text-lg">l</span>
                    <span className="text-red-500 font-bold text-lg">e</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 font-medium mb-3">{t("google.reviews")}</p>

              <div className="flex justify-center items-center gap-1 mb-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i === 0
                        ? "text-red-500"
                        : i === 1
                          ? "text-yellow-500"
                          : i === 2
                            ? "text-green-500"
                            : i === 3
                              ? "text-blue-500"
                              : "text-red-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-xl font-bold text-gray-900">{t("google.rating")}</span>
              </div>

              <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                {t("google.badge")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
