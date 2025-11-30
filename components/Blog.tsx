import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-wider mb-2 text-sm">Blog</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-800">Novidades e Dicas</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPostCard: React.FC<{ post: typeof BLOG_POSTS[0] }> = ({ post }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
          {/* Skeleton/Placeholder effect */}
          <div className={`absolute inset-0 bg-gray-300 animate-pulse transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
          
          <img 
            src={`https://picsum.photos/600/400?random=${Number(post.id) + 20}`} 
            alt={post.title} 
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase z-10 shadow-sm">
              {post.category}
          </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 text-xs mb-2">{post.date}</p>
        <h4 className="font-bold text-xl text-gray-800 mb-3 hover:text-brand-blue cursor-pointer">{post.title}</h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <button className="text-brand-blue font-semibold text-sm hover:underline">Ler Mais</button>
      </div>
    </div>
  );
}

export default Blog;