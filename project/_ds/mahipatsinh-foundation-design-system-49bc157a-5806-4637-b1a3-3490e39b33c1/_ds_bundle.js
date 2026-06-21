/* @ds-bundle: {"format":3,"namespace":"MahipatsinhFoundationDesignSystem_49bc15","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Pagination","sourcePath":"components/data-display/Pagination.jsx"},{"name":"StatCard","sourcePath":"components/data-display/StatCard.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Loader","sourcePath":"components/feedback/Loader.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"93c82e884781","components/data-display/Badge.jsx":"b7ab439bc7e0","components/data-display/Card.jsx":"3a4cfa4ae88f","components/data-display/Pagination.jsx":"22b0b3e557d8","components/data-display/StatCard.jsx":"7ead61877567","components/feedback/EmptyState.jsx":"2ca28bf7de70","components/feedback/Loader.jsx":"b830a6fb5d9f","components/feedback/Modal.jsx":"ba7963b1d238","components/feedback/Toast.jsx":"1e5587be3149","components/forms/Input.jsx":"b858a815b8c8","components/forms/Select.jsx":"2d58a3bfbac7","components/forms/Textarea.jsx":"1612d04690d9","ui_kits/admin/Charts.jsx":"957fd1d517f2","ui_kits/admin/Dashboard.jsx":"ae7b05f7e096","ui_kits/admin/Donations.jsx":"6149bb836db1","ui_kits/admin/Icons.jsx":"f7d9d81f7233","ui_kits/admin/Login.jsx":"159be9acb3dd","ui_kits/admin/Sidebar.jsx":"e51dcd2aa652","ui_kits/admin/Topbar.jsx":"2655b1ea8bdb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MahipatsinhFoundationDesignSystem_49bc15 = window.MahipatsinhFoundationDesignSystem_49bc15 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
/**
 * Button — primary action control. Orange gradient for primary, neutral
 * outline for secondary, plus danger / success / ghost variants.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  type = 'button',
  icon = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  className = '',
  style = {}
}) {
  const sizes = {
    sm: {
      padding: '0.375rem 0.75rem',
      fontSize: 'var(--text-xs)',
      radius: 'var(--radius-lg)',
      gap: '0.375rem'
    },
    md: {
      padding: '0.5rem 1rem',
      fontSize: 'var(--text-base)',
      radius: 'var(--radius-xl)',
      gap: '0.5rem'
    },
    lg: {
      padding: '0.625rem 1.5rem',
      fontSize: 'var(--text-md)',
      radius: 'var(--radius-xl)',
      gap: '0.5rem'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    width: fullWidth ? '100%' : undefined,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    borderRadius: s.radius,
    border: '1px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.55 : 1,
    transition: 'all var(--dur-slow) var(--ease-std)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      color: 'var(--text-on-brand)',
      background: 'var(--primary-gradient)',
      boxShadow: 'var(--shadow-btn)'
    },
    secondary: {
      color: 'var(--text-body)',
      background: 'var(--white)',
      borderColor: 'var(--border-base)'
    },
    danger: {
      color: 'var(--white)',
      background: 'var(--red-500)',
      boxShadow: '0 2px 8px rgba(239,68,68,0.25)'
    },
    success: {
      color: 'var(--white)',
      background: 'var(--green-600)',
      boxShadow: '0 2px 8px rgba(5,150,105,0.25)'
    },
    ghost: {
      color: 'var(--text-muted)',
      background: 'transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const onEnter = e => {
    if (disabled || loading) return;
    if (variant === 'primary') {
      e.currentTarget.style.background = 'var(--primary-gradient-hover)';
      e.currentTarget.style.boxShadow = 'var(--shadow-btn-hover)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--surface-hover)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.background = 'var(--surface-hover)';
      e.currentTarget.style.color = 'var(--text-body)';
    } else {
      e.currentTarget.style.filter = 'brightness(0.94)';
    }
  };
  const onLeave = e => {
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.boxShadow = v.boxShadow || 'none';
    e.currentTarget.style.borderColor = v.borderColor || 'transparent';
    e.currentTarget.style.color = v.color;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.filter = 'none';
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    className: className,
    style: {
      ...base,
      ...v,
      ...style
    }
  }, loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.875rem',
      height: '0.875rem',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      opacity: 0.8,
      animation: 'mf-spin 0.6s linear infinite'
    }
  }), !loading && icon, children, !loading && iconRight, /*#__PURE__*/React.createElement("style", null, `@keyframes mf-spin { to { transform: rotate(360deg); } }`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
const TONES = {
  success: ['var(--status-success-fg)', 'var(--status-success-bg)', 'rgba(5,150,105,0.18)'],
  info: ['var(--status-info-fg)', 'var(--status-info-bg)', 'rgba(37,99,235,0.18)'],
  warn: ['var(--status-warn-fg)', 'var(--status-warn-bg)', 'rgba(217,119,6,0.20)'],
  danger: ['var(--status-danger-fg)', 'var(--status-danger-bg)', 'rgba(220,38,38,0.18)'],
  brand: ['var(--status-brand-fg)', 'var(--status-brand-bg)', 'rgba(255,90,31,0.20)'],
  neutral: ['var(--status-neutral-fg)', 'var(--status-neutral-bg)', 'rgba(107,114,128,0.20)'],
  special: ['var(--status-special-fg)', 'var(--status-special-bg)', 'rgba(124,58,237,0.18)']
};

/** Maps domain status strings to a tone (mirrors the admin app's status maps). */
const STATUS_TONE = {
  SUCCESS: 'success',
  PAID: 'success',
  ACTIVE: 'success',
  APPROVED: 'success',
  PUBLISHED: 'success',
  SENT: 'success',
  REPLIED: 'success',
  PENDING: 'warn',
  PAUSED: 'warn',
  IN_DISCUSSION: 'warn',
  RETRYING: 'warn',
  FAILED: 'danger',
  REJECTED: 'danger',
  BLOCKED: 'danger',
  DELETED: 'danger',
  ARCHIVED: 'danger',
  CERTIFICATE_GENERATED: 'info',
  CONTACTED: 'info',
  READ: 'info',
  COMPLETED: 'brand',
  REFUNDED: 'special',
  CREATED: 'neutral',
  CANCELLED: 'neutral',
  DRAFT: 'neutral',
  CLOSED: 'neutral',
  EXPIRED: 'neutral',
  SKIPPED: 'neutral'
};

/**
 * Pill badge. Either pass an explicit `tone`, or pass `status` (a domain
 * enum like PAID / FAILED / PENDING) and the tone is inferred + humanized.
 */
function Badge({
  children,
  tone,
  status,
  icon,
  dot = false,
  className = '',
  style = {}
}) {
  const t = tone || status && STATUS_TONE[status] || 'neutral';
  const [fg, bg, ring] = TONES[t] || TONES.neutral;
  const label = children ?? (status ? status.replace(/_/g, ' ') : '');
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3125rem',
      padding: '0.125rem 0.625rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.5,
      color: fg,
      background: bg,
      border: `1px solid ${ring}`,
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      textTransform: 'capitalize',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.375rem',
      height: '0.375rem',
      borderRadius: '50%',
      background: fg
    }
  }), icon, label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
