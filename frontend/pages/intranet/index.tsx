import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Project = {
  id: number;
  title: string;
  description: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function IntranetPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
    fetchPosts();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('/api/projetos');
    const data = await res.json();
    setProjects(data);
  };

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  const handleDeleteProject = async (id: number) => {
    await fetch(`/api/projetos/${id}`, { method: 'DELETE' });
    fetchProjects();
  };

  const handleDeletePost = async (id: number) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-[#1E3A8A]">Painel da Intranet</h1>

        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-[#1E3A8A]">Projetos</h2>
            <Link href="/intranet/projetos/novo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Novo Projeto
            </Link>
          </div>
          <ul className="space-y-2">
            {projects.map((proj) => (
              <li key={proj.id} className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span>{proj.title}</span>
                <div className="space-x-2">
                  <Link href={`/intranet/projetos/editar/${proj.id}`} className="text-blue-600 hover:underline">
                    Editar
                  </Link>
                  <button onClick={() => handleDeleteProject(proj.id)} className="text-red-600 hover:underline">
                    Deletar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-[#1E3A8A]">Posts do Blog</h2>
            <Link href="/intranet/posts/novo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Novo Post
            </Link>
          </div>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.id} className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span>{post.title}</span>
                <div className="space-x-2">
                  <Link href={`/intranet/posts/editar/${post.id}`} className="text-blue-600 hover:underline">
                    Editar
                  </Link>
                  <button onClick={() => handleDeletePost(post.id)} className="text-red-600 hover:underline">
                    Deletar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
