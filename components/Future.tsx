import Image from "next/image"

function Future() {
  return (
    <div>
    <div className="ml-10">
        <p className="mt-10 lg:text-3xl md:text-2xl sm:text-lg font-bold">Getting Feedback</p>
        <p className="text-gray-700 mt-7 mr-7 md:text-lg">
          In order to improve our UV Filtration prototype, we reached out to many professionals. These included Kyle Ringer, an Engineering and Design specialist, and Fahreen Pardhan, a local member of the community who has a degree in Biology. The common theme across their responses was that our current functionality of removing bacteria with UV was not sufficient enough to solve the problem of ocean explorers having to cut their trips short due to a lack of safe drinking water. 
          <br />
          <br />
          Instead, they told us to add a desalination system as well as keep the UV light in order to allow researchers and explorers to drink water from the ocean safely. Now, we did not have enough time to add this feature to our prototype before the December 8 Aurora Qualifier however we are planning to add this in the near future, probably 2-4 weeks. 
        </p>
        <div className="m-10 space-y-10 md:flex md:space-y-0 md:space-x-10 md:justify-center">
  <div className="text-center">
    <Image
      src="/kyle-ringer.jpeg"
      alt="Kyle Ringer"
      width={300}
      height={300}
      className="border-2 rounded-lg mx-auto"
    />
    <p className="mt-2 text-sm text-gray-500">Kyle Ringer, Engineering Specialist</p>
  </div>
  <div className="text-center">
    <Image
      src="/fahreen-pardhan.jpg"
      alt="Fahreen Pardhan"
      width={350}
      height={350}
      className="border-2 rounded-lg mx-auto"
    />
    <p className="mt-2 text-sm text-gray-500">Fahreen Pardhan, Local Biologist</p>
  </div>
</div>
        <p className="mt-10 lg:text-3xl md:text-2xl sm:text-lg font-bold">Next Steps</p>
        <p className="text-gray-700 mt-7 mr-7 md:text-lg">
          Building a prototype that solves a real and major problem does not involve just creating something quickly and being done. Instead, it requires numerous rounds of revisions and feedback to make the product the best it can be. Currently, we have our Prototype #1 complete and we have gathered feedback in order to improve it. We will continue this process until the following goals are complete:
          <br />
          <br />
            <span className="text-black">• UV Filtration Reaches a <span className="font-bold text-yellow-500">99.9%</span> Bacteria Removal Rate (Colonies)</span>
            <br />
            <span className="text-black">• Desalination System is implemented and filters <span className="font-bold text-yellow-500">99%</span> of all salt and plastics (if necessary)</span>
          <br />
          <br />
          We hope to go far this FLL Robotics Season and to continue to update our prototype based on the feedback we receive!
        </p>
        <br />
        <br />
    </div>
</div>
  )
}
export default Future