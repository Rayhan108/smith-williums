"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { message as antdMessage } from "antd"
import { useTranslations } from "next-intl"

interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()
    const title = useTranslations("contact");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [feedback, setFeedback] = useState("")

  // ✅ Initialize message instance (important for React 19)
  const [messageApi, contextHolder] = antdMessage.useMessage()

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading")
    setFeedback("")

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        setStatus("success")
        messageApi.success(result.message || "Message sent successfully.")
        reset()
      } else {
        setStatus("error")
        messageApi.error(result.message || "Failed to send message.")
      }
    } catch (err) {
      console.error("Error sending form:", err)
      setStatus("error")
      messageApi.error("Something went wrong. Please try again later.")
    }
  }

  return (
    <section className="bg-gray-50 py-16 px-4 font-nunito">
      {/* ✅ Required context for message toasts */}
      {contextHolder}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title("getInTouch")}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{title("title")}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
               {title("contactDet")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 text-orange-500">  
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">{title("emailAddress")}</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-orange-500 mt-1">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="text-gray-700 text-lg">
                <div>{title("address")}</div>
                  <div>{title("address")}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-orange-500 mt-1">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="text-gray-700 text-lg">
                  <div>{title("phone")}</div>
                  <div>{title("phone")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Leave A Reply</h3>
            <p className="text-gray-600 mb-6">Your email address will not be published.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900 placeholder-gray-500"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900 placeholder-gray-500"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900 placeholder-gray-500"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
