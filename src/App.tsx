import { Route, Routes } from "react-router-dom"
import { routerConfig } from "./routes"

const App = () => {
  return (
    <>
      <Routes>
        {routerConfig.map(({ path, component: Component }) => (
          <Route path={path} key={path} element={<Component />} />
        ))}
      </Routes>
    </>
  )
}

export default App
