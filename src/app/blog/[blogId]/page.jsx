import BlogDetailsClient from './BlogDetailsClient';

export async function generateStaticParams() {
  // This is a placeholder. In a real application, you would fetch this
  // data from a CMS or database.
  const posts = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  return posts.map((post) => ({
    blogId: post.id,
  }));
}

export default function BlogDetailsPage({ params }) {
  return <BlogDetailsClient params={params} />;
}
