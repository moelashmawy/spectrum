import { Route, Routes } from "react-router-dom";
import SpectrumHTTP from "./pages/SpectrumHTTP/SpectrumHTTP";
import SpectrumRealTime from "./pages/SpectrumRealTime/SpectrumRealTime";
import { Toastr } from "./components/Toaster/Toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<SpectrumHTTP />} />
          <Route path="realtime" element={<SpectrumRealTime />} />
        </Route>
      </Routes>

      <Toastr />
    </>
  );
}

export default App;
