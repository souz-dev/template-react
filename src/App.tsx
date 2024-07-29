import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./global.styles";
import { Router } from "./router";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
