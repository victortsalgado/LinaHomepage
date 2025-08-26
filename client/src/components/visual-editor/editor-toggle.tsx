import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit, X } from "lucide-react";
import VisualEditor from "./visual-editor";

export default function EditorToggle() {
  const [isEditorActive, setIsEditorActive] = useState(false);

  return (
    <>
      {/* Toggle Button - Fixed position */}
      <Button
        onClick={() => setIsEditorActive(!isEditorActive)}
        className={`fixed bottom-4 left-4 z-40 rounded-full w-12 h-12 shadow-lg transition-all duration-300 ${
          isEditorActive 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-lina-cyan hover:bg-lina-cyan/90'
        }`}
        data-testid="button-toggle-editor"
        title={isEditorActive ? "Fechar Editor" : "Abrir Editor Visual"}
      >
        {isEditorActive ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Edit className="w-5 h-5 text-white" />
        )}
      </Button>

      {/* Visual Editor */}
      <VisualEditor 
        isActive={isEditorActive} 
        onClose={() => setIsEditorActive(false)} 
      />
    </>
  );
}