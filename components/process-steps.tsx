"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, FileText, MessageSquare, Send } from "lucide-react"

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState<number>(1)

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Консультация",
      description: "Бесплатная консультация по вашему вопросу в Telegram",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Анализ документов",
      description: "Изучение вашей ситуации и подготовка решения",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Оформление",
      description: "Подготовка и оформление всех необходимых документов",
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    },
    {
      id: 4,
      title: "Получение результата",
      description: "Выдача готовых документов и подтверждение результата",
      icon: <Send className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`process-step ${activeStep === step.id ? "scale-105" : ""}`}
            onMouseEnter={() => setActiveStep(step.id)}
            onClick={() => setActiveStep(step.id)}
          >
            <Card
              className={`h-full transition-all duration-300 cursor-pointer ${
                activeStep === step.id ? "border-primary shadow-lg" : "border-transparent hover:border-primary/20"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div
                  className={`rounded-full p-4 ${
                    activeStep === step.id ? "bg-primary/20 text-primary-foreground" : "bg-primary/10"
                  } transition-colors duration-300`}
                >
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  {step.id}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
