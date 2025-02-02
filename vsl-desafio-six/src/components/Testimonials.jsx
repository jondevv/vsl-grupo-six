import mariaImg from '../assets/images/maria.jpeg';
import joaoImg from '../assets/images/joao.jpeg';
import anaImg from '../assets/images/ana.jpeg';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Empreendedora',
    text: 'Transformou completamente meus resultados! Em 30 dias já vi diferença real nos meus números. O método é simples e direto.',
    image: mariaImg,
  },
  {
    name: 'João Santos',
    role: 'Autônomo',
    text: 'O melhor investimento que fiz este ano. O conteúdo é direto ao ponto e realmente funciona. Minha vida mudou.',
    image: joaoImg,
  },
  {
    name: 'Ana Costa',
    role: 'Consultora',
    text: 'Suporte incrível e resultados reais. Superou todas as minhas expectativas. Recomendo demais para todo mundo!',
    image: anaImg,
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-16">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-10">
        O Que Nossos Clientes Dizem
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-100
                       overflow-hidden flex flex-col aspect-[4/5]"
          >
            <div className="flex-1 overflow-hidden">
              <img
                src={t.image}
                alt={`Foto de ${t.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
                width={400}
                height={500}
              />
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-gray-900">{t.name}</span>
                <span className="text-green-600 text-xs">• {t.role}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}