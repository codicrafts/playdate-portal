"use client";

import { useState } from "react";
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
  Search,
  Filter,
  Heart,
  Star,
} from "lucide-react";

// 活动分类
const categories = [
  { id: "all", name: "全部活动", count: 156 },
  { id: "handcraft", name: "手工制作", count: 42 },
  { id: "outdoor", name: "户外运动", count: 38 },
  { id: "culture", name: "文化艺术", count: 29 },
  { id: "science", name: "科普教育", count: 24 },
  { id: "cooking", name: "烘焙美食", count: 16 },
  { id: "sports", name: "体感运动", count: 7 },
];

// 年龄组
const ageGroups = [
  { id: "all", name: "全年龄", count: 156 },
  { id: "baby", name: "幼儿组(1-3岁)", count: 23 },
  { id: "toddler", name: "小童组(3-6岁)", count: 64 },
  { id: "child", name: "大童组(6-12岁)", count: 48 },
  { id: "teen", name: "青少年(12+岁)", count: 21 },
];

// 活动状态
const statusFilters = [
  { id: "all", name: "全部状态" },
  { id: "registration", name: "报名中" },
  { id: "upcoming", name: "即将开始" },
  { id: "ongoing", name: "进行中" },
  { id: "full", name: "已满员" },
];

// 模拟活动数据
const activities = [
  {
    id: 1,
    title: "春日亲子野餐会",
    description:
      "在樱花盛开的公园里，和孩子一起享受美好的野餐时光，包含户外游戏、亲子互动等环节",
    date: "2024-03-15",
    time: "10:00-15:00",
    endDate: "2024-03-15",
    location: "樱花公园中心草坪",
    organizer: "阳光亲子会",
    organizerAvatar: "🌸",
    ageGroup: "toddler",
    ageGroupName: "3-12岁",
    participants: 24,
    maxParticipants: 30,
    price: 0,
    originalPrice: 0,
    category: "outdoor",
    categoryName: "户外运动",
    status: "registration",
    statusName: "报名中",
    rating: 4.8,
    reviewCount: 15,
    tags: ["免费", "户外", "野餐", "亲子互动"],
    highlights: ["专业老师带队", "提供野餐垫", "亲子游戏环节", "樱花主题拍照"],
    difficulty: "简单",
    weatherDependent: true,
    isFeatured: true,
    isHot: true,
  },
  {
    id: 2,
    title: "小小科学家实验室",
    description:
      "通过有趣的科学实验，激发孩子对科学的兴趣和探索欲，包含火山爆发、彩虹实验等",
    date: "2024-03-18",
    time: "14:00-16:00",
    endDate: "2024-03-18",
    location: "科技馆3楼实验室",
    organizer: "科学小达人",
    organizerAvatar: "🔬",
    ageGroup: "child",
    ageGroupName: "5-10岁",
    participants: 18,
    maxParticipants: 20,
    price: 68,
    originalPrice: 88,
    category: "science",
    categoryName: "科普教育",
    status: "upcoming",
    statusName: "即将满员",
    rating: 4.9,
    reviewCount: 32,
    tags: ["科学", "实验", "小班教学", "材料包"],
    highlights: [
      "资深科学老师",
      "实验材料全包",
      "小班精品教学",
      "作品可带回家",
    ],
    difficulty: "中等",
    weatherDependent: false,
    isFeatured: true,
    isHot: true,
  },
  {
    id: 3,
    title: "亲子烘焙课堂",
    description:
      "和孩子一起制作美味的小点心，享受温馨的亲子时光，学习基础烘焙技巧",
    date: "2024-03-20",
    time: "15:00-17:00",
    endDate: "2024-03-20",
    location: "甜蜜烘焙工作室",
    organizer: "甜蜜烘焙师",
    organizerAvatar: "👩‍🍳",
    ageGroup: "toddler",
    ageGroupName: "4-12岁",
    participants: 12,
    maxParticipants: 16,
    price: 128,
    originalPrice: 158,
    category: "cooking",
    categoryName: "烘焙美食",
    status: "registration",
    statusName: "报名中",
    rating: 4.7,
    reviewCount: 28,
    tags: ["烘焙", "亲子", "手作", "美食"],
    highlights: ["专业烘焙设备", "优质食材", "成品打包带走", "围裙赠送"],
    difficulty: "简单",
    weatherDependent: false,
    isFeatured: false,
    isHot: false,
  },
  {
    id: 4,
    title: "森林探险寻宝",
    description:
      "在大自然中寻找宝藏，锻炼孩子的观察力和团队合作能力，体验户外探险乐趣",
    date: "2024-03-22",
    time: "9:00-12:00",
    endDate: "2024-03-22",
    location: "森林公园探险区",
    organizer: "探险小队",
    organizerAvatar: "🏕️",
    ageGroup: "child",
    ageGroupName: "6-14岁",
    participants: 36,
    maxParticipants: 40,
    price: 88,
    originalPrice: 88,
    category: "outdoor",
    categoryName: "户外探险",
    status: "registration",
    statusName: "热门活动",
    rating: 4.6,
    reviewCount: 45,
    tags: ["探险", "寻宝", "团队", "自然"],
    highlights: [
      "专业户外教练",
      "安全装备齐全",
      "寻宝奖品丰富",
      "团队协作训练",
    ],
    difficulty: "中等",
    weatherDependent: true,
    isFeatured: true,
    isHot: true,
  },
  {
    id: 5,
    title: "创意手工坊",
    description:
      "发挥想象力，和孩子一起制作独特的手工艺品，培养创造力和动手能力",
    date: "2024-03-24",
    time: "10:00-12:00",
    endDate: "2024-03-24",
    location: "创意空间工作室",
    organizer: "艺术老师",
    organizerAvatar: "🎨",
    ageGroup: "toddler",
    ageGroupName: "3-8岁",
    participants: 8,
    maxParticipants: 12,
    price: 58,
    originalPrice: 78,
    category: "handcraft",
    categoryName: "手工制作",
    status: "registration",
    statusName: "报名中",
    rating: 4.5,
    reviewCount: 18,
    tags: ["手工", "创意", "艺术", "想象"],
    highlights: ["材料工具齐全", "作品装框带走", "艺术启蒙", "小班教学"],
    difficulty: "简单",
    weatherDependent: false,
    isFeatured: false,
    isHot: false,
  },
  {
    id: 6,
    title: "音乐启蒙课堂",
    description: "通过音乐游戏和乐器体验，培养孩子的音乐感知力和节奏感",
    date: "2024-03-25",
    time: "16:00-17:30",
    endDate: "2024-03-25",
    location: "音乐教室",
    organizer: "音乐老师",
    organizerAvatar: "🎵",
    ageGroup: "baby",
    ageGroupName: "2-5岁",
    participants: 15,
    maxParticipants: 15,
    price: 78,
    originalPrice: 98,
    category: "culture",
    categoryName: "文化艺术",
    status: "full",
    statusName: "已满员",
    rating: 4.8,
    reviewCount: 22,
    tags: ["音乐", "启蒙", "乐器", "节奏"],
    highlights: ["专业音乐老师", "乐器体验", "音乐游戏", "节奏训练"],
    difficulty: "简单",
    weatherDependent: false,
    isFeatured: false,
    isHot: false,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "registration":
      return "bg-green-100 text-green-800";
    case "upcoming":
      return "bg-orange-100 text-orange-800";
    case "ongoing":
      return "bg-blue-100 text-blue-800";
    case "full":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "简单":
      return "bg-green-100 text-green-800";
    case "中等":
      return "bg-yellow-100 text-yellow-800";
    case "困难":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedCategory === "all" || activity.category === selectedCategory;
    const matchesAgeGroup =
      selectedAgeGroup === "all" || activity.ageGroup === selectedAgeGroup;
    const matchesStatus =
      selectedStatus === "all" || activity.status === selectedStatus;
    const matchesSearch =
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesAgeGroup && matchesStatus && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">亲子活动</h1>
        <p className="text-xl text-gray-600">
          精彩活动等你来参加，让孩子在快乐中成长
        </p>
      </div>

      {/* 搜索和筛选 */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="搜索活动名称或描述..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto"
          >
            <Filter className="h-4 w-4 mr-2" />
            筛选条件
          </Button>
        </div>

        {/* 筛选条件 */}
        {showFilters && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            {/* 活动分类 */}
            <div>
              <h3 className="font-medium mb-2">活动分类</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category.id)}
                    size="sm"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* 年龄组 */}
            <div>
              <h3 className="font-medium mb-2">适合年龄</h3>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((ageGroup) => (
                  <Button
                    key={ageGroup.id}
                    variant={
                      selectedAgeGroup === ageGroup.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedAgeGroup(ageGroup.id)}
                    size="sm"
                  >
                    {ageGroup.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {ageGroup.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* 活动状态 */}
            <div>
              <h3 className="font-medium mb-2">活动状态</h3>
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((status) => (
                  <Button
                    key={status.id}
                    variant={
                      selectedStatus === status.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedStatus(status.id)}
                    size="sm"
                  >
                    {status.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 结果统计 */}
      <div className="mb-6">
        <p className="text-gray-600">
          找到{" "}
          <span className="font-semibold">{filteredActivities.length}</span>{" "}
          个活动
        </p>
      </div>

      {/* 活动列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredActivities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline">{activity.categoryName}</Badge>
                    <Badge className={getStatusColor(activity.status)}>
                      {activity.statusName}
                    </Badge>
                    {activity.isHot && (
                      <Badge className="bg-red-100 text-red-800">🔥 热门</Badge>
                    )}
                    {activity.isFeatured && (
                      <Badge className="bg-purple-100 text-purple-800">
                        ⭐ 精选
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-1">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {activity.description}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {/* 活动基本信息 */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="line-clamp-1">{activity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>
                      {activity.participants}/{activity.maxParticipants}人
                    </span>
                  </div>
                </div>

                {/* 组织者信息 */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">
                      {activity.organizerAvatar}
                    </span>
                    <span className="text-gray-600">
                      by {activity.organizer}
                    </span>
                    {activity.rating && (
                      <div className="flex items-center ml-4">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-gray-600">
                          {activity.rating} ({activity.reviewCount})
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 亮点特色 */}
                {activity.highlights && (
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {activity.highlights
                        .slice(0, 3)
                        .map((highlight, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            ✓ {highlight}
                          </Badge>
                        ))}
                    </div>
                  </div>
                )}

                {/* 标签 */}
                <div className="flex flex-wrap gap-1">
                  {activity.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  <Badge
                    variant="outline"
                    className={getDifficultyColor(activity.difficulty)}
                  >
                    {activity.difficulty}
                  </Badge>
                  <Badge variant="outline">{activity.ageGroupName}</Badge>
                  {activity.weatherDependent && (
                    <Badge variant="outline" className="text-xs">
                      🌤️ 受天气影响
                    </Badge>
                  )}
                </div>

                {/* 价格和操作 */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-2">
                    {activity.price === 0 ? (
                      <span className="text-2xl font-bold text-green-600">
                        免费
                      </span>
                    ) : (
                      <div className="flex items-center space-x-1">
                        <span className="text-2xl font-bold text-primary">
                          ￥{activity.price}
                        </span>
                        {activity.originalPrice > activity.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ￥{activity.originalPrice}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/activities/${activity.id}`}>查看详情</Link>
                    </Button>
                    <Button
                      size="sm"
                      disabled={activity.status === "full"}
                      className={
                        activity.status === "full"
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }
                    >
                      {activity.status === "full" ? "已满员" : "立即报名"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 无结果提示 */}
      {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎪</div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            没有找到相关活动
          </h3>
          <p className="text-gray-500 mb-4">试试调整搜索条件或选择其他分类</p>
          <Button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedAgeGroup("all");
              setSelectedStatus("all");
            }}
            variant="outline"
          >
            清除筛选条件
          </Button>
        </div>
      )}
    </div>
  );
}
