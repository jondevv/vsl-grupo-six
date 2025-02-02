import CTAButton from './CTAButton';

export default function ProductSection() {
  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
          Conheça Nosso Produto
        </h2>

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 text-center">
          <div className="mx-auto mb-6 w-48 h-48 md:w-64 md:h-64 rounded-lg bg-gray-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Método Resultado Total
          </h3>

          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Acesso completo ao treinamento, materiais de apoio, comunidade
            exclusiva e suporte por 12 meses.
          </p>

          <div className="mb-8">
            <span className="text-sm text-gray-400 line-through">De R$ 297,00</span>
            <p className="text-3xl md:text-4xl font-bold text-green-600 mt-1">
              R$ 97,00
            </p>
            <span className="text-sm text-gray-500">ou 12x de R$ 9,70 sem juros</span>
          </div>

          <CTAButton />

          <p className="mt-4 text-xs text-gray-400">
            Garantia incondicional de 7 dias. Não gostou? Devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
}