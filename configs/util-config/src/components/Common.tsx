// @ts-expect-error
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkBuild } from "../utils";
import "@configs/tailwindcss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 2,
      refetchOnWindowFocus: false
    }
  }
});

const toastOptions = {
  autoClose: 1500,
  closeButton: false,
  hideProgressBar: true,
  className: "col-flex gap-2"
};

checkBuild();

export const Common = ({ children }: { children: React.ReactElement }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer {...toastOptions} />
      {children}
    </QueryClientProvider>
  );
};
