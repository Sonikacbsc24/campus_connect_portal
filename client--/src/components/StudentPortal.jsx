import React from 'react';

const NAVY = '#0A2240';
const GOLD = '#F2A900';
const BG = '#f4f6f9';

const NOTICES = [
  {
    title: 'Mid-Term Exam Schedule Released',
    meta: 'SOCSE  •  Sept 18, 2026'
  },
  {
    title: 'Hackathon Registration Open',
    meta: 'RVU Tech Club  •  Sept 15, 2026'
  }
];

const ASSIGNMENTS = [
  {
    title: 'Lab Assignment 2: React State Management',
    meta: 'CS3301 - Full Stack  •  Due Sept 12, 2026',
    status: 'Pending'
  },
  {
    title: 'ER Diagram Project Report',
    meta: 'CS3302 - DBMS  •  Due Sept 20, 2026',
    status: 'Submitted'
  }
];

const ATTENDANCE = [
  { course: 'CS3301 - Full Stack Development', attended: 27, total: 30 },
  { course: 'CS3302 - Database Management Systems', attended: 24, total: 30 },
  { course: 'CS3305 - Computer Networks', attended: 21, total: 28 }
];

const PROFILE = {
  name: 'RVU Student',
  department: 'School of Computer Science & Engineering (SOCSE)',
  course: 'CS3301 - Full Stack Development',
  status: 'Active Enrolled'
};

const TABS = [
  { id: 'notices', label: 'Notices & Events' },
  { id: 'assignments', label: 'Assignments' },
  { id: 'attendance', label: 'Track Attendance' },
  { id: 'profile', label: 'Profile' }
];

export default function StudentPortal({ studentName = 'RVU Student', onBack }) {
  const [activeTab, setActiveTab] = React.useState('notices');

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.headerTitle}>🎓 Student Portal</h1>
          <p style={styles.headerSubtitle}>Welcome, {studentName}</p>
        </div>

        <button style={styles.backBtn} onClick={onBack}>
          Back to Main Campus View
        </button>
      </div>

      <div style={styles.tabRow}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.tabBtn,
              ...(activeTab === tab.id ? styles.tabBtnActive : {})
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {activeTab === 'notices' && <NoticesTab />}
        {activeTab === 'assignments' && <AssignmentsTab />}
        {activeTab === 'attendance' && <AttendanceTab />}
        {activeTab === 'profile' && <ProfileTab />}
      </div>
    </div>
  );
}

function NoticesTab() {
  return (
    <div>
      <h2 style={styles.sectionTitle}>📣 Campus Notices & Events</h2>

      {NOTICES.map((item, i) => (
        <div key={i} style={styles.row}>
          <div>
            <div style={styles.rowTitle}>{item.title}</div>
            <div style={styles.rowMeta}>{item.meta}</div>
          </div>
          <button style={styles.darkBtn}>View Details</button>
        </div>
      ))}
    </div>
  );
}

function AssignmentsTab() {
  return (
    <div>
      <h2 style={styles.sectionTitle}>📄 Assignments & Submissions</h2>

      {ASSIGNMENTS.map((item, i) => (
        <div key={i} style={styles.row}>
          <div>
            <div style={styles.rowTitle}>{item.title}</div>
            <div style={styles.rowMeta}>{item.meta}</div>
          </div>
          <span
            style={{
              ...styles.badge,
              backgroundColor: item.status === 'Pending' ? '#F2A900' : '#2e7d32',
              color: item.status === 'Pending' ? NAVY : '#ffffff'
            }}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function AttendanceTab() {
  return (
    <div>
      <h2 style={styles.sectionTitle}>📊 Track Attendance</h2>

      {ATTENDANCE.map((item, i) => {
        const pct = Math.round((item.attended / item.total) * 100);
        const low = pct < 75;

        return (
          <div key={i} style={styles.attendanceRow}>
            <div style={styles.attendanceHead}>
              <span style={styles.rowTitle}>{item.course}</span>
              <span style={{ fontWeight: 700, color: low ? '#c0392b' : '#2e7d32' }}>
                {pct}%
              </span>
            </div>

            <div style={styles.progressTrack}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${pct}%`,
                  backgroundColor: low ? '#c0392b' : '#2e7d32'
                }}
              />
            </div>

            <div style={styles.rowMeta}>
              {item.attended} / {item.total} classes attended
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProfileTab() {
  return (
    <div>
      <h2 style={styles.sectionTitle}>👤 Student Profile</h2>

      <div style={styles.profileGrid}>
        <ProfileField label="Name" value={PROFILE.name} />
        <ProfileField label="Department" value={PROFILE.department} />
        <ProfileField label="Course" value={PROFILE.course} />
        <ProfileField label="Status" value={PROFILE.status} />
      </div>
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div style={styles.profileField}>
      <div style={styles.profileLabel}>{label}</div>
      <div style={styles.profileValue}>{value}</div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: '850px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
  },
  header: {
    backgroundColor: NAVY,
    padding: '18px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px'
  },
  headerTitle: {
    color: GOLD,
    margin: 0,
    fontSize: '22px',
    letterSpacing: '0.5px'
  },
  headerSubtitle: {
    color: '#ffffff',
    margin: '4px 0 0 0',
    fontSize: '13px',
    opacity: 0.85
  },
  backBtn: {
    backgroundColor: GOLD,
    color: NAVY,
    border: 'none',
    borderRadius: '4px',
    padding: '10px 16px',
    fontWeight: 700,
    fontSize: '13px',
    cursor: 'pointer'
  },
  tabRow: {
    display: 'flex',
    backgroundColor: '#e9edf2',
    overflowX: 'auto'
  },
  tabBtn: {
    flex: 1,
    minWidth: '140px',
    padding: '14px 10px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#334155',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    borderBottom: '3px solid transparent'
  },
  tabBtnActive: {
    backgroundColor: '#ffffff',
    color: NAVY,
    borderBottom: `3px solid ${GOLD}`
  },
  content: {
    backgroundColor: '#ffffff',
    padding: '24px'
  },
  sectionTitle: {
    color: NAVY,
    fontSize: '17px',
    marginBottom: '18px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    borderBottom: '1px solid #eef1f5',
    gap: '12px'
  },
  rowTitle: {
    fontWeight: 700,
    color: '#1f2937',
    fontSize: '14.5px'
  },
  rowMeta: {
    fontSize: '12.5px',
    color: '#64748b',
    marginTop: '4px'
  },
  darkBtn: {
    backgroundColor: NAVY,
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '9px 16px',
    fontSize: '12.5px',
    fontWeight: 600,
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  badge: {
    padding: '7px 14px',
    borderRadius: '4px',
    fontSize: '12.5px',
    fontWeight: 700,
    whiteSpace: 'nowrap'
  },
  attendanceRow: {
    padding: '14px 0',
    borderBottom: '1px solid #eef1f5'
  },
  attendanceHead: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  progressTrack: {
    height: '8px',
    borderRadius: '4px',
    backgroundColor: '#e2e8f0',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px'
  },
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '18px'
  },
  profileField: {
    backgroundColor: BG,
    borderRadius: '6px',
    padding: '14px 16px',
    borderLeft: `4px solid ${GOLD}`
  },
  profileLabel: {
    fontSize: '11.5px',
    color: '#64748b',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.4px',
    marginBottom: '4px'
  },
  profileValue: {
    fontSize: '14px',
    color: NAVY,
    fontWeight: 600
  }
};