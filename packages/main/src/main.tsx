import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router/index.tsx";
import ReactDOM from "react-dom/client";
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
