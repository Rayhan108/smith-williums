"use client"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

type FormData = {
  selectedDate: string
  adults: number
  children: number
  tourOptions: {
    singleSeaterBuggy: { selected: boolean; quantity: number }
    quadBike20: { selected: boolean; quantity: number }
    camelBike30: { selected: boolean; quantity: number }
    quadBikePackage: { selected: boolean; quantity: number }
    seaterBuggy4: { selected: boolean; quantity: number }
  }
  name: string
  email: string
  phoneNumber: string
  country: string
  pickupLocation: string
}

const tourPrices = {
  singleSeaterBuggy: 900,
  quadBike20: 0,
  camelBike30: 0,
  quadBikePackage: 1100,
  seaterBuggy4: 700,
}

export default function DesertBookingForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      selectedDate: "07/04/2025",
      adults: 5,
      children: 0,
      tourOptions: {
        singleSeaterBuggy: { selected: true, quantity: 2 },
        quadBike20: { selected: false, quantity: 0 },
        camelBike30: { selected: false, quantity: 0 },
        quadBikePackage: { selected: true, quantity: 1 },
        seaterBuggy4: { selected: true, quantity: 1 },
      },
      name: "Nazhul Hussain",
      email: "workerthree@gmail.com",
      phoneNumber: "01846098914",
      country: "Bangladesh",
      pickupLocation: "Bashila, Dhaka",
    },
  })

  const watchedOptions = watch("tourOptions")

  const calculateTotals = () => {
    const baseTour = 2500
    let addonTotal = 0

    Object.entries(watchedOptions).forEach(([key, option]) => {
      if (option.selected && option.quantity > 0) {
        addonTotal += tourPrices[key as keyof typeof tourPrices] * option.quantity
      }
    })

    return {
      tourTotal: baseTour,
      addonTotal,
      grandTotal: baseTour + addonTotal,
    }
  }

  const totals = calculateTotals()

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data)
  }

  const updateOptionQuantity = (optionKey: keyof FormData["tourOptions"], change: number) => {
    const currentOption = watchedOptions[optionKey]
    const newQuantity = Math.max(0, currentOption.quantity + change)
    setValue(`tourOptions.${optionKey}.quantity`, newQuantity)
    setValue(`tourOptions.${optionKey}.selected`, newQuantity > 0)
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white mt-16 font-nunito">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">57 HERITAGE DESERT EXPERIENCE</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">United Arab Emirates</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Booking Section */}
        <div className="bg-pink-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Book VIP Desert Safari Dubai</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Date */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Tour Date</label>
              <input
                type="text"
                {...register("selectedDate")}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                placeholder="07/04/2025"
              />
            </div>

            {/* Adults */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">No of Adults</label>
              <div className="flex items-center border border-gray-300 rounded bg-white">
                <button
                  type="button"
                  onClick={() => setValue("adults", Math.max(1, watch("adults") - 1))}
                  className="p-2 hover:bg-gray-100 text-gray-600"
                >
                  −
                </button>
                <span className="px-3 py-2 text-sm min-w-[40px] text-center">{watch("adults")}</span>
                <button
                  type="button"
                  onClick={() => setValue("adults", watch("adults") + 1)}
                  className="p-2 hover:bg-gray-100 text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">No of Child (1-9 yrs)</label>
              <div className="flex items-center border border-gray-300 rounded bg-white">
                <button
                  type="button"
                  onClick={() => setValue("children", Math.max(0, watch("children") - 1))}
                  className="p-2 hover:bg-gray-100 text-gray-600"
                >
                  −
                </button>
                <span className="px-3 py-2 text-sm min-w-[40px] text-center">{watch("children")}</span>
                <button
                  type="button"
                  onClick={() => setValue("children", watch("children") + 1)}
                  className="p-2 hover:bg-gray-100 text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Base Price */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Base Price</label>
              <div className="text-orange-500 font-semibold text-lg">AED 2500</div>
            </div>
          </div>
        </div>

        {/* Customize Tour Options */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-4">Customize Tour Options</h2>

          <div className="space-y-4">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
              <div className="col-span-5">Tour Option</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-5 text-right">Addon Price</div>
            </div>

            {/* Single Seater Dune Buggy */}
            <div className="grid grid-cols-12 gap-4 items-center py-2">
              <div className="col-span-5 flex items-center gap-2">
                <input type="checkbox" {...register("tourOptions.singleSeaterBuggy.selected")} className="w-4 h-4" />
                <span className="text-sm">Single Seater Dune Buggy 30 mins</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center border border-gray-300 rounded bg-white max-w-[100px] mx-auto">
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("singleSeaterBuggy", -1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    −
                  </button>
                  <span className="px-2 py-1 text-sm min-w-[30px] text-center">
                    {watchedOptions.singleSeaterBuggy.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("singleSeaterBuggy", 1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">Plus Per Buggy @ AED 450</div>
              </div>
              <div className="col-span-5 text-right font-semibold">AED 900</div>
            </div>

            {/* 20 Minutes Quad Bike */}
            <div className="grid grid-cols-12 gap-4 items-center py-2">
              <div className="col-span-5 flex items-center gap-2">
                <input type="checkbox" {...register("tourOptions.quadBike20.selected")} className="w-4 h-4" />
                <span className="text-sm">20 Minutes Quad Bike</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center border border-gray-300 rounded bg-white max-w-[100px] mx-auto">
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("quadBike20", -1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    −
                  </button>
                  <span className="px-2 py-1 text-sm min-w-[30px] text-center">
                    {watchedOptions.quadBike20.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("quadBike20", 1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">Plus Per Buggy @ AED 100</div>
              </div>
              <div className="col-span-5 text-right font-semibold">AED 0</div>
            </div>

            {/* 30 Minutes Camel Bike */}
            <div className="grid grid-cols-12 gap-4 items-center py-2">
              <div className="col-span-5 flex items-center gap-2">
                <input type="checkbox" {...register("tourOptions.camelBike30.selected")} className="w-4 h-4" />
                <span className="text-sm">30 Minutes Camel Bike</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center border border-gray-300 rounded bg-white max-w-[100px] mx-auto">
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("camelBike30", -1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    −
                  </button>
                  <span className="px-2 py-1 text-sm min-w-[30px] text-center">
                    {watchedOptions.camelBike30.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("camelBike30", 1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">Plus Per Buggy @ AED 150</div>
              </div>
              <div className="col-span-5 text-right font-semibold">AED 0</div>
            </div>

            {/* 20 Minutes Quad Bike Package */}
            <div className="grid grid-cols-12 gap-4 items-center py-2">
              <div className="col-span-5 flex items-center gap-2">
                <input type="checkbox" {...register("tourOptions.quadBikePackage.selected")} className="w-4 h-4" />
                <span className="text-sm">20 Minutes Quad Bike</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center border border-gray-300 rounded bg-white max-w-[100px] mx-auto">
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("quadBikePackage", -1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    −
                  </button>
                  <span className="px-2 py-1 text-sm min-w-[30px] text-center">
                    {watchedOptions.quadBikePackage.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("quadBikePackage", 1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">Plus Per Buggy @ AED 550</div>
              </div>
              <div className="col-span-5 text-right font-semibold">AED 1100</div>
            </div>

            {/* 4 Seater Dune Buggy */}
            <div className="grid grid-cols-12 gap-4 items-center py-2">
              <div className="col-span-5 flex items-center gap-2">
                <input type="checkbox" {...register("tourOptions.seaterBuggy4.selected")} className="w-4 h-4" />
                <span className="text-sm">4 Seater Dune Buggy 30 Mins</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center border border-gray-300 rounded bg-white max-w-[100px] mx-auto">
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("seaterBuggy4", -1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    −
                  </button>
                  <span className="px-2 py-1 text-sm min-w-[30px] text-center">
                    {watchedOptions.seaterBuggy4.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateOptionQuantity("seaterBuggy4", 1)}
                    className="p-1 hover:bg-gray-100 text-gray-600 text-sm"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">Plus Per Buggy @ AED 700</div>
              </div>
              <div className="col-span-5 text-right font-semibold">AED 700</div>
            </div>
          </div>

          {/* Totals */}
          <div className="mt-6 pt-4 border-t">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-600 mb-1">Tour Totals</div>
                <div className="text-lg font-bold text-orange-500">AED {totals.tourTotal}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Addon Totals</div>
                <div className="text-lg font-bold text-orange-500">AED {totals.addonTotal}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Grand Totals</div>
                <div className="text-lg font-bold text-orange-500">AED {totals.grandTotal}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <h2 className="text-lg font-semibold">Personal Information</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                {...register("phoneNumber", { required: "Phone is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.phoneNumber && <p className="text-sm text-red-600 mt-1">{errors.phoneNumber.message}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Country</label>
              <input
                {...register("country", { required: "Country is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country.message}</p>}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Pickup Location</label>
              <input
                {...register("pickupLocation", { required: "Pickup location is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.pickupLocation && <p className="text-sm text-red-600 mt-1">{errors.pickupLocation.message}</p>}
            </div>
          </div>
        </div>

        {/* Pay With Stripe */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Pay With Stripe</h2>
          <div className="text-blue-600 font-medium">stripe</div>
        </div>

        {/* Action Buttons */}
<div className="flex gap-4 pt-4">
  <Link href="/bookNow" className="flex-1">
    <button
      type="button"
      className="w-full py-3 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
    >
      Previous
    </button>
  </Link>

  <button
    type="submit"
    disabled={isSubmitting}
    className="flex-1 py-3 bg-orange-500 text-white rounded font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
  >
    {isSubmitting ? "Processing..." : "Booking"}
  </button>
</div>

      </form>
    </div>
  )
}
