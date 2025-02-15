import { useWindowEventListeners, useShortcut, path, useOptimistic, useEssentialParams, useTimeLimit } from "@configs/util";
import { SidebarProvider, HeaderProvider } from "ui";
import { useFormContext } from "react-hook-form";
import { Api, Document } from "@configs/type";
import { toast } from "react-toastify";
import { useRef } from "react";
import { Activity, Certification, Inform, Projects, Introduce } from "./Sections";
import { resumeCompletion, resumeSave, resumeSubmit } from "@/api";
import { Feedback } from "./Feedback";
import { Preview } from "./Preview";

const sections = {
  inform: { item: <Inform />, name: "내 정보", type: "WRITER_INFO" },
  introduce: { item: <Introduce />, name: "자기소개", type: "INTRODUCE" },
  projects: { item: <Projects />, name: "프로젝트", type: "PROJECT" },
  certifications: { item: <Certification />, name: "자격증 & 수상", type: "ACHIEVEMENT" },
  activities: { item: <Activity />, name: "활동", type: "ACTIVITY" }
};

export const Write = () => {
  const { id } = useEssentialParams<{ id: keyof typeof sections }>();
  const { watch, getValues, setValue } = useFormContext<Document.Resume>();
  const timeLimit = useTimeLimit();
  const status = watch("status");

  const [optIntroduce, errIntroduce, settleIntroduce] = useOptimistic<Api.Resume.RecentlyShared>([path.resume, ""], "introduce");
  const [optResume, errResume, settleResume] = useOptimistic<Api.Resume.ResumeDetail>([path.resume, "/detail"], "resume");
  const [optMajor, errMajor, settleMajor] = useOptimistic<Api.Info.Student>([path.user, ""], "major");

  const { refetch: refetchComplition } = resumeCompletion();

  const { mutate: mutateSubmit } = resumeSubmit({
    onMutate: async () => {
      toast.success(`성공적으로 ${status === "ONGOING" ? "저장 후 제출" : "제출 취소"}되었습니다`);
      setValue("status", status === "ONGOING" ? "SUBMITTED" : "ONGOING");
      return await optResume({ ...getValues(), status: status === "ONGOING" ? "SUBMITTED" : "ONGOING" });
    },
    onError: (_, __, context) => errResume((context as any).resume),
    onSettled: settleResume
  });

  const { mutate: mutateSave } = resumeSave({
    onMutate: async () => {
      const data = getValues();
      const { introduce, writer } = data;
      toast.success("성공적으로 저장되었습니다");
      return await { ...Promise.all([optIntroduce({ introduce }), optResume(data), optMajor({ major: writer.major })]) };
    },
    onError: (_, __, context) => {
      const { introduce, resume, major } = context as any;
      errIntroduce(introduce);
      errResume(resume);
      errMajor(major);
    },
    onSettled: () => {
      settleIntroduce();
      settleResume();
      settleMajor();
    },
    onSuccess: () => refetchComplition()
  });

  const pdf = useRef<HTMLDivElement>(null);

  const save = () => timeLimit(() => mutateSave(getValues()));
  const submit = () => timeLimit(() => mutateSubmit(null));

  useWindowEventListeners([{ eventType: "beforeunload", callback: ({ preventDefault }) => preventDefault() }]);

  useShortcut([
    {
      key: "s",
      ctrl: true,
      action: save,
      disabled: {
        state: status !== "ONGOING",
        reason: "제출 상태에선 저장할 수 없습니다"
      }
    },
    { key: "u", ctrl: true, action: submit }
  ]);

  return (
    <SidebarProvider elements={[{ name: "미리보기", element: <Preview ref={pdf} />, layoutProps: {} }]}>
      <HeaderProvider
        buttons={[
          {
            icon: "Send",
            title: status === "ONGOING" ? "제출하기" : "제출 취소하기",
            action: { type: "CALLBACK", callback: submit },
            disabled: { state: status === "RELEASED", reason: "공개 상태에서는 취소할 수 없습니다." }
          },
          { icon: "Save", title: "저장하기", action: { type: "CALLBACK", callback: save }, disabled: { state: status !== "ONGOING", reason: "제출 / 공개 상태에선 저장할 수 없습니다." } },
          { icon: "Edit", title: "피드백", action: { type: "OPEN_MODAL", modalElement: <Feedback name={sections[id].name} type={sections[id].type} /> } },
          { icon: "BarRight", title: "미리보기", action: { type: "OPEN_SIDEBAR", sideBarName: "미리보기" } }
        ]}
      >
        <span className={`${status === "ONGOING" && "hidden"} flex flex-center size-full absolute top-0 z-30 bg-[#000000DD]`}>제출 상태입니다. 제출 취소 후 수정하세요</span>
        <div className="overflow-auto">
          <div className="flex justify-center w-full max-w-[620px] py-[24px]">{sections[id].item}</div>
        </div>
      </HeaderProvider>
    </SidebarProvider>
  );
};
