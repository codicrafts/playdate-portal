"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  User,
  Heart,
  Star,
  MessageCircle,
  Settings,
  Calendar,
  MapPin,
  Users,
  Bell,
  Shield,
  Edit,
  Camera,
  Award,
  Activity,
} from "lucide-react";

// 模拟用户数据
const userData = {
  id: 1,
  name: "温柔妈妈",
  avatar: "👩‍🔬",
  bio: "两个孩子的妈妈，喜欢分享育儿心得和遛娃经验",
  location: "上海",
  joinDate: "2023-06-15",
  level: "活跃用户",
  points: 1250,
  posts: 34,
  followers: 89,
  following: 156,
  likes: 567,
  children: [
    { name: "小宝", age: 3, gender: "男" },
    { name: "小公主", age: 6, gender: "女" },
  ],
};

// 我的收藏
const favorites = {
  places: [
    {
      id: 1,
      name: "中山公园儿童乐园",
      category: "公园",
      rating: 4.8,
      image: "🏞️",
      savedDate: "2024-03-10",
    },
    {
      id: 2,
      name: "海洋馆奇妙世界",
      category: "科教馆",
      rating: 4.9,
      image: "🐠",
      savedDate: "2024-03-08",
    },
  ],
  activities: [
    {
      id: 1,
      title: "春日亲子野餐会",
      date: "2024-03-15",
      price: "免费",
      image: "🌸",
      savedDate: "2024-03-12",
    },
    {
      id: 2,
      title: "小小科学家实验室",
      date: "2024-03-18",
      price: "￥68",
      image: "🔬",
      savedDate: "2024-03-10",
    },
  ],
  topics: [
    {
      id: 1,
      title: "3岁宝宝不爱吃饭怎么办？",
      author: "妈妈小陈",
      comments: 23,
      savedDate: "2024-03-11",
    },
    {
      id: 2,
      title: "推荐几个适合5岁孩子的户外运动项目",
      author: "运动爸爸",
      comments: 45,
      savedDate: "2024-03-09",
    },
  ],
};

// 我的关注
const following = [
  {
    id: 1,
    name: "育儿专家李老师",
    avatar: "👩‍⚕️",
    title: "儿童心理学博士",
    followers: 1250,
    isVerified: true,
  },
  {
    id: 2,
    name: "户外运动教练",
    avatar: "🏃‍♂️",
    title: "青少年体能训练师",
    followers: 890,
    isVerified: true,
  },
  {
    id: 3,
    name: "手工达人",
    avatar: "👨‍🎨",
    title: "亲子手工专家",
    followers: 567,
    isVerified: false,
  },
];

