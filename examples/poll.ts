import { createNanoBananaProClient } from '../packages/nano-banana-pro-api/src';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
    prompt: 'Nano Banana Pro renders a futuristic product photo of a smart speaker, studio white',
    aspect_ratio: '1:1',
    size: '1024x1024'
  });

  let detail = await client.getTask(task.id);
  while (detail.status === 'pending' || detail.status === 'processing') {
    console.log(`Waiting... ${detail.status} (${detail.progress}%)`);
    await sleep(2000);
    detail = await client.getTask(task.id);
  }

  console.log('Final:', detail.status, detail.results);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
