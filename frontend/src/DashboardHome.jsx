import React from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function DashboardHome() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', fontWeight: 600 }}>
        {t('sidebar.dashboard')}
      </h2>

      <div className="dashboard-grid">
        {/* KPI Cards */}
        <div className="col-span-3 glass-panel kpi-card delay-1">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="kpi-title">{t('dashboard.totalCases')}</span>
            <Activity size={20} color="var(--accent-primary)" />
          </div>
          <span className="kpi-value">12,450</span>
          <span className="kpi-trend trend-up">
            ↑ 2.4% vs last month
          </span>
        </div>

        <div className="col-span-3 glass-panel kpi-card delay-1">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="kpi-title">{t('dashboard.pendingFsl')}</span>
            <Clock size={20} color="var(--status-warning)" />
          </div>
          <span className="kpi-value">842</span>
          <span className="kpi-trend trend-down">
            ↓ 1.2% vs last month
          </span>
        </div>

        <div className="col-span-3 glass-panel kpi-card delay-2">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="kpi-title">{t('dashboard.courtReadiness')}</span>
            <CheckCircle size={20} color="var(--status-success)" />
          </div>
          <span className="kpi-value">78%</span>
          <span className="kpi-trend trend-up">
            ↑ 5.1% vs last month
          </span>
        </div>

        <div className="col-span-3 glass-panel kpi-card delay-2">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="kpi-title">{t('dashboard.aiAlerts')}</span>
            <AlertTriangle size={20} color="var(--status-danger)" />
          </div>
          <span className="kpi-value">45</span>
          <span className="kpi-trend trend-down">
            Requires immediate attention
          </span>
        </div>

        {/* Alerts Section */}
        <div className="col-span-8 glass-panel delay-3" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-secondary)' }}>
            {t('dashboard.recentAlerts')}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <span className="alert-badge alert-danger">High Risk</span>
              <span>{t('dashboard.delayRisk')}</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <span className="alert-badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--status-warning)', border: '1px solid rgba(245,158,11,0.3)' }}>Warning</span>
              <span>{t('dashboard.fslDelay')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
