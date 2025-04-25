import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

type Post = {
  id: number;
  titulo: string;
  resumo: string;
  slug: string;
  data: string;
};

type Props = {
  posts: Post[];
};

const Blog: NextPage<Props> = ({ posts }) => (
  <div className="min-h-screen bg-[#F9FAFB] text-[#111827] px-6 py-12 animate-fade-in">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-[#1E3A8A]">Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transition">
          <p className="text-sm text-[#6B7280] mb-1">{post.data}</p>
          <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">{post.titulo}</h2>
          <p className="text-[#374151] mb-4">{post.resumo}</p>
          <Link href={`/blog/${post.slug}`} legacyBehavior>
            <a className="text-[#3B82F6] font-medium hover:underline">Ler mais →</a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  // Simulação de conteúdo
  const posts: Post[] = [
    {
      id: 1,
      titulo: 'Como organizei meu portfólio usando Next.js e Tailwind',
      resumo: 'Veja o passo a passo de como criei uma aplicação responsiva, acessível e profissional.',
      slug: 'portfolio-com-next-tailwind',
      data: '23 de abril de 2025',
    },
    {
      id: 2,
      titulo: 'Boas práticas em APIs REST com Java e Spring Boot',
      resumo: 'Explore padrões, segurança, versionamento e testes para criar APIs robustas.',
      slug: 'boas-praticas-api-spring',
      data: '15 de abril de 2025',
    },
  ];

  return { props: { posts } };
};

export default Blog;
