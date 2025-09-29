import AnimatedForm from '@/components/ui/AnimatedForm';
import { usePopup } from '@/contexts/PopupContext';

interface FreeTrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialPopup = ({ isOpen, onClose }: FreeTrialPopupProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay escuro clicável para fechar */}
      <div 
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
      />

      {/* Container do formulário */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-2xl">
          {/* Formulário AnimatedForm com botão de fechar integrado */}
          <AnimatedForm className="w-full" onClose={onClose} />
        </div>
      </div>
    </>
  );
};

export default FreeTrialPopup;