
import { Shield, Zap, Fuel, Users, Navigation, Volume2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "5-Star Safety",
    description: "India's Safest SUV with Global NCAP 5-Star rating and advanced safety features.",
    color: "text-green-400"
  },
  {
    icon: Zap,
    title: "Powerful Engine",
    description: "1.2L Turbo-Petrol engine delivering 120 PS power and 170 Nm torque.",
    color: "text-yellow-400"
  },
  {
    icon: Fuel,
    title: "Fuel Efficient",
    description: "Best-in-class mileage of 17.57 kmpl with advanced engine technology.",
    color: "text-blue-400"
  },
  {
    icon: Users,
    title: "Spacious Interior",
    description: "Premium interiors with ample space for comfortable family journeys.",
    color: "text-purple-400"
  },
  {
    icon: Navigation,
    title: "Smart Connectivity",
    description: "Connected car features with touchscreen infotainment system.",
    color: "text-orange-400"
  },
  {
    icon: Volume2,
    title: "Premium Audio",
    description: "Harman audio system for an immersive sound experience.",
    color: "text-red-400"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-400">Nexon ICE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the perfect blend of performance, safety, and technology in India's most awarded compact SUV.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 ${feature.color} bg-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
