import { createNanoBananaProClient } from '../packages/nano-banana-pro-api/src';

async function main() {
  const apiKey = process.env.NANO_BANANA_PRO_API_KEY;
  if (!apiKey) {
    throw new Error('Missing NANO_BANANA_PRO_API_KEY');
  }

  const client = createNanoBananaProClient({
    baseUrl: process.env.NANO_BANANA_PRO_BASE_URL ?? 'https://api.nanobanana.pro',
    apiKey
  });

  const task = await client.createImage({
    prompt: 'A sleek nano-banana shaped drone flying over a neon city, cinematic lighting',
    aspect_ratio: '16:9',
    size: '1536x1024',
    n: 1
  });

  console.log('Task created:', task);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
