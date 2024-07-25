import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const partners = [
  'https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg',
  'https://cdn.icon-icons.com/icons2/3261/PNG/512/apple_logo_icon_206799.png',
  'https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG16.png',
  'https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg',
  'https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png',
  'https://gauravtiwari.org/wp-content/uploads/2021/08/brand-logos-dell.png',
  'https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png',
  'https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png'
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
              <CarouselItem key={index} className="md:basis-1/4 basis-2/4 lg:basis-1/6">
                <div className="p-1">
                  <Card className="size-40">
                    <CardContent className="flex aspect-square items-center justify-center">
                      <img src={partner} className="w-full object-contain h-full" alt={`Partner ${index + 1}`} />
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