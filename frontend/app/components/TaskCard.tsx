import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Clock, User } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar?: string;
  createdAt: string;
  likes: number;
  comments: number;
  tags: string[];
  points: number;
  isLiked?: boolean;
}

export const TaskCard = ({
  title,
  content,
  author,
  authorAvatar,
  createdAt,
  likes,
  comments,
  tags,
  points,
  isLiked = false,
}: TaskCardProps) => {
  return (
    <Card className="hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={authorAvatar} alt={author} />
              <AvatarFallback>
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{title}</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{author}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{createdAt}</span>
                </div>
              </div>
            </div>
          </div>
          <Badge className="bg-success/10 text-success border-success/20">
            +{points}P
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </CardDescription>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-xs ${isLiked ? 'text-destructive' : 'text-muted-foreground'}`}
            >
              <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
              <MessageCircle className="w-4 h-4 mr-1" />
              {comments}
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
              <Share2 className="w-4 h-4 mr-1" />
              共有
            </Button>
          </div>
          <Button variant="outline" size="sm">
            コメントする
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};