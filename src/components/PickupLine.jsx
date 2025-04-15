import { Card, CardContent, CardTitle } from "@/components/ui/card";

const PickupLine = () => {
  return (
    <Card className="bg-[#1f1b2e] border border-purple-700 text-purple-100 rounded-2xl shadow-lg">
      <CardTitle className="text-3xl text-center font-semibold text-purple-100 font-serif tracking-wide">
        Quote
      </CardTitle>
      <CardContent className="space-y-3 text-sm leading-relaxed">
        <p className="text-lg text-justify text-purple-100 font-serif font-light leading-relaxed">
          <span role="img" aria-label="dreams" className="mr-2">
            💭
          </span>
          "Together, we build dreams 🌟, support each other’s growth 🌱, and
          navigate life's adventures 🌍 with love ❤️ and devotion. Every step is
          better when we walk it hand in hand 🤝."
        </p>
      </CardContent>
    </Card>
  );
};

export default PickupLine;
