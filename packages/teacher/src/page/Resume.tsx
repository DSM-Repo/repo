import { studentDetail } from "@/apis";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ClientRenderer, Viewer } from "ui";

export const Resume = () => {
  const { id } = useParams();
  const { data } = studentDetail(id as string);
  const [file, setFile] = useState<File | undefined>(undefined);
  const fileInBuff = file?.arrayBuffer().then((buff) => new Uint8Array(buff));

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Viewer url={fileInBuff} />
      {data && <ClientRenderer data={data} setter={setFile} />}
    </div>
  );
};
