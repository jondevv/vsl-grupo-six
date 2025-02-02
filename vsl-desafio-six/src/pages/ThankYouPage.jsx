import { useUTM } from '../hooks/useUtm';
import Footer from '../components/Footer';

export default function ThankYouPage() {
  const { utms } = useUTM();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">

          <div className="text-6xl mb-6" role="img" aria-label="Confirmado">
            ✅
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Obrigado pela sua compra!
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Seu pedido foi confirmado com sucesso.
            Você receberá um e-mail com todos os detalhes.
          </p>

          <a
            href="/"
            className="text-green-600 font-semibold hover:text-green-700
                       underline transition-colors"
          >
            Voltar para a página inicial
          </a>

          {Object.keys(utms).length > 0 && (
            <div className="mt-10 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-left">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                UTMs preservados até o final do funil:
              </p>
              {Object.entries(utms).map(([key, value]) => (
                <p key={key} className="text-xs text-gray-600">
                  <span className="font-medium">{key}:</span> {value}
                </p>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}