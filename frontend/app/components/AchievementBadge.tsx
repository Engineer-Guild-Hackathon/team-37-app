import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, CheckCircle } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon?: string;
  rarity: "bronze" | "silver" | "gold" | "platinum";
  date?: string;
  isEarned?: boolean;
}

export const AchievementBadge = ({
  title,
  description,
  icon,
  rarity,
  date,
  isEarned = false,
}: AchievementBadgeProps) => {
  const getRarityStyle = (rarity: string) => {
    switch (rarity) {
      case "bronze":
        return "from-amber-400 to-amber-600";
      case "silver":
        return "from-gray-300 to-gray-500";
      case "gold":
        return "from-yellow-400 to-yellow-600";
      case "platinum":
        return "from-purple-400 to-purple-600";
      default:
        return "from-gray-300 to-gray-500";
    }
  };

  const getRarityBadgeStyle = (rarity: string) => {
    switch (rarity) {
      case "bronze":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "silver":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "platinum":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
      isEarned ? 'shadow-card bg-gradient-card' : 'opacity-60 grayscale bg-muted/50'
    }`}>
      {isEarned && (
        <div className="absolute top-2 right-2">
          <CheckCircle className="w-5 h-5 text-success" />
        </div>
      )}
      
      <CardContent className="p-6 text-center space-y-4">
        {/* Badge Icon */}
        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${getRarityStyle(rarity)} 
          flex items-center justify-center shadow-lg ${isEarned ? 'animate-pulse-glow' : ''}`}>
          {icon ? (
            <span className="text-2xl">{icon}</span>
          ) : (
            <Award className="w-8 h-8 text-white" />
          )}
        </div>

        {/* Badge Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          
          <div className="flex items-center justify-center space-x-2">
            <Badge className={`text-xs ${getRarityBadgeStyle(rarity)}`}>
              <Star className="w-3 h-3 mr-1" />
              {rarity.toUpperCase()}
            </Badge>
            {isEarned && date && (
              <Badge variant="outline" className="text-xs">
                {date}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};