import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, MessageSquare, Users, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialsSlider from "@/components/testimonials-slider"
import ServiceCard from "@/components/service-card"
import ProcessSteps from "@/components/process-steps"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              S
            </div>
            <span>ServicePro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Услуги
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              О нас
            </Link>
            <Link href="#process" className="text-sm font-medium transition-colors hover:text-primary">
              Процесс
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Отзывы
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-pulse-slow">
                    Быстро и надежно
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Профессиональные услуги <span className="text-gradient">высокого качества</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Мы предлагаем широкий спектр услуг, выполненных профессионалами с многолетним опытом работы.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#services">
                    <Button
                      size="lg"
                      className="gap-1 bg-gradient-to-r from-primary to-blue-700 transition-all duration-300 button-hover"
                    >
                      Начать сейчас <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/5 transition-all duration-300 button-hover"
                    >
                      Узнать больше
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur-xl opacity-70 animate-pulse-slow"></div>
                <Image
                  src="/images/passport-documents.png"
                  width={800}
                  height={550}
                  alt="Документы и паспорт"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last relative z-10 animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Наши услуги</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Наши <span className="text-gradient">услуги</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Выберите услуги, которые вам необходимы. Мы гарантируем высокое качество и индивидуальный подход.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <ServiceCard
                title="Решение вопросов с водительскими правами"
                description="Консультации по лишению, восстановлению, замене и получению водительских прав. Помощь в сложных ситуациях и сопровождение на всех этапах."
                icon={<MessageSquare className="h-10 w-10 text-primary" />}
                price="от 5,000 ₽"
              />

              <ServiceCard
                title="Обучение на водительские права"
                description="Полный курс подготовки к сдаче экзаменов в ГИБДД: теория, практика и сопровождение. Идеально для начинающих водителей."
                icon={<Users className="h-10 w-10 text-primary" />}
                price="от 15,000 ₽"
              />

              <ServiceCard
                title="Оформление прав всех категорий"
                description="Изготовление водительских прав всех категорий без вашего личного присутствия. Быстро, без очередей и с полным сопровождением."
                icon={<CheckCircle className="h-10 w-10 text-primary" />}
                price="от 30,000 ₽"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">О нас</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Почему <span className="text-gradient">выбирают нас</span>
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Мы команда профессионалов с многолетним опытом работы в различных сферах бизнеса, в том числе и в
                    оформлении и изготовлении водительских прав. Мы гарантируем быстрое и надежное получение прав всех
                    категорий без вашего личного присутствия.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                        Опыт работы более 10 лет
                      </h3>
                      <p className="text-muted-foreground">
                        Наша команда имеет богатый опыт работы с клиентами из разных отраслей.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                        Индивидуальный подход
                      </h3>
                      <p className="text-muted-foreground">Мы разрабатываем решения, учитывая особенности дела.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                        Гарантия результата
                      </h3>
                      <p className="text-muted-foreground">
                        Мы работаем до тех пор, пока не достигнем поставленных целей.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-xl blur-xl opacity-70 animate-pulse-slow"></div>
                <Image
                  src="/images/handshake.png"
                  width={800}
                  height={550}
                  alt="Деловое рукопожатие"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full relative z-10 animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Как мы работаем
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Процесс <span className="text-gradient">работы</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Наш процесс работы прост и эффективен. Мы сопровождаем вас на каждом этапе.
                </p>
              </div>
            </div>
            <ProcessSteps />
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Отзывы</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Что говорят <span className="text-gradient">наши клиенты</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Узнайте, что думают о нас те, кто уже воспользовался нашими услугами.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <TestimonialsSlider />
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Вопросы и ответы
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Часто задаваемые <span className="text-gradient">вопросы</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ответы на самые популярные вопросы о наших услугах.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <FAQSection />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)] z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Контакты</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Свяжитесь <span className="text-gradient">с нами</span>
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Готовы начать работу? Напишите нам, и мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors duration-300">Telegram</h3>
                      <p className="text-muted-foreground">@adreyjs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors duration-300">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 bg-card rounded-xl border p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center space-y-2 relative z-10">
                  <h3 className="font-semibold tracking-tight text-2xl">Связаться с нами</h3>
                  <p className="text-muted-foreground">Напишите нам в Telegram для быстрой связи</p>
                </div>
                <div className="relative w-24 h-24 mb-4 z-10">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75"></div>
                  <div className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary to-blue-600 rounded-full animate-pulse-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-foreground"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </div>
                </div>
                <a
                  href="https://t.me/adreyjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-700 px-8 py-4 text-lg font-medium text-primary-foreground shadow transition-all duration-300 relative z-10 group button-hover"
                >
                  <span className="relative z-10">Написать в Telegram</span>
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-muted-foreground mt-4 relative z-10">Telegram: @adreyjs</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-gradient-to-b from-white to-primary/5">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 ServicePro. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Условия использования
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
