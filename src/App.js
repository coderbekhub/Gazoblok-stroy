import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './Components/Home';


function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  return (
    <>
      <Home />

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
