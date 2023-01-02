import { Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const ProductsForm = lazy(() => import("../pages/ProductsForm"));

const suspenseScreens: { [key: string]: JSX.Element } = {
  home: <Home />,
  productsForm: <ProductsForm />,
};

const suspenseComponent = (child: "home" | "productsForm") => (
  <Suspense
    fallback={
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    }
  >
    {suspenseScreens[child]}
  </Suspense>
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={suspenseComponent("home")} />
        <Route path="/admin" element={suspenseComponent("productsForm")} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
