import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const partners = [
  '/1.jpeg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg'
]



export default function Partners() {
  return (
    <div className="relative py-10 border-2 w-full mt-12 bg-gray-50 border-gradient-to-r from-yellow-600 to-green-400 ">
      <div className="w-10/12 mx-auto flex space-y-8 flex-wrap">
        <div>
          <span className="text-2xl text-gray-900 font-bold md:text-4xl">Our <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">Partners </span> </span>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
          {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
                <div className="p-1">
                  <Card className="size-40">
                    <CardContent className="flex aspect-square items-center justify-center">
                      <img src={partner} className="w-full object-cover h-full" alt={`Partner ${index + 1}`} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}