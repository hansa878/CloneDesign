import { useState } from 'react';
import { Search, Bell, Settings, Plus, MoreHorizontal, Phone, Mail, ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    {
      id: 1,
      name: 'Samanta William',
      studentId: '#123456789',
      email: 'samanta.william@email.com',
      parentName: 'Mana William',
      city: 'Jakarta',
      date: 'March 25, 2021',
      grade: 'VII A',
      status: 'Active',
      avatar: 'SW',
      selected: true
    },
    {
      id: 2,
      name: 'Tony Soap',
      studentId: '#123456789',
      email: 'tony.soap@email.com',
      parentName: 'James Soap',
      city: 'Jakarta',
      date: 'March 25, 2021',
      grade: 'VII B',
      status: 'Active',
      avatar: 'TS',
      selected: false
    },
    {
      id: 3,
      name: 'Karen Hope',
      studentId: '#123456789',
      email: 'karen.hope@email.com',
      parentName: 'Justin Hope',
      city: 'Jakarta',
      date: 'March 25, 2021',
      grade: 'VII C',
      status: 'Active',
      avatar: 'KH',
      selected: true
    },
    {
      id: 4,
      name: 'Jordan Nico',
      studentId: '#123456789',
      email: 'jordan.nico@email.com',
      parentName: 'Amanda Nico',
      city: 'Jakarta',
      date: 'March 25, 2021',
      grade: 'VII A',
      status: 'Inactive',
      avatar: 'JN',
      selected: false
    },
    {
      id: 5,
      name: 'Nadila Adja',
      studentId: '#123456789',
      email: 'nadila.adja@email.com',
      parentName: 'Jack Adja',
      city: 'Jakarta',
      date: 'March 25, 2021',
      grade: 'VII A',
      status: 'Active',
      avatar: 'NA',
      selected: true
    },
    {
      id: 6,
      name: 'Johnny Ahmad',
      studentId: '#123456789',
      email: 'johnny.ahmad@email.com',
      parentName: 'Danny Ahmad',
      city: 'Jakarta',
      date: 'March 25, 2021',
      grade: 'VII A',
      status: 'Active',
      avatar: 'JA',
      selected: false
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.parentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getGradeBadgeColor = (grade: string) => {
    const colors = {
      'VII A': 'bg-red-100 text-red-600',
      'VII B': 'bg-yellow-100 text-yellow-600', 
      'VII C': 'bg-purple-100 text-purple-600'
    };
    return colors[grade as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <Layout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Students</h1>
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

        {/* Search and Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              Newest
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4" />
              New Student
            </Button>
          </div>
        </div>

        {/* Students Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        Name
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground text-sm">ID</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground text-sm">Date</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground text-sm">Parent Name</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground text-sm">City</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground text-sm">Contact</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground text-sm">Grade</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={student.id} className={`border-b border-border hover:bg-gray-50 ${student.selected ? 'bg-blue-50' : ''}`}>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox" 
                            checked={student.selected}
                            className="rounded border-gray-300" 
                          />
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-600">{student.avatar}</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{student.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-primary font-medium">{student.studentId}</td>
                      <td className="py-4 px-4 text-muted-foreground text-sm">{student.date}</td>
                      <td className="py-4 px-4 text-foreground">{student.parentName}</td>
                      <td className="py-4 px-4 text-foreground">{student.city}</td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getGradeBadgeColor(student.grade)}`}>
                          {student.grade}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing 1-5 from 100 data
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled className="text-muted-foreground">
                  <span>‹</span>
                </Button>
                <Button size="sm" className="bg-primary text-white min-w-8">1</Button>
                <Button variant="outline" size="sm" className="min-w-8">2</Button>
                <Button variant="outline" size="sm" className="min-w-8">3</Button>
                <Button variant="outline" size="sm">
                  <span>›</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Students;