/** Surface container: white, 16px radius, soft layered shadow, hairline border. */
function Card({
  children,
  className = '',
  padding = true,
  hover = false,
  onClick,
  style = {}
}) {
  const [h, setH] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => (hover || clickable) && setH(true),
    onMouseLeave: () => setH(false),
    className: className,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: h ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      padding: padding ? 'var(--space-5)' : 0,
      cursor: clickable ? 'pointer' : 'default',
      transform: h && (hover || clickable) ? 'translateY(-1px)' : 'none',
      transition: 'box-shadow var(--dur-slow) var(--ease-std), transform var(--dur-slow) var(--ease-std)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Pagination.jsx
try { (() => {
/** Records-range label + windowed page buttons. Hidden when totalPages <= 1. */
function Pagination({
  page = 0,
  totalPages = 0,
  totalElements = 0,
  size = 10,
  onChange,
  style = {}
}) {
  if (!totalPages || totalPages <= 1) return null;
  const start = page * size + 1;
  const end = Math.min((page + 1) * size, totalElements);
  const win = Array.from({
    length: Math.min(5, totalPages)
  }, (_, i) => Math.max(0, Math.min(totalPages - 5, page - 2)) + i);
  const arrow = (dir, disabled, to) => /*#__PURE__*/React.createElement("button", {
    onClick: () => !disabled && onChange?.(to),
    disabled: disabled,
    style: {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-muted)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.3 : 1,
      transition: 'background var(--dur-base)'
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.background = 'var(--surface-hover)'),
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6',
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.875rem 1.25rem',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)',
      borderBottomLeftRadius: 'var(--radius-2xl)',
      borderBottomRightRadius: 'var(--radius-2xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-faint)'
    }
  }, "Showing ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, start, "\u2013", end), " of", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, totalElements.toLocaleString('en-IN')), " records"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    }
  }, arrow('prev', page === 0, page - 1), win.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => onChange?.(p),
    style: {
      width: '2rem',
      height: '2rem',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      cursor: 'pointer',
      transition: 'all var(--dur-base)',
      color: p === page ? 'var(--text-on-brand)' : 'var(--text-muted)',
      background: p === page ? 'var(--primary-gradient)' : 'transparent',
      boxShadow: p === page ? 'var(--shadow-xs)' : 'none'
    },
    onMouseEnter: e => {
      if (p !== page) e.currentTarget.style.background = 'var(--surface-hover)';
    },
    onMouseLeave: e => {
      if (p !== page) e.currentTarget.style.background = 'transparent';
    }
  }, p + 1)), arrow('next', page >= totalPages - 1, page + 1)));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatCard.jsx
try { (() => {
const COLOR = {
  orange: ['rgba(255,90,31,0.12)', 'var(--orange-500)'],
  green: ['rgba(16,185,129,0.12)', 'var(--green-600)'],
  blue: ['rgba(59,130,246,0.12)', 'var(--blue-600)'],
  purple: ['rgba(139,92,246,0.12)', 'var(--purple-600)'],
  red: ['rgba(239,68,68,0.12)', 'var(--red-600)']
};

/** KPI / metric card: small uppercase title, big tabular value, tinted icon tile. */
function StatCard({
  title,
  value,
  icon,
  description,
  color = 'orange',
  loading = false,
  onClick,
  style = {}
}) {
  const [bg, fg] = COLOR[color] || COLOR.orange;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: true,
    hover: !!onClick,
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1.75rem',
      width: '5rem',
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-md)',
      marginTop: '0.5rem',
      animation: 'mf-pulse 1.4s ease-in-out infinite'
    }
  }) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0.375rem 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1.1
    }
  }, value ?? '—'), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0.25rem 0 0',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-faint)'
    }
  }, description)), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '2.75rem',
      height: '2.75rem',
      flexShrink: 0,
      borderRadius: 'var(--radius-xl)',
      background: bg,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: h ? 'scale(1.08)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-std)'
    }
  }, icon)), /*#__PURE__*/React.createElement("style", null, `@keyframes mf-pulse { 0%,100%{opacity:1} 50%{opacity:0.45} }`));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** Centered empty / zero-state for tables and lists. Icon should be a lucide node. */
function EmptyState({
  icon,
  title = 'No data found',
  description,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: 'var(--radius-2xl)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-sunken)',
      color: 'var(--gray-300)',
      marginBottom: '1rem'
    }
  }, icon), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0.375rem 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-faint)',
      maxWidth: '24rem'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.25rem'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Loader.jsx
try { (() => {
const SIZES = {
  sm: '1rem',
  md: '2rem',
  lg: '3rem'
};

/** Brand spinner — orange arc on a light track. */
function Loader({
  size = 'md',
  center = false,
  label,
  style = {}
}) {
  const dim = SIZES[size] || SIZES.md;
  const spinner = /*#__PURE__*/React.createElement("div", {
    style: {
      width: dim,
      height: dim,
      border: '2px solid var(--orange-100)',
      borderTopColor: 'var(--primary)',
      borderRadius: '50%',
      animation: 'mf-spin 0.6s linear infinite',
      ...style
    }
  });
  if (!center && !label) return /*#__PURE__*/React.createElement(React.Fragment, null, spinner, /*#__PURE__*/React.createElement("style", null, `@keyframes mf-spin{to{transform:rotate(360deg)}}`));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: center ? '4rem 0' : 0
    }
  }, spinner, label && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-faint)'
    }
  }, label), /*#__PURE__*/React.createElement("style", null, `@keyframes mf-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Loader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loader.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
const WIDTHS = {
  sm: '28rem',
  md: '32rem',
  lg: '42rem',
  xl: '56rem'
};

/** Centered modal with navy-tinted blurred scrim, header, scrollable body, footer. */
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => e.target === e.currentTarget && onClose?.(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '4rem 1rem 1rem',
      background: 'var(--scrim)',
      backdropFilter: 'var(--scrim-blur)',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: WIDTHS[size] || WIDTHS.md,
      background: 'var(--white)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-modal)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '85vh',
      animation: 'mf-modal-in var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 1.5rem',
      borderBottom: '1px solid var(--divider)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      transition: 'all var(--dur-base)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-hover)';
      e.currentTarget.style.color = 'var(--text-body)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-faint)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.5rem',
      overflow: 'auto',
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1rem 1.5rem',
      borderTop: '1px solid var(--divider)',
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '0.5rem'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes mf-modal-in { from { opacity:0; transform: translateY(8px) scale(0.98); } to { opacity:1; transform: none; } }`));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const CFG = {
  success: ['var(--green-50)', 'var(--green-700)', 'var(--green-100, #D1FAE5)', 'var(--green-600)', 'M20 6L9 17l-5-5'],
  error: ['var(--red-50)', 'var(--red-700, #B91C1C)', '#FEE2E2', 'var(--red-600)', 'M18 6L6 18M6 6l12 12'],
  warn: ['var(--amber-50)', 'var(--amber-700)', '#FEF3C7', 'var(--amber-600)', 'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z'],
  info: ['var(--blue-50)', 'var(--blue-700)', '#DBEAFE', 'var(--blue-600)', 'M12 16v-4M12 8h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z']
};

