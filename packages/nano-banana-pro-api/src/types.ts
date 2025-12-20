export type NanoBananaProModel =
  | 'nano-banana-pro-image'
  | 'nano-banana-pro-image-vision'
  | 'nano-banana-pro-image-fast'
  | (string & {});

export type NanoBananaProAspectRatio =
  | '1:1'
  | '16:9'
  | '9:16'
  | '4:3'
  | '3:4'
  | (string & {});

export type NanoBananaProTaskStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'canceled';

export type NanoBananaProImageSize =
  | '1024x1024'
  | '1536x1024'
  | '1024x1536'
  | (string & {});

export type NanoBananaProSafetyLevel = 'strict' | 'standard' | 'relaxed' | (string & {});

export type NanoBananaProImageGenerationRequest = {
  model?: NanoBananaProModel;
  prompt: string;
  negative_prompt?: string;
  aspect_ratio?: NanoBananaProAspectRatio;
  size?: NanoBananaProImageSize;
  steps?: number;
  guidance?: number;
  seed?: number;
  n?: number;
  style_preset?: string;
  safety?: NanoBananaProSafetyLevel;
  callback_url?: string;
  metadata?: Record<string, string>;
};

export type NanoBananaProImageEditRequest = {
  model?: NanoBananaProModel;
  prompt: string;
  image_url: string;
  mask_url?: string;
  strength?: number;
  n?: number;
  seed?: number;
  safety?: NanoBananaProSafetyLevel;
  callback_url?: string;
  metadata?: Record<string, string>;
};

export type NanoBananaProUpscaleRequest = {
  model?: NanoBananaProModel;
  image_url: string;
  scale?: 2 | 4 | number;
  algorithm?: 'detail' | 'balanced' | 'fast' | (string & {});
  callback_url?: string;
  metadata?: Record<string, string>;
};

export type NanoBananaProImageResult = {
  url: string;
  width?: number;
  height?: number;
  content_type?: string;
  checksum?: string;
};

export type NanoBananaProUsage = {
  billed_units?: number;
  unit_type?: string;
  user_group?: string;
};

export type NanoBananaProTaskInfo = {
  estimated_time?: number;
  can_cancel?: boolean;
  usage?: NanoBananaProUsage;
};

export type NanoBananaProGenerationResponse = {
  created: number;
  id: string;
  model: string;
  object: 'image.generation.task' | string;
  progress: number;
  status: NanoBananaProTaskStatus;
  type: 'image' | 'video' | 'audio' | 'text' | string;
  task_info?: NanoBananaProTaskInfo;
};

export type NanoBananaProTaskDetailResponse = {
  created: number;
  id: string;
  model: string;
  object:
    | 'image.generation.task'
    | 'image.edit.task'
    | 'image.upscale.task'
    | string;
  progress: number;
  results?: NanoBananaProImageResult[];
  status: NanoBananaProTaskStatus;
  type: 'image' | 'video' | 'audio' | 'text' | string;
  task_info?: NanoBananaProTaskInfo;
  error?: { message?: string; code?: string };
};

export type NanoBananaProModelInfo = {
  id: string;
  name?: string;
  type?: string;
  context_window?: number;
  max_output?: number;
  version?: string;
};

export type NanoBananaProModelListResponse = {
  data: NanoBananaProModelInfo[];
  object?: 'list' | string;
};

export class NanoBananaProApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'NanoBananaProApiError';
    this.status = status;
  }
}
