import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="home">
      <Header />
      <Hero />
      
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <p>Explore our collection of insightful articles and tutorials</p>
          </div>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      
      <AnimatePresence>
        {selectedPost && (
          <BlogPost
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
