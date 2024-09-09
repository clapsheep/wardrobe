import { BasicButton, ModalBG, ModalCloseBtn } from "@/components/atoms";
import { submitURL } from "@/lib/api";

const DRregisterModal = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <ModalBG />
      <div className="relative z-10 flex flex-col overflow-hidden bg-white p-5">
        <div className="flex justify-between pb-1">
          <h1 className="text-h-5-semibold">아이템 추가</h1>
          <ModalCloseBtn className="z-20" />
        </div>
        <form
          className="mt-2 flex flex-col border-t-2 border-black"
          action={submitURL}
        >
          <input
            className="my-9 min-w-[640px] border border-gray-300 px-[14px] py-[10px] text-b-0-regular"
            name="url"
            type="text"
            placeholder="상품 링크(URL)을 입력해주세요. (오프라인인 경우 구매처 입력)"
          />
          <BasicButton
            type="submit"
            size="sm"
            className="w-20 self-end"
            color="primary"
          >
            다음
          </BasicButton>
        </form>
      </div>
    </div>
  );
};

export default DRregisterModal;
