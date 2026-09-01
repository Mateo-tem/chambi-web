import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface VersionData {
  version: string;
  releaseDate: string;
  downloadUrl: string;
  mandatory: boolean;
}

export async function fetchVersionData(): Promise<VersionData> {
  try {
    const versionPath = join(__dirname, '../../public/version.json');
    const fileContent = readFileSync(versionPath, 'utf-8');
    const data = JSON.parse(fileContent) as VersionData;
    return data;
  } catch (error) {
    console.error('Error reading version.json:', error);
    // Fallback values
    return {
      version: '1.0.0',
      releaseDate: '2026-09-01',
      downloadUrl: 'https://tuchambi.app/downloads/chambi-1.0.0-arm64.apk',
      mandatory: true,
    };
  }
}

export const downloadConfig = {
  fallbackLabel: 'Descarga próximamente',
  directAndroidText: 'Solo disponible para dispositivos Android',
};
