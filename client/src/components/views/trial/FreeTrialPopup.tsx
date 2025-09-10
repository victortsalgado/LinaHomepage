import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface FreeTrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialPopup = ({ isOpen, onClose }: FreeTrialPopupProps) => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    emailCorporativo: '',
    nomeEmpresa: '',
    cargoEmpresa: '',
    areaAtuacao: '',
    comunicacoes: false,
    tratamentoDados: false
  });

  const cargoOptions = [
    'CEO/Presidente',
    'CTO/Diretor de TI', 
    'CFO/Diretor Financeiro',
    'Gerente de TI',
    'Desenvolvedor',
    'Product Manager',
    'Analista',
    'Outros'
  ];

  const areaOptions = [
    'Tecnologia',
    'Financeiro',
    'Recursos Humanos',
    'Marketing',
    'Vendas',
    'Operações',
    'Consultoria',
    'Outros'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2ec9bc] rounded-2xl p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          data-testid="button-close-popup"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          FREE TRIAL
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome completo */}
          <div>
            <Label htmlFor="nomeCompleto" className="text-white text-sm mb-2 block">
              Nome completo*
            </Label>
            <Input
              id="nomeCompleto"
              type="text"
              required
              value={formData.nomeCompleto}
              onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
              className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900"
              data-testid="input-nome-completo"
            />
          </div>

          {/* E-mail corporativo */}
          <div>
            <Label htmlFor="emailCorporativo" className="text-white text-sm mb-2 block">
              E-mail corporativo*
            </Label>
            <Input
              id="emailCorporativo"
              type="email"
              required
              value={formData.emailCorporativo}
              onChange={(e) => handleInputChange('emailCorporativo', e.target.value)}
              className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900"
              data-testid="input-email-corporativo"
            />
          </div>

          {/* Nome da Empresa */}
          <div>
            <Label htmlFor="nomeEmpresa" className="text-white text-sm mb-2 block">
              Nome da Empresa*
            </Label>
            <Input
              id="nomeEmpresa"
              type="text"
              required
              value={formData.nomeEmpresa}
              onChange={(e) => handleInputChange('nomeEmpresa', e.target.value)}
              className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900"
              data-testid="input-nome-empresa"
            />
          </div>

          {/* Cargo na Empresa */}
          <div>
            <Label className="text-white text-sm mb-2 block">
              Cargo na Empresa*
            </Label>
            <Select
              value={formData.cargoEmpresa}
              onValueChange={(value) => handleInputChange('cargoEmpresa', value)}
              required
            >
              <SelectTrigger className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900" data-testid="select-cargo-empresa">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {cargoOptions.map((cargo) => (
                  <SelectItem key={cargo} value={cargo}>
                    {cargo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Área de Atuação */}
          <div>
            <Label className="text-white text-sm mb-2 block">
              Área de Atuação*
            </Label>
            <Select
              value={formData.areaAtuacao}
              onValueChange={(value) => handleInputChange('areaAtuacao', value)}
              required
            >
              <SelectTrigger className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900" data-testid="select-area-atuacao">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {areaOptions.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 mt-6">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="comunicacoes"
                checked={formData.comunicacoes}
                onCheckedChange={(checked) => handleInputChange('comunicacoes', checked as boolean)}
                className="mt-1 bg-white border-white data-[state=checked]:bg-white data-[state=checked]:text-[#2ec9bc]"
                data-testid="checkbox-comunicacoes"
              />
              <Label htmlFor="comunicacoes" className="text-white text-sm leading-relaxed">
                Eu concordo em receber comunicações da Lina sobre produtos, serviços e eventos. Posso me descadastrar a qualquer momento.
              </Label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="tratamentoDados"
                checked={formData.tratamentoDados}
                onCheckedChange={(checked) => handleInputChange('tratamentoDados', checked as boolean)}
                className="mt-1 bg-white border-white data-[state=checked]:bg-white data-[state=checked]:text-[#2ec9bc]"
                data-testid="checkbox-tratamento-dados"
                required
              />
              <Label htmlFor="tratamentoDados" className="text-white text-sm leading-relaxed">
                Eu concordo em permitir que a Lina armazene e processe meus dados pessoais. Para mais informações, confira nossa{' '}
                <a href="#" className="underline hover:text-gray-200">
                  Política de Privacidade
                </a>
                .
              </Label>
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-[#009895] hover:bg-[#007a77] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              data-testid="button-enviar-trial"
            >
              <ArrowRight size={18} />
              <span>Enviar</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeTrialPopup;