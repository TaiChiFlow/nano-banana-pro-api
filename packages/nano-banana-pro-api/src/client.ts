import {
  NanoBananaProApiError,
  NanoBananaProGenerationResponse,
  NanoBananaProImageEditRequest,
  NanoBananaProImageGenerationRequest,
  NanoBananaProModelListResponse,
  NanoBananaProTaskDetailResponse,
  NanoBananaProUpscaleRequest
} from './types';

export type NanoBananaProClientOptions = {
  baseUrl: string;
  apiKey: string;
  fetchImpl?: typeof fetch;
  headers?: Record<string, string>;
  apiKeyHeader?: string;
  apiKeyPrefix?: string | null;
};

export type NanoBananaProClient = {
  createImage: (
    input: NanoBananaProImageGenerationRequest
  ) => Promise<NanoBananaProGenerationResponse>;
  editImage: (input: NanoBananaProImageEditRequest) => Promise<NanoBananaProGenerationResponse>;
  upscaleImage: (input: NanoBananaProUpscaleRequest) => Promise<NanoBananaProGenerationResponse>;
  getTask: (id: string) => Promise<NanoBananaProTaskDetailResponse>;
  listModels: () => Promise<NanoBananaProModelListResponse>;
  cancelTask: (id: string) => Promise<NanoBananaProTaskDetailResponse>;
};

const joinUrl = (baseUrl: string, path: string) =>
  `${baseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;

const json = async <T>(res: Response): Promise<T> => {
  const text = await res.text();
  if (!text) return {} as T;
  return JSON.parse(text) as T;
};

export function createNanoBananaProClient(
  options: NanoBananaProClientOptions
): NanoBananaProClient {
  const fetcher = options.fetchImpl ?? fetch;
  const baseUrl = options.baseUrl;
  const apiKeyHeader = options.apiKeyHeader ?? 'Authorization';
  const apiKeyPrefix = options.apiKeyPrefix ?? 'Bearer';

  if (!baseUrl) throw new NanoBananaProApiError('baseUrl is required');
  if (!options.apiKey) throw new NanoBananaProApiError('apiKey is required');

  const request = async <T>(path: string, init: RequestInit): Promise<T> => {
    const authValue = apiKeyPrefix ? `${apiKeyPrefix} ${options.apiKey}` : options.apiKey;
    const res = await fetcher(joinUrl(baseUrl, path), {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        [apiKeyHeader]: authValue,
        ...(options.headers ?? {}),
        ...(init.headers ?? {})
      }
    });

    if (!res.ok) {
      let message = `Request failed with status ${res.status}`;
      try {
        const maybe = await json<{ error?: string; message?: string }>(res);
        message = maybe.error ?? maybe.message ?? message;
      } catch {
        // ignore JSON parsing errors
      }
      throw new NanoBananaProApiError(message, res.status);
    }

    return json<T>(res);
  };

  return {
    createImage: input =>
      request<NanoBananaProGenerationResponse>('v1/images/generations', {
        method: 'POST',
        body: JSON.stringify({ model: 'nano-banana-pro-image', ...input })
      }),
    editImage: input =>
      request<NanoBananaProGenerationResponse>('v1/images/edits', {
        method: 'POST',
        body: JSON.stringify({ model: 'nano-banana-pro-image', ...input })
      }),
    upscaleImage: input =>
      request<NanoBananaProGenerationResponse>('v1/images/upscale', {
        method: 'POST',
        body: JSON.stringify({ model: 'nano-banana-pro-image', ...input })
      }),
    getTask: id =>
      request<NanoBananaProTaskDetailResponse>(`v1/tasks/${encodeURIComponent(id)}`, {
        method: 'GET'
      }),
    listModels: () => request<NanoBananaProModelListResponse>('v1/models', { method: 'GET' }),
    cancelTask: id =>
      request<NanoBananaProTaskDetailResponse>(`v1/tasks/${encodeURIComponent(id)}/cancel`, {
        method: 'POST'
      })
  };
}
