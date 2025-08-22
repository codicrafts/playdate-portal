import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold">遛个娃</span>
            </div>
            <p className="text-sm text-muted-foreground">
              让带娃变得轻松有趣，为家长们打造温暖的社交圈子
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">遛娃服务</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/places"
                  className="text-muted-foreground hover:text-primary"
                >
                  遛娃地点
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-muted-foreground hover:text-primary"
                >
                  亲子活动
                </Link>
              </li>
              <li>
                <Link
                  href="/travel"
                  className="text-muted-foreground hover:text-primary"
                >
                  旅游带娃
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">社区</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/community"
                  className="text-muted-foreground hover:text-primary"
                >
                  讨论区
                </Link>
              </li>
              <li>
                <Link
                  href="/community/experts"
                  className="text-muted-foreground hover:text-primary"
                >
                  达人推荐
                </Link>
              </li>
              <li>
                <Link
                  href="/community/ranking"
                  className="text-muted-foreground hover:text-primary"
                >
                  社区排行
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">帮助中心</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  联系我们
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 遛娃社区. 让带娃变得更美好</p>
        </div>
      </div>
    </footer>
  );
}
