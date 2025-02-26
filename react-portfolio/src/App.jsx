import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Home />} />
    </Route>
  )
);

const App = () => {
  return (
    <WatchListProvider>
      <RouterProvider router={router} />
    </WatchListProvider>
  );
};

export default App;