/**
 * A single toast row. Pair with a top-right fixed stack (see prompt).
 * Slides in from the right; click to dismiss.
 */
function Toast({
  type = 'success',
  message,
  onDismiss,
  style = {}
}) {
  const [bg, fg, iconBg, iconFg, path] = CFG[type] || CFG.success;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onDismiss,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      width: '20rem',
      padding: '0.75rem 1rem',
      background: bg,
      color: fg,
      border: `1px solid ${iconBg}`,
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-dropdown)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      animation: 'mf-toast-in 0.22s var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: '50%',
      background: iconBg,
      color: iconFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '0.0625rem'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: path,
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      lineHeight: 'var(--leading-snug)'
    }
  }, message), /*#__PURE__*/React.createElement("style", null, `@keyframes mf-toast-in { from { opacity:0; transform: translateX(24px); } to { opacity:1; transform:none; } }`));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, required marker, and error state. */
function Input({
  label,
  error,
  required,
  hint,
  className = '',
  style = {},
  id,
  ...props
}) {
  const inputId = id || (label ? `mf-in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      marginLeft: '0.125rem'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      props.onBlur?.(e);
    },
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--white)',
      border: `1px solid ${error ? 'var(--red-500)' : focused ? 'var(--primary)' : 'var(--border-base)'}`,
      borderRadius: 'var(--radius-xl)',
      padding: '0.625rem 0.875rem',
      outline: 'none',
      boxShadow: focused ? `0 0 0 3px ${error ? 'var(--red-50)' : 'var(--primary-ring)'}` : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, props)), error ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--red-500)',
      margin: 0
    }
  }, error) : hint && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-faint)',
      margin: 0
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input. Pass options as {value,label} or strings. */
function Select({
  label,
  error,
  required,
  options = [],
  placeholder = 'Select…',
  className = '',
  style = {},
  id,
  value,
  ...props
}) {
  const selId = id || (label ? `mf-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      marginLeft: '0.125rem'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onFocus: e => {
      setFocused(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      props.onBlur?.(e);
    },
    style: {
      width: '100%',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--text-strong)' : 'var(--text-faint)',
      background: 'var(--white)',
      border: `1px solid ${error ? 'var(--red-500)' : focused ? 'var(--primary)' : 'var(--border-base)'}`,
      borderRadius: 'var(--radius-xl)',
      padding: '0.625rem 2.25rem 0.625rem 0.875rem',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focused ? `0 0 0 3px var(--primary-ring)` : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, props), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = o.value ?? o;
    const lab = o.label ?? o;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: 'absolute',
      right: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), error && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--red-500)',
      margin: 0
    }
  }, error));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input. Matches Input styling; no resize handle by default. */
