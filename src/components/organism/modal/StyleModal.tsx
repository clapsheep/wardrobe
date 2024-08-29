import { ModalBG, ModalCloseBtn, Svg } from "@/components/atoms";
import UserProfileForModal from "@/components/molecules/Profile/UserProfileForModal";
import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";

const StyleModal = ({ data }: { data: TStyle }) => {
  const { image } = data;
  console.log(data);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <ModalBG />
      <div className="relative z-10 flex h-[80%] max-h-[600px] w-[80%] max-w-[1000px] overflow-hidden bg-white">
        <ModalCloseBtn />
        <figure className="relative h-full w-1/2">
          <Image
            src={image}
            alt={`${data.createUser.username}의 스타일`}
            fill
            style={{ objectFit: "cover" }}
          />
        </figure>
        <section className="flex w-1/2 flex-col justify-between overflow-y-auto p-5">
          <div>
            <UserProfileForModal user={data.createUser} />
            <ul className="mt-4 flex flex-wrap">
              {data.hashtag.map((i) => (
                <li
                  key={i}
                  className="bg-white0 mb-2 mr-2 rounded-full border border-gray-300 px-2 py-1 text-sm"
                >
                  #{i}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-300">
            <h4 className="pt-4 text-b-1-bold text-gray-700">코디 상품</h4>
            <ul className="mt-4 grid grid-cols-3 gap-2">
              {data.product.map((i) => (
                <li key={i._id} className="relative aspect-square">
                  <div className="absolute left-2 top-[-8px] z-20">
                    <span className="absolute left-0 top-0 mx-[8px] my-[2px] text-b-2-regular text-white">
                      M
                    </span>
                    <Svg id="sizeBadge" />
                  </div>
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StyleModal;
