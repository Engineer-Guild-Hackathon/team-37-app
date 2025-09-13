import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DAOCard } from "@/components/DAOCard";
import { TaskCard } from "@/components/TaskCard";
import { AchievementBadge } from "@/components/AchievementBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockDAOs, mockTasks, mockMaterials, mockAchievements } from "@/data/mockData";
import { BookOpen, Users, Award, TrendingUp, Plus, Filter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <Tabs defaultValue="daos" className="space-y-8">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="daos">DAO</TabsTrigger>
              <TabsTrigger value="tasks">課題</TabsTrigger>
              <TabsTrigger value="materials">教材</TabsTrigger>
              <TabsTrigger value="achievements">実績</TabsTrigger>
            </TabsList>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                フィルター
              </Button>
              <Button variant="hero" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                新規作成
              </Button>
            </div>
          </div>

          {/* DAO Tab */}
          <TabsContent value="daos" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">学習DAOを探す</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                興味のある分野のDAOに参加して、世界中の仲間と一緒に学びましょう。
                貢献度に応じてポイントを獲得し、修了証（NFT）を目指しましょう。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDAOs.map((dao) => (
                <DAOCard key={dao.id} {...dao} />
              ))}
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">最新の課題投稿</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                メンバーが投稿した課題や解説をチェックして、コメントやフィードバックを送りましょう。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockTasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">学習教材</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                数学DAOの教材一覧です。動画、PDF、インタラクティブコンテンツで学習を進めましょう。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockMaterials.map((material) => (
                <Card key={material.id} className="hover:shadow-card transition-all duration-300 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{material.title}</CardTitle>
                      <Badge className="text-xs">
                        {material.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{material.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span>{material.type}</span>
                      </div>
                      <span className="text-muted-foreground">
                        {'duration' in material ? material.duration : `${material.pages}ページ`}
                      </span>
                    </div>
                    
                    <Button variant="hero" className="w-full" size="sm">
                      学習開始
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">実績・修了証</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                学習の成果として獲得できる実績バッジと修了証（NFT）の一覧です。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockAchievements.map((achievement, index) => (
                <AchievementBadge key={index} {...achievement} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="font-bold text-xl">LearningDAO</span>
              </div>
              <p className="text-sm text-muted-foreground">
                世界中の学習者をつなぐ、次世代の学習プラットフォーム
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">プラットフォーム</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>DAO一覧</li>
                <li>教材ライブラリ</li>
                <li>コミュニティ</li>
                <li>修了証（NFT）</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">サポート</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>ヘルプセンター</li>
                <li>利用規約</li>
                <li>プライバシーポリシー</li>
                <li>お問い合わせ</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">統計</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">アクティブDAO</span>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">学習者数</span>
                  <span className="font-semibold">2,450+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">修了証発行</span>
                  <span className="font-semibold">890</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 LearningDAO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