function Textarea({
  label,
  error,
  required,
  rows = 4,
  className = '',
  style = {},
  id,
  ...props
}) {
  const taId = id || (label ? `mf-ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      marginLeft: '0.125rem'
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    onFocus: e => {
      setFocused(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      props.onBlur?.(e);
    },
    style: {
      width: '100%',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--white)',
      border: `1px solid ${error ? 'var(--red-500)' : focused ? 'var(--primary)' : 'var(--border-base)'}`,
      borderRadius: 'var(--radius-xl)',
      padding: '0.625rem 0.875rem',
      outline: 'none',
      lineHeight: 'var(--leading-normal)',
      boxShadow: focused ? `0 0 0 3px var(--primary-ring)` : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, props)), error && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--red-500)',
      margin: 0
    }
  }, error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Charts.jsx
try { (() => {
// Admin kit — lightweight SVG charts (cosmetic recreations of the recharts views).
(function () {
  function AreaChart({
    data = [40, 52, 48, 65, 72, 60, 85, 78, 92, 88, 75, 98],
    color = 'var(--orange-500)'
  }) {
    const W = 100,
      H = 100,
      max = Math.max(...data);
    const pts = data.map((v, i) => [i / (data.length - 1) * W, H - v / max * (H - 8)]);
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    const area = `${line} L${W},${H} L0,${H} Z`;
    const id = 'g' + Math.random().toString(36).slice(2, 7);
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${W} ${H}`,
      preserveAspectRatio: "none",
      style: {
        width: '100%',
        height: 200
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: id,
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "var(--orange-500)",
      stopOpacity: "0.22"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "var(--orange-500)",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: `url(#${id})`
    }), /*#__PURE__*/React.createElement("path", {
      d: line,
      fill: "none",
      stroke: color,
      strokeWidth: "1.6",
      vectorEffect: "non-scaling-stroke",
      strokeLinejoin: "round",
      strokeLinecap: "round"
    }));
  }
  function BarChart({
    data = [{
      l: 'Education',
      v: 92
    }, {
      l: 'Health',
      v: 68
    }, {
      l: 'Relief',
      v: 54
    }, {
      l: 'Women',
      v: 41
    }, {
      l: 'Animals',
      v: 30
    }]
  }) {
    const max = Math.max(...data.map(d => d.v));
    const colors = ['var(--orange-500)', 'var(--blue-500)', 'var(--green-500)', 'var(--purple-500)', 'var(--amber-500)'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 16,
        height: 200,
        padding: '8px 4px 0'
      }
    }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: d.l,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        height: '100%',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--text-body)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, d.v), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 44,
        height: `${d.v / max * 100}%`,
        background: colors[i % colors.length],
        borderRadius: '6px 6px 0 0',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--text-faint)',
        whiteSpace: 'nowrap'
      }
    }, d.l))));
  }
  function DonutChart({
    data = [{
      l: 'UPI',
      v: 44,
      c: 'var(--orange-500)'
    }, {
      l: 'Razorpay',
      v: 28,
      c: 'var(--blue-500)'
    }, {
      l: 'Cash',
      v: 16,
      c: 'var(--green-500)'
    }, {
      l: 'Cheque',
      v: 12,
      c: 'var(--purple-500)'
    }]
  }) {
    const total = data.reduce((s, d) => s + d.v, 0);
    let acc = 0;
    const R = 38,
      C = 2 * Math.PI * R;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        height: 200,
        padding: '0 8px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      style: {
        width: 150,
        height: 150
      }
    }, data.map(d => {
      const frac = d.v / total,
        dash = frac * C,
        off = -acc * C;
      acc += frac;
      return /*#__PURE__*/React.createElement("circle", {
        key: d.l,
        cx: "50",
        cy: "50",
        r: R,
        fill: "none",
        stroke: d.c,
        strokeWidth: "14",
        strokeDasharray: `${dash} ${C - dash}`,
        strokeDashoffset: off,
        transform: "rotate(-90 50 50)"
      });
    }), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "48",
      textAnchor: "middle",
      style: {
        fontSize: 13,
        fontWeight: 700,
        fill: 'var(--text-strong)'
      }
    }, total, "%"), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "60",
      textAnchor: "middle",
      style: {
        fontSize: 6,
        fill: 'var(--text-faint)'
      }
    }, "tracked")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, data.map(d => /*#__PURE__*/React.createElement("div", {
      key: d.l,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 3,
        background: d.c
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-body)',
        minWidth: 70
      }
    }, d.l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, d.v, "%")))));
  }
  window.AdminCharts = {
    AreaChart,
    BarChart,
    DonutChart
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Charts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Dashboard.jsx
try { (() => {
// Admin kit — Dashboard screen (KPIs, stat grids, charts, top donors, recent donations).
(function () {
  const NS = window.MahipatsinhFoundationDesignSystem_49bc15;
  const {
    Card,
    StatCard,
    Badge,
    Button
  } = NS;
  const Icon = window.Icon;
  const {
    AreaChart,
    BarChart,
    DonutChart
  } = window.AdminCharts;
  const Eyebrow = ({
    children
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--text-muted)'
    }
  }, children);
  const ChartCard = ({
    title,
    subtitle,
    children
  }) => /*#__PURE__*/React.createElement(Card, {
    padding: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, subtitle)), children);
  const TOP_DONORS = [['Ramesh Shah', '+91 98250 11223', '₹4,50,000'], ['Anjali Mehta', '+91 99041 55678', '₹3,20,000'], ['Kiran Patel', '+91 98795 33445', '₹2,85,000'], ['Sunita Desai', '+91 90991 77882', '₹1,95,000'], ['Vikram Joshi', '+91 97250 99001', '₹1,40,000']];
  const RECENT = [['DN-2024-0182', 'Anjali Mehta', '+91 99041 55678', 'ONE_TIME', '₹25,000', 'PAID', '14 Jun 2026'], ['DN-2024-0181', 'Kiran Patel', '+91 98795 33445', 'RECURRING', '₹5,000', 'PAID', '14 Jun 2026'], ['DN-2024-0180', 'Donor (QR)', '—', 'QR', '₹1,100', 'PENDING', '13 Jun 2026'], ['DN-2024-0179', 'Ramesh Shah', '+91 98250 11223', 'OFFLINE', '₹50,000', 'PAID', '13 Jun 2026'], ['DN-2024-0178', 'Sunita Desai', '+91 90991 77882', 'ONE_TIME', '₹10,000', 'FAILED', '12 Jun 2026']];
  const typeTone = {
    RECURRING: ['var(--blue-600)', 'var(--blue-50)'],
    QR: ['var(--purple-600)', 'var(--purple-50)'],
    OFFLINE: ['var(--gray-600)', 'var(--gray-100)'],
    ONE_TIME: ['var(--orange-600)', 'var(--orange-50)']
  };
  function Dashboard({
    onNav
  }) {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      const t = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(t);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, "Dashboard"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "Mahipatsinh Foundation \u2014 Overview")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: '#fff',
        border: '1px solid var(--border-base)',
        borderRadius: 'var(--radius-xl)',
        padding: '8px 12px'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "From"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      defaultValue: "2026-04-01",
      style: {
        fontSize: 13,
        border: 'none',
        outline: 'none',
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-body)'
      }
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "To"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      defaultValue: "2026-06-17",
      style: {
        fontSize: 13,
        border: 'none',
        outline: 'none',
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-body)'
      }
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "refresh",
        size: 14
      }),
      onClick: () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 600);
      }
    }, "Refresh"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Key Performance Indicators"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(KpiTile, {
      icon: "calendarCheck",
      tint: "var(--green-50)",
      color: "var(--green-600)",
      label: "Today's Donations",
      value: "\u20B986,200",
      sub: "7 donations",
      loading: loading
    }), /*#__PURE__*/React.createElement(KpiTile, {
      icon: "calendarDays",
      tint: "var(--blue-50)",
      color: "var(--blue-600)",
      label: "This Month Revenue",
      value: "\u20B99,42,500",
      loading: loading
    }), /*#__PURE__*/React.createElement(KpiTile, {
      icon: "rupee",
      tint: "var(--orange-50)",
      color: "var(--orange-500)",
      label: "Financial Year Revenue",
      value: "\u20B962,18,400",
      loading: loading
    }), /*#__PURE__*/React.createElement(KpiTile, {
      icon: "alert",
      tint: "var(--red-50)",
      color: "var(--red-500)",
      label: "Missing PAN",
      value: "38",
      sub: "donors need PAN for 80G",
      subColor: "var(--red-400, #f87171)",
      loading: loading,
      onClick: () => onNav('donors')
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Donation Overview"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      title: "Total Donations",
      value: "\u20B962,18,400",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "rupee",
        size: 20
      }),
      color: "orange",
      loading: loading,
      description: "All successful donations"
    }), /*#__PURE__*/React.createElement(StatCard, {
      title: "Online Donations",
      value: "\u20B941,02,000",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "trending",
        size: 20
      }),
      color: "blue",
      loading: loading,
      description: "Website / Razorpay"
    }), /*#__PURE__*/React.createElement(StatCard, {
      title: "Offline Donations",
      value: "\u20B918,90,400",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "badgeCheck",
        size: 20
      }),
      color: "green",
      loading: loading,
      description: "Cash / Cheque / NEFT"
    }), /*#__PURE__*/React.createElement(StatCard, {
      title: "Cash Donations",
      value: "\u20B92,26,000",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "rupee",
        size: 20
      }),
      color: "purple",
      loading: loading
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(ChartCard, {
      title: "Daily Donations",
      subtitle: "Donation trend over time"
    }, /*#__PURE__*/React.createElement(AreaChart, null)), /*#__PURE__*/React.createElement(ChartCard, {
      title: "Payment Mode Breakdown",
      subtitle: "Distribution by channel"
    }, /*#__PURE__*/React.createElement(DonutChart, null))), /*#__PURE__*/React.createElement(ChartCard, {
      title: "Campaign-wise Collection",
      subtitle: "Top campaigns by amount raised (\u20B9 lakh)"
    }, /*#__PURE__*/React.createElement(BarChart, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trophy",
      size: 14,
      color: "var(--amber-500)"
    }), " Top 5 Donors"), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav('rep-donors'),
      style: {
        border: 'none',
        background: 'none',
        fontSize: 12,
        color: 'var(--primary)',
        cursor: 'pointer',
        fontWeight: 500
      }
    }, "Full report \u2192")), /*#__PURE__*/React.createElement(Card, {
      padding: false
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: 'var(--surface-sunken)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Th, {
      style: {
        width: 56,
        textAlign: 'center'
      }
    }, "Rank"), /*#__PURE__*/React.createElement(Th, null, "Donor Name"), /*#__PURE__*/React.createElement(Th, null, "Phone"), /*#__PURE__*/React.createElement(Th, {
      style: {
        textAlign: 'right'
      }
    }, "Total Donated"))), /*#__PURE__*/React.createElement("tbody", null, TOP_DONORS.map((d, i) => /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        borderBottom: i < TOP_DONORS.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Td, {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        borderRadius: '50%',
        fontSize: 11,
        fontWeight: 700,
        color: i < 3 ? '#fff' : 'var(--text-muted)',
        background: i === 0 ? 'var(--amber-500)' : i === 1 ? 'var(--gray-300)' : i === 2 ? 'var(--orange-300)' : 'var(--gray-100)'
      }
    }, i + 1)), /*#__PURE__*/React.createElement(Td, {
      style: {
        fontWeight: 500,
        color: 'var(--text-strong)'
      }
    }, d[0]), /*#__PURE__*/React.createElement(Td, {
      style: {
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, d[1]), /*#__PURE__*/React.createElement(Td, {
      style: {
        textAlign: 'right',
        fontWeight: 600,
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-mono)'
      }
    }, d[2]))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Recent Donations"), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav('donations'),
      style: {
        border: 'none',
        background: 'none',
        fontSize: 12,
        color: 'var(--primary)',
        cursor: 'pointer',
        fontWeight: 500
      }
    }, "View all \u2192")), /*#__PURE__*/React.createElement(Card, {
      padding: false
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: 'var(--surface-sunken)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Th, null, "Donation #"), /*#__PURE__*/React.createElement(Th, null, "Donor"), /*#__PURE__*/React.createElement(Th, null, "Type"), /*#__PURE__*/React.createElement(Th, null, "Amount"), /*#__PURE__*/React.createElement(Th, null, "Status"), /*#__PURE__*/React.createElement(Th, null, "Date"))), /*#__PURE__*/React.createElement("tbody", null, RECENT.map((d, i) => {
      const [fg, bg] = typeTone[d[3]] || typeTone.ONE_TIME;
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        style: {
          borderBottom: i < RECENT.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
          cursor: 'pointer'
        },
        onClick: () => onNav('donations'),
        onMouseEnter: e => e.currentTarget.style.background = 'var(--orange-50)',
        onMouseLeave: e => e.currentTarget.style.background = 'transparent'
      }, /*#__PURE__*/React.createElement(Td, {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, d[0]), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 500,
          color: 'var(--text-strong)'
        }
      }, d[1]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: 'var(--text-faint)'
        }
      }, d[2])), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: 9999,
          fontSize: 11,
          fontWeight: 600,
          color: fg,
          background: bg
        }
      }, d[3])), /*#__PURE__*/React.createElement(Td, {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)',
          fontFamily: 'var(--font-mono)'
        }
      }, d[4]), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
        status: d[5]
      })), /*#__PURE__*/React.createElement(Td, {
        style: {
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, d[6]));
    }))))));
  }
  function KpiTile({
    icon,
    tint,
    color,
    label,
    value,
    sub,
    subColor,
    loading,
    onClick
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      padding: true,
      hover: !!onClick,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-xl)',
        background: tint,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22,
      color: color
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        fontWeight: 500,
        color: 'var(--text-muted)'
      }
    }, label), loading ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: 22,
        width: 96,
        background: 'var(--gray-100)',
        borderRadius: 6,
        marginTop: 6
      }
    }) : /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-mono)'
      }
    }, value), sub && !loading && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontSize: 12,
        color: subColor || 'var(--text-faint)'
      }
    }, sub))));
  }
  const Th = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 16px',
      textAlign: 'left',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      ...style
    }
  }, children);
  const Td = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      color: 'var(--text-body)',
      ...style
    }
  }, children);
  window.AdminDashboard = Dashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Donations.jsx
