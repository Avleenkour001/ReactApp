import { Route, Routes } from 'react-router-dom';
import Allbookspage from './pages/Allbooks';
import Favouritebookspage from './pages/Favouritebooks';
import Newbookspage from './pages/Newbooks';
import Layout from './components/layouts/Layout';

function App() {
  return (
  <Layout>
      <Routes>
          <Route path="/" element={<Allbookspage />} />
          <Route path="/new" element={<Newbookspage />} />
          <Route path="/fav" element={<Favouritebookspage />} />
      </Routes>
  </Layout>
  );
}

export default App;
