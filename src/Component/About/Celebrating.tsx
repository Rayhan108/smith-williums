import Image from "next/image"
import {  Award, Mountain, Briefcase as Certificate, Leaf } from "lucide-react"
import ofRoadGirl from '@/assests/off-road.jpg'
import desert from '@/assests/desert.jpg'
import frika from '@/assests/Frika_button.png'
import { useTranslations } from "next-intl"
const Celebrating = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Desert Tour Provider",
      subtitle: "Desert Travel Magazine (2024)",
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Top Adventure Tourism",
      subtitle: "Global Travel Magazine (2023)",
    },
    {
      icon: <Certificate className="w-8 h-8" />,
      title: "Certificate of Excellence",
      subtitle: "Traveler's Choice (2022 & 2023)",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Most Eco-Friendly Tour",
      subtitle: "Sustainable Tourism Initiative 2022",
    },
  ]
  const title = useTranslations("about");
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8 font-nunito">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4"> 
              <div className="flex items-center gap-3">
            <Image src={frika} alt="icon" height={32} width={32} className="h-8 w-8" />
                <span className="text-orange-500 font-medium text-lg">{title("celebrating")}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              {title("celebratingProud")}
              </h2>
            </div>

            {/* Achievements List */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="text-gray-700">{achievement.icon}</div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600 font-medium">{achievement.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
            {/* Top Image - spans full width */}
            <div className="col-span-2 relative overflow-hidden rounded-2xl">
              <Image
                src={ofRoadGirl}
                alt="Person photographing desert landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Bottom Left - Text Overlay */}
            <div className="relative bg-gradient-to-br from-amber-900 to-orange-900 rounded-2xl flex items-center justify-center p-6">
              <p className="text-white text-center font-medium text-lg leading-relaxed">
               {title("imageText")}
              </p>
            </div>

            {/* Bottom Right - Desert Dunes */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={desert}
                alt="Golden sand dunes landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Celebrating
