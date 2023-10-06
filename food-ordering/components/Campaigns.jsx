import Image from "next/image";
import Title from "./ui/Title";
import {MdShoppingCart} from "react-icons/md"

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-3">
      <div className="relative w-44 h-44 after:content[''] border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src="/images/o1.jpg"
          alt=""
          fill
          className="hover:scale-105 transition-all"
        />
      </div>
      <div className="text-white font-dancing">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div className="">
          <span className="text-[40px]">20%</span>
          <span className="text-lg">Off</span>
        </div>
        <div>
          <button className="btn-primary flex gap-x-2 font-sans items-center">Order Now <MdShoppingCart/></button>
        </div>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