try { (() => {
// Admin kit — Donations list (search, filters, table, pagination, detail modal).
(function () {
  const NS = window.MahipatsinhFoundationDesignSystem_49bc15;
  const {
    Card,
    Badge,
    Button,
    Pagination,
    Select,
    Modal,
    Input
  } = NS;
  const Icon = window.Icon;
  const ALL = [['DN-2024-0182', 'Anjali Mehta', '+91 99041 55678', 'ONE_TIME', 'UPI', '₹25,000', 'PAID', true, '14 Jun 2026'], ['DN-2024-0181', 'Kiran Patel', '+91 98795 33445', 'RECURRING', 'RAZORPAY', '₹5,000', 'PAID', true, '14 Jun 2026'], ['DN-2024-0180', 'Donor (QR)', '—', 'QR', 'QR', '₹1,100', 'PENDING', false, '13 Jun 2026'], ['DN-2024-0179', 'Ramesh Shah', '+91 98250 11223', 'OFFLINE', 'CHEQUE', '₹50,000', 'PAID', true, '13 Jun 2026'], ['DN-2024-0178', 'Sunita Desai', '+91 90991 77882', 'ONE_TIME', 'RAZORPAY', '₹10,000', 'FAILED', false, '12 Jun 2026'], ['DN-2024-0177', 'Vikram Joshi', '+91 97250 99001', 'ONE_TIME', 'UPI', '₹15,000', 'CERTIFICATE_GENERATED', true, '12 Jun 2026'], ['DN-2024-0176', 'Meera Nair', '+91 98860 22119', 'RECURRING', 'RAZORPAY', '₹2,500', 'PAID', true, '11 Jun 2026'], ['DN-2024-0175', 'Arjun Rao', '+91 99720 44556', 'OFFLINE', 'CASH', '₹7,000', 'COMPLETED', true, '11 Jun 2026'], ['DN-2024-0174', 'Priya Iyer', '+91 90080 66332', 'ONE_TIME', 'UPI', '₹3,200', 'REFUNDED', false, '10 Jun 2026'], ['DN-2024-0173', 'Sanjay Gupta', '+91 98180 77441', 'QR', 'QR', '₹500', 'PAID', false, '10 Jun 2026']];
  const typeTone = {
    RECURRING: ['var(--blue-600)', 'var(--blue-50)'],
    QR: ['var(--purple-600)', 'var(--purple-50)'],
    OFFLINE: ['var(--gray-600)', 'var(--gray-100)'],
    ONE_TIME: ['var(--orange-600)', 'var(--orange-50)']
  };
  function Donations() {
    const [filtersOpen, setFiltersOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [detail, setDetail] = React.useState(null);
    const [query, setQuery] = React.useState('');
    const rows = ALL.filter(r => !query || r[1].toLowerCase().includes(query.toLowerCase()) || r[0].toLowerCase().includes(query.toLowerCase()));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, "Donations"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "1,284 total records")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "filter",
        size: 14
      }),
      onClick: () => setFiltersOpen(f => !f)
    }, "Filters"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 14
      })
    }, "Offline Donation"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 14,
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    })), /*#__PURE__*/React.createElement("input", {
      value: query,
      onChange: e => {
        setQuery(e.target.value);
        setPage(0);
      },
      placeholder: "Search by donation #, donor name, or phone\u2026",
      style: {
        width: '100%',
        padding: '11px 14px 11px 42px',
        fontSize: 14,
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-strong)',
        background: '#fff',
        border: '1px solid var(--border-base)',
        borderRadius: 'var(--radius-xl)',
        outline: 'none'
      }
    })), filtersOpen && /*#__PURE__*/React.createElement(Card, {
      padding: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Payment Status",
      options: ['PENDING', 'SUCCESS', 'FAILED', 'REFUNDED']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Donation Type",
      options: ['ONE_TIME', 'RECURRING', 'OFFLINE', 'QR']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Payment Mode",
      options: ['RAZORPAY', 'CASH', 'CHEQUE', 'UPI']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "80G Certificate",
      options: ['Requested', 'Generated', 'Not requested']
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Clear"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Apply Filters"))), /*#__PURE__*/React.createElement(Card, {
      padding: false
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto'
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: 'var(--surface-sunken)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Th, null, "Donation #"), /*#__PURE__*/React.createElement(Th, null, "Donor"), /*#__PURE__*/React.createElement(Th, null, "Type"), /*#__PURE__*/React.createElement(Th, null, "Mode"), /*#__PURE__*/React.createElement(Th, null, "Amount"), /*#__PURE__*/React.createElement(Th, null, "80G"), /*#__PURE__*/React.createElement(Th, null, "Status"), /*#__PURE__*/React.createElement(Th, null, "Date"), /*#__PURE__*/React.createElement(Th, {
      style: {
        textAlign: 'right'
      }
    }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((d, i) => {
      const [fg, bg] = typeTone[d[3]] || typeTone.ONE_TIME;
      return /*#__PURE__*/React.createElement("tr", {
        key: d[0],
        style: {
          borderBottom: i < rows.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none'
        },
        onMouseEnter: e => e.currentTarget.style.background = 'var(--orange-50)',
        onMouseLeave: e => e.currentTarget.style.background = 'transparent'
      }, /*#__PURE__*/React.createElement(Td, {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, d[0]), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 500,
          color: 'var(--text-strong)'
        }
      }, d[1]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: 'var(--text-faint)',
          fontFamily: 'var(--font-mono)'
        }
      }, d[2])), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: 9999,
          fontSize: 11,
          fontWeight: 600,
          color: fg,
          background: bg
        }
      }, d[3])), /*#__PURE__*/React.createElement(Td, {
        style: {
          color: 'var(--text-muted)'
        }
      }, d[4]), /*#__PURE__*/React.createElement(Td, {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)',
          fontFamily: 'var(--font-mono)'
        }
      }, d[5]), /*#__PURE__*/React.createElement(Td, null, d[7] ? /*#__PURE__*/React.createElement(Icon, {
        name: "badgeCheck",
        size: 16,
        color: "var(--green-600)"
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-faint)'
        }
      }, "\u2014")), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
        status: d[6]
      })), /*#__PURE__*/React.createElement(Td, {
        style: {
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, d[8]), /*#__PURE__*/React.createElement(Td, {
        style: {
          textAlign: 'right'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          gap: 4
        }
      }, /*#__PURE__*/React.createElement(IconBtn, {
        name: "eye",
        title: "View",
        onClick: () => setDetail(d)
      }), /*#__PURE__*/React.createElement(IconBtn, {
        name: "fileText",
        title: "Receipt"
      }), /*#__PURE__*/React.createElement(IconBtn, {
        name: "download",
        title: "80G"
      }))));
    })))), /*#__PURE__*/React.createElement(Pagination, {
      page: page,
      totalPages: 129,
      totalElements: 1284,
      size: 10,
      onChange: setPage
    })), /*#__PURE__*/React.createElement(Modal, {
      open: !!detail,
      onClose: () => setDetail(null),
      title: "Donation Detail",
      size: "md",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setDetail(null)
      }, "Close"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 14
        })
      }, "Download Receipt"))
    }, detail && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 16,
        borderBottom: '1px solid var(--divider)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, detail[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontFamily: 'var(--font-mono)'
      }
    }, detail[5])), /*#__PURE__*/React.createElement(Badge, {
      status: detail[6]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px 32px'
      }
    }, [['Donor', detail[1]], ['Phone', detail[2]], ['Type', detail[3]], ['Payment Mode', detail[4]], ['80G Certificate', detail[7] ? 'Generated' : 'Not requested'], ['Date', detail[8]]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("dt", {
      style: {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        color: 'var(--text-faint)',
        fontWeight: 500,
        marginBottom: 2
      }
    }, l), /*#__PURE__*/React.createElement("dd", {
      style: {
        margin: 0,
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--text-strong)'
      }
    }, v)))))));
  }
  function IconBtn({
    name,
    title,
    onClick
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      title: title,
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        background: h ? 'var(--surface-hover)' : 'transparent',
        color: h ? 'var(--primary)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'all .15s'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: name,
      size: 15
    }));
  }
  const Th = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '14px 16px',
      textAlign: 'left',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
  const Td = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
  window.AdminDonations = Donations;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Donations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Icons.jsx
