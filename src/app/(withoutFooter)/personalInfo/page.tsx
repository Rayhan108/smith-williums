"use client"

import { setPersonalInfo } from "@/redux/feature/booking/bookingSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

interface PersonalInfoFormData {
  name: string
  email: string
  phoneNumber: string
  country: string
  pickupLocation: string
}

export default function PersonalInfoForm() {
    const router = useRouter()
      const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalInfoFormData>()

  const onSubmit = async (data: PersonalInfoFormData) => {
    console.log("Personal Info Form Data:", data)
  
  
    // Handle form submission here
    dispatch(
      setPersonalInfo({
        customer_name:data?.name,
        customer_email:data?.email,
        customer_phone:data?.phoneNumber,
        customer_country:data?.country,
        pickup_location:data?.pickupLocation
      })
    )
       router.push('/payment')
  }

  const onPrevious = () => {
    console.log("Previous step")

  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                })}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder=""
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder=""
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[1-9][\d]{0,15}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder=""
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
            </div>

            {/* Country Field */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                id="country"
                type="text"
                {...register("country", {
                  required: "Country is required",
                  minLength: { value: 2, message: "Country must be at least 2 characters" },
                })}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder=""
              />
              {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>}
            </div>

            {/* Pickup Location Field */}
            <div>
              <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Location
              </label>
              <input
                id="pickupLocation"
                type="text"
                {...register("pickupLocation", {
                  required: "Pickup location is required",
                  minLength: { value: 3, message: "Pickup location must be at least 3 characters" },
                })}
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder=""
              />
              {errors.pickupLocation && <p className="mt-1 text-sm text-red-600">{errors.pickupLocation.message}</p>}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onPrevious}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Previous
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
