'use client';
import {useEffect,useState} from 'react';
const cases = [
 {id:'petlove',num:'01',title:'Petlove',eyebrow:'AI / AUTOMATION / CUSTOMER EXPERIENCE',headline:'Making automated care feel more human.',tag:'PET HEALTH · 2025–2026',facts:[['+10 pp','automated service retention'],['12.9% → 8.1%','7-day repeat contacts in AI flows']],challenge:'Customers needed reliable, understandable support for complex pet health journeys.',action:'Owned product strategy and worked with UX, engineering, data and operations on WhatsApp service flows, triage, provider search, OCR and retention journeys.',outcome:'Automated service retention increased from approximately 57% to 67%.',color:'#cfe58e'},
 {id:'boticario',num:'02',title:'Grupo Boticário',eyebrow:'B2B / MARKETPLACE / 0→1',headline:'A marketplace built from the ground up.',tag:'DIGITAL COMMERCE · 2020–2022',facts:[['4,000+','stores in the ecosystem'],['0 → 1','marketplace build']],challenge:'Create a new digital channel connecting sellers and a large network of physical stores.',action:'Led discovery, roadmap and delivery of seller onboarding, dashboards and API integrations in partnership with engineering, commercial and operations teams.',outcome:'Launched a B2B marketplace connecting sellers with an ecosystem of over 4,000 stores.',color:'#f0ddc5'},
 {id:'dasa',num:'03',title:'Dasa',eyebrow:'HEALTHCARE / MOBILE / SERVICE DESIGN',headline:'Bringing healthcare to the doorstep.',tag:'DIGITAL HEALTHCARE · 2019–2020',facts:[['40+','diagnostic brands'],['National','rollout']],challenge:'Make at-home sample collection easier for patients and the professionals delivering it.',action:'Defined and launched a nurse-facing mobile app and service journey, grounding decisions in operational discovery and user needs.',outcome:'Rolled out the service across a nationwide diagnostic network.',color:'#d9e5ec'},
 {id:'carrefour',num:'04',title:'Grupo Carrefour',eyebrow:'COMMERCE / PAYMENTS / CATALOG',headline:'Fewer frictions between intent and checkout.',tag:'E-COMMERCE · 2023–2024',facts:[['2','product tracks'],['B2B + B2C','customer journeys']],challenge:'Improve product discovery and payment experiences across commerce journeys.',action:'Managed payments and catalog tracks, improving content quality, search/recommendation experiences and payment options.',outcome:'Delivered improvements in catalog quality, SEO support and checkout capabilities.',color:'#ece5d5'}
];
const timeline=[['2025–2026','Petlove','Senior Product Manager · AI & Automation'],['2024–2025','RD Saúde','Senior Product Manager · Retail Media'],['2023–2024','Carrefour','Senior Product Manager · Commerce'],['2022–2023','Thoughtworks','Senior Product Manager · Product Consulting'],['2020–2022','Grupo Boticário','Senior Product Manager · Marketplace'],['2019–2020','Dasa','Product Manager · Healthcare'],['2018–2019','Mutant / Vivo','Product Owner · Conversational AI']];
const badges=['hands-on builder ✳','discovery enthusiast','empathy first ♥','data + intuition','I make my own mocks ↗'];
const principles=[
 ['01','Start with empathy.','I like getting close to customers, listening carefully and understanding what is really happening beneath the request.'],
 ['02','Go deep in discovery.','The best product decisions come from asking better questions, connecting signals and framing the right problem to solve.'],
 ['03','Prototype to think.','I enjoy sketching flows, mocking up ideas and making concepts tangible early so teams can react, align and improve.'],
 ['04','Use data to sharpen intuition.','Empathy and observation matter. Data helps validate patterns, reveal opportunities and push the work further.']
];
export default function Home(){
const [opened,setOpened]=useState<string|null>(null);
const [menu,setMenu]=useState(false);
const active=cases.find(c=>c.id===opened);
useEffect(()=>{document.body.style.overflow=opened?'hidden':'';return()=>{document.body.style.overflow=''}},[opened]);
return <main>
<header className="nav wrap"><a href="#home" className="brand" aria-label="Back to top">n<span className="brand-dot">.</span> nancy matsuda</a><div className="nav-right"><span className="availability"><i/> open to opportunities</span><button className="menu-button" onClick={()=>setMenu(!menu)}>{menu?'close −':'menu +'}</button></div></header>
{menu&&<nav className="nav-overlay"><a href="#principles" onClick={()=>setMenu(false)}>Principles</a><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#path" onClick={()=>setMenu(false)}>Path</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav>}
<section className="hero wrap" id="home">
  <div className="hero-top"><span>PRODUCT BUILDER / SÃO PAULO, BRAZIL</span><span>DISCOVERY · EXPERIMENTATION · EMPATHY</span></div>
  <div className="hero-grid">
    <div className="hero-copy">
      <p className="kicker">hi, i'm nancy matsuda <span className="asterisk">✳</span></p>
      <h1>serious about products.<br/><em>playful about possibilities.</em></h1>
      <p className="intro">I’m a hands-on product builder who loves doing real discovery, understanding customers deeply and turning empathy + data into digital products that are useful, thoughtful and worth building.</p>
      <p className="intro intro-second">Across AI, marketplaces, commerce and healthcare, I enjoy experimenting, creating my own mocks and layouts, and helping teams move from insight to something tangible.</p>
      <div className="hero-badges">{badges.map(label=><span key={label}>{label}</span>)}</div>
      <div className="hero-actions"><a className="primary-link" href="#work">explore my work <span>↗</span></a><a className="quiet-link" href="mailto:nancy.matsuda7@gmail.com">say hello ↗</a></div>
    </div>
    <div className="hero-visuals" aria-label="Portrait panel and playful design elements">
      <div className="portrait-composition">
        <div className="portrait-topline"><span>CURIOUS MIND · CREATIVE HANDS</span><span>✳ EST. 1987</span></div>
        <div className="portrait-window">
          <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder: upload Nancy's own photograph to personalize this area">
            <div className="portrait-bubble portrait-bubble-pink"/>
            <div className="portrait-bubble portrait-bubble-blue"/>
            <span className="portrait-initial">n.</span>
            <span className="portrait-hint">YOUR PHOTO GOES HERE ↗</span>
          </div>
          <span className="portrait-sticker sticker-a">✳</span>
          <span className="portrait-sticker sticker-b">hello!</span>
          <span className="portrait-sticker sticker-c">make good things happen</span>
        </div>
        <div className="portrait-bottom"><span>PRODUCT BUILDER</span><span>EMPATHY + DATA + A LITTLE MAGIC</span></div>
        <div className="floating-shape floating-shape-blue" aria-hidden="true">✽</div>
        <div className="floating-shape floating-shape-pink" aria-hidden="true">♥</div>
      </div>
      <p className="photo-instruction">a little color, a lot of curiosity ✳</p>
    </div>
  </div>
  <div className="hero-bottom"><span>HANDS-ON PM ↔ STRATEGY TO EXECUTION</span><span>EMPATHY, DISCOVERY, DATA & PROTOTYPING</span></div>
</section>
<div className="ticker"><div className="ticker-inner">✳ PETLOVE &nbsp;&nbsp; ✳ GRUPO BOTICÁRIO &nbsp;&nbsp; ✳ DASA &nbsp;&nbsp; ✳ CARREFOUR &nbsp;&nbsp; ✳ RD SAÚDE &nbsp;&nbsp; ✳ THOUGHTWORKS &nbsp;&nbsp; ✳ MUTANT / VIVO &nbsp;&nbsp; ✳ PRODUCT DISCOVERY &nbsp;&nbsp; ✳ EXPERIMENTATION &nbsp;&nbsp; ✳ PETLOVE &nbsp;&nbsp; ✳ GRUPO BOTICÁRIO &nbsp;&nbsp; ✳ DASA &nbsp;&nbsp; ✳ CARREFOUR</div></div>
<section className="section wrap" id="principles"><div className="section-id">· 01 / OPERATING PRINCIPLES</div><div className="split"><div><h2>how i<br/><em>approach product.</em></h2><p className="lede">I like getting close to the customer, making sense of qualitative and quantitative signals, and shaping simple experiences out of messy, real-world problems.</p><div className="stat-row"><div><b>15+</b><small>years in digital</small></div><div><b>07</b><small>industries & contexts</small></div><div><b>∞</b><small>questions asked</small></div></div></div><div className="principles">{principles.map(([n,h,d])=><div className="principle" key={n}><span className="principle-n">{n}</span><div><h3>{h}</h3><p>{d}</p></div><span className="plus">✳</span></div>)}</div></div></section>
<section className="section work-section" id="work"><div className="wrap"><div className="section-id">· 02 / SELECTED WORK</div><div className="section-heading"><h2>things i've<br/><em>helped build.</em></h2><span>04 STORIES<br/>2019 — NOW</span></div><div className="case-list">{cases.map(c=><button className="case" key={c.id} onClick={()=>setOpened(c.id)}><div className="case-number">{c.num} / 04</div><div className="case-info"><div className="case-tag">{c.eyebrow}</div><h3>{c.title}</h3><p>{c.headline}</p><div className="case-facts">{c.facts.map(f=><div key={f[0]}><strong>{f[0]}</strong><small>{f[1]}</small></div>)}</div></div><div className="case-poster" style={{background:c.color}}><div className="poster-shape"/><span>{c.title.split(' ')[0].toLowerCase()}<b>✳</b></span></div><span className="case-arrow">↗</span></button>)}</div></div></section>
<section className="section wrap" id="moments"><div className="section-id">· 03 / BEYOND THE ROADMAP</div><div className="section-heading"><h2>more than<br/><em>a job title.</em></h2></div><div className="moments-grid"><article className="moment"><div className="moment-art moment-1">好奇心</div><span>FRAME 01 / CURIOSITY</span><h3>Curiosity is my default setting.</h3><p>I like understanding people, contexts and hidden needs before jumping into solutions.</p></article><article className="moment"><div className="moment-art moment-2">✴</div><span>FRAME 02 / CRAFT</span><h3>I love shaping ideas visually.</h3><p>Mocks, flows, layouts and product thinking help me bring clarity early and align teams faster.</p></article><article className="moment"><div className="moment-art moment-3">∞</div><span>FRAME 03 / MAKING</span><h3>Experimentation keeps the work alive.</h3><p>I enjoy testing possibilities, learning quickly and iterating toward something genuinely useful.</p></article></div><p className="small-note">Next step: replace the placeholder portrait with your favorite photo and add project visuals to each case study.</p></section>
<section className="section path-section" id="path"><div className="wrap"><div className="section-id">· 04 / THE PATH</div><div className="section-heading"><h2>many chapters.<br/><em>one curiosity.</em></h2></div><div className="timeline">{timeline.map(([date,company,role])=><div className="timeline-row" key={company}><span>{date}</span><h3>{company}</h3><p>{role}</p><i>↗</i></div>)}</div><p className="earlier">EARLIER CHAPTERS: EXA · TERRA NETWORKS · MOBILE INTELLIGENCE · SPRING WIRELESS</p></div></section>
<footer className="footer" id="contact"><div className="wrap"><div className="section-id">· 05 / LET'S TALK</div><h2>good ideas<br/>start with <em>hello.</em></h2><a className="email" href="mailto:nancy.matsuda7@gmail.com">nancy.matsuda7@gmail.com ↗</a><div className="footer-meta"><span>SÃO PAULO, BRAZIL · AVAILABLE REMOTELY</span><span>© 2026 NANCY MATSUDA · BUILT WITH CURIOSITY</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
{active&&<div className="modal-backdrop" onMouseDown={()=>setOpened(null)}><div className="modal" role="dialog" aria-modal="true" aria-label={active.title} onMouseDown={e=>e.stopPropagation()}><div className="modal-top"><span>{active.num} / CASE STUDY · {active.tag}</span><button onClick={()=>setOpened(null)} aria-label="Close case">close ✕</button></div><h2>{active.headline}</h2><p className="modal-company">{active.title}</p><div className="modal-facts">{active.facts.map(([n,label])=><div key={n}><b>{n}</b><span>{label}</span></div>)}</div><div className="modal-content"><section><span>01 / THE CHALLENGE</span><p>{active.challenge}</p></section><section><span>02 / MY CONTRIBUTION</span><p>{active.action}</p></section><section><span>03 / THE OUTCOME</span><p>{active.outcome}</p></section></div><p className="modal-note">Portfolio case summary based on documented professional experience. Product visuals and further details to be added.</p><button className="modal-close" onClick={()=>setOpened(null)}>← back to work</button></div></div>}
</main>}
