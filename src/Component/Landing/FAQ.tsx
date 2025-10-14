/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
