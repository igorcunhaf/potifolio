import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

type Post = {
  titulo: string;
  conteudo: string;
  data: string;
};

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] px-6 py-12 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-[#6B7280] mb-2">{post.data}</p>
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">{post.titulo}</h1>
        <div className="prose prose-lg max-w-none text-[#374151]">
          <p>{post.conteudo}</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ['portfolio-com-next-tailwind', 'boas-praticas-api-spring'];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const postMap: Record<string, Post> = {
    'portfolio-com-next-tailwind': {
      titulo: 'Como organizei meu portfólio usando Next.js e Tailwind',
      data: '23 de abril de 2025',
      conteudo:
        'Neste post, compartilho como utilizei o framework Next.js junto com TailwindCSS para criar meu portfólio de forma responsiva e moderna. Abordo estrutura de pastas, componentes reutilizáveis, responsividade e organização de conteúdo.',
    },
    'boas-praticas-api-spring': {
      titulo: 'Boas práticas em APIs REST com Java e Spring Boot',
      data: '15 de abril de 2025',
      conteudo:
        'Conheça boas práticas para construção de APIs REST com Java e Spring Boot: versionamento, tratamento de exceções, segurança com JWT, testes automatizados e arquitetura limpa.',
    },
  };

  const post = postMap[slug];

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

export default PostPage;
