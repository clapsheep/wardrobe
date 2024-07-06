import { TagButton, TagInput } from "@/components/atoms";

export default async function Page() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <TagButton type="button">봄/여름</TagButton>
        <TagButton cancel>봄/여름</TagButton>
      </div>
      <div className="flex flex-col gap-4">
        <TagInput type="checkbox" name="authmn" id="authmn">
          가을
        </TagInput>
      </div>
    </div>
  );
}
