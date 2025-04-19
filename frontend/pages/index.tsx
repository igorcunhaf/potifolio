import type { NextPage, GetServerSideProps } from 'next';
import api from '../utils/api';
import Link from 'next/link';

interface Project { id: number; title: string; }
interface Post { id: number; title: string; }

interface Props { projects: Project[]; posts: Post[]; }

const Home: NextPage<Props> = ({ projects, posts }) => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Bem-vindo ao meu Portfólio</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Projetos Recentes</h2>
      <ul className="space-y-2">
        {projects.map(p => (
          <li key={p.id}>
            <Link href={`/projetos/${p.id}`} className="text-blue-600 hover:underline">{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-4">Artigos Recentes</h2>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p.id}>
            <Link href={`/blog/${p.id}`} className="text-blue-600 hover:underline">{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const [projectsRes, postsRes] = await Promise.all([
    api.get('/projects'),
    api.get('/posts'),
  ]);
  return { props: { projects: projectsRes.data, posts: postsRes.data } };
};

export default Home;