"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "Как быстро я получу водительские права?",
      answer:
        "Стандартный срок оформления составляет от 10 до 16 рабочих дней. В случае срочности мы можем ускорить процесс до 4-7 рабочих дней за дополнительную плату.",
    },
    {
      question: "Нужно ли мне лично присутствовать при оформлении?",
      answer:
        "Нет, наш сервис позволяет оформить водительские права без вашего личного присутствия. Мы берем на себя все формальности и бюрократические процедуры.",
    },
    {
      question: "Какие документы нужны для оформления водительских прав?",
      answer:
        "Для оформления вам потребуется паспорт, фотография, медицинская справка (которую мы также можем помочь получить) и заявление, которое мы поможем заполнить.",
    },
    {
      question: "Законно ли оформление прав через вашу компанию?",
      answer:
        "Да, мы работаем строго в рамках правового поля. Наши специалисты знают все нюансы законодательства и помогают клиентам получить права легальным путем, экономя их время.",
    },
    {
      question: "Что делать, если я потерял водительские права?",
      answer:
        "В случае утери водительских прав мы поможем вам оформить дубликат. Для этого потребуется ваш паспорт и заявление об утере. Процесс занимает от 5 до 8 рабочих дней.",
    },
    {
      question: "Можно ли оформить права на новую категорию?",
      answer:
        "Да, мы помогаем с оформлением прав на новые категории. Для этого вам потребуется пройти обучение и сдать экзамены, в чем мы также можем оказать содействие.",
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
            <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