try { (() => {
// Lucide icon paths (subset used by the admin kit). Stroke 2, 24x24, rounded.
// Exposes window.Icon — <Icon name="dashboard" size={17} />
(function () {
  const P = {
    dashboard: '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    rupee: '<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10"/>',
    qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    chart: '<path d="M3 3v18h18"/><rect x="7" y="9" width="3" height="9" rx="0.5"/><rect x="13" y="5" width="3" height="13" rx="0.5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"/>',
    plus: '<path d="M5 12h14M12 5v14"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5M16 13H8M16 17H8M10 9H8"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    trending: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    badgeCheck: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    xCircle: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
    calendarCheck: '<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="m9 16 2 2 4-4"/>',
    calendarDays: '<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    userCircle: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.66a8 8 0 0 1 10 0"/>',
    menu: '<path d="M4 12h16M4 6h16M4 18h16"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
  };
  function Icon({
    name,
    size = 18,
    color = 'currentColor',
    strokeWidth = 2,
    style = {},
    className = ''
  }) {
    const inner = P[name];
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className,
      style: {
        flexShrink: 0,
        ...style
      },
      dangerouslySetInnerHTML: {
        __html: inner || ''
      }
    });
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Login.jsx
try { (() => {
// Admin kit — login screen.
(function () {
  const NS = window.MahipatsinhFoundationDesignSystem_49bc15;
  const {
    Button,
    Input
  } = NS;
  function Login({
    onLogin
  }) {
    const [form, setForm] = React.useState({
      username: 'admin@mahipatsinh.org',
      password: 'password'
    });
    const [loading, setLoading] = React.useState(false);
    const submit = e => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onLogin();
      }, 700);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        background: 'linear-gradient(135deg, var(--orange-50), #FFF8F2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 400
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/mahi-logo.png",
      alt: "Mahipatsinh Foundation",
      style: {
        width: 64,
        height: 64,
        objectFit: 'contain',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, "Mahipatsinh Foundation"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '4px 0 0',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "Admin Panel \u2014 Sign in to continue")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--border-subtle)',
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email or Phone",
      value: form.username,
      onChange: e => setForm(f => ({
        ...f,
        username: e.target.value
      })),
      placeholder: "admin@mahipatsinh.org"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      type: "password",
      value: form.password,
      onChange: e => setForm(f => ({
        ...f,
        password: e.target.value
      })),
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "primary",
      size: "lg",
      fullWidth: true,
      loading: loading
    }, loading ? 'Signing in…' : 'Sign In →'))), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        fontSize: 12,
        color: 'var(--text-faint)',
        marginTop: 24
      }
    }, "NGO Admin Access Only \u2022 Mahipatsinh Foundation \xA9 2026")));
  }
  window.AdminLogin = Login;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Sidebar.jsx
