"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Алексей Петров",
    image: "/placeholder.svg?height=100&width=100&text=🐱",
    content:
      "Обратился в ServicePro после лишения водительских прав. Специалисты помогли грамотно составить апелляцию и восстановить документы через суд. Профессионализм на высшем уровне!",
    rating: 5,
  },
  {
    id: 2,
    name: "Елена Смирнова",
    image: "/placeholder.svg?height=100&width=100&text=🐶",
    content:
      "Мне нужно было срочно восстановить утерянные водительские права перед поездкой. ServicePro взяли на себя все оформление и сэкономили мне кучу времени и нервов. Спасибо за оперативность!",
    rating: 5,
  },
  {
    id: 3,
    name: "Дмитрий Иванов",
    image: "/placeholder.svg?height=100&width=100&text=🦊",
    content:
      "Компания помогла нам организовать законную передачу водительских прав иностранным сотрудникам после получения ВНЖ. Все было выполнено в рамках закона и без задержек.",
    rating: 4,
  },
  {
    id: 4,
    name: "Ольга Козлова",
    image: "/placeholder.svg?height=100&width=100&text=🐰",
    content:
      "У меня были проблемы с продлением водительских прав из-за смены фамилии. Сотрудники ServicePro помогли собрать все документы и быстро оформили замену. Очень благодарна за помощь!",
    rating: 5,
  },
  {
    id: 5,
    name: "Игорь Сидоров",
    image: "/placeholder.svg?height=100&width=100&text=🐼",
    content:
      "После переезда из другой страны мне нужно было подтвердить и обменять права. Без ServicePro я бы потратил месяцы. Отличная команда, знают свое дело!",
    rating: 5,
  },
  {
    id: 6,
    name: "Мария Белова",
    image: "/placeholder.svg?height=100&width=100&text=🦁",
    content:
      "Получила отказ в выдаче водительских прав из-за старой ошибки в документах. Юристы ServicePro провели проверку и доказали мою правоту. Очень благодарна за честность и поддержку!",
    rating: 5,
  },
  {
    id: 7,
    name: "Сергей Кравцов",
    image: "/placeholder.svg?height=100&width=100&text=🐨",
    content:
      "Хотел продать авто вместе с оформлением прав на нового владельца. ServicePro оформили всё максимально прозрачно и юридически грамотно. Сделка прошла без нареканий.",
    rating: 5,
  },
  {
    id: 8,
    name: "Виктория Лебедева",
    image: "/placeholder.svg?height=100&width=100&text=🦝",
    content:
      "Мне нужно было впервые оформить водительские права после окончания автошколы. Благодаря ServicePro весь процесс занял минимальное время — от записи на экзамен до получения готового удостоверения. Очень удобно и без лишней бюрократии!",
    rating: 5,
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">{testimonial.name}</h3>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background" onClick={prevSlide}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="mt-4 flex justify-center gap-1">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
