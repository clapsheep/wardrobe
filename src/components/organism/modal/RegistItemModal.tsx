import { BasicButton, ModalBG, ModalCloseBtn } from "@/components/atoms";
import Title from "@/components/molecules/Title";
import { useRegistItemStore } from "@/providers/registItem-store-provider";
import { useRegistModalStore } from "@/providers/registModal-store-provider";
import Image from "next/image";

const RegistItemModal = ({ open }: { open: boolean }) => {
  const { formModal, setFormModal, urlModal, setUrlModal } =
    useRegistModalStore((state) => state);
  const { brand, category, image, name, price } = useRegistItemStore(
    (state) => state,
  );
  return open ? (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <ModalBG />
      <div className="relative z-10 flex h-[80%] max-h-[600px] w-[80%] max-w-[1000px] overflow-hidden bg-white">
        {image ? (
          <figure className="relative h-full w-1/2">
            <Image src={image} alt={name} fill className="object-cover" />
          </figure>
        ) : (
          <div className="relative flex h-full w-1/2 items-center justify-center bg-gray-100">
            <BasicButton className="px-14" shadow size="lg" color="primary">
              사진 올리기
            </BasicButton>
          </div>
        )}

        <section className="flex w-1/2 flex-col justify-between overflow-y-auto p-6">
          <Title>아이템추가</Title>
        </section>
      </div>
    </div>
  ) : null;
};
export default RegistItemModal;
