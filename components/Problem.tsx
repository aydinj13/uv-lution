import Image from "next/image"

function Background() {
  return (
    <div>
        <div className="ml-10">
            <p className="mt-10 lg:text-3xl md:text-2xl sm:text-lg font-bold">Problem</p>
            <p className="mt-2 font-semibold mr-7">Ocean Exploration Trips are cut short due to lack of safe drinking water</p>
            <p className="text-gray-700 mt-7 md:text-lg mr-7">When deciding on a major problem that could really impact Ocean Exploration and Research, the first thing we thought of was how trips may be not be as long because it is hard to obtain the resources in order to get safe water to drink.</p>
            <br />
            <p className="text-gray-700 md:text-lg mr-7">That is the problem that UV Lution aims to solve. We are combating this issue in a unique way, as we are both removing bacteria (current prototype) and filtering out salt and other materials (such as waste or plastic).
            <br />
            <br />
            Salt is the most dangerous thing inside the ocean water. Water from the ocean contains enough salt to make people more thirsty, so our water filter must be able to remove salt. In order to do this our water filter will contain a semi-permeable sheet that will let water through, but not salt. Reverse osmosis filtration is very effective  at desalinating water, and according to <a href="https://www.keiken-engineering.com/news/reverse-osmosis-one-of-the-best-methods-for-efficient-desalination-of-seawater" target="_blank"><span className="underline text-blue-500">Keiken Engineering</span></a>, reverse osmosis gets rid of around 99% of the salts in water.
            <br />
            <br />
            In addition to salt, bacteria must also be filtered out. To do this we can use a UV Light filtration system. This system of purification requires little maintenance and is very effective. According to the <a href="https://www.health.wa.gov.au/Articles/U_Z/Ultraviolet-disinfection-of-drinking-water" target="_blank"><span className="underline text-blue-500">Government of Western Australia (Department of Health)</span></a>, UV light kills almost all bacteria (99.9%).

            </p>
        </div>
        <div className="m-10 space-y-10 md:flex md:space-y-0 md:space-x-10">
  <Image
    src="/ocean-exploration.webp"
    alt="Ocean Exploration"
    width={350}
    height={350}
    className="border-2 rounded-lg"
  />
  <Image
    src="/desalination.webp"
    alt="Desalination"
    width={350}
    height={350}
    className="border-2 rounded-lg"
  />
</div>

    </div>
  )
}
export default Background