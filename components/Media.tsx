import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

function Media() {
  return (
    <div className="p-5"> 
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">1</span>
                  <Image src={"/uvwater-example" + ".jpg"} alt="" width={20} height={30} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
  )
}
export default Media