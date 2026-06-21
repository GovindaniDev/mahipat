// Admin kit — lightweight SVG charts (cosmetic recreations of the recharts views).
(function () {
  function AreaChart({ data = [40, 52, 48, 65, 72, 60, 85, 78, 92, 88, 75, 98], color = 'var(--orange-500)' }) {
    const W = 100, H = 100, max = Math.max(...data);
    const pts = data.map((v, i) => [(i / (data.length - 1)) * W, H - (v / max) * (H - 8)]);
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    const area = `${line} L${W},${H} L0,${H} Z`;
    const id = 'g' + Math.random().toString(36).slice(2, 7);
    return (
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: 200 }}>
        <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--orange-500)" stopOpacity="0.22" /><stop offset="100%" stopColor="var(--orange-500)" stopOpacity="0" /></linearGradient></defs>
        <path d={area} fill={`url(#${id})`} />
        <path d={line} fill="none" stroke={color} strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    );
  }

  function BarChart({ data = [{ l: 'Education', v: 92 }, { l: 'Health', v: 68 }, { l: 'Relief', v: 54 }, { l: 'Women', v: 41 }, { l: 'Animals', v: 30 }] }) {
    const max = Math.max(...data.map(d => d.v));
    const colors = ['var(--orange-500)', 'var(--blue-500)', 'var(--green-500)', 'var(--purple-500)', 'var(--amber-500)'];
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 200, padding: '8px 4px 0' }}>
        {data.map((d, i) => (
          <div key={d.l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-body)', fontVariantNumeric: 'tabular-nums' }}>{d.v}</div>
            <div style={{ width: '100%', maxWidth: 44, height: `${(d.v / max) * 100}%`, background: colors[i % colors.length], borderRadius: '6px 6px 0 0', opacity: 0.9 }} />
            <div style={{ fontSize: 10, color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>{d.l}</div>
          </div>
        ))}
      </div>
    );
  }

  function DonutChart({ data = [{ l: 'UPI', v: 44, c: 'var(--orange-500)' }, { l: 'Razorpay', v: 28, c: 'var(--blue-500)' }, { l: 'Cash', v: 16, c: 'var(--green-500)' }, { l: 'Cheque', v: 12, c: 'var(--purple-500)' }] }) {
    const total = data.reduce((s, d) => s + d.v, 0);
    let acc = 0; const R = 38, C = 2 * Math.PI * R;
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, height: 200, padding: '0 8px' }}>
        <svg viewBox="0 0 100 100" style={{ width: 150, height: 150 }}>
          {data.map((d) => {
            const frac = d.v / total, dash = frac * C, off = -acc * C; acc += frac;
            return <circle key={d.l} cx="50" cy="50" r={R} fill="none" stroke={d.c} strokeWidth="14" strokeDasharray={`${dash} ${C - dash}`} strokeDashoffset={off} transform="rotate(-90 50 50)" />;
          })}
          <text x="50" y="48" textAnchor="middle" style={{ fontSize: 13, fontWeight: 700, fill: 'var(--text-strong)' }}>{total}%</text>
          <text x="50" y="60" textAnchor="middle" style={{ fontSize: 6, fill: 'var(--text-faint)' }}>tracked</text>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {data.map(d => (
            <div key={d.l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: d.c }} />
              <span style={{ fontSize: 13, color: 'var(--text-body)', minWidth: 70 }}>{d.l}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>{d.v}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  window.AdminCharts = { AreaChart, BarChart, DonutChart };
})();
