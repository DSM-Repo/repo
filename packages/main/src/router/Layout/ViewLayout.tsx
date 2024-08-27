import {
  Outlet,
  useLocation,
  useParams,
  useSearchParams
} from "react-router-dom";
import { Header, SideBar, SideBarButton } from "ui";
import { useAuth } from "@configs/util";
import { useOpen } from "@/hooks/useOpen";
import { SideBarDropF } from "./SideBarDropF";
import { getLibrary, libraryAccess } from "@/apis/library";
import { toast } from "react-toastify";
import { ILibrary, accessType } from "@/apis/types";
import { UseQueryResult } from "@tanstack/react-query";
import { usePage } from "@/hooks/usePage";
import { saveAs } from "file-saver";

const type = {
  teacher: "학생 상세",
  library: "도서관"
};

const defaultData = {
  data: undefined,
  refetch: () => {}
};

let data: UseQueryResult<ILibrary> | undefined = undefined;
export const ViewLayout = () => {
  const [params, setParams] = useSearchParams();
  const { id } = useParams();
  const { opened, setOpened } = useOpen();
  const loc = useLocation().pathname.split("/")[2] as "teacher" | "library";
  const { getRole } = useAuth();
  const { mutate: access } = libraryAccess();
  if (loc === "library") {
    data = getLibrary(id as string, !!params.get("isPublic"));
  }
  const { page, setPage } = usePage();

  const { data: library, refetch: refetchLibrary } = data || defaultData;

  const handleMode = () => {
    setParams(params);
    refetchLibrary();
    access({
      library_id: id as string,
      access_right: (params.get("isPublic")
        ? "PUBLIC"
        : "PRIVATE") as accessType
    });
    toast.success("성공적으로 변경되었습니다");
  };

  const selected = library?.index.find((i) => {
    return i.page_number === page + 1 || i.page_number === page;
  });
  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="size-full flex">
        <SideBar type="free" className="overflow-auto">
          <span className="text-title3">{type[loc]}</span>
          <div className="col-flex gap-4">
            {loc !== "teacher" && library && (
              <div className="col-flex">
                <span>빠른 이동</span>
                <SideBarDropF
                  deepSelected={`${selected?.student_number} ${selected?.name}`}
                  title="1반"
                  icon="One"
                  actions={library.index
                    .filter(
                      (i) => Math.floor((i.student_number % 1000) / 100) === 1
                    )
                    .map((i) => ({
                      name: `${i.student_number} ${i.name}`,
                      action: () => {
                        setPage(
                          !!!(i.page_number % 2)
                            ? i.page_number - 1
                            : i.page_number,
                          1000
                        );
                      }
                    }))}
                />
                <SideBarDropF
                  deepSelected={`${selected?.student_number} ${selected?.name}`}
                  title="2반"
                  icon="Two"
                  actions={library.index
                    .filter(
                      (i) => Math.floor((i.student_number % 1000) / 100) === 2
                    )
                    .map((i) => ({
                      name: `${i.student_number} ${i.name}`,
                      action: () => {
                        setPage(
                          !!!(i.page_number % 2)
                            ? i.page_number - 1
                            : i.page_number,
                          1000
                        );
                      }
                    }))}
                />
                <SideBarDropF
                  deepSelected={`${selected?.student_number} ${selected?.name}`}
                  title="3반"
                  icon="Three"
                  actions={library.index
                    .filter(
                      (i) => Math.floor((i.student_number % 1000) / 100) === 3
                    )
                    .map((i) => ({
                      name: `${i.student_number} ${i.name}`,
                      action: () => {
                        setPage(
                          !!!(i.page_number % 2)
                            ? i.page_number - 1
                            : i.page_number,
                          1000
                        );
                      }
                    }))}
                />
                <SideBarDropF
                  deepSelected={`${selected?.student_number} ${selected?.name}`}
                  title="4반"
                  icon="Four"
                  actions={library.index
                    .filter(
                      (i) => Math.floor((i.student_number % 1000) / 100) === 4
                    )
                    .map((i) => ({
                      name: `${i.student_number} ${i.name}`,
                      action: () => {
                        setPage(
                          !!!(i.page_number % 2)
                            ? i.page_number - 1
                            : i.page_number,
                          1000
                        );
                      }
                    }))}
                />
              </div>
            )}

            <div className="col-flex">
              <span className="mb-2">기타</span>
              {getRole() === "teacher" && loc === "teacher" && (
                <>
                  <SideBarButton
                    action={() => setOpened("피드백 작성")}
                    selected={opened === "피드백 작성"}
                    title="피드백 작성"
                    icon="Edit"
                  />
                  <SideBarButton
                    action={() => setOpened("피드백 목록")}
                    selected={opened === "피드백 목록"}
                    title="피드백 목록"
                    icon="Edit"
                  />
                </>
              )}
              {getRole() === "teacher" && loc !== "teacher" && (
                <>
                  <SideBarDropF
                    actions={[
                      {
                        name: "공개",
                        action: () => {
                          params.set("isPublic", "true");
                          handleMode();
                        }
                      },
                      {
                        name: "비공개",
                        action: () => {
                          params.delete("isPublic");
                          handleMode();
                        }
                      }
                    ]}
                    deepSelected={!!params.get("isPublic") ? "공개" : "비공개"}
                    title="공개 여부"
                    icon="Share"
                    forceOpen
                  />
                  <SideBarButton
                    selected={false}
                    title="다운로드"
                    onClick={() => {
                      if (library) {
                        saveAs(
                          library.resume_url,
                          `${library.year}년 ${library.grade}학년 (${library.generation}기) Resume Book.pdf`
                        );
                      }
                    }}
                    icon="Download"
                  />
                </>
              )}
              {!!params.get("prev") && (
                <SideBarButton
                  selected={false}
                  title="나가기"
                  icon="Back"
                  onClick={() =>
                    window.location.replace(`${params.get("prev")}`)
                  }
                />
              )}
            </div>
          </div>
        </SideBar>
        <div className="size-full col-flex">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
