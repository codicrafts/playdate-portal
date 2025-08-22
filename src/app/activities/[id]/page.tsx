"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Heart,
  Share2,
  ArrowLeft,
  Star,
  User,
  Phone,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Gift,
  Camera,
  Target,
} from "lucide-react";

// 模拟活动详细数据
const activityDetails = {
  1: {
    id: 1,
    title: "春日亲子野餐会",
    description:
      "在樱花盛开的公园里，和孩子一起享受美好的野餐时光。活动将包含户外游戏、亲子互动、自然观察等多个环节，让家长和孩子在轻松愉快的氛围中增进感情，同时让孩子亲近大自然，培养环保意识。",
    date: "2024-03-15",
    time: "10:00-15:00",
    endDate: "2024-03-15",
    location: "樱花公园中心草坪",
    locationDetail: "地铁2号线樱花公园站A出口步行5分钟",
    organizer: {
      name: "阳光亲子会",
      avatar: "🌸",
      description: "专注亲子活动策划5年，累计组织活动200+场",
      rating: 4.9,
      followers: 1250,
      activitiesCount: 45,
    },
    ageGroup: "3-12岁",
    participants: 24,
    maxParticipants: 30,
    price: 0,
    originalPrice: 0,
    category: "户外运动",
    status: "registration",
    statusName: "报名中",
    difficulty: "简单",
    weatherDependent: true,
    tags: ["免费", "户外", "野餐", "亲子互动"],

    // 活动亮点
    highlights: [
      "专业老师带队指导",
      "提供野餐垫和基础用具",
      "亲子游戏环节设计",
      "樱花主题拍照服务",
      "自然观察小课堂",
      "环保知识分享",
    ],

    // 活动流程
    schedule: [
      {
        time: "10:00-10:30",
        activity: "签到集合",
        description: "活动签到，发放物资，认识小伙伴",
      },
      {
        time: "10:30-11:30",
        activity: "亲子游戏",
        description: "破冰游戏，家庭团队建设活动",
      },
      {
        time: "11:30-12:30",
        activity: "野餐时光",
        description: "自由野餐，交流分享（请自带食物）",
      },
      {
        time: "12:30-13:30",
        activity: "自然探索",
        description: "观察樱花，收集自然素材，环保小课堂",
      },
      {
        time: "13:30-14:30",
        activity: "亲子手工",
        description: "利用自然素材制作春日纪念品",
      },
      {
        time: "14:30-15:00",
        activity: "合影留念",
        description: "集体合影，分享活动感受，安全返回",
      },
    ],

    // 费用说明
    feeDetails: {
      included: [
        "专业活动老师费用",
        "野餐垫和基础用具",
        "手工制作材料",
        "活动保险",
        "摄影服务",
      ],
      excluded: ["往返交通费", "野餐食物（请自备）", "个人消费"],
    },

    // 注意事项
    notes: [
      "请根据天气情况穿着合适的户外服装",
      "建议携带防晒用品和饮用水",
      "活动受天气影响，如遇恶劣天气将提前通知改期",
      "请自备野餐食物，倡导环保包装",
      "活动期间请看护好孩子，注意安全",
      "请准时参加，避免影响活动进程",
    ],

    // 退改政策
    refundPolicy: [
      "活动开始前48小时可免费取消",
      "活动开始前24-48小时取消收取20%费用",
      "活动开始前24小时内取消不予退款",
      "因天气原因取消活动将全额退款",
    ],

    // 用户评价
    reviews: [
      {
        id: 1,
        user: "快乐妈妈",
        avatar: "👩‍💼",
        rating: 5,
        date: "2024-02-20",
        content:
          "非常棒的活动！孩子玩得很开心，认识了很多新朋友。老师们很专业，活动安排得很合理。樱花真的很美，拍了很多好看的照片。",
        images: 3,
        helpful: 15,
        tags: ["活动丰富", "老师专业", "拍照好看"],
      },
      {
        id: 2,
        user: "户外爸爸",
        avatar: "👨‍💻",
        rating: 4,
        date: "2024-02-18",
        content:
          "整体体验不错，孩子很喜欢户外活动。手工环节设计得很好，既环保又有意义。就是人稍微多了点，希望能控制一下人数。",
        images: 1,
        helpful: 8,
        tags: ["手工有趣", "环保理念", "人数稍多"],
      },
      {
        id: 3,
        user: "自然妈妈",
        avatar: "🌿",
        rating: 5,
        date: "2024-02-15",
        content:
          "这个活动太棒了！孩子学到了很多自然知识，老师的讲解很生动。野餐的氛围也很好，家长们都很友好。强烈推荐！",
        images: 2,
        helpful: 22,
        tags: ["知识丰富", "氛围好", "值得推荐"],
      },
    ],

    // 相关活动
    relatedActivities: [
      { id: 2, title: "小小科学家实验室", price: 68, rating: 4.9 },
      { id: 4, title: "森林探险寻宝", price: 88, rating: 4.6 },
      { id: 5, title: "创意手工坊", price: 58, rating: 4.5 },
    ],
  },
};

