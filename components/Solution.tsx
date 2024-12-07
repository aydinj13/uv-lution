import Image from "next/image"

function Solution() {
  return (
    <div>
    <div className="ml-10">
        <p className="mt-10 lg:text-3xl md:text-2xl sm:text-lg font-bold">Solution</p>
        <p className="mt-2 font-semibold mr-7">🎉 We have come up with UV Lution!</p>
        <p className="text-gray-700 mt-7 md:text-lg mr-7">UV Lution solves the problem of ocean explorers not having access to clean drinking water. It removes bacteria from water as well as salt to make ocean water drinkable!</p>
        <br />
        <p className="text-gray-700 md:text-lg mr-7">UV Lution is a simple and portable purifier and desalition system that explorers and researchers can take with them on the go. It is great for explorers who are independent and don&apos;t have a high budget.
        <br />
        <br />
        Currently, our prototype is made up of just 4 Different Materials: <span className="font-bold">A Clear PVC Pipe, O-rings, 3D-printed caps, and 2 small, submersible UV lights.</span> We aimed for high quality as well as simplicity!
        <br />
        <br />
        The PVC pipe is where the water will be put in, the O-rings are around the 3D printed caps to stop leakages, and the UV Lights actually do the work of purifying the water! Currently, we are working on adding on to our solution by adding a reverse osmosis membrane for desalination after recent feedback from professionals in the community. Stay tuned!
        </p>
    </div>
    <div className="flex items-center justify-center px-5 mt-10 mb-10">
  <Image 
    src="/prototype-trans.png" 
    alt="Prototype" 
    width={400} 
    height={400} 
    className="border-2 rounded-lg"
  />
</div>


</div>

  )
}
export default Solution