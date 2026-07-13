import { useState, useMemo } from 'react';
import { models, faqs, categories, tiers, type Model } from './data/sample-data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [sortBy, setSortBy] = useState<'inputPrice' | 'outputPrice' | 'name'>('inputPrice');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filteredModels = useMemo(() => {
    let result = [...models];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(term) ||
          m.provider.toLowerCase().includes(term) ||
          m.description.toLowerCase().includes(term) ||
          m.bestFor.some((t) => t.toLowerCase().includes(term))
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((m) => m.category === selectedCategory);
    }

    if (selectedTier !== 'all') {
      result = result.filter((m) => m.tier === selectedTier);
    }

    result.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return sortOrder === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
    });

    return result;
  }, [searchTerm, selectedCategory, selectedTier, sortBy, sortOrder]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'flagship':
        return 'bg-purple-100 text-purple-800';
      case 'mid':
        return 'bg-blue-100 text-blue-800';
      case 'budget':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'llm':
        return '🤖';
      case 'image':
        return '🖼️';
      case 'video':
        return '🎬';
      case 'audio':
        return '🔊';
      default:
        return '📱';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI API Pricing Guide 2026</h1>
              <p className="text-sm text-gray-500">Compare 30+ LLM, image, video, and audio API prices</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#hero" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#comparison" className="text-gray-600 hover:text-blue-600">Comparison</a>
              <a href="#guide" className="text-gray-600 hover:text-blue-600">Guide</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the Best AI API for Your Budget
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Compare pricing across OpenAI, Anthropic, Google, DeepSeek, Mistral, and 25+ providers.
            Make informed decisions for your production workloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#comparison" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Comparison
            </a>
            <a href="#guide" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Read Guide
            </a>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">API Pricing Comparison</h2>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search models, providers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tier</label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {tiers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'inputPrice' | 'outputPrice' | 'name')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="inputPrice">Input Price</option>
                  <option value="outputPrice">Output Price</option>
                  <option value="name">Model Name</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end">
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model: Model) => (
              <div
                key={model.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{getCategoryIcon(model.category)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTierColor(model.tier)}`}>
                      {model.tier.charAt(0).toUpperCase() + model.tier.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{model.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{model.provider}</p>
                  <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Input (per 1M tokens)</p>
                        <p className="text-lg font-bold text-blue-600">${model.inputPrice.toFixed(3)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Output (per 1M tokens)</p>
                        <p className="text-lg font-bold text-green-600">${model.outputPrice.toFixed(3)}</p>
                      </div>
                    </div>
                    {model.contextWindow !== 'N/A' && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-500">Context Window</p>
                        <p className="text-sm font-medium text-gray-700">{model.contextWindow}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {model.bestFor.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {model.freeTier && (
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      ✅ Free Tier Available
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No models match your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section id="guide" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Guide to AI API Pricing</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-3xl">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Token Pricing</h3>
              <p className="text-gray-600 mb-4">
                Most AI APIs charge based on tokens - fragments of text roughly equivalent to 4 characters. Input tokens (what you send) are cheaper than output tokens (what the model generates), typically at a 3-5x ratio.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Input: Prompts, context, system instructions</li>
                <li>• Output: Model-generated responses</li>
                <li>• Output tokens cost 3-5x more</li>
              </ul>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-3xl">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Optimization Strategies</h3>
              <p className="text-gray-600 mb-4">
                Reduce your AI API costs by up to 90% with these proven strategies:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Prompt caching: Save 90% on repeated context</li>
                <li>• Batch processing: 50% discount for async tasks</li>
                <li>• Model routing: Use cheap models for simple tasks</li>
              </ul>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-3xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choosing the Right Model</h3>
              <p className="text-gray-600 mb-4">
                Selecting the optimal AI API depends on your specific use case and budget:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Flagship: Complex reasoning, legal analysis</li>
                <li>• Mid-tier: General production, coding</li>
                <li>• Budget: Classification, high-volume tasks</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Guide to Using This Comparison</h3>
            <ol className="space-y-6">
              <li className="flex">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Identify Your Workload</h4>
                  <p className="text-gray-600">Determine whether you need LLM, image, video, or audio APIs. Consider factors like required quality, context window size, and expected request volume.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Filter by Category and Tier</h4>
                  <p className="text-gray-600">Use the filters above to narrow down your options. Flagship models offer the best quality but cost the most, while budget models are ideal for high-volume simple tasks.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Compare Pricing</h4>
                  <p className="text-gray-600">Look at both input and output prices. For chatbot workloads, output tokens typically account for 30-50% of total costs. Calculate your estimated monthly bill based on expected token usage.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Check for Free Tiers</h4>
                  <p className="text-gray-600">Many providers offer free tiers for development and testing. This can save you money during prototyping and early-stage development.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Test and Optimize</h4>
                  <p className="text-gray-600">Start with a mid-tier model and optimize as you scale. Use prompt caching, batch processing, and model routing to reduce costs while maintaining quality.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Tips for Cost Reduction</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Prompt Caching</h4>
                <p className="text-gray-600 mb-4">
                  Most applications send the same context repeatedly (system prompts, knowledge bases, retrieved documents). Prompt caching stores this context and reuses it across requests, reducing input token costs by up to 90%.
                </p>
                <p className="text-sm text-gray-500">
                  Providers like Anthropic and Google offer built-in caching with 90% discounts on cached tokens.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Multi-Model Routing</h4>
                <p className="text-gray-600 mb-4">
                  Don't use a flagship model for simple tasks. Route classification and extraction tasks to budget models like DeepSeek V4 or Gemini Flash, while reserving flagship models for complex reasoning.
                </p>
                <p className="text-sm text-gray-500">
                  Tools like OpenRouter and LiteLLM make it easy to route requests to the cheapest available model.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Batch Processing</h4>
                <p className="text-gray-600 mb-4">
                  For non-real-time tasks like data enrichment, bulk classification, or content generation, use batch APIs. Most providers offer 50% discounts for asynchronous batch processing.
                </p>
                <p className="text-sm text-gray-500">
                  OpenAI and Anthropic both offer batch APIs with 50% off standard pricing.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Context Management</h4>
                <p className="text-gray-600 mb-4">
                  Be strategic about context window usage. Most providers charge premium rates for contexts over 200K tokens. Use selective retrieval and summarization to keep your context within budget tiers.
                </p>
                <p className="text-sm text-gray-500">
                  Gemini 2.5 Flash offers flat pricing across its full 1M token context, making it ideal for long-context workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-gray-400">
                    {expandedFAQ === idx ? '−' : '+'}
                  </span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI API Pricing Guide 2026</h3>
              <p className="text-gray-400">
                The most comprehensive comparison of AI API pricing for developers. Updated regularly with the latest prices from OpenAI, Anthropic, Google, and more.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#comparison" className="hover:text-white">Comparison Table</a></li>
                <li><a href="#guide" className="hover:text-white">Complete Guide</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://openai.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-white">OpenAI Pricing</a></li>
                <li><a href="https://anthropic.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-white">Anthropic Pricing</a></li>
                <li><a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-white">Google AI Pricing</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2026 AI API Pricing Guide. All data is for informational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
