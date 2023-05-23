import {
  Navbar,
  Footer,
  FeatureCard,
  TrustedByCompanies,
} from "../components/Index.jsx";
import FlowCarousel from "@/Components/FlowCarousel";

export default function Home() {
  return (
    <main className="pt-[100px] flex flex-col  bg-gray-800 ">
      <Navbar />
      {/* Hero section */}
      <section className="flex flex-col flex-grow text-center justify-center items-center gap-4 overflow-hidden z-10 text-white  h-screen font px-4">
        <h1 className="heading xxl:text-7xl sm:text-5xl xs:text-3xl xxs:text-xl text font-semibold opacity-80">
          Porche, full spectrum - full synergy.
        </h1>
        <h1 className=" xxs:w-full xxl:max-w-[50%] xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg opacity-80">
          Experience luxury and performance like never before with Porche's
          iconic lineup of precision-engineered vehicles.
        </h1>

        <div className="flex justify-center items-center gap-2 opacity-100 sm:flex-row xxs:flex-col ">
          <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[200px]">
            Join us now
          </button>
          <button className="px-8 py-3  bg-gray-700 text-white rounded-md min-w-[200px]">
            Request Demo
          </button>
        </div>
      </section>
      <div className="flex w-screen justify-center items-center top-0 absolute z-0 ">
        <img
          src="/landingimage.jpg"
          alt="Picture of the author"
          className="w-screen h-screen object-cover opacity-70"
        />
      </div>
      {/* Trusted Section */}
      <section className="flex flex-col items-center justify-center text-white bg-gray-800 w-screen gap-10 my-[100px]">
        <h2 className="heading xxl:text-5xl sm:text-3xl xxs:text-2xl text font-semibold opacity-80">
          Trusted by
        </h2>
        <TrustedByCompanies />
      </section>

      {/* Feature Section */}
      <section className="my-[100px] flex flex-col gap-[100px]">
        <FeatureCard
          title="Feature"
          imageUrl="/landingimage.jpg"
          description=" Experience luxury and performance like never before with Porche's
              iconic lineup of precision-engineered vehicles."
              flipSwitch={false}
        />
         <FeatureCard
          title="Feature"
          imageUrl="/landingimage.jpg"
          description=" Experience luxury and performance like never before with Porche's
              iconic lineup of precision-engineered vehicles."
              flipSwitch={true}
        />
       
      </section>

      {/* Carousel Section */}
      <section className="my-[100px]">
        <FlowCarousel />
      </section>
      <Footer />
    </main>
  );
}
