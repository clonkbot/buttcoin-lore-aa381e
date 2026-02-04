import React, { useState, useEffect } from 'react';
import './styles.css';

const ButtcoinLogo = () => (
  <div className="logo-container">
    <div className="butt-coin">
      <div className="coin-inner">
        <span className="butt-symbol">🍑</span>
        <span className="coin-letter">B</span>
      </div>
    </div>
    <div className="sparkles">
      {[...Array(8)].map((_, i) => (
        <span key={i} className="sparkle" style={{ '--delay': `${i * 0.15}s`, '--angle': `${i * 45}deg` } as React.CSSProperties}>✨</span>
      ))}
    </div>
  </div>
);

const MarqueeText = ({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) => (
  <div className={`marquee-wrapper ${reverse ? 'reverse' : ''}`}>
    <div className="marquee-content">
      {children}
      {children}
    </div>
  </div>
);

const LoreSection = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <section className={`lore-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
      <div className="section-divider">
        <span>💩</span><span>🍑</span><span>💩</span>
      </div>
    </section>
  );
};

const Timeline = () => {
  const events = [
    { year: '2011', event: 'The Genesis Dump', desc: 'Buttcoin emerges from the primordial internet soup, a satirical response to Bitcoin\'s meteoric rise. Created as a parody, it becomes legend.' },
    { year: '2011', event: 'The Subreddit', desc: 'r/Buttcoin is born — not as a fan club, but as a skeptic\'s haven. "Where the WSJ gets their FUD," they\'d say.' },
    { year: '2012', event: 'The Great Debates', desc: 'Buttcoiners and Bitcoiners clash in epic forum battles. Legendary threads are archived. Memes are forged in fire.' },
    { year: '2013', event: 'The Mt. Gox Era', desc: 'As exchanges crumble, Buttcoin skeptics feel vindicated. "Told you so" echoes through the forums.' },
    { year: '2014', event: 'Comedy Gold Rush', desc: 'Peak memery achieved. The term "comedy gold" becomes synonymous with crypto fails.' },
    { year: '2017', event: 'ICO Circus', desc: 'Buttcoin watches in horror/delight as thousands of scamcoins emerge. Content forever.' },
    { year: '2021', event: 'NFT Madness', desc: 'Digital JPEGs sell for millions. Buttcoin\'s absurdist premise now seems prescient.' },
    { year: '2024', event: 'Eternal Relevance', desc: 'Still here. Still skeptical. Still making jokes about imaginary internet money.' },
  ];

  return (
    <div className="timeline">
      {events.map((item, i) => (
        <div key={i} className="timeline-item" style={{ '--item-delay': `${i * 0.1}s` } as React.CSSProperties}>
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-dot">🍑</div>
          <div className="timeline-content">
            <h4>{item.event}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const VisitorCounter = () => {
  const [count, setCount] = useState(69420);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visitor-counter">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="counter-flame" />
      <span className="counter-text">🔥 VISITORS: {count.toLocaleString()} 🔥</span>
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="counter-flame" />
    </div>
  );
};

const GuestbookEntry = ({ name, message, date }: { name: string; message: string; date: string }) => (
  <div className="guestbook-entry">
    <div className="entry-header">
      <span className="entry-name">{name}</span>
      <span className="entry-date">{date}</span>
    </div>
    <p className="entry-message">{message}</p>
  </div>
);

export default function App() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="buttcoin-world">
      {/* Background Effects */}
      <div className="bg-pattern"></div>
      <div className="floating-butts">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="floating-butt"
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${15 + Math.random() * 20}s`,
              '--delay': `${Math.random() * 10}s`,
            } as React.CSSProperties}
          >
            {['🍑', '💩', '🪙', '😂'][Math.floor(Math.random() * 4)]}
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="main-header">
        <div className="construction-banner">
          <span>🚧</span> UNDER CONSTRUCTION SINCE 2011 <span>🚧</span>
        </div>
        <MarqueeText>
          <span className="marquee-item">💰 TO THE TOILET 💰</span>
          <span className="marquee-item">🍑 HODL YOUR BUTTS 🍑</span>
          <span className="marquee-item">💩 COMEDY GOLD 💩</span>
          <span className="marquee-item">🚀 WHEN FLUSH? 🚀</span>
        </MarqueeText>

        <div className="hero">
          <ButtcoinLogo />
          <h1 className="main-title">
            <span className="title-line">$BUTTCOIN</span>
            <span className="title-sub">The Original Shitcoin</span>
            <span className="title-year">est. 2011</span>
          </h1>
          <p className="tagline">"Backed by Nothing. Worth Everything."</p>
          <VisitorCounter />
        </div>

        <MarqueeText reverse>
          <span className="marquee-item">📈 NUMBER GO DOWN 📈</span>
          <span className="marquee-item">🤡 FUN IS NOT ALLOWED 🤡</span>
          <span className="marquee-item">💎 PAPER CHEEKS 💎</span>
          <span className="marquee-item">🌙 FLUSH TO THE MOON 🌙</span>
        </MarqueeText>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <LoreSection title="📜 The Sacred Origin Story" delay={100}>
          <div className="origin-story">
            <p className="dropcap">
              In the beginning, there was Bitcoin. And the people looked upon it and said, "This is either genius or the dumbest thing ever invented." And lo, from the depths of internet forums, $Buttcoin emerged — not as a currency, but as a state of mind.
            </p>
            <p>
              Born in 2011, when Bitcoin was still a nerdy experiment traded for pizza, Buttcoin became the voice of skepticism in a world gone mad with digital gold fever. Part parody, part protest, and entirely too online.
            </p>
            <blockquote className="sacred-quote">
              "The best critique of cryptocurrency is one that's also a cryptocurrency."
              <cite>— Ancient Buttcoin Proverb</cite>
            </blockquote>
          </div>
        </LoreSection>

        <LoreSection title="⏳ The Timeline of Dumps" delay={300}>
          <Timeline />
        </LoreSection>

        <LoreSection title="📖 The Sacred Texts" delay={500}>
          <div className="sacred-texts">
            <div className="text-card">
              <div className="card-icon">📕</div>
              <h3>The Book of SFYL</h3>
              <p>"Sorry For Your Loss" — the sacred blessing bestowed upon those who have been rugged, scammed, or simply made poor life choices in crypto.</p>
            </div>
            <div className="text-card">
              <div className="card-icon">📗</div>
              <h3>The Comedy Gold Standard</h3>
              <p>Every market crash, every exchange hack, every celebrity endorsement — all documented, archived, and mercilessly mocked.</p>
            </div>
            <div className="text-card">
              <div className="card-icon">📘</div>
              <h3>The Prophecies of Snappy</h3>
              <p>The automated wisdom dispenser. Quotes from crypto bros, recontextualized for maximum irony. Truly, a modern oracle.</p>
            </div>
            <div className="text-card">
              <div className="card-icon">📙</div>
              <h3>The FUD Scrolls</h3>
              <p>What believers call "FUD," historians call "accurate predictions." Our archives overflow with vindication.</p>
            </div>
          </div>
        </LoreSection>

        <LoreSection title="🏆 Hall of Infamy" delay={700}>
          <div className="hall-of-infamy">
            <div className="infamy-card">
              <span className="infamy-rank">👑</span>
              <h4>Mt. Gox</h4>
              <p>The exchange that taught us all an important lesson about trusting Magic: The Gathering traders with our money.</p>
              <span className="loss-counter">~850,000 BTC lost</span>
            </div>
            <div className="infamy-card">
              <span className="infamy-rank">🥈</span>
              <h4>BitConnect</h4>
              <p>HEY HEY HEYYYYY! The Ponzi scheme that gave us the greatest meme of all time. WASSAWASSAWASSUP!</p>
              <span className="loss-counter">$3.45B vanished</span>
            </div>
            <div className="infamy-card">
              <span className="infamy-rank">🥉</span>
              <h4>QuadrigaCX</h4>
              <p>CEO "dies" with the only keys. Turns out he faked his death. You can't make this stuff up.</p>
              <span className="loss-counter">$190M "lost"</span>
            </div>
            <div className="infamy-card">
              <span className="infamy-rank">💀</span>
              <h4>FTX</h4>
              <p>SBF showed us that effective altruism includes effectively stealing billions.</p>
              <span className="loss-counter">$8B customer funds</span>
            </div>
          </div>
        </LoreSection>

        <LoreSection title="💬 Ancient Guestbook" delay={900}>
          <div className="guestbook">
            <GuestbookEntry
              name="CryptoSkeptic42"
              message="Been here since 2012. Still waiting for Bitcoin to die. Any day now..."
              date="03/14/2013"
            />
            <GuestbookEntry
              name="BitcoinBelievr"
              message="You guys are just mad you didn't buy at $10!!! HAVE FUN STAYING POOR"
              date="11/28/2013"
            />
            <GuestbookEntry
              name="TheRealSatoshi"
              message="lmao this is the best thing to come out of bitcoin tbh"
              date="04/01/2014"
            />
            <GuestbookEntry
              name="SFYLCollector"
              message="Just here to document another exchange collapse. Never gets old."
              date="02/24/2014"
            />
            <GuestbookEntry
              name="GoxedAndPoxed"
              message="I lost everything but at least I have the memories. And this website."
              date="02/28/2014"
            />
          </div>
        </LoreSection>

        <LoreSection title="🎭 The Buttcoin Creed" delay={1100}>
          <div className="creed-container">
            <div className="creed">
              <p>We believe in number go up.</p>
              <p>We believe in number go down.</p>
              <p>We believe that code is NOT law.</p>
              <p>We believe in SFYL.</p>
              <p>We believe the real crypto was the scams we documented along the way.</p>
              <p>We believe that this is, indeed, good for Bitcoin.</p>
              <p className="creed-amen">🍑 Amen. 🍑</p>
            </div>
          </div>
        </LoreSection>

        {/* Secret Section */}
        <div className="secret-trigger" onClick={() => setShowSecret(!showSecret)}>
          <span className="blink">👆 CLICK FOR SECRET WISDOM 👆</span>
        </div>

        {showSecret && (
          <div className="secret-wisdom">
            <h3>🔮 The Ultimate Truth 🔮</h3>
            <p className="wisdom-text">
              At the end of the day, whether Bitcoin goes to a million dollars or zero, we'll all have had a good laugh. And isn't that worth more than any imaginary internet money?
            </p>
            <p className="wisdom-small">(The answer is no. Money is worth more. But the memes are pretty good.)</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-badges">
          <span className="badge">Best viewed in Netscape Navigator</span>
          <span className="badge">Made with 💩 and ☕</span>
          <span className="badge">No crypto was harmed</span>
        </div>
        <div className="footer-links">
          <span className="webring">← Prev</span>
          <span className="webring-logo">🍑 ButtRing 🍑</span>
          <span className="webring">Next →</span>
        </div>
        <p className="copyright">© 2011-∞ The Buttcoin Foundation for Skeptical Studies</p>
        <p className="footer-credit">Requested by @0xsnibbler · Built by @clonkbot</p>
      </footer>
    </div>
  );
}
