import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import "@configs/tailwindcss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60 * 2,
      refetchOnWindowFocus: false
    }
  }
});

const checkBuild = () => {
  if (process.env.NODE_ENV === "development") {
    document.title = "🔧 Repo";
  }
};

checkBuild();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools />
    <ToastContainer />
  </QueryClientProvider>
);
