import type { NextPage, GetServerSideProps } from 'next';
import api from '../../utils/api';
import Link from 'next/link';

interface Post { id: number; title: string; }

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Blog Técnico</h1>
    <ul className="space-y-4">
      {posts.map(p => (
        <li key={p.id} className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <Link href={`/blog/${p.id}`} className="text-blue-600 hover:underline">Ler mais</Link>
        </li>
      ))}
    </ul>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/posts');
  return { props: { posts: res.data } };
};

export default Blog;