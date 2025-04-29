import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  price: string
}

export default function ServiceCard({ title, description, icon, price }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all card-hover border-2 border-transparent hover:border-primary/20 group">
      <CardHeader className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="flex items-center gap-2 relative z-10">
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="font-bold text-xl text-gradient">{price}</div>
      </CardFooter>
    </Card>
  )
}
