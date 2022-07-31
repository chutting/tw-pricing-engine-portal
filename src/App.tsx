import { Route, Routes } from "react-router-dom"
import { routerConfig } from "./routes"
import Layout from '@/components/layout';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          {routerConfig.map(({ path, component: Component }) => (
            <Route path={path} key={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </>
  )
}

export default App
