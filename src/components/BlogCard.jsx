import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './BlogCard.css';

const BlogCard = ({ post, onClick, index }) => {
  const categoryColors = {
    Development: 'var(--color-accent)',
    Design: 'var(--color-primary)',
    Tutorial: 'var(--color-secondary)',
    Accessibility: 'var(--color-success)',
    Technology: 'var(--color-warning)',
  };

  return (
    <motion.article
      className="blog-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <div className="blog-card-image-wrapper">
        <motion.img
          src={post.image}
          alt={post.title}
          className="blog-card-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="blog-card-category"
          style={{ backgroundColor: categoryColors[post.category] || 'var(--color-gray-600)' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {post.category}
        </motion.div>
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-author">{post.author}</span>
          <span className="blog-card-separator">•</span>
          <span className="blog-card-date">{post.date}</span>
          <span className="blog-card-separator">•</span>
          <span className="blog-card-read-time">{post.readTime}</span>
        </div>
        
        <h3 className="blog-card-title">{post.title}</h3>
        
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <motion.button
          className="blog-card-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l6-6-6-6" />
          </svg>
        </motion.button>
      </div>
    </motion.article>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default BlogCard;
