import React from "react";
import { ShoppingBag, Star, TrendingUp, Filter, Search, Tag } from "lucide-react";

export const MarketplacePage: React.FC = () => {
  const products = [
    { name: "Exclusive Maldives Villa", price: "$1,200", commission: "15%", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=60", category: "Luxury", rating: 4.9 },
    { name: "Santorini Group Tour", price: "$450", commission: "12%", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop&q=60", category: "Culture", rating: 4.8 },
    { name: "Tokyo Food Explorer", price: "$180", commission: "20%", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60", category: "Food & Wine", rating: 4.7 },
    { name: "Swiss Alps Adventure", price: "$850", commission: "10%", image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&auto=format&fit=crop&q=60", category: "Adventure", rating: 4.9 },
  ];

  return (
    <div className="p-6 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Marketplace</h1>
          <p className="text-slate-400">Discover and book high-commission travel products</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-slate-900 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:ring-2 focus:ring-coral-500/50 focus:border-coral-500/50 outline-none transition-all w-64"
            />
          </div>
          <button className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.name} className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden group hover:border-coral-500/20 transition-all">
            <div className="relative h-48">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md tracking-wider">{product.category}</span>
                <span className="bg-coral-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md tracking-wider">{product.commission} Comm</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-amber-400 text-xs font-bold">
                  <Star className="w-3 h-3 fill-current mr-1" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-white font-bold">{product.price}</span>
              </div>
              <h3 className="text-white font-semibold mb-4 leading-tight">{product.name}</h3>
              <button className="w-full bg-slate-800 hover:bg-coral-500 text-white font-semibold py-2 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-coral-500/20 flex items-center justify-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Book Package</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden group">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-32 h-32" />
          </div>
          <div className="relative z-10 space-y-2">
            <h2 className="text-xl font-bold">Trending Destinations</h2>
            <p className="text-indigo-100 text-sm max-w-xs">See where clients are booking most this season and optimize your marketing campaigns.</p>
            <button className="mt-4 bg-white text-indigo-600 font-bold px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition-colors">View Analytics</button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-coral-500 to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden group">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform">
            <Tag className="w-32 h-32" />
          </div>
          <div className="relative z-10 space-y-2">
            <h2 className="text-xl font-bold">Limited Time Offers</h2>
            <p className="text-coral-100 text-sm max-w-xs">Boost your earnings with double commission on selected Santorini packages until Friday.</p>
            <button className="mt-4 bg-white text-coral-600 font-bold px-4 py-2 rounded-lg text-sm hover:bg-coral-50 transition-colors">Claim Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};
