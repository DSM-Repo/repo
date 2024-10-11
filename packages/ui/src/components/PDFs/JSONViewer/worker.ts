import jsPDF from "jspdf";

self.addEventListener("message", ({ data }) => {
  const { imgWidth, imgHeight, pageHeight, blobs } = data;

  let heightLeft = imgHeight;
  let position = 0;

  const doc = new jsPDF("p", "mm");
  while (heightLeft >= 0) {
    if (heightLeft !== imgHeight) {
      doc.addPage();
    }
    position = heightLeft - imgHeight;
    doc.addImage(blobs, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
    heightLeft -= pageHeight;
  }
  const blob = doc.output("blob");
  postMessage(blob);
});
