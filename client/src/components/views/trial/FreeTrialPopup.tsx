import { X } from 'lucide-react';
import RDStationForm from '@/components/ui/RDStationForm';

interface FreeTrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialPopup = ({ isOpen, onClose }: FreeTrialPopupProps) => {
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

        {/* RD Station Form */}
        <div className="space-y-4">
          <RDStationForm className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default FreeTrialPopup;