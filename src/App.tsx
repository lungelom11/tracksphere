import { BrowserRouter,Routes,Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import LoginPage from "./pages/LoginPage"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<div>Home Page</div>} />
            <Route path="/finances" element={<div>Finances Page</div>} />
            <Route path="/fantasy" element={<div>Fantasy Page</div>} />
            <Route path="/betway" element={<div>Betway Page</div>} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App