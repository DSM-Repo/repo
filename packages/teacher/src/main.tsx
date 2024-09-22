import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "./router/index.tsx";
import ReactDOM from "react-dom/client";
import { checkBuild } from "@configs/util";
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
    <ToastContainer
      autoClose={1000}
      closeButton={false}
      hideProgressBar={true}
    />
  </QueryClientProvider>
);