// 我的评价
const reviews = [
  {
    id: 1,
    type: "place",
    target: "中山公园儿童乐园",
    rating: 5,
    content: "孩子很喜欢这里的滑梯，设施很安全，环境也很好。",
    date: "2024-03-10",
    helpful: 15,
  },
  {
    id: 2,
    type: "activity",
    target: "春日亲子野餐会",
    rating: 4,
    content: "活动组织得很好，孩子玩得很开心，就是人稍微多了点。",
    date: "2024-03-16",
    helpful: 8,
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", name: "个人概览", icon: User },
    { id: "favorites", name: "我的收藏", icon: Heart },
    { id: "following", name: "我的关注", icon: Users },
    { id: "reviews", name: "我的评价", icon: Star },
    { id: "settings", name: "账号设置", icon: Settings },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 左侧个人信息卡片 */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <span className="text-6xl">{userData.avatar}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-bold mt-4">{userData.name}</h2>
                <div className="flex items-center justify-center mt-2">
                  <Badge variant="outline">{userData.level}</Badge>
                  <Award className="h-4 w-4 ml-2 text-yellow-500" />
                </div>
                <p className="text-sm text-gray-600 mt-2">{userData.bio}</p>
                <div className="flex items-center justify-center text-sm text-gray-500 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{userData.location}</span>
                  <span className="mx-2">·</span>
                  <span>加入于 {userData.joinDate}</span>
                </div>
              </div>

              {/* 统计数据 */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {userData.posts}
                  </div>
                  <div className="text-xs text-gray-600">发布</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {userData.followers}
                  </div>
                  <div className="text-xs text-gray-600">粉丝</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {userData.following}
                  </div>
                  <div className="text-xs text-gray-600">关注</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {userData.likes}
                  </div>
                  <div className="text-xs text-gray-600">获赞</div>
                </div>
              </div>

              {/* 积分信息 */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">社区积分</span>
                  <span className="text-lg font-bold text-primary">
                    {userData.points}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  距离下一级还需350积分
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 孩子信息 */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">我的宝贝</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {userData.children.map((child, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-pink-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">
                        {child.gender === "男" ? "👦" : "👧"}
                      </span>
                      <div>
                        <div className="font-medium">{child.name}</div>
                        <div className="text-sm text-gray-600">
                          {child.age}岁
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  + 添加孩子信息
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 右侧标签页内容 */}
        <div className="lg:col-span-3">
          {/* 标签页导航 */}
          <div className="mb-6">
            <div className="border-b">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* 个人概览 */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* 最近活动 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    最近活动
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">收藏了地点</span>
                          <Link
                            href="/places/1"
                            className="text-primary hover:underline mx-1"
                          >
                            中山公园儿童乐园
                          </Link>
                        </p>
                        <p className="text-xs text-gray-500">2小时前</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">评价了活动</span>
                          <Link
                            href="/activities/1"
                            className="text-primary hover:underline mx-1"
                          >
                            春日亲子野餐会
                          </Link>
                        </p>
                        <p className="text-xs text-gray-500">1天前</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">关注了</span>
                          <Link
                            href="/community/user/1"
                            className="text-primary hover:underline mx-1"
                          >
                            育儿专家李老师
                          </Link>
                        </p>
                        <p className="text-xs text-gray-500">3天前</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 成就徽章 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    我的成就
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="text-sm font-medium">活跃用户</div>
                      <div className="text-xs text-gray-600">连续签到30天</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="text-sm font-medium">分享达人</div>
                      <div className="text-xs text-gray-600">发布话题30个</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl mb-2">👍</div>
                      <div className="text-sm font-medium">热心家长</div>
                      <div className="text-xs text-gray-600">获得点赞500个</div>
                    </div>
                    <div className="text-center p-4 bg-gray-100 rounded-lg opacity-50">
                      <div className="text-2xl mb-2">🌟</div>
                      <div className="text-sm font-medium">社区明星</div>
                      <div className="text-xs text-gray-600">粉丝达到1000</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* 我的收藏 */}
          {activeTab === "favorites" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>收藏的地点</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {favorites.places.map((place) => (
                      <div
                        key={place.id}
                        className="flex items-center space-x-3 p-3 border rounded-lg"
                      >
                        <span className="text-2xl">{place.image}</span>
                        <div className="flex-1">
                          <h4 className="font-medium">{place.name}</h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <Badge variant="outline" className="mr-2">
                              {place.category}
                            </Badge>
                            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                            <span>{place.rating}</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            收藏于 {place.savedDate}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>收藏的活动</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {favorites.activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center space-x-3 p-3 border rounded-lg"
                      >
                        <span className="text-2xl">{activity.image}</span>
                        <div className="flex-1">
                          <h4 className="font-medium">{activity.title}</h4>
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{activity.date}</span>
                            </div>
                            <div className="font-medium text-primary">
                              {activity.price}
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">
                            收藏于 {activity.savedDate}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>收藏的话题</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {favorites.topics.map((topic) => (
                      <div
                        key={topic.id}
                        className="flex items-start justify-between p-3 border rounded-lg"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{topic.title}</h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <span>by {topic.author}</span>
                            <MessageCircle className="h-3 w-3 ml-4 mr-1" />
                            <span>{topic.comments}评论</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            收藏于 {topic.savedDate}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* 我的关注 */}
          {activeTab === "following" && (
            <Card>
              <CardHeader>
                <CardTitle>我关注的人</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {following.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{user.avatar}</span>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">{user.name}</h4>
                            {user.isVerified && (
                              <Badge variant="outline" className="ml-2 text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                认证
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{user.title}</p>
                          <p className="text-xs text-gray-500">
                            {user.followers}关注者
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          私信
                        </Button>
                        <Button variant="outline" size="sm">
                          取消关注
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 我的评价 */}
          {activeTab === "reviews" && (
            <Card>
              <CardHeader>
                <CardTitle>我的评价</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{review.target}</h4>
                          <div className="flex items-center">
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
                            <Badge variant="outline" className="ml-2 text-xs">
                              {review.type === "place" ? "地点" : "活动"}
                            </Badge>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{review.content}</p>
                      <div className="text-sm text-gray-500">
                        {review.helpful}人觉得有用
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 账号设置 */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    个人信息
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          昵称
                        </label>
                        <Input defaultValue={userData.name} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          所在地区
                        </label>
                        <Input defaultValue={userData.location} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        个人简介
                      </label>
                      <textarea
                        className="w-full p-3 border rounded-md"
                        rows={3}
                        defaultValue={userData.bio}
                      />
                    </div>
                    <Button>保存修改</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    消息提醒
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">新消息通知</div>
                        <div className="text-sm text-gray-600">
                          收到私信和评论时通知
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">活动提醒</div>
                        <div className="text-sm text-gray-600">
                          报名活动开始前提醒
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">系统通知</div>
                        <div className="text-sm text-gray-600">
                          接收系统公告和更新
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    隐私设置
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">公开个人资料</div>
                        <div className="text-sm text-gray-600">
                          允许其他用户查看我的个人信息
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">显示在线状态</div>
                        <div className="text-sm text-gray-600">
                          让其他用户看到我的在线状态
                        </div>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">允许私信</div>
                        <div className="text-sm text-gray-600">
                          允许其他用户向我发送私信
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    账号安全
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">修改密码</div>
                        <div className="text-sm text-gray-600">
                          定期修改密码保证账号安全
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        修改
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">绑定手机</div>
                        <div className="text-sm text-gray-600">
                          已绑定：138****8888
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        更换
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">注销账号</div>
                        <div className="text-sm text-gray-600">
                          永久删除账号和所有数据
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-600"
                      >
                        注销
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
