/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What are the best tours offered by Oasis Palm Tourism in Dubai?",
    answer:
      "Pick-up in a 4x4 Land Cruiser, dune bashing, camel ride, sandboarding, BBQ buffet dinner, and traditional live performances (belly dance, tanoura, fire shows)",
  },
  {
    question: "Is hotel pickup and drop-off included in your Dubai tours?",
    answer:
      "Yes, complimentary hotel pickup and drop-off is included in all our Dubai tour packages from most hotels in Dubai city.",
  },
  {
    question: "can I book group or privater tours?",
    answer:
      "Yes, we offer both group tours and private tours. Private tours can be customized according to your preferences and schedule.",
  },
  {
    question: "How do I book a tour with Oasis Palm Dubai?",
    answer:
      "You can book directly through our website, call our booking hotline, or contact us via WhatsApp. We accept various payment methods for your convenience.",
  },
  {
    question: "What countries can I call and text?",
    answer:
      "We provide customer support and can be reached from most countries worldwide. Contact us via WhatsApp or international calling for booking assistance.",
  },
  {
    question: "Are your desert safaris family-friendly?",
    answer:
      "Yes, our desert safaris are designed to be family-friendly with activities suitable for all ages. We ensure safety measures are in place for children and elderly guests.",
  },
  {
    question: "Can I customize my Dubai tour experience?",
    answer:
      "We offer customizable tour packages where you can choose specific activities, duration, and add special arrangements for celebrations or corporate events.",
  },
]

export default function FAQSection({faq}:any) {
  const [openIndex, setOpenIndex] = useState<number>(0) // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }
console.log("FAQ-------------->",faq);
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto font-nunito">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">FAQs- Dubai Tours by Oasis Palm Tourism</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Got question about our Dubai tours? Find quick answer on booking, pickups and more.
        </p>
      </div>

      <div className="space-y-0 border-t border-border">
        {faq?.result?.map((faq:any, index:number) => (
          <div key={index} className="border-b border-border">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-6 px-0 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
            >
              <span className="text-lg font-medium text-foreground pr-4">{faq.Ques}</span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="pb-6 px-0">
                <p className="text-muted-foreground leading-relaxed">{faq.Answere}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
