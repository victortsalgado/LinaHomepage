import AnimatedForm from '@/components/ui/AnimatedForm';

interface FreeTrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialPopup = ({ isOpen, onClose }: FreeTrialPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-2xl">
        {/* Formulário AnimatedForm com botão de fechar integrado */}
        <AnimatedForm className="w-full" onClose={onClose} />
      </div>
    </div>
  );
};

export default FreeTrialPopup;