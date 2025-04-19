import type { NextPage, GetServerSideProps } from 'next';
import api from '../../utils/api';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const PostPage: NextPage<{ post: Post }> = ({ post }) => (
  <div>
    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    <p className="text-sm text-gray-500 mb-2">{new Date(post.createdAt).toLocaleDateString()}</p>
    <article className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get(`/posts/${params?.id}`);
  return { props: { post: res.data } };
};

export default PostPage;