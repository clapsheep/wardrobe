"use client";
import { BasicButton, ModalBG, ModalCloseBtn } from "@/components/atoms";
import { useRegistItemStore } from "@/providers/registItem-store-provider";
import { useRegistModalStore } from "@/providers/registModal-store-provider";
import { useState } from "react";

const UrlInputModal = ({ open }: { open: boolean }) => {
  const { setAllState } = useRegistItemStore((state) => state);

  const { formModal, urlModal, setFormModal, setUrlModal } =
    useRegistModalStore((state) => state);

  const [urlInputState, setUrlInputState] = useState<string>("");
  const handleModalClose = () => {
    setUrlModal();
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInputState(e.target.value);
  };
  // const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("url", urlInputState);
  //   const res = await submitURL(formData);
  //   if (res.success) {
  //     const { site, name, image, price, category, brand } = res.data;
  //     setAllState(site, name, image, price, category, brand);
  //     router.push("/dressroom/regist");
  //   } else {
  //     console.error(res.error);
  //   }
  // };

  return open ? (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <ModalBG onClick={handleModalClose} />
      <div className="relative z-10 flex flex-col overflow-hidden bg-white p-5">
        <div className="flex justify-between pb-1">
          <h1 className="text-h-5-semibold">아이템 추가</h1>
          <ModalCloseBtn onClick={handleModalClose} className="z-20" />
        </div>
        <form className="mt-2 flex flex-col border-t-2 border-black">
          <input
            className="my-9 min-w-[640px] border border-gray-300 px-[14px] py-[10px] text-b-0-regular"
            name="url"
            type="text"
            value={urlInputState}
            onChange={handleInput}
            placeholder="상품 링크(URL)을 입력해주세요. (오프라인인 경우 구매처 입력)"
          />
          <BasicButton
            onClick={() => {}}
            size="sm"
            className="w-20 self-end"
            color="primary"
          >
            다음
          </BasicButton>
        </form>
      </div>
    </div>
  ) : null;
};

export default UrlInputModal;
