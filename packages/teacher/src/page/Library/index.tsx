import { Map, Ternary } from "@configs/util";
import { Icon } from "@iconify/react";
import { Convert } from "./Convert";
import { Button } from "./Button";
import { Box, Layout } from "ui";
import { library } from "@/apis";
import { useState } from "react";

export const Library = () => {
  const [open, setOpen] = useState(false);
  const { data } = library();

  return (
    <Layout title="도서관" subTitle="지금까지 공개된 레주메북들을 읽어보세요">
      <Ternary data={data} onNull="데이터가 없습니다">
        <>
          <Box
            width="100%"
            padding="15px"
            className="items-center cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Icon icon="ph:plus-bold" width={30} color="white" />
          </Box>
          <Map data={data?.data} Tomap={Button} max={4} />
        </>
      </Ternary>
      <Convert open={open} setOpen={setOpen} />
    </Layout>
  );
};
