import { TagInput } from "@/components/atoms";

export default async function Page() {
  return (
    <div className="flex gap-4">
      <TagInput id="name" name="name" type="checkbox">
        체크박스
      </TagInput>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <TagInput type="radio" name="season" id="spring">
            봄
          </TagInput>
          <TagInput type="radio" name="season" id="authmn">
            가을
          </TagInput>
        </div>
      </div>
    </div>
  );
}
