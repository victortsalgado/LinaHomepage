import { X } from 'lucide-react';
import AnimatedForm from '@/components/ui/AnimatedForm';

interface FreeTrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialPopup = ({ isOpen, onClose }: FreeTrialPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-2xl">
        {/* Botão de fechar - sempre no canto superior direito */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 z-10 text-gray-400 hover:text-gray-600 transition-all duration-200 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200"
          aria-label="Fechar"
          data-testid="button-close-popup"
        >
          <X size={20} />
        </button>

        {/* Formulário AnimatedForm */}
        <AnimatedForm className="w-full" />
      </div>
    </div>
  );
};

export default FreeTrialPopup;