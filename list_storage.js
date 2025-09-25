import { Client } from '@replit/object-storage';

async function listStorageContents() {
  try {
    console.log('Inicializando cliente do App Storage...');
    
    const client = new Client(); // Usa o bucket padrão
    console.log('Cliente inicializado. Listando conteúdo do App Storage...');
    
    // Lista todos os objetos do bucket
    const objects = await client.list();
    
    console.log('\nArquivos encontrados:');
    objects.forEach(obj => {
      console.log(`- ${obj.key}`);
    });
    
    // Procura especificamente pela pasta Logo_clientes_lina
    const clientLogos = objects.filter(obj => 
      obj.key.includes('Logo_clientes_lina') || 
      obj.key.includes('logo_clientes') ||
      obj.key.includes('clientes')
    );
    
    if (clientLogos.length > 0) {
      console.log('\n=== LOGOS DOS CLIENTES ENCONTRADOS ===');
      clientLogos.forEach(logo => {
        console.log(`✓ ${logo.key}`);
      });
    } else {
      console.log('\n❌ Pasta Logo_clientes_lina não encontrada');
    }
    
  } catch (error) {
    console.error('Erro ao acessar App Storage:', error.message);
  }
}

listStorageContents();