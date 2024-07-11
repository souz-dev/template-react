import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./global.styles";
import { Router } from "./router";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
