import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
export default function App() {
  return (
    <Layout>
      <Slidebar />
      <Display />
    </Layout>
  );
}
