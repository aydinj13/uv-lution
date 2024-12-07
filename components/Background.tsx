import Image from "next/image"

function Background() {
  return (
    <div>
        <div className="ml-10">
            <p className="mt-8 lg:text-3xl md:text-2xl sm:text-lg font-bold">Background</p>
            <p className="text-gray-700 mt-7 mr-7 md:text-lg">
              A UV water filter uses ultraviolet light to make water safe by killing 99.99% of harmful microorganisms like bacteria, viruses, and protozoa without using chemicals. It&apos;s a simple and eco-friendly way to ensure clean drinking water.
The system works by using special UV lamps that emit light at a specific wavelength, 254 nanometers, known as the Germicidal Spectrum. This light damages the DNA of microorganisms, stopping them from functioning or reproducing.
As water flows through the UV system, the microorganisms are exposed to this light, which disrupts their genetic material. Without the ability to reproduce, they can&apos;t spread or cause harm. This process is both straightforward and highly effective <a href="https://espwaterproducts.com/pages/understanding-uv-water-filtration-sterilization" target="_blank"><span className="text-blue-500 underline">(ESP Water, 2024)</span></a>.
<br />
<br />
In reverse osmosis desalination, seawater undergoes an initial treatment to remove impurities such as oil, seaweed, and debris. Once these organic substances are eliminated, the water is ready for the reverse osmosis process. This process separates the water into two streams: brine and freshwater. The brine is diluted before being discharged back into the sea to prevent environmental damage from excessive salt concentrations. Meanwhile, the freshwater undergoes remineralization and chlorination before being stored in tanks and distributed for consumption <a href="https://www.activesustainability.com/water/what-is-reverse-osmosis-desalination/" target="_blank"><span className="text-blue-500 underline">(Acciona, 2019)</span></a>.
            </p>
        </div>
        <div className="m-10 space-y-10 md:flex md:space-y-0 md:space-x-10">
  <Image
    src="/uvwater-example.jpg"
    alt="UV Water Example"
    width={400}
    height={400}
    className="border-2 rounded-lg"
  />
  <Image
    src="/rowater-example.jpg"
    alt="RO Water Example"
    width={400}
    height={400}
    className="border-2 rounded-lg"
  />
</div>

    </div>
  )
}
export default Background