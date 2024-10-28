import { Api, Placeholder } from "@configs/type";
import { useMyQuery } from "@configs/util";

interface ILProp {
  children: React.ReactElement | React.ReactElement[];
}

interface IProp {
  grade: number;
}

const Layout = ({ children }: ILProp) => {
  return (
    <div className="w-[842px] h-[1191px] bg-white relative overflow-hidden p-6">
      <div className="w-full h-full col-flex items-center">
        <div className="w-full bg-gray-100 h-[2px]" />
        {children}
      </div>
    </div>
  );
};

export const Cover = ({ grade }: IProp) => {
  const { data: history } = useMyQuery<Api.History.History>(
    "history",
    "",
    Placeholder.CommonLayoutPlace
  );

  return (
    <>
      <div className="w-[842px] h-[1191px] bg-white"></div>
      <Layout>
        <div className="px-16 col-flex absolute top-44 z-30 gap-4 left-5">
          <span className="text-black font-bold text-[34px] leading-none">
            {new Date().getFullYear()} {grade}학년
          </span>
          <span className="text-black font-semibold text-[68px] leading-none">
            Resume Book
          </span>
          <span className="text-gray-300 font-light text-[28px] leading-none">
            대덕소프트웨어마이스터고등학교
          </span>
          <span className="text-gray-300 font-light text-[25px] leading-none">
            Daedeok Software Mester High School
          </span>
        </div>
        <div className="w-[calc(100%_+_200px)] h-[300px] bg-white z-20 bottom-[600px] rotate-[15.6deg] absolute" />
        <div className="w-[calc(100%_+_200px)] h-[100px] bg-[#ffffffa0] z-10 bottom-[510px] rotate-[15.6deg] absolute" />
        <img
          src="/School.png"
          className="absolute bottom-0 h-[750px] w-full object-cover"
          loading="lazy"
        />
      </Layout>
      <Layout>
        <div className="col-flex absolute left-0 px-20 top-40 gap-16">
          <div className="flex">
            <div className="col-flex w-[470px]">
              <span className="text-gray-300 text-[26px]">
                대한민국 최초 · 최고의 소프트웨어 마이스터고
              </span>
              <span className="font-bold w-[400px] text-[46px] leading-tight text-[#1575AE]">
                창의성
                <span className="text-bold text-[37px] text-[#1575AE]">
                  과
                </span>{" "}
                인간미
                <span className="text-bold text-[37px] text-[#1575AE]">
                  를 품은{" "}
                </span>
                소프트웨어 영재 육성
              </span>
            </div>
            <img
              src="/Dsm.png"
              className="pt-10 w-[130px] object-cover"
              loading="lazy"
            />
          </div>

          <span className="text-gray-700 block font-light w-[550px] text-[20px]">
            유망분야의 특화된 산업수요와 연계하여 최고의 기술중심 교육으로
            ㅤ예비 마이스터(Young Meister)를 양성하는 특수목적고등학교입니다.
          </span>
        </div>
        <div className="col-flex gap-4 absolute bottom-20">
          <span className="text-black text-[24px] font-semibold">
            마이스터고는?
          </span>
          <div>
            <span className="text-gray-600 font-light whitespace-pre-line text-[18px]">
              혁신적인 수업 방법과 전문가 특강으로 실전 대비형 학습이
              진행됩니다. {"\n"}교사와 학생간의 원활한 상호작용을 위해 소규모
              학급(16명)을 구성합니다.{"\n"} 우수한 산업인력 양성을 위해
              산업현장에서 필요한 내용을 교육과정으로 개발하여 운영합니다.{"\n"}{" "}
              산업체 수준에 맞춘 전문기자재와 최신 시설을 활용합니다.{"\n"}{" "}
              의사소통능력 중심의 실무 영어교육을 제공합니다.
            </span>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="col-flex absolute left-0 px-20 top-40 gap-16">
          <span className="text-black font-bold text-[32px]">학교 연혁</span>
          <div className="col-flex gap-4">
            {history?.data.map((i) => (
              <div className="flex justify-between w-[625px]">
                <span className="text-gray-300 text-light text-[19px]">
                  {i.date}
                </span>
                <span className="text-black w-[440px] text-[19px]">
                  {i.content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="col-flex absolute left-0 px-20 top-32 gap-14">
          <span className="text-black font-bold text-[32px]">
            Resume Book이란?
          </span>
          <span className="text-gray-700 font-light text-[18px]">
            대덕소프트웨어마이스터고에서는 매년 채용협약(MOU)업체에 학생들의
            이력서와 포트폴리오를 제공하기 위한 ‘Resume Book(레주메북)’을
            간행합니다. 이 책은 각 학생이 학교 생활 동안 참여한 다양한 활동,
            실무 프로젝트 경험, 수상 이력, 자격증 정보 등을 정리한 자료집입니다.
            레주메북을 통해 학생들의 이력 정보를 간편하게 파악할 수 있으며, 이를
            토대로 산학 협력 및 채용 연계가 원활하게 이루어집니다
          </span>
        </div>
        <div className="col-flex absolute left-0 px-20 top-[450px] gap-14">
          <span className="text-black font-bold text-[32px]">Repo란?</span>
          <span className="text-gray-700 font-light text-[18px]">
            학생들의 레주메북 및 포트폴리오 작성을 관리하고, e-book 형태로
            변환하여 다양한 플랫폼에서 레주메북에 쉽게 접근하고 공유할 수 있도록
            돕는 웹 서비스입니다. 1학년 4명, 2학년 4명으로 구성된 교내
            창체동아리에서 직접 개발하고 있습니다.
          </span>
        </div>
        <div className="col-flex w-full items-center absolute left-0 px-20 top-[720px] gap-7">
          <span className="text-black font-bold text-[32px] self-start">
            Repo 뷰어 사용 방법
          </span>
          <img src="/usage_header.png" className="" loading="lazy" />
          <span className="text-black self-center text-[25px] font-light whitespace-pre-line text-center">
            대부분의 기능은 헤더를 통해 사용할 수 있습니다.
          </span>
        </div>
      </Layout>
      <Layout>
        <div className="col-flex items-center w-full absolute left-0 px-20 top-32 gap-7">
          <img src="/usage_keyboard.png" className="" loading="lazy" />
          <span className="text-black self-center text-[25px] font-light whitespace-pre-line text-center">
            키보드의 화살표 키를 통해서도
            <br />
            페이지를 이동할 수 있습니다.
          </span>
        </div>
        <div className="col-flex items-center w-full absolute left-0 px-20 top-[500px] gap-7">
          <img src="/usage_qr.png" className="" loading="lazy" />
          <span className="text-black self-center text-[25px] font-light whitespace-pre-line text-center">
            또한, 각 레주메의 QR코드를 클릭하여
            <br />
            QR코드에 저장된 페이지로 이동할 수 있습니다.
          </span>
        </div>
      </Layout>
      <Layout>
        <div className="px-16 col-flex absolute top-64 z-30 gap-6 left-5">
          <span className="text-black font-bold text-[34px] leading-none">
            {new Date().getFullYear()} {grade}학년
          </span>
          <span className="text-black font-semibold text-[68px] leading-none">
            Resume
          </span>
          <span className="text-gray-300 font-light text-[25px] leading-none">
            Daedeok Software Meister High School
          </span>
        </div>
        <div
          className="absolute bottom-0 h-[620px] w-full"
          style={{
            background: "linear-gradient(to right top, #B3B3B3, #EEEEEE"
          }}
        />
      </Layout>
    </>
  );
};
