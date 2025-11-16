import { assets } from "../assets/assets";
import { MoveRight } from "lucide-react";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${assets.banner1})` }}
      className="bg-cover bg-center h-[500px]"
    >
      <div className="max-w-md w-full mx-auto flex flex-col items-center justify-center gap-3">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center pt-12">
          {" "}
          Offer Promotion
        </h1>
        <h5 className="mt-4 text-primary text-3xl  font-bold text-center ">
          {" "}
          Our special hand made creme
        </h5>
        <p className="text-center text-white mt-3">
          There are many variations of passages of Lorem Ipsum majority have is
          suffered alteration in that some form believable.
        </p>
        <button className="flex items-center justify-center text-black bg-white px-10 py-3 border border-primary cursor-pointer">
          More <MoveRight />
        </button>
      </div>
    </div>
  );
};
export default Banner;
