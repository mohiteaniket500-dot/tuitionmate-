import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  CalendarCheck,
  Wallet,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  GraduationCap,
  IndianRupee,
  TrendingUp,
  Clock
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Students", icon: Users },
  { name: "Batches", icon: BookOpen },
  { name: "Attendance", icon: CalendarCheck },
  { name: "Fees", icon: Wallet },
  { name: "Settings", icon: Settings }
];

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [mobileMenu, setMobileMenu] = useState(false);

  const stats = [
    { title: "Total Students", value: "0", icon: Users, color: "blue" },
    { title: "Total Batches", value: "0", icon: BookOpen, color: "purple" },
    { title: "Today's Attendance", value: "0%", icon: CalendarCheck, color: "green" },
    { title: "Pending Fees", value: "₹0", icon: Wallet, color: "orange" }
  ];

  return (
    <div className="app-layout">

      {mobileMenu && (
        <div className="mobile-overlay" onClick={() => setMobileMenu(false)} />
      )}

      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>

        <div className="brand">
          <div className="brand-icon">
            <GraduationCap size={27} />
          </div>
          <div>
            <h2>TuitionMate</h2>
            <span>SMART TUITION MANAGEMENT</span>
          </div>
          <button className="close-menu" onClick={() => setMobileMenu(false)}>
            <X />
          </button>
        </div>

        <p className="menu-label">MAIN MENU</p>

        <nav>
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${active === item.name ? "active" : ""}`}
                onClick={() => {
                  setActive(item.name);
                  setMobileMenu(false);
                }}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <GraduationCap size={25} />
            <h3>Grow your tuition</h3>
            <p>Manage your classes smarter with TuitionMate.</p>
          </div>
          <p className="version">TuitionMate v1.0</p>
        </div>

      </aside>

      <main className="main-content">

        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu" onClick={() => setMobileMenu(true)}>
              <Menu />
            </button>
            <div>
              <h1>{active}</h1>
              <p>Welcome to your TuitionMate workspace.</p>
            </div>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="icon-button" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <div className="profile-avatar">T</div>
          </div>
        </header>

        {active === "Dashboard" ? (

          <div className="dashboard">

            <section className="welcome-banner">
              <div>
                <span className="welcome-tag">YOUR TEACHING PARTNER</span>
                <h2>Manage your tuition, effortlessly.</h2>
                <p>Everything you need to manage students, attendance and fees in one place.</p>
              </div>
              <GraduationCap className="banner-icon" size={100} />
            </section>

            <section className="stats-grid">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div className="stat-card" key={stat.title}>
                    <div className={`stat-icon ${stat.color}`}>
                      <Icon size={23} />
                    </div>
                    <p>{stat.title}</p>
                    <h2>{stat.value}</h2>
                    <span>Ready to track</span>
                  </div>
                );
              })}
            </section>

            <section className="content-grid">

              <div className="content-card">
                <div className="card-heading">
                  <div>
                    <h3>Quick Actions</h3>
                    <p>Manage your tuition activities</p>
                  </div>
                </div>

                <div className="quick-actions">
                  <button onClick={() => setActive("Students")}>
                    <Users />
                    <span>Add Students</span>
                  </button>

                  <button onClick={() => setActive("Batches")}>
                    <BookOpen />
                    <span>Create Batch</span>
                  </button>

                  <button onClick={() => setActive("Attendance")}>
                    <CalendarCheck />
                    <span>Mark Attendance</span>
                  </button>

                  <button onClick={() => setActive("Fees")}>
                    <IndianRupee />
                    <span>Manage Fees</span>
                  </button>
                </div>
              </div>

              <div className="content-card pricing-card">
                <div className="card-heading">
                  <div>
                    <h3>Your Pricing</h3>
                    <p>Simple per-student pricing</p>
                  </div>
                  <Wallet size={23} />
                </div>

                <h2>₹25 <small>/ student / month</small></h2>

                <div className="plan-row">
                  <span>Basic Plan</span>
                  <strong>Up to 50 students</strong>
                </div>

                <div className="plan-row">
                  <span>Pro Plan</span>
                  <strong>Unlimited students</strong>
                </div>

              </div>

            </section>

            <section className="content-card activity-card">
              <div className="card-heading">
                <div>
                  <h3>Recent Activity</h3>
                  <p>Your latest tuition updates</p>
                </div>
                  <Clock size={22} />
              </div>

              <div className="empty-state">
                <TrendingUp size={38} />
                <h3>Your journey starts here!</h3>
                <p>Add your first student to begin using TuitionMate.</p>
                <button onClick={() => setActive("Students")}>
                  Get Started
                </button>
              </div>
            </section>

          </div>

        ) : (

          <section className="module-page">
            <div className="module-icon">
              {navigation.find(item => item.name === active)?.icon &&
                (() => {
                  const Icon = navigation.find(item => item.name === active)!.icon;
                  return <Icon size={35} />;
                })()}
            </div>

            <h2>{active} Management</h2>
            <p>This section is being developed for TuitionMate.</p>
            <button onClick={() => setActive("Dashboard")}>
              Back to Dashboard
            </button>
          </section>

        )}

        <footer className="footer">
          © 2026 TuitionMate. Smart Tuition Management Made Simple.
        </footer>

      </main>
    </div>
  );
}