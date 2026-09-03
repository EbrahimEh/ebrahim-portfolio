import { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import profileImage from './assets/EH.png'

const skills = [
  {
    title: 'Hardware & Device Support',
    points: [
      'PC assembly, component installation, and diagnostics',
      'Laptop servicing, keyboard & battery replacement',
      'Printers, scanners, network devices and fiber operations',
    ],
  },
  {
    title: 'Server & System Administration',
    points: [
      'Active Directory, user/group policy management',
      'Windows Server backups, updates and configuration',
      'Windows 10/11 installation, tuning, and troubleshooting',
    ],
  },
  {
    title: 'Networking & Infrastructure',
    points: [
      'LAN/WAN design, router/switch/firewall setup',
      'Mikrotik bandwidth control, NAT, queue management',
      'IP addressing, subnetting, DHCP and static configuration',
    ],
  },
  {
    title: 'Software & Application Support',
    points: [
      'Microsoft Office 365 administration and support',
      'Remote assistance with UltraViewer and RustDesk',
      'Adobe Illustrator, Photoshop, Zoom and Google Meet',
    ],
  },
  {
    title: 'CCTV & Security Surveillance',
    points: [
      'NVR/DVR installation, configuration, and maintenance',
      'IP camera setup, remote viewing, and recording management',
      'Surveillance network troubleshooting and system monitoring',
    ],
  },
  {
    title: 'Web Development (Basic)',
    points: ['HTML, CSS, JavaScript and React for modern UI'],
  },
]

const experience = [
  {
    company: 'Fakir Apparels Limited',
    role: 'IT Officer (Corporate Office)',
    period: 'June 2026 – Present',
    bullets: [
      'Manage Server, network, and IT infrastructure for the company',
      'Manage NVR/DVR and network systems',
      'Install, configure, and monitor CCTV cameras and surveillance systems',
      'Provide on-site and remote technical support to users',
      'Maintain computer systems, printers, and network devices',
      'Troubleshoot system and network issues efficiently',
      'Install and configure software, hardware, and backups',
      'Monitor network performance and generate clear reports',
    ],
  },
  {
    company: 'Next Accessories Limited',
    role: 'IT Executive',
    period: 'July 2023 – June 2026',
    bullets: [
      'Provide on-site and remote technical support to users',
      'Maintain computer systems, printers, and network devices',
      'Troubleshoot system and network issues efficiently',
      'Install and configure software, hardware, and backups',
      'Monitor network performance and generate clear reports',
    ],
  },
  {
    company: 'Sayra Foundation',
    role: 'Jr Executive',
    period: '2022 – 2023',
    bullets: [
      'Supported staff operations, maintenance, and user requests',
      'Managed daily hardware, installation, and troubleshooting tasks',
      'Delivered dependable office-level IT support across teams',
    ],
  },
]

const strengths = [
  'Strong problem solving ability',
  'Attention to detail',
  'Good communication & teamwork',
  'User satisfaction focused',
  'Adaptable & quick learner',
]

const infrastructure = [
  'MikroTik RouterOS',
  'Windows Server',
  'Cisco Networking',
  'VMware Virtualization',
  'Fortigate Firewall',
  'NVR/DVR Surveillance',
  'Fiber Optic Infrastructure',
  'Microsoft 365 & Google Workspace',
]

const tools = ['UltraViewer', 'RustDesk', 'Zoom', 'Google Meet']

function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-12 text-center shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
          <RingLoader color="#22d3ee" loading size={90} />
          <p className="mt-6 text-slate-300">Loading portfolio...</p>
        </div>
      </main>
    )
  }

  return (
    <main className={`portfolio-shell min-h-screen bg-slate-950 text-slate-100 ${theme === 'light' ? 'theme-light' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <section className="reveal reveal-delay-1 space-y-6">
            <div className="status-pill inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-900/80 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_0_1px_rgba(56,189,248,0.1)]">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.5)] animate-pulse" />
              IT Officer with 4+ years of experience
            </div>

            <div className="space-y-4">
              <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">MD Ebrahim Sikder</p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Professional IT Support &amp; Infrastructure Specialist
              </h1>
              <p className="max-w-2xl text-slate-400 sm:text-lg">
                I help teams stay productive with dependable hardware maintenance,
                secure network systems and user-first technical support.
                My experience covers Windows Server, Active Directory, Mikrotik,
                device repair and full office infrastructure operations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Years Active', value: '4+' },
                { label: 'Companies', value: '3' },
                { label: 'IT System Supported', value: '50+' },
                { label: 'Support Focus', value: 'Hardware, Network & CCTV' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-slate-100">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:w-auto"
              >
                Contact me
              </a>
              <a
                href="#experience"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200 sm:w-auto"
              >
                View experience
              </a>
              <a
                href="/Ebrahim%20-%20Resume.pdf"
                download="Ebrahim-Resume.pdf"
                aria-label="Download resume PDF"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-100 sm:w-auto"
              >
                <span aria-hidden="true">↓</span>
                Download CV
              </a>
            </div>
          </section>

          <section className="reveal reveal-delay-2 relative isolate overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_45px_140px_rgba(15,23,42,0.45)] backdrop-blur">
            <button
              type="button"
              className="theme-toggle absolute right-5 top-5 z-20"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span aria-hidden="true" className="theme-toggle-icon">{theme === 'dark' ? '☼' : '◐'}</span>
            </button>
            <div className="absolute -left-24 top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -right-20 top-24 h-48 w-48 rounded-full bg-slate-500/10 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-500/5 blur-xl" />

            <div className="relative rounded-[1.75rem] border border-slate-700/90 bg-slate-950/95 p-6">
                <div className="flex flex-col items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Profile</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-50">MD Ebrahim Sikder</h2>
                    <p className="mt-3 max-w-xl text-sm text-slate-400">
                      IT Officer focused on stability, support, and infrastructure
                      delivery for corporate operations.
                    </p>
                  </div>
                  <div className="image-stage relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-[2.5rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-500/30 via-slate-900/20 to-fuchsia-500/30 p-1 shadow-[0_25px_90px_rgba(56,189,248,0.2)]">
                    <div className="image-halo absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-cyan-400/30 via-fuchsia-300/20 to-emerald-300/30 blur-3xl opacity-50 animate-pulse" />
                    <div className="absolute inset-0 rounded-[2.5rem] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(34,211,238,0.35),rgba(236,72,153,0.35),rgba(52,211,153,0.35),rgba(34,211,238,0.35))] opacity-70 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-3 rounded-[2rem] border border-cyan-300/20 opacity-70" />
                    <div className="absolute inset-5 rounded-[1.75rem] border border-fuchsia-300/20 opacity-50 blur-sm animate-[spin_14s_linear_reverse_infinite]" />
                    <div className="image-frame relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-950/90 ring-1 ring-slate-700/70">
                      <div className="image-scan absolute inset-x-0 z-10 h-16 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent" />
                      <img src={profileImage} alt="Portrait of MD Ebrahim Sikder" className="h-full w-full rounded-[1.75rem] object-cover" />
                    </div>
                  </div>
                </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Specialty</p>
                  <p className="mt-3 text-xl font-semibold text-slate-100">IT Operations</p>
                </div>
                <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
                  <p className="mt-3 text-xl font-semibold text-slate-100">Fatulla, Narayanganj</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="reveal reveal-delay-3 mt-12 space-y-8">
          <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Expertise</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-50">Skill set for IT teams and end users</h2>
              </div>
              <p className="max-w-xl text-sm text-slate-400">
                Professional skills shaped by practical support work, system administration, and network management.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {skills.map((skill, index) => (
                <article
                  key={skill.title}
                  className={`skill-card ${skill.title.startsWith('CCTV') ? 'cctv-card' : ''} rounded-[1.75rem] border border-slate-700/80 bg-slate-950/90 p-6 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/95`}
                  style={{ '--card-delay': `${index * 90}ms` }}
                >
                  <h3 className="text-xl font-semibold text-slate-100">{skill.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-slate-400">
                    {skill.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <section id="experience" className="space-y-6">
            <div className="space-y-3">
              <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Professional Experience</p>
              <h2 className="text-3xl font-semibold text-slate-50">Experience that delivers stability and speed</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {experience.map((item, index) => (
                <article
                  key={item.company}
                  className="experience-card group rounded-[1.75rem] border border-slate-700/80 bg-slate-900/90 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-950/95"
                  style={{ '--card-delay': `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-slate-50">{item.role}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-400">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.95fr_0.85fr] xl:grid-cols-[1fr_0.8fr]">
            <article className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur">
              <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Professional Summary</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-50">Dedicated IT support leader with a user-first mindset</h2>
              <p className="mt-6 text-slate-400">
                Experienced IT Officer with a strong track record in hardware repair, system administration, networking, and service desk support. I build trust through fast troubleshooting, reliable infrastructure delivery, and clear communication.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur">
              <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Education</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-50">Academic background & qualifications</h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-3xl border border-slate-700/90 bg-slate-950/95 p-6">
                  <p className="text-base font-semibold text-slate-100">Diploma in Engineering (CSE)</p>
                  <p className="mt-2 text-sm text-slate-400">Barguna Polytechnic Institute, Barguna</p>
                  <p className="mt-1 text-sm text-slate-400">CGPA – 3.69 / 4.00</p>
                  <p className="mt-1 text-sm text-slate-400">2018 – 2023</p>
                </div>
                <div className="rounded-3xl border border-slate-700/90 bg-slate-950/95 p-6">
                  <p className="text-base font-semibold text-slate-100">BSc in CSE</p>
                  <p className="mt-2 text-sm text-slate-400">Anwar Khan Modern University</p>
                  <p className="mt-1 text-sm text-slate-400">Department of Computer Science &amp; Engineering</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Hardware Support', 'Network Troubleshooting', 'NVR/DVR', 'Remote Assistance', 'Office 365', 'Security Monitoring'].map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Tech Stack & Infrastructure</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-50">Tools and platforms I deliver with confidence</h2>
              </div>
              <p className="max-w-xl text-sm text-slate-400">
                Infrastructure and support technologies used in daily operations and network management.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {infrastructure.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-5 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-slate-900/95">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-900/80 p-8 text-slate-100 shadow-[0_30px_90px_rgba(56,189,248,0.15)] backdrop-blur">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
              <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-[spin_35s_linear_infinite]" />
              <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95 to-transparent" />
            </div>
            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Ready to collaborate</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-50">Bring your IT operations to the next level.</h2>
                <p className="mt-4 max-w-xl text-slate-400">
                  I’m available for support, infrastructure planning, server administration and office IT maintenance roles. Let’s connect and make your systems more reliable and user-friendly.
                </p>
                <div className="mt-8">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <a
                      href="https://wa.me/8801852541030"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex min-h-[120px] flex-col justify-center gap-4 rounded-[1.75rem] border border-cyan-400/40 bg-slate-950/95 px-5 py-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:border-cyan-300/60 hover:bg-slate-900/95 hover:shadow-[0_28px_80px_rgba(56,189,248,0.22)]"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.1 12.1 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45 12.1 12.1 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300 transition group-hover:text-cyan-200">WhatsApp</p>
                        <p className="mt-3 text-sm font-semibold leading-6 text-slate-100 transition group-hover:text-slate-50">+880 1852 541030</p>
                      </div>
                    </a>
                    <a
                      href="mailto:ebrahimsikder2288@gmail.com"
                      className="group flex min-h-[120px] flex-col justify-center gap-4 rounded-[1.75rem] border border-cyan-400/40 bg-slate-950/95 px-5 py-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:border-cyan-300/60 hover:bg-slate-900/95 hover:shadow-[0_28px_80px_rgba(56,189,248,0.22)]"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                          <path d="M4 7.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5" />
                          <path d="m22 7.5-10 7-10-7" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300 transition group-hover:text-cyan-200">Email</p>
                        <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-100 transition group-hover:text-slate-50">ebrahimsikder2288@gmail.com</p>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ebrahim-eh"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex min-h-[120px] flex-col justify-center gap-4 rounded-[1.75rem] border border-cyan-400/40 bg-slate-950/95 px-5 py-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:border-cyan-300/60 hover:bg-slate-900/95 hover:shadow-[0_28px_80px_rgba(56,189,248,0.22)]"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                          <path d="M4 4h16v16H4z" />
                          <path d="M8.5 14.5v-4h2v4M12 14.5v-4h2v4" />
                          <path d="M8.5 9.5h7" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300 transition group-hover:text-cyan-200">LinkedIn</p>
                        <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-100 transition group-hover:text-slate-50">/in/ebrahim-eh</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-slate-950/95 p-6 ring-1 ring-slate-700/60">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Contact details</p>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">Name:</span> MD Ebrahim Sikder
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">Role:</span> IT Officer / Support Specialist
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">Phone:</span> 01852541030
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">Location:</span> Fatulla, Narayanganj
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-slate-900/90 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300 ring-1 ring-slate-700/80">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

export default App
