import { Document, Placeholder } from "@configs/type";
import { FormProvider, useForm } from "react-hook-form";

export const useResumeForm = () => {
  const resumeFormMethod = useForm<Document.Resume>({ defaultValues: Placeholder.ResumeDetailPlace });

  const ResumeFormProvider = ({ children }: { children: React.ReactNode }) => <FormProvider {...resumeFormMethod}>{children} </FormProvider>;

  return { resumeFormMethod, ResumeFormProvider };
};
