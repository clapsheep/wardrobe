import { BasicButton } from "@/components/atoms";

BasicButton;

export default async function Page() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <div className="w-16">
          <BasicButton type="button" size="xs" color="primary" className="">
            구매처
          </BasicButton>
        </div>
        <div className="w-24">
          <BasicButton type="button" size="sm" color="primary" className="">
            스몰버튼
          </BasicButton>
        </div>
        <div className="w-40">
          <BasicButton type="button" size="md" color="primary" className="">
            스몰버튼
          </BasicButton>
        </div>
        <div className="w-56">
          <BasicButton type="button" size="lg" color="primary" className="">
            스몰버튼
          </BasicButton>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-24">
          <BasicButton
            type="button"
            disabled
            size="sm"
            shadow
            color="secondary"
            className=""
          >
            disable
          </BasicButton>
        </div>
        <div className="w-40">
          <BasicButton
            type="button"
            size="md"
            shadow
            color="secondary"
            className=""
          >
            쉐도우
          </BasicButton>
        </div>
        <div className="w-56">
          <BasicButton type="button" size="lg" color="secondary" className="">
            스몰버튼
          </BasicButton>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-24">
          <BasicButton
            type="button"
            size="sm"
            disabled
            color="primary"
            round
            className=""
          >
            스몰버튼
          </BasicButton>
        </div>
        <div className="w-40">
          <BasicButton
            type="button"
            size="md"
            disabled
            color="primary"
            round
            className=""
          >
            스몰버튼
          </BasicButton>
        </div>
        <div className="w-56">
          <BasicButton
            type="button"
            size="lg"
            disabled
            color="primary"
            round
            className=""
          >
            스몰버튼
          </BasicButton>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-16">
          <BasicButton href="/" size="xs" color="primary" className="">
            구매처
          </BasicButton>
        </div>
        <div className="w-24">
          <BasicButton href="/" size="sm" shadow color="primary" className="">
            나다
          </BasicButton>
        </div>
        <div className="w-40">
          <BasicButton href="/" size="md" disabled color="primary" className="">
            스몰버튼
          </BasicButton>
        </div>
        <div className="w-56">
          <BasicButton href="/" size="lg" color="primary" className="">
            스몰버튼
          </BasicButton>
        </div>
      </div>
    </div>
  );
}
