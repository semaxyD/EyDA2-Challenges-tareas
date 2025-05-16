import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function SidebarMenu({ menu }) {
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  const toggleMenu = (link) => {
    setOpenMenus((prev) => ({
      ...prev,
      [link]: !prev[link],
    }));
  };

  const renderMenu = (items, depth = 0) => {
    if (!Array.isArray(items)) return null;

    return (
      <ul className={`space-y-1 ml-${depth * 2}`}>
        {items.map((item) => {
          const isActive = location.pathname.startsWith(item.link);
          const hasChildren = Array.isArray(item.children) && item.children.length > 0;
          const isOpen = openMenus[item.link];

          return (
            <li key={item.link}>
              <div className="flex items-center justify-between">
                <NavLink
                  to={item.link}
                  className={({ isActive: isExactActive }) =>
                    `flex-1 block px-4 py-2 rounded hover:bg-blue-200 transition-all duration-150 ${
                      isExactActive || isActive
                        ? 'bg-blue-500 text-white font-bold'
                        : 'text-gray-300'
                    }`
                  }
                  onClick={() => hasChildren && toggleMenu(item.link)}
                >
                  {item.title}
                </NavLink>
                {hasChildren && (
                  <button
                    onClick={() => toggleMenu(item.link)}
                    className="text-white px-2 focus:outline-none"
                  >
                    {isOpen ? '▼' : '▶'}
                  </button>
                )}
              </div>
              {hasChildren && isOpen && renderMenu(item.children, depth + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <aside className="w-64 bg-black text-white p-4 border-r shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Menú</h2>
      {renderMenu(menu)}
    </aside>
  );
}
