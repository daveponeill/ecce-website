import Button from '@/components/primitives/Button'

export default function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="1440" height="640" fill="#FAFAF7"/>

          {/* soft organic washes */}
          <path d="M960 540 C 890 440 960 340 1090 350 C 1240 362 1370 320 1430 420 C 1480 510 1380 640 1230 660 C 1080 680 1020 620 960 540 Z" fill="#EDD9A3" opacity="0.42"/>
          <path d="M850 150 C 830 70 930 10 1040 38 C 1140 64 1180 138 1136 210 C 1092 280 975 290 902 246 C 855 217 865 200 850 150 Z" fill="#A8CEBC" opacity="0.24"/>
          <path d="M1265 95 C 1290 30 1400 20 1450 75 C 1500 130 1470 230 1395 250 C 1320 270 1240 160 1265 95 Z" fill="#7B4FA6" opacity="0.07"/>
          <path d="M620 460 C 600 400 660 360 730 375 C 795 389 820 445 780 495 C 740 543 640 530 620 460 Z" fill="#EDD9A3" opacity="0.20"/>
          <path d="M430 250 C 420 200 470 170 530 182 C 585 193 600 240 568 280 C 535 320 445 308 430 250 Z" fill="#A8CEBC" opacity="0.14"/>

          {/* drifting strokes: scattered left, gaining order rightward */}
          <g className="hb-drift">
            <rect x="490" y="170" width="70" height="13" rx="6.5" fill="#7B4FA6" opacity="0.22" transform="rotate(-16 525 176)"/>
            <rect x="600" y="112" width="54" height="12" rx="6" fill="#2E7D6B" opacity="0.26" transform="rotate(10 627 118)"/>
            <rect x="548" y="296" width="62" height="13" rx="6.5" fill="#C07C1A" opacity="0.30" transform="rotate(-8 579 302)"/>
            <rect x="640" y="430" width="78" height="13" rx="6.5" fill="#7B4FA6" opacity="0.22" transform="rotate(11 679 436)"/>
            <rect x="520" y="520" width="56" height="12" rx="6" fill="#2E7D6B" opacity="0.22" transform="rotate(-19 548 526)"/>
            <rect x="716" y="208" width="86" height="14" rx="7" fill="#4E2A84" opacity="0.30" transform="rotate(-6 759 215)"/>
            <rect x="744" y="538" width="68" height="13" rx="6.5" fill="#C07C1A" opacity="0.26" transform="rotate(7 778 544)"/>
            <rect x="836" y="372" width="92" height="14" rx="7" fill="#2E7D6B" opacity="0.42" transform="rotate(-3 882 379)"/>
            <rect x="858" y="142" width="84" height="14" rx="7" fill="#C07C1A" opacity="0.40" transform="rotate(3 900 149)"/>
            <rect x="800" y="452" width="96" height="74" rx="18" fill="none" stroke="#2E7D6B" strokeWidth="4" opacity="0.30" transform="rotate(-5 848 489)"/>
            <rect x="924" y="498" width="74" height="58" rx="15" fill="#7B4FA6" opacity="0.14" transform="rotate(6 961 527)"/>
          </g>

          {/* connecting threads, converging on the cluster */}
          <path d="M510 345 C 670 275 770 375 890 325 C 970 292 1000 290 1036 282" fill="none" stroke="#2E7D6B" strokeWidth="3.5" strokeLinecap="round" opacity="0.45"/>
          <path d="M548 444 C 710 505 850 430 970 438 C 1050 442 1090 432 1130 420" fill="none" stroke="#C07C1A" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="0.1 16" opacity="0.6"/>
          <path d="M628 162 C 760 122 850 192 950 178 C 1000 171 1020 192 1036 212" fill="none" stroke="#7B4FA6" strokeWidth="3" strokeLinecap="round" opacity="0.38"/>

          {/* seeds */}
          <circle cx="510" cy="345" r="6" fill="#2E7D6B" opacity="0.5"/>
          <circle cx="548" cy="444" r="6" fill="#C07C1A" opacity="0.55"/>
          <circle cx="628" cy="162" r="5" fill="#7B4FA6" opacity="0.45"/>
          <circle cx="890" cy="325" r="4.5" fill="#2E7D6B" opacity="0.40"/>
          <circle cx="970" cy="438" r="4.5" fill="#C07C1A" opacity="0.45"/>

          {/* the gathering: rounded-rect cluster echoing the logo */}
          <g className="hb-cluster"><g transform="rotate(-2.5 1160 320)">
            {/* filled tiles behind */}
            <rect x="1010" y="180" width="280" height="180" rx="30" fill="#7B4FA6" opacity="0.11"/>
            <rect x="1170" y="300" width="170" height="136" rx="26" fill="#EDD9A3" opacity="0.55" transform="rotate(5 1255 368)"/>
            <rect x="985" y="330" width="136" height="112" rx="23" fill="#A8CEBC" opacity="0.48" transform="rotate(-6 1053 386)"/>

            {/* stacked bars (logo E motif) */}
            <rect x="1042" y="212" width="100" height="15" rx="7.5" fill="#4E2A84"/>
            <rect x="1042" y="266" width="78" height="15" rx="7.5" fill="#2E7D6B"/>
            <rect x="1042" y="320" width="100" height="15" rx="7.5" fill="#C07C1A"/>

            {/* open C bracket (logo motif), purple, immediately right of bars */}
            <path d="M1282 212 L 1224 212 C 1192 212 1176 228 1176 260 L 1176 287 C 1176 319 1192 335 1224 335 L 1282 335" fill="none" stroke="#4E2A84" strokeWidth="15" strokeLinecap="round"/>

            {/* smaller teal bracket below the pair, opening left */}
            <path d="M1116 396 L 1172 396 C 1198 396 1211 409 1211 432 L 1211 440 C 1211 463 1198 476 1172 476 L 1116 476" fill="none" stroke="#2E7D6B" strokeWidth="11" strokeLinecap="round" opacity="0.85"/>

            {/* amber accent bar tucked right */}
            <rect x="1252" y="428" width="84" height="14" rx="7" fill="#C07C1A" opacity="0.9"/>
          </g></g>
        </svg>
      </div>
      <div className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Engineering Education Research · Northwestern BME</p>
          <h1>
            How engineers<br />
            become <em>engineers</em>
          </h1>
          <p className="hero-desc">
            The ECCE group studies how engineers develop professional identity,
            how doctoral students navigate high-stakes milestones, and how
            mentorship and assessment cultures shape both. Our work is funded
            by the National Science Foundation.
          </p>
          <div className="hero-ctas">
            <Button variant="primary" href="/research">Our Research</Button>
            <Button variant="ghost" href="/people">Meet the Team</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