try { (() => {
// Admin kit — navy sidebar with logo lockup, collapsible groups, active state.
(function () {
  const Icon = window.Icon;
  const NAV = [{
    key: 'dashboard',
    to: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  }, {
    key: 'causes',
    to: 'causes',
    icon: 'heart',
    label: 'Causes'
  }, {
    key: 'campaigns',
    icon: 'megaphone',
    label: 'Campaigns',
    children: [{
      to: 'campaigns',
      label: 'All Campaigns'
    }, {
      to: 'campaign-cats',
      label: 'Categories'
    }]
  }, {
    key: 'donations',
    icon: 'rupee',
    label: 'Donations',
    children: [{
      to: 'donations',
      label: 'All Donations'
    }, {
      to: 'recurring',
      label: 'Recurring Subscriptions'
    }, {
      to: 'offline',
      label: 'Add Offline'
    }]
  }, {
    key: 'qr',
    to: 'qr',
    icon: 'qr',
    label: 'QR Donations'
  }, {
    key: 'donors',
    to: 'donors',
    icon: 'users',
    label: 'Donors'
  }, {
    key: 'members',
    to: 'members',
    icon: 'user',
    label: 'Members'
  }, {
    key: 'blogs',
    icon: 'book',
    label: 'Blogs',
    children: [{
      to: 'blogs',
      label: 'All Blogs'
    }, {
      to: 'blog-cats',
      label: 'Categories'
    }]
  }, {
    key: 'volunteers',
    to: 'volunteers',
    icon: 'userCheck',
    label: 'Volunteers'
  }, {
    key: 'csr',
    to: 'csr',
    icon: 'building',
    label: 'CSR Enquiries'
  }, {
    key: 'contact',
    to: 'contact',
    icon: 'mail',
    label: 'Contact'
  }, {
    key: 'notifications',
    icon: 'bell',
    label: 'Notifications',
    children: [{
      to: 'notif-logs',
      label: 'Logs'
    }, {
      to: 'notif-templates',
      label: 'Templates'
    }, {
      to: 'broadcast',
      label: 'Broadcast'
    }]
  }, {
    key: 'reports',
    icon: 'chart',
    label: 'Reports',
    children: [{
      to: 'reports',
      label: 'Reports Home'
    }, {
      to: 'rep-donations',
      label: 'Donations'
    }, {
      to: 'rep-donors',
      label: 'Donors'
    }, {
      to: 'rep-80g',
      label: '80G Certificates'
    }]
  }, {
    key: 'compliance',
    to: 'compliance',
    icon: 'shield',
    label: 'Tax Compliance'
  }];
  function NavItemSingle({
    item,
    active,
    onNav
  }) {
    const isActive = active === item.to;
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav(item.to),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-xl)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'left',
        color: isActive ? 'var(--orange-500)' : h ? 'var(--navy-100)' : 'var(--navy-200)',
        background: isActive ? 'rgba(255,90,31,0.16)' : h ? 'rgba(255,255,255,0.05)' : 'transparent',
        transition: 'all .15s'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 17,
      color: isActive ? 'var(--orange-500)' : 'currentColor'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, item.label), isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--orange-500)'
      }
    }));
  }
  function NavGroup({
    item,
    active,
    onNav
  }) {
    const childActive = item.children.some(c => c.to === active);
    const [open, setOpen] = React.useState(childActive);
    const [h, setH] = React.useState(false);
    React.useEffect(() => {
      if (childActive) setOpen(true);
    }, [childActive]);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o => !o),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-xl)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'left',
        color: open || childActive ? '#fff' : h ? 'var(--navy-100)' : 'var(--navy-200)',
        background: open || childActive ? 'rgba(255,255,255,0.07)' : h ? 'rgba(255,255,255,0.05)' : 'transparent',
        transition: 'all .15s'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 17,
      color: open || childActive ? 'var(--orange-500)' : 'currentColor'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronDown",
      size: 13,
      style: {
        opacity: 0.5,
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform .2s'
      }
    })), open && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        marginLeft: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, item.children.map(c => {
      const ca = active === c.to;
      return /*#__PURE__*/React.createElement("button", {
        key: c.to,
        onClick: () => onNav(c.to),
        style: {
          display: 'block',
          textAlign: 'left',
          padding: '7px 12px',
          borderRadius: 'var(--radius-md)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 500,
          color: ca ? 'var(--orange-500)' : 'var(--navy-200)',
          background: ca ? 'rgba(255,90,31,0.1)' : 'transparent',
          transition: 'all .15s'
        },
        onMouseEnter: e => {
          if (!ca) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.color = 'var(--navy-100)';
          }
        },
        onMouseLeave: e => {
          if (!ca) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--navy-200)';
          }
        }
      }, c.label);
    })));
  }
  function Sidebar({
    active,
    onNav,
    user
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 'var(--sidebar-w)',
        flexShrink: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-sidebar)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '18px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.07)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-xl)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        background: 'rgba(255,90,31,0.15)',
        border: '1px solid rgba(255,90,31,0.25)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/mahi-logo.png",
      alt: "",
      style: {
        width: 22,
        height: 22,
        objectFit: 'contain'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: '#fff',
        fontSize: 14,
        lineHeight: 1.1
      }
    }, "Mahipatsinh"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 500,
        color: 'var(--navy-300)'
      }
    }, "Foundation Admin"))), /*#__PURE__*/React.createElement("nav", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '12px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      },
      className: "mf-scroll"
    }, NAV.map(item => item.children ? /*#__PURE__*/React.createElement(NavGroup, {
      key: item.key,
      item: item,
      active: active,
      onNav: onNav
    }) : /*#__PURE__*/React.createElement(NavItemSingle, {
      key: item.key,
      item: item,
      active: active,
      onNav: onNav
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 12px 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'var(--navy-400)'
      }
    }, "Admin Settings")), /*#__PURE__*/React.createElement(NavItemSingle, {
      item: {
        to: 'settings',
        icon: 'settings',
        label: 'System Settings'
      },
      active: active,
      onNav: onNav
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 10px',
        borderTop: '1px solid rgba(255,255,255,0.07)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px',
        borderRadius: 'var(--radius-xl)',
        background: 'rgba(255,255,255,0.04)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        color: '#fff',
        flexShrink: 0,
        background: 'linear-gradient(135deg,#FF5A1F,#FF8C5A)'
      }
    }, (user?.name || 'A')[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: '#fff',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, user?.name || 'Admin'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 500,
        color: 'var(--navy-300)'
      }
    }, user?.role || 'Super Admin')))));
  }
  window.AdminSidebar = Sidebar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Topbar.jsx
