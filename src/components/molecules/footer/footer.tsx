import Image from "next/image";
function Footer() {
  return (
    <footer>
      <section>
        <div>
          <h3>HOME</h3>
          <a href="">style 추천</a>
        </div>
        <div>
          <h3>DRESSROOM</h3>
          <a href="">나의 옷장</a>
        </div>
        <div>
          <h3>STYLE</h3>
          <a href="">스타일</a>
        </div>
        <div>
          <h3>MY PAGE</h3>
          <a href="">회원정보 수정</a>
          <a href="">마이 사이즈</a>
        </div>
      </section>
      <div>
        <button>개인정보처리방침 </button> | <button>이용약관</button>
        <address>
          상호명 : wardrobe 소재지: 서울특별시 종로구 동숭동 이메일:{" "}
          <a href="mailto:localhost1101@naver.com">localhost1101@naver.com</a>
          <a href="https://github.com/clapsheep/wardrobe">
            <Image src="# " alt="github" />
          </a>
          Developed by <a>박수양</a>,<a>손현지</a>,<a>반현지</a>
        </address>
      </div>
    </footer>
  );
}
