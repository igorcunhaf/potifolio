import { GetServerSideProps, NextPage } from 'next';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
};

type Props = {
  projetos: Projeto[];
};

const Projetos: NextPage<Props> = ({ projetos }) => (
  <div className="min-h-screen bg-[#F9FAFB] text-[#111827] px-6 py-12 animate-fade-in">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-[#1E3A8A] mb-8">Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2 text-[#1E3A8A]">{projeto.titulo}</h2>
            <p className="text-sm text-[#6B7280] mb-4">{projeto.descricao}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projeto.tecnologias.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-[#3B82F6] text-white text-xs rounded">
                  {tech}
                </span>
              ))}
            </div>
            {projeto.link && (
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1E3A8A] font-medium hover:underline flex items-center gap-2"
              >
                Ver Projeto <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  // Simulação de resposta (substitua por API real quando disponível)
  const projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Gestão CAR São Paulo',
      descricao: 'Aplicação web para análise, envio e retificação de imóveis rurais com geoprocessamento.',
      tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Vue.js'],
      link: '',
    },
    {
      id: 2,
      titulo: 'Portal de Portfólio',
      descricao: 'Projeto pessoal para apresentação de experiências, habilidades e projetos desenvolvidos.',
      tecnologias: ['Next.js', 'TailwindCSS', 'TypeScript'],
      link: '',
    },
  ];

  return { props: { projetos } };
};

export default Projetos;