try { (() => {
// Admin kit — top bar with page title, date, notification bell, user menu.
(function () {
  const Icon = window.Icon;
  function Topbar({
    title,
    onLogout,
    user
  }) {
    const [bell, setBell] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    const date = new Date().toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const initials = (user?.name || 'Admin').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 'var(--navbar-h)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'var(--white)',
        borderBottom: '1px solid var(--divider)',
        boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
        position: 'relative',
        zIndex: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text-strong)',
        letterSpacing: '-0.01em'
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'var(--gray-300)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 500,
        color: 'var(--text-faint)'
      }
    }, date)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setBell(b => !b);
        setMenu(false);
      },
      style: {
        position: 'relative',
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: bell ? 'var(--surface-hover)' : 'transparent',
        borderRadius: 'var(--radius-xl)',
        color: 'var(--text-muted)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 17
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        right: 5,
        minWidth: 16,
        height: 16,
        padding: '0 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
        background: 'var(--red-600)',
        color: '#fff',
        fontSize: 9,
        fontWeight: 700,
        border: '2px solid #fff'
      }
    }, "3")), bell && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 0,
        top: '100%',
        marginTop: 8,
        width: 320,
        background: '#fff',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-dropdown)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid var(--divider)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Notifications"), /*#__PURE__*/React.createElement(Icon, {
      name: "refresh",
      size: 12,
      color: "var(--text-faint)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        background: 'var(--surface-sunken)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, [['Sent', '142', 'var(--green-600)'], ['Failed', '3', 'var(--red-600)'], ['Pending', '5', 'var(--amber-600)'], ['WA', '88', 'var(--purple-600)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        padding: '8px 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: c
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--text-faint)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, l)))), [['Donation Receipt', 'Anjali Mehta', 'SENT', 'var(--green-600)'], ['80G Certificate', 'Ravi Patel', 'FAILED', 'var(--red-600)'], ['New Donation', '₹25,000 received', 'SENT', 'var(--green-600)']].map(([t, r, s, c], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 12,
        padding: '12px 16px',
        borderBottom: '1px solid rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-xl)',
        background: c === 'var(--red-600)' ? 'var(--red-50)' : 'var(--green-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c === 'var(--red-600)' ? 'xCircle' : 'checkCircle',
      size: 14,
      color: c
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--text-body)'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-faint)'
      }
    }, r), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: c,
        marginTop: 2
      }
    }, s)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 28,
        background: 'var(--gray-100)',
        margin: '0 4px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setMenu(m => !m);
        setBell(false);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '4px 8px 4px 4px',
        border: 'none',
        background: menu ? 'var(--surface-hover)' : 'transparent',
        borderRadius: 'var(--radius-xl)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        color: '#fff',
        background: 'linear-gradient(135deg,#FF5A1F,#FF8C5A)'
      }
    }, initials), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)',
        lineHeight: 1.1
      }
    }, user?.name || 'Admin'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 500,
        color: 'var(--text-faint)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, user?.role || 'Super Admin')), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronDown",
      size: 13,
      color: "var(--text-faint)",
      style: {
        transform: menu ? 'rotate(180deg)' : 'none',
        transition: 'transform .15s'
      }
    })), menu && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 0,
        top: '100%',
        marginTop: 8,
        width: 224,
        background: '#fff',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-dropdown)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 16px',
        borderBottom: '1px solid var(--divider)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, user?.name || 'Admin'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-faint)'
      }
    }, user?.email || 'admin@mahipatsinh.org'), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        marginTop: 6,
        padding: '2px 8px',
        borderRadius: 9999,
        fontSize: 10,
        fontWeight: 700,
        background: 'rgba(255,90,31,0.1)',
        color: 'var(--orange-500)'
      }
    }, user?.role || 'Super Admin')), /*#__PURE__*/React.createElement("button", {
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 16px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: 13,
        color: 'var(--text-body)',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 15,
      color: "var(--text-faint)"
    }), " My Profile"), /*#__PURE__*/React.createElement("button", {
      onClick: onLogout,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 16px',
        border: 'none',
        borderTop: '1px solid var(--divider)',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: 13,
        color: 'var(--red-600)',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "logout",
      size: 15
    }), " Sign Out")))));
  }
  window.AdminTopbar = Topbar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Loader = __ds_scope.Loader;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
