import { useParams } from "react-router-dom";
import { getBook, libraryAccess } from "@/apis";
import { Items, StandardSidebar, Viewer } from "ui";
import { findKeyWithValue } from "@configs/util";
import { toast } from "react-toastify";

const typeTable = {
  PUBLIC: "공개",
  PRIVATE: "비공개"
};

export const Book = () => {
  const { id } = useParams();
  const { data, refetch } = getBook(id as string);
  const { mutate: access } = libraryAccess(id as string);

  return (
    <Viewer
      url={data?.resume_url}
      indexList={data?.index}
      buttons={[
        { icon: "Settings", title: "설정", action: { type: "OPEN_SIDEBAR", sideBarName: "설정" } },
        {
          icon: "Share",
          title: "URL 복사",
          action: {
            type: "CALLBACK",
            callback: () => {
              navigator.clipboard
                .writeText(`${process.env.VITE_APP_URL_MAIN}/viewer/${data?.id}`)
                .then(() => toast.success("성공적으로 복사되었습니다"))
                .catch(() => toast.error("복사중 오류가 발생했습니다"));
            }
          },
          disabled: {
            state: data?.access_right === "PRIVATE",
            reason: "비공개 상태에선 URL을 복사할 수 없습니다."
          }
        }
      ]}
      sidebars={[
        {
          name: "설정",
          element: (
            <StandardSidebar
              name="설정"
              width="250"
              items={[
                {
                  name: "공개 여부",
                  content: (
                    <Items
                      selections={["공개", "비공개"]}
                      selected={data && typeTable[data.access_right]}
                      onClick={(value) =>
                        access(("?access-right=" + findKeyWithValue(typeTable, value)) as string, {
                          onSuccess: () => {
                            toast.success("성공적으로 변경되었습니다");
                            refetch();
                          }
                        })
                      }
                    />
                  )
                }
              ]}
            />
          )
        }
      ]}
    />
  );
};
