"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"


interface VerificationFormData {
  digit1: string
  digit2: string
  digit3: string
  digit4: string
  digit5: string
  digit6: string
}

export default function VerificationForm() {
    
      const router = useRouter()
  
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VerificationFormData>()
  const [isResending, setIsResending] = useState(false)

  const watchedValues = watch()

  const onSubmit = (data: VerificationFormData) => {
    const code = Object.values(data).join("")
    console.log("Verification code:", code)
router.push('/payment')
    // Handle verification logic here
  }

  const handleResend = async () => {
    setIsResending(true)
    // Simulate API call
    setTimeout(() => {
      setIsResending(false)
      console.log("Resend email sent")
    }, 2000)
  }

  const handleInputChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) {
      value = value.slice(-1)
    }

    // Set the value
    const fieldName = `digit${index + 1}` as keyof VerificationFormData
    setValue(fieldName, value)
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !watchedValues[`digit${index + 1}` as keyof VerificationFormData] && index > 0) {
      document.getElementById(`input-${index - 1}`)?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)

    pastedData.split("").forEach((digit, index) => {
      const fieldName = `digit${index + 1}` as keyof VerificationFormData
      setValue(fieldName, digit)
    })

    // Focus the next empty input or the last input
    const nextEmptyIndex = Math.min(pastedData.length, 5)
    document.getElementById(`input-${nextEmptyIndex}`)?.focus()
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white min-h-screen justify-center items-center mt-20"> 
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verification code</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          We sent a reset link to contact@decode...com
          <br />
          enter 6 digit code that is mentioned in the email
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-center gap-3">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <input
              key={index}
              id={`input-${index}`} // Use id for easy focus management
              {...register(`digit${index + 1}` as keyof VerificationFormData, {
                required: "Required",
                pattern: {
                  value: /^[0-9]$/,
                  message: "Must be a single digit",
                },
              })}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              defaultValue={index === 0 ? "2" : index === 1 ? "8" : index === 2 ? "4" : ""}
            />
          ))}
        </div>

        {Object.values(errors).some((error) => error) && (
          <p className="text-red-500 text-sm text-center">Please enter all 6 digits</p>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Verify Code
        </button>

        <div className="text-center">
          <span className="text-gray-600 text-sm">You have not received the email? </span>
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors focus:outline-none focus:underline"
          >
            {isResending ? "Sending..." : "Resend"}
          </button>
        </div>
      </form>
    </div>
  )
}