export default function ActivityDetailPage() {
  const params = useParams();
  const activityId = parseInt(params.id as string);
  const activity = activityDetails[activityId as keyof typeof activityDetails];

  const [isFavorite, setIsFavorite] = useState(false);
  const [participantCount, setParticipantCount] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  if (!activity) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">活动不存在</h2>
          <p className="text-gray-500 mb-4">
            抱歉，您访问的活动信息不存在或已被删除。
          </p>
          <Button asChild>
            <Link href="/activities">返回活动列表</Link>
          </Button>
        </div>
      </div>
    );
  }

  const remainingSpots = activity.maxParticipants - activity.participants;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* 返回按钮 */}
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/activities">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回活动列表
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧主要内容 */}
        <div className="lg:col-span-2">
          {/* 活动标题和基本信息 */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">{activity.category}</Badge>
                  <Badge className="bg-green-100 text-green-800">
                    {activity.statusName}
                  </Badge>
                  <Badge variant="outline">{activity.difficulty}</Badge>
                  {activity.weatherDependent && (
                    <Badge variant="outline">🌤️ 受天气影响</Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {activity.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">
                      {activity.organizer.avatar}
                    </span>
                    <span>by {activity.organizer.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{activity.organizer.rating}</span>
                  </div>
                  <span>适合 {activity.ageGroup}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isFavorite ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {activity.description}
            </p>

            {/* 关键信息卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">{activity.date}</div>
                      <div className="text-sm text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">{activity.location}</div>
                      <div className="text-sm text-gray-500">
                        {activity.locationDetail}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">
                        {activity.participants}/{activity.maxParticipants}人
                      </div>
                      <div className="text-sm text-gray-500">
                        还有{remainingSpots}个名额
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 标签页切换 */}
          <div className="mb-6">
            <div className="border-b">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: "details", name: "活动详情" },
                  { id: "schedule", name: "活动流程" },
                  { id: "reviews", name: "用户评价" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 标签页内容 */}
          {activeTab === "details" && (
            <div className="space-y-6">
              {/* 活动亮点 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">活动亮点</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activity.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-green-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 费用说明 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">费用说明</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-green-600">
                        费用包含
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-1">
                        {activity.feeDetails.included.map((item, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-orange-600">
                        费用不含
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-1">
                        {activity.feeDetails.excluded.map((item, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <AlertCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 注意事项 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">注意事项</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <ul className="space-y-2">
                    {activity.notes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-600 mr-2 mt-0.5">⚠️</span>
                        <span className="text-gray-700 text-sm">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 退改政策 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">退改政策</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {activity.refundPolicy.map((policy, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="text-gray-400 mr-2 mt-0.5">•</span>
                        <span>{policy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">活动流程</h3>
              <div className="space-y-4">
                {activity.schedule.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex">
                        <div className="flex-shrink-0 w-20">
                          <span className="text-sm font-medium text-primary">
                            {item.time}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{item.activity}</h4>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                用户评价 ({activity.reviews.length})
              </h3>
              <div className="space-y-4">
                {activity.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{review.avatar}</span>
                          <div>
                            <div className="font-medium">{review.user}</div>
                            <div className="flex items-center text-sm text-gray-500">
                              <div className="flex items-center mr-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-700 mb-3">{review.content}</p>
                      {review.tags && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {review.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          {review.images > 0 && (
                            <div className="flex items-center mr-4">
                              <Camera className="h-4 w-4 mr-1" />
                              <span>{review.images}张图片</span>
                            </div>
                          )}
                          <span>{review.helpful}人觉得有用</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          有用
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 右侧报名区域 */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* 报名卡片 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>立即报名</span>
                  {activity.price === 0 ? (
                    <span className="text-2xl font-bold text-green-600">
                      免费
                    </span>
                  ) : (
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">
                        ￥{activity.price}
                      </span>
                      {activity.originalPrice > activity.price && (
                        <div className="text-sm text-gray-500 line-through">
                          ￥{activity.originalPrice}
                        </div>
                      )}
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    参与人数
                  </label>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        participantCount > 1 &&
                        setParticipantCount(participantCount - 1)
                      }
                      disabled={participantCount <= 1}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={participantCount}
                      onChange={(e) =>
                        setParticipantCount(
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      }
                      className="w-20 text-center"
                      min="1"
                      max={remainingSpots}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        participantCount < remainingSpots &&
                        setParticipantCount(participantCount + 1)
                      }
                      disabled={participantCount >= remainingSpots}
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    剩余名额：{remainingSpots}个
                  </p>
                </div>

                {activity.price > 0 && (
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>单价</span>
                      <span>￥{activity.price}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>人数</span>
                      <span>{participantCount}人</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg border-t pt-2">
                      <span>总计</span>
                      <span>￥{activity.price * participantCount}</span>
                    </div>
                  </div>
                )}

                <Button
                  size="lg"
                  className="w-full"
                  disabled={remainingSpots === 0}
                >
                  {remainingSpots === 0 ? "已满员" : "立即报名"}
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  点击报名即表示同意活动相关条款
                </div>
              </CardContent>
            </Card>

            {/* 组织者信息 */}
            <Card>
              <CardHeader>
                <CardTitle>活动组织者</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <span className="text-3xl">{activity.organizer.avatar}</span>
                  <div className="flex-1">
                    <h4 className="font-medium">{activity.organizer.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {activity.organizer.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span>{activity.organizer.rating}</span>
                      </div>
                      <span>{activity.organizer.followers}关注</span>
                      <span>{activity.organizer.activitiesCount}活动</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    咨询
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <User className="h-4 w-4 mr-2" />
                    关注
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 相关推荐 */}
            <Card>
              <CardHeader>
                <CardTitle>相关推荐</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activity.relatedActivities.map((related) => (
                    <Link key={related.id} href={`/activities/${related.id}`}>
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex-1">
                          <h5 className="text-sm font-medium line-clamp-1">
                            {related.title}
                          </h5>
                          <div className="flex items-center text-xs text-gray-500">
                            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                            <span>{related.rating}</span>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-primary">
                          ￥{related.price}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
