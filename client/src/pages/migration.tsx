import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Loader2, Upload, Image, Folder } from 'lucide-react';

interface MigrationResult {
  message: string;
  results: {
    success: any[];
    failed: any[];
    total: number;
    byCategory: Record<string, number>;
  };
  summary: {
    total: number;
    successful: number;
    failed: number;
    categoriesCount: Record<string, number>;
  };
}

interface SanityAssets {
  total: number;
  byCategory: Record<string, any[]>;
  assets: any[];
}

export default function Migration() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MigrationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sanityAssets, setSanityAssets] = useState<SanityAssets | null>(null);

  const handleMigration = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/sanity/migrate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data);
      
      // Após migração, buscar assets do Sanity
      await loadSanityAssets();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const loadSanityAssets = async () => {
    try {
      const response = await fetch('/api/sanity/assets');
      if (response.ok) {
        const data = await response.json();
        setSanityAssets(data);
      }
    } catch (err) {
      console.error('Erro ao carregar assets do Sanity:', err);
    }
  };

  const getStatusIcon = (status: 'success' | 'error' | 'loading') => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'loading':
        return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />;
    }
  };

  const getProgressPercent = () => {
    if (!result) return 0;
    return (result.summary.successful / result.summary.total) * 100;
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Migração de Imagens para Sanity
          </h1>
          <p className="text-gray-600 mt-2">
            Migre todas as imagens do projeto para o Sanity.io com categorização automática
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Migração de Assets
            </CardTitle>
            <CardDescription>
              Este processo irá analisar e fazer upload de todas as 579 imagens do projeto para o Sanity,
              organizando-as automaticamente por categorias (logos, ícones, banners, etc.)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleMigration} 
              disabled={isLoading}
              className="w-full"
              data-testid="button-migrate"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Migrando imagens...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Iniciar Migração
                </>
              )}
            </Button>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-700">
                  {getStatusIcon('error')}
                  <span className="font-medium">Erro na migração</span>
                </div>
                <p className="text-red-600 mt-1" data-testid="text-error">{error}</p>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    {getStatusIcon('success')}
                    <span className="font-medium" data-testid="text-success">Migração concluída!</span>
                  </div>
                  <p className="text-green-600 mt-1">{result.message}</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resultados da Migração</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600" data-testid="text-successful">
                          {result.summary.successful}
                        </div>
                        <div className="text-sm text-gray-600">Sucesso</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600" data-testid="text-failed">
                          {result.summary.failed}
                        </div>
                        <div className="text-sm text-gray-600">Falharam</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600" data-testid="text-total">
                          {result.summary.total}
                        </div>
                        <div className="text-sm text-gray-600">Total</div>
                      </div>
                    </div>

                    <Progress value={getProgressPercent()} className="w-full" />

                    <div>
                      <h4 className="font-medium mb-2">Imagens por Categoria:</h4>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(result.summary.categoriesCount).map(([category, count]) => (
                          <Badge key={category} variant="secondary" data-testid={`badge-${category}`}>
                            {category}: {count}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {result.results.failed.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium text-red-600 mb-2">Arquivos que falharam:</h4>
                        <div className="max-h-32 overflow-y-auto">
                          {result.results.failed.map((failure, index) => (
                            <div key={index} className="text-sm text-red-600 bg-red-50 p-2 rounded mb-1">
                              <div className="font-medium">{failure.file}</div>
                              <div className="text-xs">{failure.error}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>

        {sanityAssets && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Assets no Sanity
              </CardTitle>
              <CardDescription>
                Total de {sanityAssets.total} assets organizados por categoria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(sanityAssets.byCategory).map(([category, assets]) => (
                  <div key={category} className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Folder className="h-4 w-4 text-blue-500" />
                      <span className="font-medium capitalize">{category}</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{assets.length}</div>
                    <div className="text-sm text-gray-600">assets</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <Button variant="outline" onClick={loadSanityAssets} data-testid="button-refresh">
            <Image className="mr-2 h-4 w-4" />
            Atualizar Assets do Sanity
          </Button>
        </div>
      </div>
    </div>
  );
}