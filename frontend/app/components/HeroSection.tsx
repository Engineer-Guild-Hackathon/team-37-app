import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                🚀 世界初の学習DAO プラットフォーム
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                学び合い、
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  成長しよう
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                世界中の仲間と一緒に学び、貢献し、NFT修了証を獲得しよう。
                数学から資格学習まで、あなたの興味に合わせたDAOで能動的な学習を始めませんか？
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="animate-pulse-glow">
                今すぐ始める
              </Button>
              <Button variant="outline" size="lg">
                詳しく見る
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">2,450+</div>
                <div className="text-sm text-muted-foreground">学習者</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mb-2 mx-auto">
                  <BookOpen className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-muted-foreground">アクティブDAO</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">890</div>
                <div className="text-sm text-muted-foreground">修了証発行</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mb-2 mx-auto">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">満足度</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-card border-0 bg-gradient-card">
              <img 
                src={heroImage} 
                alt="学習DAOプラットフォーム" 
                className="w-full h-auto object-cover animate-float"
              />
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-success p-3 rounded-full shadow-success animate-pulse-glow">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-primary p-3 rounded-full shadow-glow animate-float">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};