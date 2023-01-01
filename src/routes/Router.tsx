import {lazy, Suspense} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home")) 
const ProductsForm = lazy(() => import("../pages/ProductsForm")) 

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Suspense fallback={<h1>Carregando...</h1>}> */}
          <Route path="/" element={<Home />}/>
          <Route path="/admin" element={<ProductsForm />}/>
        {/* </Suspense> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router