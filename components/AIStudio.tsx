import React, { useState, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Send, Image as ImageIcon, Sparkles, Loader2, Upload, Bot, Search, X } from 'lucide-react';

type Tab = 'chat' | 'analyze' | 'edit';

const AIStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  
  // Chat State
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'model', text: string}[]>([]);
  
  // Image State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editPrompt, setEditPrompt] = useState('');

  // Persistent Chat Session
  const chatSessionRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
      setResultImage(null);
    }
  };

  const fileToGenerativePart = async (file: File) => {
    return new Promise<{inlineData: {data: string, mimeType: string}}>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = (reader.result as string).split(',')[1];
            resolve({
                inlineData: {
                    data: base64String,
                    mimeType: file.type
                }
            });
        };
        reader.readAsDataURL(file);
    });
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsLoading(true);

    try {
      // Initialize chat session only if it doesn't exist
      if (!chatSessionRef.current) {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const model = 'gemini-3-pro-preview';
          
          chatSessionRef.current = ai.chats.create({ 
              model,
              config: {
                  systemInstruction: "Você é um assistente virtual da Moraes Acrílicos, especialista em acrílicos, domos, clarabóias e corte a laser. Responda de forma útil, profissional e concisa. Seu objetivo é ajudar clientes com dúvidas técnicas e sobre produtos."
              }
          });
      }
      
      const response: GenerateContentResponse = await chatSessionRef.current.sendMessage({ 
          message: userMsg 
      });
      
      setChatHistory(prev => [...prev, { role: 'model', text: response.text || "Desculpe, não consegui gerar uma resposta." }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatHistory(prev => [...prev, { role: 'model', text: "Desculpe, ocorreu um erro ao conectar com a IA. Por favor, tente novamente." }]);
      // Reset session on error to allow recovery
      chatSessionRef.current = null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile) return;
    setIsLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-pro-preview';
      
      const imagePart = await fileToGenerativePart(imageFile);
      
      const response = await ai.models.generateContent({
        model,
        contents: {
            parts: [
                imagePart,
                { text: "Analise esta imagem técnica de acrílico ou projeto. Descreva o que é, os materiais prováveis, qualidade do acabamento e sugestões de uso." }
            ]
        }
      });

      setResult(response.text || "Sem análise disponível.");
    } catch (error) {
      console.error("Analysis Error:", error);
      setResult("Erro ao analisar a imagem. Verifique sua conexão e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!imageFile || !editPrompt) return;
    setIsLoading(true);
    setResultImage(null);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-2.5-flash-image';
      
      const imagePart = await fileToGenerativePart(imageFile);
      
      const response = await ai.models.generateContent({
        model,
        contents: {
            parts: [
                imagePart,
                { text: editPrompt }
            ]
        }
      });

      // Find image part in response safely
      let foundImage = null;
      if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
              if (part.inlineData) {
                  foundImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                  break;
              }
          }
      }
      
      setResultImage(foundImage);
      if (!foundImage) {
          setResult(response.text || "A IA processou o pedido mas não retornou uma imagem editada. Tente um prompt diferente.");
      }

    } catch (error) {
      console.error("Edit Error:", error);
      setResult("Erro ao editar a imagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-studio" className="py-20 bg-gradient-to-b from-gray-900 to-brand-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-brand-orange text-sm font-bold mb-4 border border-brand-orange/30">
                <Sparkles size={16} />
                MORAES AI
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Estúdio Inteligente</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
                Utilize nossa Inteligência Artificial para tirar dúvidas, analisar projetos ou visualizar edições em seus produtos de acrílico.
            </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                <button 
                    onClick={() => setActiveTab('chat')}
                    className={`flex-1 py-4 font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-colors ${activeTab === 'chat' ? 'bg-brand-blue text-white' : 'hover:bg-gray-50'}`}
                >
                    <Bot size={20} /> Chat Assistente
                </button>
                <button 
                    onClick={() => setActiveTab('analyze')}
                    className={`flex-1 py-4 font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-colors ${activeTab === 'analyze' ? 'bg-brand-blue text-white' : 'hover:bg-gray-50'}`}
                >
                    <Search size={20} /> Analisar Peça
                </button>
                <button 
                    onClick={() => setActiveTab('edit')}
                    className={`flex-1 py-4 font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-colors ${activeTab === 'edit' ? 'bg-brand-blue text-white' : 'hover:bg-gray-50'}`}
                >
                    <ImageIcon size={20} /> Editar Imagem
                </button>
            </div>

            {/* Content */}
            <div className="p-6 min-h-[400px]">
                
                {/* CHAT TAB */}
                {activeTab === 'chat' && (
                    <div className="flex flex-col h-[400px]">
                        <div className="flex-1 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg space-y-4">
                            {chatHistory.length === 0 && (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                                    <Bot size={48} className="text-brand-blue opacity-50" />
                                    <p className="text-center">
                                        Olá! Sou o assistente virtual da Moraes Acrílicos.<br/>
                                        Pergunte sobre domos, cortes, materiais ou preços.
                                    </p>
                                </div>
                            )}
                            {chatHistory.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-brand-blue text-white rounded-tr-none' : 'bg-white border border-gray-200 rounded-tl-none shadow-sm'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2">
                                        <Loader2 className="animate-spin text-brand-blue" size={16} /> Digitando...
                                    </div>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleChat} className="flex gap-2">
                            <input 
                                type="text" 
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder="Digite sua dúvida aqui..."
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                            />
                            <button type="submit" disabled={isLoading} className="bg-brand-orange text-white p-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50">
                                <Send size={24} />
                            </button>
                        </form>
                    </div>
                )}

                {/* ANALYZE TAB */}
                {activeTab === 'analyze' && (
                    <div className="flex flex-col items-center h-full">
                        {!selectedImage ? (
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-brand-blue hover:bg-blue-50 transition-all"
                            >
                                <Upload size={48} className="text-gray-400 mb-2" />
                                <p className="text-gray-500 font-medium">Clique para fazer upload de uma foto de peça ou projeto</p>
                                <p className="text-xs text-gray-400 mt-1">JPG, PNG (Max 5MB)</p>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row gap-6 w-full h-full">
                                <div className="w-full md:w-1/2 relative bg-gray-100 rounded-lg flex items-center justify-center">
                                    <img src={selectedImage} alt="Upload" className="max-w-full max-h-64 object-contain" />
                                    <button 
                                        onClick={() => {setSelectedImage(null); setImageFile(null); setResult(null);}}
                                        className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:text-red-500 text-gray-600"
                                        title="Remover imagem"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col">
                                    {!result ? (
                                        <button 
                                            onClick={handleAnalyze} 
                                            disabled={isLoading}
                                            className="w-full bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 h-12"
                                        >
                                            {isLoading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
                                            {isLoading ? "Analisando..." : "Analisar com IA"}
                                        </button>
                                    ) : (
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-full max-h-64 overflow-y-auto text-sm text-gray-700 animate-fade-in">
                                            <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2"><Sparkles size={16}/> Análise Técnica:</h4>
                                            <p className="whitespace-pre-wrap">{result}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                    </div>
                )}

                {/* EDIT TAB */}
                {activeTab === 'edit' && (
                    <div className="flex flex-col h-full">
                         <div className="flex flex-col md:flex-row gap-6 w-full mb-4">
                             <div className="w-full md:w-1/2">
                                 <label className="block text-sm font-bold text-gray-700 mb-2">1. Imagem Original</label>
                                 {!selectedImage ? (
                                     <div 
                                        onClick={() => fileInputRef.current?.click()}
                                        className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-brand-blue hover:bg-blue-50 transition-all"
                                     >
                                         <Upload size={32} className="text-gray-400 mb-1" />
                                         <p className="text-gray-500 text-sm">Upload Imagem</p>
                                     </div>
                                 ) : (
                                     <div className="relative bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                                        <img src={selectedImage} alt="Original" className="max-w-full max-h-full object-contain" />
                                        <button 
                                            onClick={() => {setSelectedImage(null); setImageFile(null); setResultImage(null); setResult(null);}}
                                            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:text-red-500 text-gray-600"
                                        >
                                            <X size={14} />
                                        </button>
                                     </div>
                                 )}
                             </div>
                             <div className="w-full md:w-1/2">
                                 <label className="block text-sm font-bold text-gray-700 mb-2">2. Resultado (Gemini 2.5)</label>
                                 <div className="w-full h-48 border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden relative">
                                     {isLoading ? (
                                         <div className="text-center">
                                             <Loader2 className="animate-spin text-brand-blue mx-auto mb-2" size={32} />
                                             <p className="text-xs text-gray-500">Processando imagem...</p>
                                         </div>
                                     ) : resultImage ? (
                                         <img src={resultImage} alt="Editada" className="w-full h-full object-contain animate-fade-in" />
                                     ) : (
                                         <p className="text-gray-400 text-sm text-center px-4">{result || "A imagem gerada aparecerá aqui"}</p>
                                     )}
                                 </div>
                             </div>
                         </div>
                         
                         <div className="mt-auto pt-4 border-t border-gray-100">
                             <label className="block text-sm font-bold text-gray-700 mb-2">3. O que você quer mudar?</label>
                             <div className="flex gap-2">
                                 <input 
                                     type="text" 
                                     value={editPrompt}
                                     onChange={(e) => setEditPrompt(e.target.value)}
                                     placeholder="Ex: Troque o fundo por um escritório moderno"
                                     className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                                 />
                                 <button 
                                    onClick={handleEdit}
                                    disabled={isLoading || !selectedImage || !editPrompt}
                                    className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors disabled:opacity-50 flex items-center gap-2"
                                 >
                                     <Sparkles size={20} /> Gerar
                                 </button>
                             </div>
                         </div>
                         <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                    </div>
                )}

            </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;