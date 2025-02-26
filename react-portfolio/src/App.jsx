/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
