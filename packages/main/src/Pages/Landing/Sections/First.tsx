import { Button } from "../Button";

export const First = () => {
  return (
    <section className="col-flex items-center gap-16">
      <div className="col-flex items-center gap-6">
        <span className="text-[16px] leading-[19px] font-semibold text-green-400 px-4 py-[6px] border-[1px] rounded-[100px] border-green-700 bg-green-900">Repo</span>
        <span className="text-[48px] leading-[57px] font-black text-center">
          이력서, 온라인으로
          <br /> 쉽고 간편하게.
        </span>
        <Button>Repo 사용하기</Button>
      </div>
      <div className="w-[1100px] h-[520px] bg-[url('/lan_1.png')] relative bg-cover after:w-full after:block after:h-[200px] after:bg-gradient-to-t after:from-gray-800 after:absolute after:bottom-0" />
    </section>
  );
};
