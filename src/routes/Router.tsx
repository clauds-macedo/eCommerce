import { Spinner } from "@chakra-ui/react";
import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "../auth/login-provider";
import { db } from "../config/firebase";
import useCollection from "../hooks/useCollection";
import Admin from "../pages/Admin";
import { IUserInterface } from "../utils/types";

const Home = lazy(() => import("../pages/Home"));
const ProductsForm = lazy(() => import("../pages/ProductsForm"));

const suspenseScreens: { [key: string]: JSX.Element } = {
  home: <Home />,
  productsForm: <ProductsForm />,
  admin: <Admin />,
};

const suspenseComponent = (child: "home" | "productsForm" | "admin") => (
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
  const { auth } = AuthProvider();
  const { handleGetDocData } = useCollection({
    collectionName: "users",
    database: db,
  });

  const [user, setUser] = React.useState<IUserInterface[]>([]);
  const loggedInUserInfo = user.find(
    (userInfo) => userInfo.uid === auth.currentUser?.uid
  );

  React.useEffect(() => {
    (async () => {
      setUser((await handleGetDocData()) as unknown as IUserInterface[]);
    })();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={suspenseComponent("home")} />
        {loggedInUserInfo?.admin ? (
          <>
            <Route path="/admin" element={suspenseComponent("admin")} />
            <Route
              path="/admin/products"
              element={suspenseComponent("productsForm")}
            />
            <Route
              path="/admin/cards"
              element={suspenseComponent("productsForm")}
            />
          </>
        ) : null}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
