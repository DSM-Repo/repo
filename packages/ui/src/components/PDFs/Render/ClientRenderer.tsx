import { useEffect } from "react";
import { Inform } from "../Resume/Render/Inform";
import { Projects } from "../Resume/Render/Projects";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Resume } from "../Resume";

interface IProp {
  data: any;
  setter?: (item: any) => void;
}

export const ClientRenderer = ({ data, setter }: IProp) => {
  useEffect(() => {
    setTimeout(() => {
      const data = document.querySelector(".resume");
      html2canvas(data as HTMLElement, {
        useCORS: true,
        scale: 2.0,
        allowTaint: true
      }).then((canvas: any) => {
        const imgWidth = 210;
        const pageHeight = 297.07;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        heightLeft -= pageHeight;
        const doc = new jsPDF("p", "mm");
        doc.addImage(
          canvas,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        );
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(
            canvas,
            "PNG",
            0,
            position,
            imgWidth,
            imgHeight,
            "",
            "FAST"
          );
          heightLeft -= pageHeight;
        }
        const blob = doc.output("blob");
        const file = new File([blob], "Rendered_Resume.pdf");
        if (setter) {
          setter(file);
        }
      });
    }, 150);
  }, []);

  return (
    <div
      className="resume w-fit absolute overflow-hidden top-[100vh]"
      ref={(item) => {
        item?.childNodes.forEach((i) => {
          setTimeout(() => {
            if (
              (i?.childNodes[0]?.childNodes[0] as HTMLElement)?.style
                .visibility === "hidden"
            ) {
              i.parentElement?.removeChild(i);
            }
          }, 20);
        });
      }}
    >
      <div className="w-[842px] h-[1191px] bg-white" />
      <Resume data={data} setMax={() => {}} showPadding />
    </div>
  );
};
