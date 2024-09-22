import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkBuild } from "@configs/util";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import "@configs/tailwindcss";

checkBuild();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60 * 2,
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools />
    <ToastContainer
      autoClose={1500}
      closeButton={false}
      hideProgressBar={true}
      className="col-flex gap-2"
    />
  </QueryClientProvider>
);
