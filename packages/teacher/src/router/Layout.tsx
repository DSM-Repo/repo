import { Sidebar } from "ui";
import { Outlet } from "react-router-dom";
import { teacher } from "@/apis";

export const userDefault: any = {
  name: "김윤이",
  type: "teacher"
};

export const Layout = () => {
  const { data } = teacher();

  return (
    <div className="w-full h-screen bg-black flex">
      <Sidebar
        profile={{ major: "Teacher", name: data?.name || "" }}
        items={[
          {
            name: "메인",
            sections: [
              { icon: "Edit", name: "레주메", urls: ["/", "/resume"] },
              { icon: "Book", name: "도서관", urls: ["/library", "/book"] },
              { icon: "Suitcase", name: "전공", urls: ["/major"] },
              { icon: "Chart", name: "연혁", urls: ["/history"] },
              { icon: "Bell", name: "공지", urls: ["/notice"] }
            ]
          }
        ]}
      />
      <Outlet />
    </div>
  );
};
