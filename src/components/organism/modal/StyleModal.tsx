import { ModalBG, ModalCloseBtn, Svg } from "@/components/atoms";
import UserProfileForModal from "@/components/molecules/Profile/UserProfileForModal";
import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";

const StyleModal = ({ data }: { data: TStyle }) => {
  const { image } = data;

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
        <section className="w-1/2 overflow-y-auto p-5">
          <UserProfileForModal user={data.createUser} />
          <ul className="mt-4 flex flex-wrap">
            {data.hashtag.map((i) => (
              <li
                key={i}
                className="mb-2 mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm"
              >
                #{i}
              </li>
            ))}
          </ul>
          <ul className="mt-4 grid grid-cols-3 gap-2">
            {data.product.map((i) => (
              <li key={i._id} className="relative aspect-square">
                <Image
                  src={i.image}
                  alt={i.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StyleModal;
