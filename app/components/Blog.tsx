"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {getPosts, Post} from "@/lib/blog";

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        let success = false;
        setLoading(true);
        setError(null);
        try {
            const posts = await getPosts(page);
            setPosts(posts);
            // setHasMore(true)
            success = true;
        } catch (err) {
            console.error(err);
            setError("Failed to fetch blog posts. Please try again later.");
        } finally {
            setLoading(false);
        }
        return success;
    };

    if (error) {
        return (
            <section id="blog" className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">Latest Updates</h2>
                    <p className="text-xl text-red-600 text-center">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Latest Updates</h2>
                    <p className="text-xl text-gray-600">Stay informed about our progress and community impact</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <Image
                                src={post.feature_image || "/placeholder.svg?height=200&width=400"}
                                alt={post.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.custom_excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span
                                        className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                                    <Link href={`/blog/${post.slug}`} passHref>
                                        <Button variant="link" className="text-blue-600 hover:text-blue-800">
                                            Read More <ArrowRight className="ml-2 h-4 w-4"/>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {hasMore && (
                    <div className="text-center mt-12">
                        <Button
                            className="bg-blue-900 text-white hover:bg-blue-800"
                            onClick={fetchPosts}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Load More"}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;

