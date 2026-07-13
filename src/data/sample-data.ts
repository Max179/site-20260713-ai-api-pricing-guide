export interface Model {
  id: string;
  name: string;
  provider: string;
  tier: 'flagship' | 'mid' | 'budget';
  inputPrice: number;
  outputPrice: number;
  contextWindow: string;
  category: 'llm' | 'image' | 'video' | 'audio';
  bestFor: string[];
  description: string;
  freeTier: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const models: Model[] = [
  { id: 'gpt-5-5', name: 'GPT-5.5 Pro', provider: 'OpenAI', tier: 'flagship', inputPrice: 30, outputPrice: 180, contextWindow: '1.05M', category: 'llm', bestFor: ['complex reasoning', 'coding', 'agentic workflows'], description: 'OpenAI flagship model with state-of-the-art reasoning capabilities', freeTier: false },
  { id: 'gpt-5-4', name: 'GPT-5.4', provider: 'OpenAI', tier: 'flagship', inputPrice: 2.5, outputPrice: 15, contextWindow: '400K', category: 'llm', bestFor: ['general purpose', 'content generation', 'analysis'], description: 'High-performance model for production workloads', freeTier: false },
  { id: 'gpt-5-mini', name: 'GPT-5 Mini', provider: 'OpenAI', tier: 'mid', inputPrice: 0.125, outputPrice: 1, contextWindow: '400K', category: 'llm', bestFor: ['classification', 'extraction', 'routing'], description: 'Cost-effective for high-volume simple tasks', freeTier: true },
  { id: 'gpt-4-1', name: 'GPT-4.1', provider: 'OpenAI', tier: 'mid', inputPrice: 2, outputPrice: 8, contextWindow: '1M', category: 'llm', bestFor: ['coding', 'long context', 'document analysis'], description: 'Strong reasoning with large context window', freeTier: false },
  { id: 'claude-opus-4-8', name: 'Claude Opus 4.8', provider: 'Anthropic', tier: 'flagship', inputPrice: 5, outputPrice: 25, contextWindow: '1M', category: 'llm', bestFor: ['legal analysis', 'code generation', 'multi-step reasoning'], description: 'Premium quality for safety-critical applications', freeTier: false },
  { id: 'claude-sonnet-4-6', name: 'Claude Sonnet 4.6', provider: 'Anthropic', tier: 'mid', inputPrice: 3, outputPrice: 15, contextWindow: '1M', category: 'llm', bestFor: ['coding', 'document processing', 'analysis'], description: 'Best balanced quality-to-cost ratio', freeTier: false },
  { id: 'claude-haiku-4-5', name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'budget', inputPrice: 1, outputPrice: 5, contextWindow: '200K', category: 'llm', bestFor: ['classification', 'summarization', 'high volume'], description: 'Fast and affordable for simple tasks', freeTier: true },
  { id: 'gemini-3-1-pro', name: 'Gemini 3.1 Pro', provider: 'Google', tier: 'flagship', inputPrice: 2, outputPrice: 12, contextWindow: '2M', category: 'llm', bestFor: ['multimodal', 'long context', 'research'], description: 'Native multimodal with massive context', freeTier: false },
  { id: 'gemini-2-5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'mid', inputPrice: 1.25, outputPrice: 10, contextWindow: '1M', category: 'llm', bestFor: ['document processing', 'multimodal', 'reasoning'], description: 'Strong multimodal understanding', freeTier: true },
  { id: 'gemini-2-5-flash', name: 'Gemini 2.5 Flash', provider: 'Google', tier: 'budget', inputPrice: 0.3, outputPrice: 2.5, contextWindow: '1M', category: 'llm', bestFor: ['classification', 'RAG', 'high volume'], description: 'Best value for long-context workloads', freeTier: true },
  { id: 'deepseek-v4', name: 'DeepSeek V4', provider: 'DeepSeek', tier: 'budget', inputPrice: 0.14, outputPrice: 0.28, contextWindow: '1M', category: 'llm', bestFor: ['high-volume pipelines', 'classification', 'extraction'], description: 'Cheapest high-quality LLM API', freeTier: false },
  { id: 'deepseek-v3-2', name: 'DeepSeek V3.2', provider: 'DeepSeek', tier: 'budget', inputPrice: 0.28, outputPrice: 1.1, contextWindow: '164K', category: 'llm', bestFor: ['reasoning tasks', 'budget production'], description: 'Strong reasoning at budget price', freeTier: false },
  { id: 'mistral-large-3', name: 'Mistral Large 3', provider: 'Mistral', tier: 'mid', inputPrice: 0.5, outputPrice: 1.5, contextWindow: '262K', category: 'llm', bestFor: ['EU compliance', 'multilingual', 'reasoning'], description: 'European provider with strong multilingual', freeTier: false },
  { id: 'mistral-small-4', name: 'Mistral Small 4', provider: 'Mistral', tier: 'budget', inputPrice: 0.15, outputPrice: 0.6, contextWindow: '128K', category: 'llm', bestFor: ['classification', 'routing', 'simple tasks'], description: 'Fast and affordable open-weight model', freeTier: true },
  { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'Meta', tier: 'mid', inputPrice: 0.27, outputPrice: 0.85, contextWindow: '1M', category: 'llm', bestFor: ['open-source', 'self-hosting', 'customization'], description: 'Open-weight model via hosted providers', freeTier: false },
  { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'Meta', tier: 'budget', inputPrice: 0.18, outputPrice: 0.59, contextWindow: '1M', category: 'llm', bestFor: ['high volume', 'simple tasks', 'research'], description: 'Most affordable Llama model', freeTier: false },
  { id: 'groq-4-3', name: 'Grok 4.3', provider: 'xAI', tier: 'mid', inputPrice: 1.25, outputPrice: 2.5, contextWindow: '1M', category: 'llm', bestFor: ['fast inference', 'reasoning', 'coding'], description: 'Fastest inference on market', freeTier: false },
  { id: 'cohere-command-r', name: 'Command R+', provider: 'Cohere', tier: 'mid', inputPrice: 2.5, outputPrice: 10, contextWindow: '128K', category: 'llm', bestFor: ['RAG', 'search', 'reranking'], description: 'Best for enterprise search pipelines', freeTier: false },
  { id: 'dalle-4', name: 'DALL-E 4', provider: 'OpenAI', tier: 'flagship', inputPrice: 40, outputPrice: 120, contextWindow: 'N/A', category: 'image', bestFor: ['high-quality images', 'creative content', 'product visuals'], description: 'State-of-the-art image generation', freeTier: false },
  { id: 'flux-2', name: 'Flux 2', provider: 'Black Forest Labs', tier: 'mid', inputPrice: 1, outputPrice: 3, contextWindow: 'N/A', category: 'image', bestFor: ['realistic images', 'artistic content', 'design'], description: 'Realistic image generation at low cost', freeTier: false },
  { id: 'sora-2', name: 'Sora 2', provider: 'OpenAI', tier: 'flagship', inputPrice: 100, outputPrice: 300, contextWindow: 'N/A', category: 'video', bestFor: ['video generation', 'creative content', 'marketing'], description: 'Text-to-video generation', freeTier: false },
  { id: 'kling-2-1', name: 'Kling 2.1', provider: 'ByteDance', tier: 'mid', inputPrice: 14, outputPrice: 50, contextWindow: 'N/A', category: 'video', bestFor: ['short videos', 'social content', 'marketing'], description: 'Affordable AI video generation', freeTier: false },
  { id: 'elevenlabs', name: 'ElevenLabs', provider: 'ElevenLabs', tier: 'mid', inputPrice: 18, outputPrice: 18, contextWindow: 'N/A', category: 'audio', bestFor: ['voice cloning', 'TTS', 'audio content'], description: 'Best text-to-speech with cloning', freeTier: true },
  { id: 'fish-audio', name: 'Fish Audio', provider: 'Fish Audio', tier: 'budget', inputPrice: 0, outputPrice: 10, contextWindow: 'N/A', category: 'audio', bestFor: ['free TTS', 'voice generation', 'podcasts'], description: 'Free tier available', freeTier: true },
  { id: 'nova-pro', name: 'Nova Pro', provider: 'Amazon', tier: 'mid', inputPrice: 0.8, outputPrice: 3.2, contextWindow: '300K', category: 'llm', bestFor: ['AWS ecosystem', 'enterprise', 'production'], description: 'Deeply integrated with AWS Bedrock', freeTier: false },
  { id: 'nova-micro', name: 'Nova Micro', provider: 'Amazon', tier: 'budget', inputPrice: 0.035, outputPrice: 0.14, contextWindow: '128K', category: 'llm', bestFor: ['high volume', 'classification', 'extraction'], description: 'Cheapest AWS LLM option', freeTier: false },
  { id: 'qwen3-235b', name: 'Qwen3-235B', provider: 'Alibaba', tier: 'mid', inputPrice: 0.09, outputPrice: 0.1, contextWindow: '262K', category: 'llm', bestFor: ['Chinese content', 'multilingual', 'reasoning'], description: 'Strong Chinese language support', freeTier: false },
  { id: 'kimi-k2-6', name: 'Kimi K2.6', provider: 'Moonshot', tier: 'mid', inputPrice: 0.95, outputPrice: 4, contextWindow: '256K', category: 'llm', bestFor: ['Chinese content', 'long context', 'document analysis'], description: 'Chinese-focused long-context model', freeTier: false },
  { id: 'glm-5-2', name: 'GLM-5.2', provider: 'Z.ai', tier: 'mid', inputPrice: 0.6, outputPrice: 2.2, contextWindow: '200K', category: 'llm', bestFor: ['Chinese content', 'reasoning', 'coding'], description: 'Chinese large model', freeTier: false },
  { id: 'jamba-1-7', name: 'Jamba 1.7 Large', provider: 'AI21', tier: 'mid', inputPrice: 2, outputPrice: 8, contextWindow: '256K', category: 'llm', bestFor: ['reasoning', 'creative writing', 'analysis'], description: 'Mamba-based architecture', freeTier: false },
];

export const faqs: FAQ[] = [
  { question: 'What is the cheapest AI API for production?', answer: 'DeepSeek V4 is currently the cheapest production-grade LLM API at $0.14 per million input tokens and $0.28 per million output tokens. For image generation, Flux 2 via Hypereal AI costs only $0.001 per image.' },
  { question: 'How do AI API costs scale with usage?', answer: 'Most AI APIs charge per token for LLMs and per image/video for generative models. Output tokens typically cost 3-5x more than input tokens. Batch processing can reduce costs by 50%, and prompt caching can cut repeat context costs by up to 90%.' },
  { question: 'Which AI API is best for coding?', answer: 'Claude Sonnet 4.6 is widely regarded as the best for coding tasks, with superior code generation, debugging, and multi-step reasoning capabilities. Its 1M token context window allows processing full codebases.' },
  { question: 'What is the difference between input and output tokens?', answer: 'Input tokens are what you send to the model (prompts, context, system instructions), while output tokens are what the model generates in response. Output tokens are more expensive because generation is computationally intensive.' },
  { question: 'Which AI API has the largest context window?', answer: 'Google Gemini 3.1 Pro offers the largest context window at 2M tokens, followed by Llama 4 Scout at 10M tokens (via hosted providers). This allows processing entire documents, books, or codebases in a single request.' },
  { question: 'Do any AI APIs offer free tiers?', answer: 'Yes! Google Gemini 2.5 Pro and Flash offer generous free tiers, Anthropic Claude Haiku has limited free access, Mistral Small 4 has a free tier, and ElevenLabs offers 10 minutes of free TTS per month.' },
  { question: 'How much does it cost to run a production chatbot?', answer: 'For a chatbot processing 10,000 requests/day (average 500 input tokens, 200 output tokens), costs range from $50-200/month with budget models like DeepSeek V4 to $500-2,000/month with flagship models like GPT-5.5.' },
  { question: 'What is prompt caching and how does it save money?', answer: 'Prompt caching stores frequently used context (system prompts, knowledge bases, retrieved documents) and reuses them across requests. This can reduce input token costs by up to 90% for applications that send the same context repeatedly.' },
  { question: 'Which AI API should I choose for my startup?', answer: 'For most startups, Gemini 2.5 Flash or DeepSeek V4 are excellent budget options for initial development. As you scale and need better quality, consider Claude Sonnet 4.6 or GPT-4.1 as mid-tier options.' },
  { question: 'What are hidden costs to watch for?', answer: 'Hidden costs include cold starts (serverless platforms), long-context surcharges (some providers charge more for contexts over 200K tokens), batch processing fees, and rate limit overages. Always check the fine print.' },
];

export const categories = [
  { id: 'all', name: 'All Models' },
  { id: 'llm', name: 'LLM Models' },
  { id: 'image', name: 'Image Generation' },
  { id: 'video', name: 'Video Generation' },
  { id: 'audio', name: 'Audio/TTS' },
];

export const tiers = [
  { id: 'all', name: 'All Tiers' },
  { id: 'flagship', name: 'Flagship' },
  { id: 'mid', name: 'Mid-tier' },
  { id: 'budget', name: 'Budget' },
];
