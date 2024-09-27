const HashTag = ({ hashTag }: { hashTag: String }) => {
  return (
    <li className="rounded-full border border-gray-300 bg-white px-[12px] py-[6px] text-b-2-regular">
      #{hashTag}
    </li>
  );
};

export default HashTag;
