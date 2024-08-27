import { Modal } from "@/components/atoms";
import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";

const StyleModal = ({ data }: { data: TStyle }) => {
  const { image } = data;
  console.log(image);

  return (
    <Modal className="flex" modalState={true}>
      <Image src={image} alt="hi" width={780} height={50} />
      hi
    </Modal>
  );
};
export default StyleModal;
