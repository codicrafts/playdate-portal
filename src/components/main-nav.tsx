"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Users,
  Plane,
  User,
  Search,
  Heart,
  Menu,
} from "lucide-react";

const navigation = [
  { name: "首页", href: "/", icon: MapPin },
  { name: "遛娃地点", href: "/places", icon: MapPin },
  { name: "亲子活动", href: "/activities", icon: Calendar },
  { name: "社区", href: "/community", icon: Users },
  { name: "旅游带娃", href: "/travel", icon: Plane },
  { name: "用户中心", href: "/profile", icon: User },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-pink-500" />
          <span className="text-xl font-bold text-primary">遛个娃</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Search className="h-4 w-4 mr-2" />
            搜索
          </Button>

          {/* Mobile menu button */}
          <Button variant="outline" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
