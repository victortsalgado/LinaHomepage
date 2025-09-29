import { X } from 'lucide-react';
import AnimatedForm from '@/components/ui/AnimatedForm';

interface FreeTrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialPopup = ({ isOpen, onClose }: FreeTrialPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1 shadow-md"
          data-testid="button-close-popup"
        >
          <X size={20} />
        </button>

        {/* Formulário AnimatedForm sem fundo adicional */}
        <div className="p-6 pt-12">
          <AnimatedForm className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default FreeTrialPopup;