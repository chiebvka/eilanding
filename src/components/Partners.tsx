import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const partners = [
  'https://oeuk.org.uk/wp-content/themes/oeuk-2024/img/logo-new.svg',
  'data:image/jpeg;base64,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',
  // 'https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG16.png',
  // 'https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg',
  // 'https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png',
  // 'https://gauravtiwari.org/wp-content/uploads/2021/08/brand-logos-dell.png',
  // 'https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png',
  // 'https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png'
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