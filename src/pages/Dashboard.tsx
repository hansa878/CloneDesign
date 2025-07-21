import { Search, Bell, Settings, Users, UserCheck, Calendar, FileText, Plus } from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const stats = [
    { icon: Users, label: 'Students', count: '932', bgColor: 'bg-blue-500' },
    { icon: UserCheck, label: 'Teachers', count: '754', bgColor: 'bg-red-500' },
    { icon: Calendar, label: 'Events', count: '40', bgColor: 'bg-yellow-500' },
    { icon: FileText, label: 'Notes', count: '32k', bgColor: 'bg-purple-600' },
  ];

  const recentStudents = [
    { name: 'Samanta William', time: '12:45 PM', avatar: 'SW' },
    { name: 'Tony Soap', time: '12:45 PM', avatar: 'TS' },
    { name: 'Karen Hope', time: '12:45 PM', avatar: 'KH' },
    { name: 'Jordan Nico', time: '12:45 PM', avatar: 'JN' },
    { name: 'Nadila Adja', time: '12:45 PM', avatar: 'NA' },
  ];

  const messages = [
    { name: 'Samanta William', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', avatar: 'SW' },
    { name: 'Tony Soap', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', avatar: 'TS' },
    { name: 'Jordan Nico', message: 'Lorem ipsum dolor sit amet...', time: '12:46 PM', avatar: 'JN' },
    { name: 'Nadila Adja', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', avatar: 'NA' },
  ];

  const foods = [
    { name: 'Beef Steak with Fried Potato', desc: 'Steak with fried potato beef', image: '🥩' },
    { name: 'Pancake with Honey', desc: 'Pancake with fried potato beef', image: '🥞' },
    { name: 'Japanese Beef Ramen', desc: 'Ramen with fried potato beef', image: '🍜' },
  ];

  return (
    <Layout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search here..."
                className="pl-10 w-64"
              />
            </div>
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Settings className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm font-medium">Nabila A.</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-medium">N</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Section */}
          <div className="col-span-8 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-xl font-semibold">{stat.count}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* School Performance Chart */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">School Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Performance Chart</p>
                  </div>
                </CardContent>
              </Card>

              {/* School Finance Chart */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">School Finance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Finance Chart</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendar and Unpaid Students */}
            <div className="grid grid-cols-2 gap-6">
              {/* School Calendar */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">School Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-25 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">March 2021</p>
                    <div className="grid grid-cols-7 gap-1 text-xs">
                      {/* Calendar grid would go here */}
                      <div className="text-center p-2">Calendar</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Unpaid Student Intuition */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Unpaid Student Intuition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentStudents.slice(0, 4).map((student, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">{student.avatar}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{student.name}</p>
                            <p className="text-xs text-muted-foreground">ID 123456789</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">VII A</span>
                          <p className="text-xs text-muted-foreground mt-1">$50,036</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Recent Students */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-base">Recent Students</CardTitle>
                <Button size="sm" className="h-8">
                  <Plus className="h-3 w-3" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-primary">{student.avatar}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{student.name}</p>
                          <p className="text-xs text-muted-foreground">Class VI A</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="h-6 w-6 p-0 rounded-full">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-3 text-primary">View More</Button>
              </CardContent>
            </Card>

            {/* Messages */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {messages.slice(0, 3).map((msg, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{msg.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{msg.name}</p>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-3 text-primary">View More</Button>
              </CardContent>
            </Card>

            {/* Current Foods Menu */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Current Foods Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {foods.map((food, index) => (
                    <div key={index} className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{food.image}</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{food.name}</p>
                          <p className="text-xs text-muted-foreground">{food.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-3 text-primary">View More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;