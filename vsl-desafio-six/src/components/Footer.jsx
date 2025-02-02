export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-4 py-8 text-center text-xs leading-relaxed">
      <div className="max-w-3xl mx-auto space-y-4">
        <p>
          Este site não é afiliado ao Facebook, Google ou qualquer entidade do
          Meta Platforms, Inc. ou Alphabet Inc. Os resultados apresentados são
          demonstrativos e podem variar de pessoa para pessoa. Este produto não
          substitui orientação profissional.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#" className="underline hover:text-white transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="underline hover:text-white transition-colors">
            Termos de Uso
          </a>
        </div>

        <p>© 2026 Empresa Demonstrativa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}