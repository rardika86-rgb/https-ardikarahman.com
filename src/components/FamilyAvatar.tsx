interface FamilyAvatarProps {
  memberId: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASSES = {
  sm: 'w-11 h-11',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
};

export function FamilyAvatar({ memberId, size = 'md' }: FamilyAvatarProps) {
  const sizeClass = SIZE_CLASSES[size];

  const renderFace = () => {
    switch (memberId) {
      case 'grandfather':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
            <circle cx="32" cy="54" r="18" fill="#0284C7" />
            <circle cx="32" cy="29" r="14" fill="#FDE6D2" />
            {/* White hair & mustache */}
            <path d="M18 27c0-9 6-14 14-14s14 5 14 14c-2-5-7-7-14-7s-12 2-14 7z" fill="#E2E8F0" />
            <path d="M25 36c3-2 11-2 14 0" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Glasses */}
            <circle cx="26" cy="29" r="4" stroke="#334155" strokeWidth="1.6" fill="none" />
            <circle cx="38" cy="29" r="4" stroke="#334155" strokeWidth="1.6" fill="none" />
            <line x1="30" y1="29" x2="34" y2="29" stroke="#334155" strokeWidth="1.6" />
            <circle cx="26" cy="29" r="1.2" fill="#0F172A" />
            <circle cx="38" cy="29" r="1.2" fill="#0F172A" />
            <path d="M29 39c2 1.5 4 1.5 6 0" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'grandmother':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#FEF3C7" />
            <circle cx="32" cy="54" r="18" fill="#D97706" />
            {/* Bun & hijab/hair */}
            <circle cx="32" cy="14" r="6" fill="#CBD5E1" />
            <circle cx="32" cy="29" r="14" fill="#FDE6D2" />
            <path d="M18 28c0-9 6-14 14-14s14 5 14 14c-3-4-8-6-14-6s-11 2-14 6z" fill="#CBD5E1" />
            <circle cx="26" cy="29" r="1.5" fill="#0F172A" />
            <circle cx="38" cy="29" r="1.5" fill="#0F172A" />
            <circle cx="22" cy="33" r="2.2" fill="#FDA4AF" opacity="0.6" />
            <circle cx="42" cy="33" r="2.2" fill="#FDA4AF" opacity="0.6" />
            <path d="M28 36c2.5 2 5.5 2 8 0" stroke="#9A3412" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'father':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#DBEAFE" />
            <circle cx="32" cy="54" r="18" fill="#1E40AF" />
            <circle cx="32" cy="29" r="14" fill="#FCD9B6" />
            <path d="M18 27c0-9 6-14 14-14s14 5 14 14c-3-4-8-6-14-6s-11 2-14 6z" fill="#1E293B" />
            <circle cx="26" cy="29" r="1.6" fill="#0F172A" />
            <circle cx="38" cy="29" r="1.6" fill="#0F172A" />
            <path d="M27 36c3 2.5 7 2.5 10 0" stroke="#7C2D12" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'mother':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#FCE7F3" />
            <path d="M14 54c2-11 8-17 18-17s16 6 18 17z" fill="#BE185D" />
            <path d="M17 32c0-11 7-18 15-18s15 7 15 18v10H17V32z" fill="#DB2777" />
            <circle cx="32" cy="30" r="12" fill="#FDE6D2" />
            <circle cx="27" cy="29" r="1.5" fill="#0F172A" />
            <circle cx="37" cy="29" r="1.5" fill="#0F172A" />
            <circle cx="23" cy="33" r="2" fill="#FDA4AF" opacity="0.65" />
            <circle cx="41" cy="33" r="2" fill="#FDA4AF" opacity="0.65" />
            <path d="M28 35c2.5 2 5.5 2 8 0" stroke="#9A3412" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'uncle':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#D1FAE5" />
            <circle cx="32" cy="54" r="18" fill="#047857" />
            <circle cx="32" cy="29" r="14" fill="#F6C8A0" />
            <path d="M18 26c1-8 6-13 14-13s13 5 14 13c-4-4-8-5-14-5s-10 1-14 5z" fill="#334155" />
            <circle cx="26" cy="29" r="1.6" fill="#0F172A" />
            <circle cx="38" cy="29" r="1.6" fill="#0F172A" />
            <path d="M28 36c2.5 2 5.5 2 8 0" stroke="#7C2D12" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'aunt':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#EDE9FE" />
            <circle cx="32" cy="54" r="18" fill="#6D28D9" />
            <path d="M16 32c0-10 7-18 16-18s16 8 16 18v8H16v-8z" fill="#4C1D95" />
            <circle cx="32" cy="30" r="12" fill="#FDE6D2" />
            <circle cx="27" cy="29" r="1.5" fill="#0F172A" />
            <circle cx="37" cy="29" r="1.5" fill="#0F172A" />
            <path d="M28 35c2.5 2 5.5 2 8 0" stroke="#9A3412" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'brother':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
            <circle cx="32" cy="54" r="17" fill="#0369A1" />
            <circle cx="32" cy="30" r="13" fill="#FCD9B6" />
            <path d="M19 26c1-7 6-11 13-11s12 4 13 11c-3-3-8-4-13-4s-10 1-13 4z" fill="#0F172A" />
            <circle cx="27" cy="30" r="1.5" fill="#0F172A" />
            <circle cx="37" cy="30" r="1.5" fill="#0F172A" />
            <path d="M28 36c2.5 2 5.5 2 8 0" stroke="#7C2D12" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'sister':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#FFE4E6" />
            <circle cx="32" cy="54" r="17" fill="#E11D48" />
            <circle cx="19" cy="22" r="5" fill="#1E293B" />
            <circle cx="45" cy="22" r="5" fill="#1E293B" />
            <circle cx="32" cy="30" r="13" fill="#FDE6D2" />
            <path d="M19 27c1-7 6-11 13-11s12 4 13 11c-3-3-8-4-13-4s-10 1-13 4z" fill="#1E293B" />
            <circle cx="27" cy="30" r="1.5" fill="#0F172A" />
            <circle cx="37" cy="30" r="1.5" fill="#0F172A" />
            <path d="M28 36c2.5 2 5.5 2 8 0" stroke="#9A3412" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'me':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#FEF9C3" />
            <circle cx="32" cy="54" r="17" fill="#CA8A04" />
            <circle cx="32" cy="30" r="13" fill="#FDE6D2" />
            <path d="M19 26c1-8 6-12 13-12s12 4 13 12c-4-3-8-4-13-4s-9 1-13 4z" fill="#1E293B" />
            <circle cx="27" cy="30" r="1.6" fill="#0F172A" />
            <circle cx="37" cy="30" r="1.6" fill="#0F172A" />
            <path d="M27 36c3 2.5 7 2.5 10 0" stroke="#9A3412" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'cousin':
      default:
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#CCFBF1" />
            <circle cx="32" cy="54" r="17" fill="#0D9488" />
            <circle cx="32" cy="30" r="13" fill="#FCD9B6" />
            <path d="M19 26c2-7 6-11 13-11s11 4 13 11c-4-3-8-4-13-4s-9 1-13 4z" fill="#334155" />
            <circle cx="27" cy="30" r="1.5" fill="#0F172A" />
            <circle cx="37" cy="30" r="1.5" fill="#0F172A" />
            <path d="M28 36c2.5 2 5.5 2 8 0" stroke="#7C2D12" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        );
    }
  };

  return (
    <div className={`${sizeClass} shrink-0 rounded-full overflow-hidden border border-slate-200 bg-white`}>
      {renderFace()}
    </div>
  );
}
