import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Image, Package } from "lucide-react";

interface ImageCategory {
  [key: string]: string[];
}

export default function StoragePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch images organized by categories
  const { data: categories, isLoading } = useQuery<ImageCategory>({
    queryKey: ['/api/images/categories'],
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'logos': return '🏷️';
      case 'icons': return '🎯';
      case 'backgrounds': return '🖼️';
      case 'products': return '📦';
      case 'clients': return '🤝';
      case 'generated': return '🤖';
      case 'figma': return '🎨';
      default: return '📁';
    }
  };

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'logos': return 'Logos';
      case 'icons': return 'Ícones';
      case 'backgrounds': return 'Backgrounds';
      case 'products': return 'Produtos';
      case 'clients': return 'Clientes';
      case 'generated': return 'Imagens Geradas';
      case 'figma': return 'Assets Figma';
      default: return 'Outros';
    }
  };

  const totalImages = categories ? Object.values(categories).flat().length : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-12 h-12 text-[var(--lina-cyan)] mx-auto mb-4 animate-spin" />
          <p className="text-gray-400">Carregando storage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            App <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 bg-clip-text text-transparent">Storage</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Sistema organizado de gerenciamento de imagens da Lina
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-6">
            <Badge variant="outline" className="text-[var(--lina-cyan)] border-[var(--lina-cyan)]">
              {totalImages} imagens organizadas
            </Badge>
            <Badge variant="outline" className="text-teal-400 border-teal-400">
              {categories ? Object.keys(categories).length : 0} categorias
            </Badge>
          </div>
        </div>

        {/* Info Section */}
        <div className="mb-12 text-center">
          <Card className="bg-gray-900/50 border border-gray-800 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <Package className="w-6 h-6 text-[var(--lina-cyan)]" />
              Visualização de Assets
            </h2>
            <p className="text-gray-400">
              Explore todas as imagens do site organizadas automaticamente por categorias
            </p>
          </Card>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories && Object.entries(categories).map(([category, images]) => (
            <Card 
              key={category}
              className="bg-gray-900/50 border border-gray-800 p-6 hover:border-[var(--lina-cyan)]/50 transition-all cursor-pointer backdrop-blur-sm group"
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {getCategoryDisplayName(category)}
                </h3>
                <Badge 
                  variant={images.length > 0 ? "default" : "secondary"}
                  className={images.length > 0 
                    ? "bg-[var(--lina-cyan)]/20 text-[var(--lina-cyan)] border-[var(--lina-cyan)]/30" 
                    : ""
                  }
                >
                  {images.length} {images.length === 1 ? 'imagem' : 'imagens'}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Category Details */}
        {selectedCategory && categories && categories[selectedCategory] && (
          <Card className="bg-gray-900/50 border border-gray-800 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FolderOpen className="w-6 h-6 text-[var(--lina-cyan)]" />
                {getCategoryDisplayName(selectedCategory)}
              </h2>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
              >
                Fechar
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {categories[selectedCategory].map((imagePath, index) => {
                const fileName = imagePath.split('/').pop() || imagePath;
                return (
                  <div 
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-3 text-center hover:bg-gray-700/50 transition-all group"
                  >
                    <div className="flex items-center justify-center h-16 mb-2">
                      <Image className="w-8 h-8 text-gray-400 group-hover:text-[var(--lina-cyan)] transition-colors" />
                    </div>
                    <p className="text-xs text-gray-400 truncate" title={fileName}>
                      {fileName}
                    </p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {imagePath.split('.').pop()?.toUpperCase()}
                    </Badge>
                  </div>
                );
              })}
            </div>

            {categories[selectedCategory].length === 0 && (
              <div className="text-center py-12">
                <Image className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">Nenhuma imagem encontrada nesta categoria</p>
              </div>
            )}
          </Card>
        )}

        {/* Empty State */}
        {(!categories || totalImages === 0) && (
          <Card className="bg-gray-900/50 border border-gray-800 p-12 text-center backdrop-blur-sm">
            <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Storage Vazio</h3>
            <p className="text-gray-400">
              Nenhuma imagem encontrada nas categorias públicas configuradas.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}