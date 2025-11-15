import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';
import './Header.css';

const Header = () => {
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/">
              <span className="gradient-text">ModernBlog</span>
            </a>
          </motion.div>

          <nav className="nav-desktop">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <Menu as="div" className="menu-mobile">
            <Menu.Button className="menu-button">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </motion.div>
            </Menu.Button>
            <Menu.Items className="menu-items">
              {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={active ? 'menu-item active' : 'menu-item'}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
