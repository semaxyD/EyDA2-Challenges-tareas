import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { menuTree } from './data/menuTree';
import SidebarMenu from './components/SidebarMenu';
import Layout from './components/Layout';

function generateRoutes(nodes) {
  return nodes.flatMap((node) => {
    const routes = [
      <Route key={node.link} path={node.link} element={<node.component />} />,
    ];
    if (node.children) {
      routes.push(...generateRoutes(node.children));
    }
    return routes;
  });
}

export default function App15() {
  return (
    <Router>
      <Layout>
        <SidebarMenu menu={menuTree.children} />
        <div className="flex-1 p-6">
          <Routes>
            {generateRoutes(menuTree.children)}
            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}
