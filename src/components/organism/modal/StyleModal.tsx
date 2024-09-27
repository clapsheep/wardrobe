import {
  HashTag,
  ModalBG,
  ModalCloseBtn,
  ProductCardForStyle,
  Svg,
} from "@/components/atoms";
import UserProfileForModal from "@/components/molecules/Profile/UserProfileForModal";
import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";
import Link from "next/link";

const StyleModal = ({ data }: { data: TStyle }) => {
  const { image, product, hashtag, createUser } = data;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <ModalBG />
      <div className="relative z-10 flex h-[80%] max-h-[600px] w-[80%] max-w-[1000px] overflow-hidden bg-white">
        <ModalCloseBtn />
        <figure className="relative h-full w-1/2">
          <Image
            src={image}
            alt={`${createUser.username}의 스타일`}
            fill
            className="object-cover"
          />
        </figure>
        <section className="flex w-1/2 flex-col justify-between overflow-y-auto p-5">
          <div>
            <UserProfileForModal user={createUser} />
            <ul className="mt-4 flex flex-wrap gap-2">
              {hashtag.map((i) => (
                <HashTag key={i} hashTag={i} />
              ))}
            </ul>
          </div>
          <div className="relative border-t border-gray-300">
            {/* 만약 로그인한 유저가 게시한 사람이면? 아이콘 렌더링 후 아래 수정으로 이동*/}
            <Link
              className="absolute right-0 top-[-40px]"
              aria-label="편집하기"
              href="#"
            >
              <Svg size={18} color="#A0A0A0" id="pencil" />
            </Link>
            <h4 className="pt-4 text-b-1-bold text-gray-700">코디 상품</h4>
            <ul className="mt-4 grid grid-cols-4 gap-1">
              {product.map((item) => {
                let size = "F"; // 이 물건을 올린 사용자가 실제로 구매한 사이즈를 찾는 로직 Default Free;
                createUser.dressroom.forEach((ditem) => {
                  if (ditem._id == item._id) size = ditem.size;
                });
                return (
                  <ProductCardForStyle key={item._id} item={item} size={size} />
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StyleModal;
