import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSave(prompt: string, filename: string, aspectRatio: string = "1:1") {
  console.log(`Generating ${filename}...`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: prompt,
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: "1K"
        }
      }
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync(path.join(process.cwd(), 'public', filename), buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
    console.log(`No image data found for ${filename}`);
  } catch (e) {
    console.error(`Error generating ${filename}:`, e);
  }
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  await Promise.all([
    generateAndSave('A cinematic neon noir shot of a billiards pool table in a dark pub, glowing fuchsia and electric blue lights, highly detailed, 8k, photorealistic', 'billar.png', '16:9'),
    generateAndSave('A cinematic neon noir shot of an electronic darts board on a dark wall in a pub, glowing fuchsia and electric blue lights, highly detailed, 8k, photorealistic', 'dardos.png', '3:4'),
    generateAndSave('A cinematic neon noir shot of a DJ booth and dance floor in a dark club, laser lights, glowing fuchsia and electric blue, highly detailed, 8k, photorealistic', 'musica.png', '16:9')
  ]);
}

main().catch(console.error);
