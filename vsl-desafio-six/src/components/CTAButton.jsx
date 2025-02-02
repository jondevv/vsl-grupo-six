import { useNavigate } from 'react-router-dom';
import { useUTM } from '../hooks/useUtm';

export default function CTAButton({ text = 'Quero Garantir o Meu!' }) {
  const navigate = useNavigate();
  const { buildLink } = useUTM();

  return (
    <button
      onClick={() => navigate(buildLink('/checkout'))}
      className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white
                 font-bold py-4 px-10 rounded-full text-lg transition-colors
                 duration-200 shadow-lg hover:shadow-xl active:scale-95
                 cursor-pointer"
    >
      {text}
    </button>
  );
}