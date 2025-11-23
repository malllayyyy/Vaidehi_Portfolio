import React, { useState, useEffect } from 'react'
import { Menu, X, Instagram, Twitter, Mail, ChevronRight, Trophy, Target, Globe, Activity, Play } from 'lucide-react'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Stats', href: '#stats' },
    { name: 'Tour', href: '#media' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-yellow-500 selection:text-black">
      <a className="sr-only focus:not-sr-only" href="#main">Skip to content</a>
      <nav aria-label="Primary" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase italic">
            <span aria-hidden>VAIDEHI</span><span className="sr-only">Vaidehi Chaudhari</span><span className="text-yellow-500">CHAUDHARI</span>.
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors duration-200">
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 font-bold uppercase text-sm hover:bg-yellow-500 transition-colors duration-200 skew-x-[-10deg]">
              <span className="skew-x-[10deg] inline-block">Partner With Me</span>
            </button>
          </div>

          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-white/10 py-8 px-6 flex flex-col space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-wider hover:text-yellow-500">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main id="main">
        <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-800/30 to-transparent skew-x-[-10deg] translate-x-1/4" aria-hidden />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent z-10" aria-hidden />

          <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center h-full">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-block px-3 py-1 border border-yellow-500 text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Team India • Billie Jean King Cup
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter italic">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Lioness</span><br />
                Of Gujarat
              </h1>
              <p className="text-neutral-400 max-w-md text-lg leading-relaxed">
                5x National Champion. Aggressive Baseliner. Representing India on the global stage with unyielding grit.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="bg-yellow-500 text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
                  Contact Management
                </a>
                <a href="#media" className="border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
                  <Play size={18} fill="currentColor" aria-hidden /> <span>Watch Highlights</span>
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 h-[50vh] md:h-full relative flex items-end justify-center">
              <figure className="relative w-full max-w-lg aspect-[3/4] md:aspect-auto md:h-[85%] bg-neutral-800/50 rounded-lg overflow-hidden border border-white/5 flex items-center justify-center group">
                <img
                  src="/assets/Vaidehi_Chaudhari.jpg"
                  alt="Vaidehi Chaudhari playing a tennis match"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" aria-hidden />
                <figcaption className="absolute bottom-8 left-0 w-full text-center z-20">
                  <p className="text-yellow-500 text-xs font-bold tracking-widest uppercase">Fenesta Open Winner '22 & '24</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="stats" className="py-20 bg-neutral-950 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: 'Career High', value: '#355', icon: Globe },
                { label: 'ITF Titles', value: '08', icon: Trophy },
                { label: 'National Titles', value: '06', icon: Activity },
                { label: 'Pro Wins', value: '145+', icon: Target },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="flex justify-center mb-4 text-neutral-600 group-hover:text-yellow-500 transition-colors duration-300">
                    <stat.icon size={32} aria-hidden />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black italic text-white mb-2">{stat.value}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-neutral-900">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-yellow-500/30 z-0" aria-hidden />
              <img
                src="/assets/2.jpg"
                alt="Vaidehi training on court"
                className="relative z-10 w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                From Mehsana to <span className="text-yellow-500">The World</span>
              </h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  Born in the Mehsana district of Gujarat, my journey started at age 11—later than most, but driven by double the hunger. Training in Ahmedabad under Coach Jignesh Rawal, I sculpted a game based on aggressive baselining and tactical precision.
                </p>
                <p>
                  Today, I am proud to be a key member of the Indian Billie Jean King Cup squad. My teammates call me "Sherni" (Lioness) for my refusal to ever give up on a point.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {[
                  '2x Fenesta Open National Champion (2022, 2024)',
                  'Winner: ITF W15 Gurugram & Gwalior',
                  'Key Wins: vs Vitalia Diatchenko (Top 75)',
                  'Representative: Billie Jean King Cup',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-[1px] bg-yellow-500" aria-hidden />
                    <span className="text-white font-medium uppercase tracking-wider text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="media" className="py-24 bg-neutral-950">
          <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black uppercase italic mb-2">On Tour</h2>
              <div className="h-1 w-20 bg-yellow-500" />
            </div>
            <a href="#" className="hidden md:flex items-center space-x-2 text-sm font-bold uppercase hover:text-yellow-500 transition-colors">
              <span>View All Highlights</span>
              <ChevronRight size={16} aria-hidden />
            </a>
          </div>

          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden h-[400px] md:h-[600px]">
              <img src="https://media.gettyimages.com/id/2189016138/photo/tennis-serve-and-woman-on-outdoor-court-with-challenge-performance-and-action-game-from-above.jpg?s=612x612&w=0&k=20&c=MqFObZywkzwjS5A1vNN89RUNBM0nf5ho4iTC6YmnEQA=" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Match point celebration" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              </div>
            </div>

            <div className="relative group overflow-hidden h-[300px] md:h-[292px]">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Serve action" />
            </div>
            <div className="relative group overflow-hidden h-[300px] md:h-[292px]">
              <img src="https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Clay court training" />
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-neutral-900">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Partner With Vaidehi</h2>
            <p className="text-neutral-400 mb-12 text-lg">For brand sponsorships, media inquiries, and exhibition matches.</p>

            <a href="mailto:management@vaidehichaudhari.com" className="inline-flex items-center space-x-3 bg-white text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1">
              <Mail size={20} aria-hidden />
              <span>Contact Team</span>
            </a>

            <div className="mt-20 pt-10 border-t border-white/10 flex justify-center space-x-8">
              <a href="https://www.instagram.com/vaidehee_official0/" target="_blank" rel="noreferrer noopener" className="text-neutral-500 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Instagram size={32} aria-hidden />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer noopener" className="text-neutral-500 hover:text-white transform hover:scale-110 transition-all duration-300">
                <Twitter size={32} aria-hidden />
              </a>
            </div>

            <p className="mt-12 text-neutral-600 text-sm">© 2025 Vaidehi Chaudhari. All Rights Reserved.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
