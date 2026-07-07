import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardHome from './DashboardHome';
import { 
  LayoutDashboard, Fingerprint, FileText, Server, FlaskConical, 
  Scale, Users, TrendingUp, Map, ShieldAlert, Bell, 
  FileSearch, BarChart2, ShieldCheck, BookOpen, MessageSquare, 
  UserCircle 
} from 'lucide-react';
import './index.css';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { id: 'dashboard', label: 'sidebar.dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'caseIntel', label: 'sidebar.caseIntel', icon: <FileSearch size={18} /> },
    { id: 'stmtIntel', label: 'sidebar.stmtIntel', icon: <MessageSquare size={18} /> },
    { id: 'digitalEvid', label: 'sidebar.digitalEvid', icon: <Server size={18} /> },
    { id: 'fslIntel', label: 'sidebar.fslIntel', icon: <FlaskConical size={18} /> },
    { id: 'courtIntel', label: 'sidebar.courtIntel', icon: <Scale size={18} /> },
    { id: 'superIntel', label: 'sidebar.superIntel', icon: <Users size={18} /> },
    { id: 'predIntel', label: 'sidebar.predIntel', icon: <TrendingUp size={18} /> },
    { id: 'resIntel', label: 'sidebar.resIntel', icon: <UserCircle size={18} /> },
    { id: 'gisIntel', label: 'sidebar.gisIntel', icon: <Map size={18} /> },
    { id: 'ccCenter', label: 'sidebar.ccCenter', icon: <ShieldAlert size={18} /> },
    { id: 'notifications', label: 'sidebar.notifications', icon: <Bell size={18} /> },
    { id: 'docIntel', label: 'sidebar.docIntel', icon: <FileText size={18} /> },
    { id: 'kpi', label: 'sidebar.kpi', icon: <BarChart2 size={18} /> },
    { id: 'audit', label: 'sidebar.audit', icon: <ShieldCheck size={18} /> },
    { id: 'knowledge', label: 'sidebar.knowledge', icon: <BookOpen size={18} /> },
    { id: 'aiChat', label: 'sidebar.aiChat', icon: <Fingerprint size={18} /> },
  ];

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar glass-panel" style={{ borderRadius: 0, borderTop: 0, borderBottom: 0, borderLeft: 0 }}>
        <div className="sidebar-header">
          <ShieldCheck size={24} style={{ marginRight: '10px' }} />
          UP POLICE AI
        </div>
        <div className="nav-menu">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.id)}
            >
              {item.icon}
              {t(item.label)}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <div className="header-title">
            {t('header.title')}
          </div>
          <div className="header-actions">
            <button className="lang-toggle" onClick={toggleLanguage}>
              {i18n.language === 'en' ? 'A / अ (Hindi)' : 'A / अ (English)'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <UserCircle size={28} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{t('header.profile')}</span>
            </div>
          </div>
        </header>

        <section className="content-area">
          {activeMenu === 'dashboard' ? (
            <DashboardHome />
          ) : (
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <ShieldAlert size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {t(`sidebar.${activeMenu}`)}
              </h2>
              <p>This module is under development for Phase 2.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
