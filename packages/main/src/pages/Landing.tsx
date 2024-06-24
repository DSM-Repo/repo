import Logo from "../assets/Logo.svg?react";
import Background from "../assets/Background.png";
import Github from "../assets/Github.svg?react";
import Facebook from "../assets/Facebook.svg?react";

// 할거
// 컴포넌트 분리하기 (푸터, 버튼)
// 스타일 분리하기 (자주 쓰이는 반복 스타일)
// 404 페이지 만들기
// 폰트 적용하기 (프리텐다드, 글로벌 스타일로 적용하면 됨);

export const Landing = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] bg-[#373737]">
      <div className="flex items-center justify-center w-full h-[100vh]">
        <div className="w-[75%] flex gap-10 items-center justify-between">
          <div className="flex flex-col gap-8">
            <Logo width="200px" height="70px" />
            <span className="text-[24px] mt-[-6px] text-white font-thin">
              이력서 온라인 작성 서비스
            </span>
            <button className="text-white w-[fit-content] px-4 py-2 border-2 border-white rounded-[2px]">
              Repo 시작하기
            </button>
          </div>
          <div className="w-[621px] h-[497px] bg-white z-20 relative" />
        </div>
        <div className="w-full h-[200px] rotate-180 absolute bottom-0 bg-[#1B1B1B] z-10" />
      </div>
      <div className="flex items-center justify-between w-[75%] h-[100vh]">
        <div className="flex flex-col gap-2">
          <span className="text-white font-semibold text-[45px]">간편한</span>
          <span className="text-[#C5C5C5] font-semibold text-[30px]">
            정보 입력
          </span>
          <span className="w-[240px] text-white text-[20px] font-thin">
            간편하게 정보들을 입력하고, 멋진 이력서를 생성해 보세요
          </span>
        </div>
        <div className="w-[650px] h-[450px] bg-white z-20 relative" />
      </div>
      <div className="flex items-center justify-between w-[75%] h-[100vh]">
        <div className="w-[650px] h-[450px] bg-white z-20 relative" />
        <div className="flex flex-col gap-2">
          <span className="text-white font-semibold text-[45px]">빠른</span>
          <span className="text-[#C5C5C5] font-semibold text-[30px]">
            피드백 확인
          </span>
          <span className="w-[325px] text-white text-[20px] font-thin">
            선생님이 피드백 해주신 내용을 바탕으로 레주메를 수정해 보세요
          </span>
        </div>
      </div>
      <div className="relative flex items-center justify-center h-[95vh] w-[100vw]">
        <div className="flex flex-col items-center gap-2 absolute z-20">
          <span className="text-white font-semibold text-[50px]">깔끔한</span>
          <span className="text-white font-semibold text-[30px]">
            나만의 레주메
          </span>
          <button className="mt-4 text-white w-[fit-content] px-4 py-2 border-2 border-white rounded-[2px]">
            Repo 시작하기
          </button>
        </div>
        <img
          src={Background}
          className="top-0 w-full h-full relative object-cover z-10"
        />
      </div>
      <div className="flex items-center justify-between w-full bg-black px-[250px] h-[260px] py-[50px]">
        <div className="flex flex-col justify-between h-full">
          <span className="text-white font-semibold text-[30px]">REPO</span>
          <span className="text-white text-[17px]">©2024 Repo</span>
          <span className="text-white text-[14px]">
            주소 : 대전광역시 유성구 가정북로 76 (장동 23-9)
            <br />
            교무실 : 042-866-8822 | Fax : 042-867-9900 | 행정실 : 042-866-8885 |
            Fax : 042-863-4308
          </span>
        </div>
        <div className="flex flex-col justify-between items-end h-full">
          <div className="flex gap-3">
            <Facebook className="hover:opacity-70 cursor-pointer" />
            <Github className="hover:opacity-70 cursor-pointer" />
          </div>
          <span className="text-white">
            <a className="cursor-pointer hover:text-[#c5c5c5]">
              개인정보처리방침
            </a>{" "}
            | <a className="cursor-pointer hover:text-[#c5c5c5]">이용약관</a>
          </span>
        </div>
      </div>
    </div>
  );
};
