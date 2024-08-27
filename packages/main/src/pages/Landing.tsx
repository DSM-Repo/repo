import {
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Logo
} from "@/assets";
import { Modal } from "@/router/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <div className="w-full h-fit px-10 flex items-center justify-center bg-gradient-to-b from-black/40 to-black/0 fixed">
        <Logo className="w-[71px] h-[24px] mr-[1234px]" />
        <div
          className="px-5 py-2.5 my-[17px] border border-[#6D6D6D] rounded-3xl text-white cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Login
        </div>
      </div>

      {/* Modal */}
      <Modal opened={isModalOpen} setOpened={setIsModalOpen} />

      {/* Content */}
      <div className="bg-custom-image grid place-items-center font-normal text-[16px] text-white">
        <Image8 />
        <p className="font-extrabold text-[36px]">깔끔한 나만의 레주메</p>
        <p className="text-[#888888]">로그인 하여 바로 사용해 보세요</p>
        <div
          className="w-36 h-11 border border-[#6D6D6D] flex justify-center items-center rounded-[22px] mt-6 mb-16 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Repo 사용하기
        </div>
      </div>

      {/* Container */}
      <div className="py-[172px] px-[40px] flex flex-col justify-center items-center gap-[80px]">
        {/* Section 1 */}
        <div className="w-screen h-2/5 flex flex-col justify-center items-center gap-4 font-black text-[48px] text-white">
          <Image9 />
          <div className="flex flex-col items-center">
            <p>이력서, 온라인으로</p>
            <p>쉽고 간편하게.</p>
          </div>
          <div
            className="w-36 h-11 border border-[#6D6D6D] flex justify-center items-center font-normal text-[16px] rounded-[22px] mt-6 mb-16 cursor-pointer"
            onClick={() => navigate("/login")} // Navigate to login on click
          >
            Repo 사용하기
          </div>
          <Image2 />
        </div>

        {/* Section 2 */}
        <div className="w-screen h-2/5 py-5 flex flex-col justify-center items-center gap-4 font-black text-[48px] text-white">
          <Image8 className="mb-[20px]" />
          <p className="font-extrabold text-[36px] mb-[64px]">
            손쉽게 작성하는 이력서
          </p>
          <div className="flex">
            <div className="flex flex-col gap-4 mr-[24px]">
              <Image3 />
              <p className="font-bold text-[24px]">이력서 정보별 작성</p>
              <div className="font-normal text-[16px] text-[#D1D1D1]">
                <p>정보별로 모아놓은 탭을 통해, 작성하고자 하는 곳을</p>
                <p>빠르게 오가며 채워나갈 수 있어요.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image4 />
              <p className="font-bold text-[24px]">다양한 입력</p>
              <div className="font-normal text-[16px] text-[#D1D1D1]">
                <p>
                  이력서 정보들의 형식에 맞게, 다양한 종류의 입력을 제공해
                  드리고 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="py-5 flex justify-center items-center text-white">
          <div className="flex flex-col mr-3">
            <Image8 className="mb-[20px]" />
            <p className="font-extrabold text-[36px] mb-[64px]">
              실시간 결과 확인
            </p>
            <Image5 />
            <p className="font-normal text-[20px] text-[#D1D1D1] mt-4">
              실시간으로 반영되는 모습을 확인하며 작업할 수 있어요.
            </p>
          </div>
          <Image6 />
        </div>

        {/* Section 4 */}
        <div className="py-5 flex justify-center items-center text-white">
          <Image7 />
          <div className="flex flex-col">
            <Image8 className="mb-[20px]" />
            <p className="font-extrabold text-[36px]">이력서 도서관</p>
            <p className="font-normal text-[20px] text-[#D1D1D1] mt-6">
              이전 기수 선배분들의 이력서를 도서관에서 참고해 볼 수 있어요.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-fit flex justify-center border border-[#333333]">
        <div className="w-4/5 h-fit py-[48px] gap-[20px] font-normal text-[#D1D1D1] text-[14px]">
          <div className="text-white">
            <p className="font-extrabold text-[24px]">Repo</p>
            <p>©2024 REPO</p>
          </div>
          <div>
            <p>주소 : 대전광역시 유성구 가정북로 76 (장동 23-9)</p>
            <p>
              교무실 : 042-866-8822 | Fax : 042-867-9900 | 행정실 : 042-866-8885
              | Fax : 042-863-4308
            </p>
          </div>
          <p className="mt-[12px]">이용약관 | 개인정보처리방침</p>
        </div>
      </div>
    </>
  );
};
