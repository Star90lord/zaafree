import { Link } from 'react-router-dom'
import { footerSections, legalLinks } from '../../data/siteContent'

function FooterLogo() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 shrink-0"
      role="img"
      aria-label="Zaafree logo"
    >
      <defs>
        <linearGradient id="zaafree-footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="50%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="18" fill="#0F172A" />
      <path
        d="M18 19h28L27.5 33h18.5v12H18l18.5-14H18V19Z"
        fill="url(#zaafree-footer-gradient)"
      />
      <path
        d="M42 14 21 49"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.78"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,1fr)_minmax(0,2fr)]">
          <div className="flex items-start gap-4">
            <FooterLogo />
            <div>
              <p className="text-2xl font-black tracking-tight text-slate-950">Zaafree</p>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                Premium storefront styling with fast discovery, clear product
                presentation, and a modern shopping experience built in React and
                Tailwind.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerSections.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  {column.title}
                </h3>
                <div className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.path}
                      className="block text-sm text-slate-700 hover:text-slate-950"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Zaafree. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link.label} to={link.path} className="hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
