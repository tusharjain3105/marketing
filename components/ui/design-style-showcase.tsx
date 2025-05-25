"use client";

import {
  useDesignStyle,
  designStyleConfig,
} from "@/providers/design-style-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Heart, Palette, Briefcase } from "lucide-react";

export function DesignStyleShowcase() {
  const { designStyle, setDesignStyle } = useDesignStyle();

  const getStyleIcon = (style: string) => {
    switch (style) {
      case "dashboard":
        return <Sparkles className="w-4 h-4" />;
      case "admin":
        return <Zap className="w-4 h-4" />;
      case "minimal":
        return <Heart className="w-4 h-4" />;
      case "neon":
        return <Palette className="w-4 h-4" />;
      case "corporate":
        return <Briefcase className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 font-bold text-foreground text-2xl">
          Design Style Showcase
        </h2>
        <p className="text-foreground-secondary">
          Try different design styles to see how they transform the interface
        </p>
      </div>

      {/* Style Selector */}
      <div className="flex flex-wrap justify-center gap-3">
        {designStyleConfig.map((style) => (
          <Button
            key={style.name}
            variant={designStyle === style.name ? "default" : "outline"}
            size="sm"
            onClick={() => setDesignStyle(style.name)}
            className="flex items-center gap-2"
          >
            {getStyleIcon(style.name)}
            {style.label}
          </Button>
        ))}
      </div>

      {/* Sample Cards */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Sample Card
            </CardTitle>
            <CardDescription>
              This card demonstrates the current design style
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground-secondary text-sm">
                  Status
                </span>
                <Badge variant="outline">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-secondary text-sm">
                  Progress
                </span>
                <span className="font-medium text-foreground">75%</span>
              </div>
              <div className="bg-soft rounded-full w-full h-2">
                <div className="bg-primary rounded-full w-3/4 h-2"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass hover:glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Interactive Card
            </CardTitle>
            <CardDescription>
              Hover over this card to see the glow effect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full glow">Try Me!</Button>
          </CardContent>
        </Card>

        <Card className="glass-strong">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Strong Glass
            </CardTitle>
            <CardDescription>
              This card uses the glass-strong effect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="bg-primary/10 p-3 rounded-lg">
                <p className="font-medium text-primary text-sm">
                  Design Style: {designStyle}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Style Info */}
      <div className="p-6 rounded-xl glass">
        <h3 className="mb-3 font-semibold text-foreground text-lg">
          Current Style:{" "}
          {designStyleConfig.find((s) => s.name === designStyle)?.label}
        </h3>
        <p className="mb-4 text-foreground-secondary">
          {designStyleConfig.find((s) => s.name === designStyle)?.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {designStyle === "dashboard" && (
            <>
              <Badge variant="outline">Glass Morphism</Badge>
              <Badge variant="outline">Gradients</Badge>
              <Badge variant="outline">Animations</Badge>
            </>
          )}
          {designStyle === "admin" && (
            <>
              <Badge variant="outline">Dark Theme</Badge>
              <Badge variant="outline">Solid Backgrounds</Badge>
              <Badge variant="outline">Professional</Badge>
            </>
          )}
          {designStyle === "minimal" && (
            <>
              <Badge variant="outline">Clean</Badge>
              <Badge variant="outline">Whitespace</Badge>
              <Badge variant="outline">Simple</Badge>
            </>
          )}
          {designStyle === "neon" && (
            <>
              <Badge variant="outline">Cyberpunk</Badge>
              <Badge variant="outline">Neon Colors</Badge>
              <Badge variant="outline">Futuristic</Badge>
            </>
          )}
          {designStyle === "corporate" && (
            <>
              <Badge variant="outline">Professional</Badge>
              <Badge variant="outline">Business</Badge>
              <Badge variant="outline">Subtle</Badge>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
