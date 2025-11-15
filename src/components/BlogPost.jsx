import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './BlogPost.css';

const BlogPost = ({ post, onClose }) => {
  return (
    <motion.div
      className="blog-post-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="blog-post"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="blog-post-close" onClick={onClose}>
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="blog-post-header">
          <motion.img
            src={post.image}
            alt={post.title}
            className="blog-post-image"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="blog-post-header-content">
            <motion.span
              className="blog-post-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {post.category}
            </motion.span>
            <motion.h1
              className="blog-post-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {post.title}
            </motion.h1>
            <motion.div
              className="blog-post-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="blog-post-author">{post.author}</span>
              <span className="blog-post-separator">•</span>
              <span className="blog-post-date">{post.date}</span>
              <span className="blog-post-separator">•</span>
              <span className="blog-post-read-time">{post.readTime}</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="blog-post-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          className="blog-post-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="blog-post-share">
            <h3>Share this article</h3>
            <div className="blog-post-share-buttons">
              <button className="share-button">
                <span>Twitter</span>
              </button>
              <button className="share-button">
                <span>LinkedIn</span>
              </button>
              <button className="share-button">
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </motion.div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BlogPost;
