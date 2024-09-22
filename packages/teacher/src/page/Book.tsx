import { useParams } from "react-router-dom";
import { getBook, libraryAccess } from "@/apis";
import { Items, Viewer } from "ui";
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
      buttons={[{ icon: "Settings", title: "설정", action: "설정" }]}
      sidebars={[
        {
          name: "설정",
          type: "standard",
          width: "200px",
          items: [
            {
              name: "공개 여부",
              content: (
                <Items
                  selections={["공개", "비공개"]}
                  selected={data && typeTable[data.access_right]}
                  onClick={(value) =>
                    access(
                      ("?access-right=" +
                        findKeyWithValue(typeTable, value)) as string,
                      {
                        onSuccess: () => {
                          toast.success("성공적으로 변경되었습니다");
                          refetch();
                        }
                      }
                    )
                  }
                />
              )
            }
          ]
        }
      ]}
    />
  );
};
