import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Edit, Move, Palette, Type, Image, Save } from "lucide-react";

interface SelectedElement {
  element: HTMLElement;
  originalStyles: CSSStyleDeclaration;
}

interface VisualEditorProps {
  isActive: boolean;
  onClose: () => void;
}

export default function VisualEditor({ isActive, onClose }: VisualEditorProps) {
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState(false);
  const [editableText, setEditableText] = useState("");
  const [elementStyles, setElementStyles] = useState({
    color: "#000000",
    backgroundColor: "#ffffff",
    fontSize: "16",
    fontFamily: "Inter",
    padding: "0",
    margin: "0",
    borderRadius: "0",
    width: "auto",
    height: "auto"
  });

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) {
      removeHighlights();
      setSelectedElement(null);
      return;
    }

    const handleElementClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      const target = e.target as HTMLElement;
      if (target.closest('.visual-editor-panel')) return;
      
      selectElement(target);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.visual-editor-panel')) return;
      
      removeHighlights();
      addHighlight(target);
    };

    if (isActive) {
      document.addEventListener('click', handleElementClick, true);
      document.addEventListener('mouseover', handleElementHover, true);
    }

    return () => {
      document.removeEventListener('click', handleElementClick, true);
      document.removeEventListener('mouseover', handleElementHover, true);
      removeHighlights();
    };
  }, [isActive]);

  const addHighlight = (element: HTMLElement) => {
    element.style.outline = '2px solid #00F0D8';
    element.style.outlineOffset = '2px';
    element.style.cursor = 'pointer';
  };

  const removeHighlights = () => {
    const elements = document.querySelectorAll('*');
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.outline = '';
      htmlEl.style.outlineOffset = '';
      htmlEl.style.cursor = '';
    });
  };

  const selectElement = (element: HTMLElement) => {
    removeHighlights();
    
    const computedStyles = window.getComputedStyle(element);
    setSelectedElement({
      element,
      originalStyles: computedStyles
    });

    // Highlight selected element
    element.style.outline = '3px solid #00F0D8';
    element.style.outlineOffset = '2px';

    // Extract current styles
    setElementStyles({
      color: rgbToHex(computedStyles.color),
      backgroundColor: rgbToHex(computedStyles.backgroundColor),
      fontSize: (parseInt(computedStyles.fontSize) || 16).toString(),
      fontFamily: computedStyles.fontFamily.replace(/["']/g, '').split(',')[0],
      padding: (parseInt(computedStyles.padding) || 0).toString(),
      margin: (parseInt(computedStyles.margin) || 0).toString(),
      borderRadius: (parseInt(computedStyles.borderRadius) || 0).toString(),
      width: element.offsetWidth.toString(),
      height: element.offsetHeight.toString()
    });

    // Extract text content
    const textContent = element.innerText || element.textContent || "";
    setEditableText(textContent);
  };

  const rgbToHex = (rgb: string): string => {
    if (rgb.includes('#')) return rgb;
    if (rgb === 'rgba(0, 0, 0, 0)' || rgb === 'transparent') return '#ffffff';
    
    const match = rgb.match(/\d+/g);
    if (!match) return '#000000';
    
    const [r, g, b] = match.map(Number);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const applyStyles = () => {
    if (!selectedElement) return;

    const { element } = selectedElement;
    
    // Apply styles
    element.style.color = elementStyles.color;
    element.style.backgroundColor = elementStyles.backgroundColor;
    element.style.fontSize = `${elementStyles.fontSize}px`;
    element.style.fontFamily = elementStyles.fontFamily;
    element.style.padding = `${elementStyles.padding}px`;
    element.style.margin = `${elementStyles.margin}px`;
    element.style.borderRadius = `${elementStyles.borderRadius}px`;
    
    if (elementStyles.width !== 'auto') {
      element.style.width = `${elementStyles.width}px`;
    }
    if (elementStyles.height !== 'auto') {
      element.style.height = `${elementStyles.height}px`;
    }

    // Apply text changes
    if (editableText !== element.innerText && element.children.length === 0) {
      element.innerText = editableText;
    }
  };

  const enableDragMode = () => {
    setDragMode(true);
    if (selectedElement) {
      const { element } = selectedElement;
      element.style.position = 'relative';
      element.style.cursor = 'move';
      
      let startX = 0, startY = 0, elementX = 0, elementY = 0;

      const handleMouseDown = (e: MouseEvent) => {
        setIsDragging(true);
        startX = e.clientX;
        startY = e.clientY;
        elementX = parseInt(element.style.left) || 0;
        elementY = parseInt(element.style.top) || 0;
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      };

      const handleMouseMove = (e: MouseEvent) => {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        element.style.left = `${elementX + deltaX}px`;
        element.style.top = `${elementY + deltaY}px`;
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      element.addEventListener('mousedown', handleMouseDown);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedElement) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const { element } = selectedElement;
      if (element.tagName === 'IMG') {
        (element as HTMLImageElement).src = event.target?.result as string;
      } else {
        element.style.backgroundImage = `url(${event.target?.result})`;
        element.style.backgroundSize = 'cover';
        element.style.backgroundPosition = 'center';
      }
    };
    reader.readAsDataURL(file);
  };

  if (!isActive) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-40 pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
      />
      
      {/* Editor Panel */}
      <div className="visual-editor-panel fixed right-4 top-4 z-50 w-80 bg-white rounded-lg shadow-2xl border">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Edit className="w-5 h-5" />
                Editor Visual
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                data-testid="button-close-editor"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {selectedElement ? (
              <Tabs defaultValue="style" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="style">
                    <Palette className="w-4 h-4" />
                  </TabsTrigger>
                  <TabsTrigger value="text">
                    <Type className="w-4 h-4" />
                  </TabsTrigger>
                  <TabsTrigger value="position">
                    <Move className="w-4 h-4" />
                  </TabsTrigger>
                  <TabsTrigger value="image">
                    <Image className="w-4 h-4" />
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="style" className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="color">Cor do Texto</Label>
                      <Input
                        id="color"
                        type="color"
                        value={elementStyles.color}
                        onChange={(e) => setElementStyles(prev => ({ ...prev, color: e.target.value }))}
                        className="h-8"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bgColor">Cor de Fundo</Label>
                      <Input
                        id="bgColor"
                        type="color"
                        value={elementStyles.backgroundColor}
                        onChange={(e) => setElementStyles(prev => ({ ...prev, backgroundColor: e.target.value }))}
                        className="h-8"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="padding">Padding (px)</Label>
                      <Input
                        id="padding"
                        type="number"
                        value={elementStyles.padding}
                        onChange={(e) => setElementStyles(prev => ({ ...prev, padding: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="margin">Margin (px)</Label>
                      <Input
                        id="margin"
                        type="number"
                        value={elementStyles.margin}
                        onChange={(e) => setElementStyles(prev => ({ ...prev, margin: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="borderRadius">Border Radius (px)</Label>
                    <Input
                      id="borderRadius"
                      type="number"
                      value={elementStyles.borderRadius}
                      onChange={(e) => setElementStyles(prev => ({ ...prev, borderRadius: e.target.value }))}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="text" className="space-y-3">
                  <div>
                    <Label htmlFor="textContent">Texto</Label>
                    <Textarea
                      id="textContent"
                      value={editableText}
                      onChange={(e) => setEditableText(e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="fontSize">Tamanho da Fonte</Label>
                      <Input
                        id="fontSize"
                        type="number"
                        value={elementStyles.fontSize}
                        onChange={(e) => setElementStyles(prev => ({ ...prev, fontSize: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="fontFamily">Fonte</Label>
                      <Select
                        value={elementStyles.fontFamily}
                        onValueChange={(value) => setElementStyles(prev => ({ ...prev, fontFamily: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inter">Inter</SelectItem>
                          <SelectItem value="Lexend">Lexend</SelectItem>
                          <SelectItem value="Arial">Arial</SelectItem>
                          <SelectItem value="Georgia">Georgia</SelectItem>
                          <SelectItem value="Helvetica">Helvetica</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="position" className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="width">Largura (px)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={elementStyles.width}
                        onChange={(e) => setElementStyles(prev => ({ ...prev, width: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Altura (px)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={elementStyles.height}
                        onChange={(e) => setElementStyles(prev => ({ ...prev, height: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <Button
                    onClick={enableDragMode}
                    className="w-full"
                    variant={dragMode ? "default" : "outline"}
                    data-testid="button-drag-mode"
                  >
                    <Move className="w-4 h-4 mr-2" />
                    {dragMode ? "Modo Arrastar Ativo" : "Ativar Modo Arrastar"}
                  </Button>
                </TabsContent>

                <TabsContent value="image" className="space-y-3">
                  <div>
                    <Label htmlFor="imageUpload">Alterar Imagem</Label>
                    <Input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="mt-1"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    Funciona para elementos &lt;img&gt; ou adiciona como background para outros elementos.
                  </p>
                </TabsContent>

                <Button
                  onClick={applyStyles}
                  className="w-full mt-4 bg-lina-cyan hover:bg-lina-cyan/90"
                  data-testid="button-apply-changes"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Aplicar Mudanças
                </Button>
              </Tabs>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Edit className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Clique em qualquer elemento da página para editá-lo</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}