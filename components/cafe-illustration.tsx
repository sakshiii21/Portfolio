'use client'

import { motion } from 'framer-motion'

export function CafeIllustration() {
  return (
    <div className="relative w-full max-w-2xl aspect-[4/3]">
      {/* Background - Delhi skyline with sunset gradient */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-sunlight/40 via-rose-pink/20 to-deep-green/30" />
        
        {/* Sky */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {/* Sunset sky gradient */}
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8B85C" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#D96C8D" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4E6A52" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="windowGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8F1E7" />
              <stop offset="100%" stopColor="#E8B85C" />
            </linearGradient>
          </defs>
          
          <rect x="0" y="0" width="800" height="600" fill="url(#skyGradient)" />
          
          {/* Floating clouds */}
          <motion.g
            animate={{ x: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx="650" cy="80" rx="60" ry="25" fill="#F8F1E7" opacity="0.5" />
            <ellipse cx="680" cy="75" rx="40" ry="18" fill="#F8F1E7" opacity="0.6" />
          </motion.g>
          
          <motion.g
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx="200" cy="120" rx="50" ry="20" fill="#F8F1E7" opacity="0.4" />
            <ellipse cx="230" cy="115" rx="35" ry="15" fill="#F8F1E7" opacity="0.5" />
          </motion.g>

          {/* Delhi silhouette */}
          <g fill="#243447" opacity="0.3">
            {/* India Gate inspired structure */}
            <path d="M100 350 L100 280 L120 280 L120 260 L130 250 L150 250 L160 260 L160 280 L180 280 L180 350 L160 350 L160 300 L120 300 L120 350 Z" />
            {/* Qutub Minar inspired */}
            <path d="M250 350 L255 200 L260 180 L265 200 L270 350 Z" />
            <rect x="252" y="220" width="16" height="5" />
            <rect x="253" y="260" width="14" height="5" />
            {/* Buildings */}
            <rect x="320" y="280" width="40" height="70" />
            <rect x="370" y="300" width="30" height="50" />
            <rect x="410" y="260" width="50" height="90" />
            <rect x="470" y="290" width="35" height="60" />
            <rect x="520" y="270" width="45" height="80" />
            <rect x="580" y="300" width="30" height="50" />
            <rect x="620" y="280" width="40" height="70" />
            <rect x="670" y="310" width="25" height="40" />
          </g>
        </svg>

        {/* Bougainvillea flowers hanging from top */}
        <motion.div 
          className="absolute top-0 left-0 right-0"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 800 150" className="w-full">
            <defs>
              <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4E6A52" />
                <stop offset="100%" stopColor="#3D5341" />
              </linearGradient>
            </defs>
            {/* Vines */}
            <path d="M0,0 Q50,80 100,60 T200,70 T300,50 T400,80" stroke="url(#vineGradient)" strokeWidth="3" fill="none" />
            <path d="M300,0 Q350,70 400,50 T500,60 T600,40 T700,70 T800,50" stroke="url(#vineGradient)" strokeWidth="3" fill="none" />
            
            {/* Flowers */}
            {[50, 120, 180, 250, 350, 420, 500, 580, 650, 720].map((x, i) => (
              <g key={i} transform={`translate(${x}, ${30 + (i % 3) * 20})`}>
                <circle cx="0" cy="0" r="8" fill="#D96C8D" opacity="0.9" />
                <circle cx="6" cy="4" r="6" fill="#D96C8D" opacity="0.8" />
                <circle cx="-5" cy="5" r="7" fill="#D96C8D" opacity="0.85" />
                <circle cx="2" cy="8" r="5" fill="#D96C8D" opacity="0.75" />
              </g>
            ))}
            
            {/* Leaves */}
            {[30, 90, 160, 230, 300, 380, 460, 540, 620, 700, 770].map((x, i) => (
              <ellipse key={`leaf-${i}`} cx={x} cy={20 + (i % 4) * 15} rx="12" ry="6" fill="#4E6A52" opacity="0.8" transform={`rotate(${-20 + (i % 3) * 15} ${x} ${20 + (i % 4) * 15})`} />
            ))}
          </svg>
        </motion.div>

        {/* Café desk scene */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%]">
          {/* Wooden desk */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-brown via-warm-brown/90 to-warm-brown/70 rounded-t-lg">
            <div className="absolute inset-0 opacity-30">
              {/* Wood grain texture */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute h-px bg-warm-brown/50" style={{ top: `${12 + i * 12}%`, left: 0, right: 0 }} />
              ))}
            </div>
          </div>

          {/* Character - Sakshi */}
          <motion.div 
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="200" height="280" viewBox="0 0 200 280">
              {/* Hair - back */}
              <ellipse cx="100" cy="80" rx="55" ry="60" fill="#1a1a1a" />
              <path d="M45 80 Q40 150 55 200" stroke="#1a1a1a" strokeWidth="25" fill="none" strokeLinecap="round" />
              <path d="M155 80 Q160 150 145 200" stroke="#1a1a1a" strokeWidth="25" fill="none" strokeLinecap="round" />
              
              {/* Body - Pink kurta */}
              <path d="M60 130 L55 250 L145 250 L140 130 Q100 140 60 130" fill="#D96C8D" />
              {/* Kurta pattern - white florals */}
              {[70, 90, 110, 130].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy={160 + (i % 2) * 20} r="4" fill="#F8F1E7" opacity="0.6" />
                  <circle cx={x + 15} cy={180 + (i % 2) * 15} r="3" fill="#F8F1E7" opacity="0.5" />
                  <circle cx={x - 5} cy={200 + (i % 2) * 10} r="3.5" fill="#F8F1E7" opacity="0.55" />
                </g>
              ))}
              {/* Kurta neckline */}
              <path d="M80 130 Q100 145 120 130" stroke="#C45A7A" strokeWidth="2" fill="none" />
              
              {/* Neck */}
              <rect x="90" y="115" width="20" height="20" fill="#E8C4A0" rx="5" />
              
              {/* Face */}
              <ellipse cx="100" cy="85" rx="40" ry="45" fill="#E8C4A0" />
              
              {/* Hair - front */}
              <path d="M60 70 Q70 40 100 35 Q130 40 140 70" fill="#1a1a1a" />
              <path d="M60 70 Q65 85 60 100" stroke="#1a1a1a" strokeWidth="8" fill="none" />
              <path d="M140 70 Q135 85 140 100" stroke="#1a1a1a" strokeWidth="8" fill="none" />
              
              {/* Glasses */}
              <g fill="none" stroke="#6B4F3B" strokeWidth="2">
                <circle cx="82" cy="82" r="14" />
                <circle cx="118" cy="82" r="14" />
                <path d="M96 82 L104 82" />
                <path d="M68 80 L55 75" />
                <path d="M132 80 L145 75" />
              </g>
              
              {/* Eyes behind glasses */}
              <ellipse cx="82" cy="84" rx="4" ry="5" fill="#1a1a1a" />
              <ellipse cx="118" cy="84" rx="4" ry="5" fill="#1a1a1a" />
              <circle cx="83" cy="82" r="1.5" fill="#FFFFFF" />
              <circle cx="119" cy="82" r="1.5" fill="#FFFFFF" />
              
              {/* Eyebrows */}
              <path d="M72 68 Q82 65 92 68" stroke="#1a1a1a" strokeWidth="2" fill="none" />
              <path d="M108 68 Q118 65 128 68" stroke="#1a1a1a" strokeWidth="2" fill="none" />
              
              {/* Nose */}
              <path d="M100 88 Q102 95 100 100" stroke="#D4A574" strokeWidth="2" fill="none" />
              
              {/* Smile */}
              <path d="M90 108 Q100 115 110 108" stroke="#C45A7A" strokeWidth="2" fill="none" />
              
              {/* Bindi */}
              <circle cx="100" cy="62" r="2" fill="#D96C8D" />
              
              {/* Jhumka earrings */}
              <g fill="#E8B85C">
                <circle cx="55" cy="95" r="4" />
                <path d="M53 99 L50 110 L55 108 L60 110 L57 99" />
                <circle cx="145" cy="95" r="4" />
                <path d="M143 99 L140 110 L145 108 L150 110 L147 99" />
              </g>
              
              {/* Arms */}
              <path d="M55 150 Q30 180 50 220" stroke="#E8C4A0" strokeWidth="15" fill="none" strokeLinecap="round" />
              <path d="M145 150 Q170 180 150 220" stroke="#E8C4A0" strokeWidth="15" fill="none" strokeLinecap="round" />
              
              {/* Sleeves */}
              <path d="M55 140 Q45 160 50 180" stroke="#D96C8D" strokeWidth="18" fill="none" strokeLinecap="round" />
              <path d="M145 140 Q155 160 150 180" stroke="#D96C8D" strokeWidth="18" fill="none" strokeLinecap="round" />
              
              {/* Hands */}
              <ellipse cx="50" cy="225" rx="10" ry="8" fill="#E8C4A0" />
              <ellipse cx="150" cy="225" rx="10" ry="8" fill="#E8C4A0" />
              
              {/* Wired earphones */}
              <path d="M58 95 Q40 120 45 150 Q50 180 40 200" stroke="#333" strokeWidth="1.5" fill="none" />
              <circle cx="40" cy="200" r="4" fill="#333" />
            </svg>
          </motion.div>

          {/* Laptop */}
          <div className="absolute bottom-28 left-[20%]">
            <svg width="100" height="70" viewBox="0 0 100 70">
              {/* Screen */}
              <rect x="5" y="0" width="90" height="55" rx="3" fill="#243447" />
              <rect x="10" y="5" width="80" height="45" rx="2" fill="#1a2a3a">
                {/* Code on screen */}
                <animate attributeName="fill" values="#1a2a3a;#1f3040;#1a2a3a" dur="3s" repeatCount="indefinite" />
              </rect>
              {/* Code lines */}
              <rect x="15" y="12" width="30" height="3" rx="1" fill="#D96C8D" opacity="0.6" />
              <rect x="15" y="20" width="50" height="3" rx="1" fill="#4E6A52" opacity="0.6" />
              <rect x="15" y="28" width="40" height="3" rx="1" fill="#E8B85C" opacity="0.6" />
              <rect x="15" y="36" width="55" height="3" rx="1" fill="#D96C8D" opacity="0.6" />
              {/* Base */}
              <rect x="0" y="55" width="100" height="8" rx="2" fill="#A0A0A0" />
              <rect x="35" y="58" width="30" height="3" rx="1" fill="#888" />
            </svg>
          </div>

          {/* Coffee mug with steam */}
          <div className="absolute bottom-28 right-[25%]">
            <svg width="50" height="60" viewBox="0 0 50 60">
              {/* Steam */}
              <motion.path
                d="M20 10 Q22 5 20 0"
                stroke="#F8F1E7"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
                animate={{ y: [0, -5, 0], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M28 12 Q30 7 28 2"
                stroke="#F8F1E7"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
                animate={{ y: [0, -8, 0], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              {/* Mug */}
              <rect x="8" y="15" width="30" height="35" rx="3" fill="#F8F1E7" />
              <rect x="12" y="20" width="22" height="25" rx="2" fill="#6B4F3B" />
              {/* Handle */}
              <path d="M38 22 Q50 25 50 35 Q50 45 38 48" stroke="#F8F1E7" strokeWidth="5" fill="none" />
              {/* Bow */}
              <path d="M15 15 Q23 10 31 15" stroke="#6B4F3B" strokeWidth="3" fill="none" />
              <circle cx="23" cy="12" r="3" fill="#6B4F3B" />
            </svg>
          </div>

          {/* Books stack */}
          <div className="absolute bottom-28 right-[10%]">
            <svg width="60" height="50" viewBox="0 0 60 50">
              <rect x="0" y="35" width="55" height="10" rx="2" fill="#4E6A52" />
              <rect x="5" y="25" width="50" height="10" rx="2" fill="#D96C8D" />
              <rect x="2" y="15" width="52" height="10" rx="2" fill="#E8B85C" />
              <rect x="8" y="5" width="45" height="10" rx="2" fill="#243447" />
            </svg>
          </div>

          {/* Notebook */}
          <div className="absolute bottom-28 left-[40%]">
            <motion.svg 
              width="60" 
              height="45" 
              viewBox="0 0 60 45"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="0" y="0" width="55" height="40" rx="2" fill="#F8F1E7" />
              <rect x="0" y="0" width="8" height="40" fill="#D96C8D" opacity="0.3" />
              {/* Lines */}
              {[10, 18, 26, 34].map((y, i) => (
                <line key={i} x1="12" y1={y} x2="50" y2={y} stroke="#D4C9B8" strokeWidth="1" />
              ))}
              {/* Writing */}
              <path d="M15 12 Q25 10 35 12" stroke="#6B4F3B" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M15 20 Q30 18 45 20" stroke="#6B4F3B" strokeWidth="1.5" fill="none" opacity="0.6" />
            </motion.svg>
          </div>
        </div>
      </div>
    </div>
  )
}
