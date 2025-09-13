import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, BookOpen, Trophy, Clock } from "lucide-react";

interface DAOCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  members: number;
  materials: number;
  completionRate: number;
  category: string;
  difficulty: "初級" | "中級" | "上級";
  isJoined?: boolean;
}

export const DAOCard = ({
  name,
  description,
  icon,
  members,
  materials,
  completionRate,
  category,
  difficulty,
  isJoined = false,
}: DAOCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "初級": return "bg-success/10 text-success border-success/20";
      case "中級": return "bg-primary/10 text-primary border-primary/20";
      case "上級": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-2xl">{icon}</span>
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {name}
              </CardTitle>
              <Badge className={`text-xs ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </Badge>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">修了率</span>
            <span className="font-semibold">{completionRate}%</span>
          </div>
          <Progress value={completionRate} className="h-2" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Users className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-semibold">{members.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">メンバー</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-semibold">{materials}</div>
            <div className="text-xs text-muted-foreground">教材</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Trophy className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-semibold">{Math.floor(members * completionRate / 100)}</div>
            <div className="text-xs text-muted-foreground">修了者</div>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant={isJoined ? "success" : "hero"} 
          className="w-full"
          size="sm"
        >
          {isJoined ? (
            <>
              <Clock className="w-4 h-4 mr-2" />
              学習を続ける
            </>
          ) : (
            "参加する"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};