import React, { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LoadingWrapper from "./components/LoadingWrapper";
import Routes from "./components/navigation/Routes";
import PageWrapper from "./components/PageWrapper";
import { queryClient } from "./modules/cache/queryCLient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense
          fallback={
            <LoadingWrapper>
              <></>
            </LoadingWrapper>
          }
        >
          <PageWrapper>
            <Routes />
          </PageWrapper>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
