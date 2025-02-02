import { useNavigate } from 'react-router-dom';
import { useUTM } from '../hooks/useUtm';
import Footer from '../components/Footer';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { utms, buildLink } = useUTM();

  const handlePurchase = () => {
    navigate(buildLink('/obrigado'));
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full">

          <h1 className="text-2xl font-bold text-center mb-8">
            Finalizar Compra
          </h1>

          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-gray-600 text-sm">Produto</p>
            <p className="font-semibold">Produto Demonstrativo</p>
            <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
              <span className="text-gray-600 text-sm">Total</span>
              <span className="text-2xl font-bold text-green-600">R$ 97,00</span>
            </div>
          </div>

          <button
            onClick={handlePurchase}
            className="w-full bg-green-600 hover:bg-green-700 text-white
                       font-bold py-4 rounded-full text-lg transition-colors
                       duration-200 cursor-pointer"
          >
            Confirmar Compra
          </button>

          <button
            onClick={() => navigate(buildLink('/'))}
            className="w-full mt-3 text-gray-500 hover:text-gray-700
                       text-sm py-2 transition-colors cursor-pointer"
          >
            ← Voltar para a página anterior
          </button>

          {Object.keys(utms).length > 0 && (
            <div className="mt-8 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                UTMs rastreados nesta página:
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