import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar,
  DollarSign,
  Utensils,
  User,
  MessageCircle,
  Activity,
  Heart
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: UserCheck, label: 'Teachers', path: '/teachers' },
    { icon: Calendar, label: 'Event', path: '/event' },
    { icon: DollarSign, label: 'Finance', path: '/finance' },
    { icon: Utensils, label: 'Food', path: '/food' },
    { icon: User, label: 'User', path: '/user' },
    { icon: MessageCircle, label: 'Chat', path: '/chat' },
    { icon: Activity, label: 'Lastest Activity', path: '/activity' },
  ];

  return (
    <aside className="w-60 bg-primary text-primary-foreground flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <h1 className="text-xl font-semibold">Akademi</h1>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-primary shadow-lg'
                      : 'text-primary-foreground hover:bg-primary/20'
                  }`
                }
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary/20">
        <div className="text-xs text-primary-foreground/80 mb-1">
          Akademi - School Admission Dashboard
        </div>
        <div className="flex items-center gap-1 text-xs text-primary-foreground/60">
          <span>Made with</span>
          <Heart className="h-3 w-3 text-red-400 fill-current" />
          <span>by Peterdraw</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;