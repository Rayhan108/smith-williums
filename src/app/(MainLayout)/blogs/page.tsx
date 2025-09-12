import AllBlogs from '@/Component/Blogs/AllBlogs';
import BlogBanner from '@/Component/Blogs/BlogBanner';
import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <BlogBanner/>
            <AllBlogs/>
        </div>
    );
};

export default BlogPage;