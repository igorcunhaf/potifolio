import type { NextPage, GetServerSideProps } from 'next';
import api from '../../utils/api';
import Link from 'next/link';

interface Project { id: number; title: string; }

const Projects: NextPage<{ projects: Project[] }> = ({ projects }) => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
    <ul className="space-y-4">
      {projects.map(p => (
        <li key={p.id} className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <Link href={`/projetos/${p.id}`} className="text-blue-600 hover:underline">Ver detalhes</Link>
        </li>
      ))}
    </ul>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/projects');
  return { props: { projects: res.data } };
};

export default Projects;