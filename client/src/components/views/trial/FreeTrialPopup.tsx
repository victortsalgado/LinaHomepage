import { X } from 'lucide-react';
import AnimatedForm from '@/components/ui/AnimatedForm';

interface FreeTrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialPopup = ({ isOpen, onClose }: FreeTrialPopupProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Background overlay - positioned behind popup */}
      <div 
        className="fixed inset-0 z-40 bg-black/60"
        onClick={onClose}
      />
      
      {/* Popup container - positioned above background */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        <div className="bg-white rounded-2xl w-full max-w-2xl relative max-h-[95vh] overflow-y-auto shadow-2xl pointer-events-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-2 shadow-lg border border-gray-200"
            data-testid="button-close-popup"
          >
            <X size={20} />
          </button>

          {/* Formulário AnimatedForm */}
          <div className="p-8 pt-16">
            <AnimatedForm className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrialPopup;