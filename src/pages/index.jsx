/**
 * Des: home page
 * created_at: 2023.05.09
 * updated_at: 2023.05.09
 */

// using context
import { useMainContext } from "@/context";

const Home = () => {
  // get global states
  const states = useMainContext();
  const language = states.language;

  return (
    <main className="md:container mx-auto">
      <div className="mt-20">
        <p className="text-center text-lightBlack font-outfit font-bold sm:text-3xl md:text-6xl not-italic">
          {language.homeHeadTitle}
        </p>
        <p className="m-1 text-center text-lightBlack font-outfit font-medium sm:text-xl md:text-3xl not-italic">
          {language.homeHeadSubTitle1}
        </p>
        <p className="m-1 text-center text-primaryBlue font-outfit font-medium sm:text-xl md:text-3xl not-italic underline underline-offset-8">
          {language.homeHeadSubTitle2}
        </p>
      </div>
      <div className="md:px-10 lg:px-20 xl:px-40 my-10 mb-3 grid grid-cols-12 grid-rows-6 sm:min-h-[360px] md:min-h-96 lg:min-h-[460px] xl:min-h-[520px] sm:gap-2 md:gap-4">
        <div
          className="col-span-4 row-span-6 bg-svg bg-no-repeat rounded-md bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/home/home1.svg')",
            imageRendering: "pixelated",
          }}
        ></div>
        <div
          className="col-span-5 row-span-3 bg-svg bg-no-repeat rounded-md bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/home/home2.svg')",
            imageRendering: "pixelated",
          }}
        ></div>
        <div className=" col-span-3 row-span-3"></div>
        <div
          className="col-span-3 row-span-3 bg-svg bg-no-repeat rounded-md bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/home/home3.svg')",
            imageRendering: "pixelated",
          }}
        ></div>
        <div
          className="col-span-5 row-span-3 bg-svg bg-no-repeat rounded-md bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/home/home4.svg')",
            imageRendering: "pixelated",
          }}
        ></div>
      </div>
    </main>
  );
};

export default Home;
