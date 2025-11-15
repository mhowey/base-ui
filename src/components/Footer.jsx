import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-title gradient-text">ModernBlog</h3>
            <p className="footer-description">
              Your source for the latest in web development, design, and technology.
            </p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="#development">Development</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#tutorial">Tutorial</a></li>
              <li><a href="#technology">Technology</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-heading">Stay Connected</h4>
            <div className="footer-social">
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Twitter
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} ModernBlog. Built with Base UI and Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
