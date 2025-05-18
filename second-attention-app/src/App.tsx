import React from 'react';
import BrainActivityImageSection from './BrainActivityImageSection';

// Responsive helper
const isMobile = typeof window !== 'undefined' && window.innerWidth < 700;

const mobileStyle = (desktop: Record<string, any>, mobile: Record<string, any>) => (isMobile ? { ...desktop, ...mobile } : desktop);

const TitleSection = () => (
  <div style={mobileStyle({
    width: '100%',
    background: '#030712',
    padding: '48px 0 32px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: 420,
    boxSizing: 'border-box',
  }, {
    flexDirection: 'column',
    minHeight: 320,
    padding: '24px 0 16px 0',
  })}>
    {/* Left: Title Block */}
    <div style={mobileStyle({
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      maxWidth: 600,
      paddingLeft: 48,
    }, {
      alignItems: 'center',
      paddingLeft: 0,
      maxWidth: '100%',
    })}>
      <span style={mobileStyle({
        fontFamily: "'Urbanist', Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: 400,
        fontSize: '4rem',
        color: '#fff',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        textTransform: 'uppercase',
        marginBottom: 0,
      }, {
        fontSize: '2.2rem',
      })}>Second</span>
      <div style={mobileStyle({
        width: '85%',
        borderBottom: '1.5px solid #fff',
        margin: '24px 0 24px 0',
        opacity: 0.5,
      }, {
        width: '60%',
        margin: '12px 0 12px 0',
      })} />
      <span style={mobileStyle({
        fontFamily: "'Urbanist', Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: 400,
        fontSize: '4rem',
        color: '#fff',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        textTransform: 'uppercase',
        marginTop: 0,
      }, {
        fontSize: '2.2rem',
      })}>Attention</span>
    </div>
    {/* Right: Lotus */}
    <div style={mobileStyle({
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 320,
      paddingRight: 48,
    }, {
      minWidth: 0,
      paddingRight: 0,
      marginTop: 16,
    })}>
      <img
        src={process.env.PUBLIC_URL + '/lotus.png'}
        alt="Lotus"
        style={mobileStyle({
          width: 260,
          maxWidth: '100%',
          height: 'auto',
          marginBottom: 24,
          filter: 'drop-shadow(0 8px 32px #7AD6FF44)',
        }, {
          width: 140,
          marginBottom: 12,
        })}
      />
    </div>
  </div>
);

const SecondAttentionReport = () => {
  return (
    <div style={mobileStyle({
      backgroundColor: "#030712", 
      color: "#D1D5DB", 
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "32px",
      borderRadius: "12px",
      maxWidth: "900px",
      margin: "0 auto",
      position: "relative"
    }, {
      padding: '8px',
      borderRadius: '0',
      maxWidth: '100vw',
      minWidth: 0,
    })}>
      {/* Session Date and Participant Name - Top Right */}
      <div style={{
        position: 'absolute',
        top: 32,
        right: 24,
        textAlign: 'right',
        zIndex: 11,
        minWidth: 160
      }}>
        <p style={{color: '#9CA3AF', fontSize: '14px', margin: 0}}>Session Date: May 15, 2025</p>
        <p style={{color: '#C696FF', fontSize: '15px', fontWeight: 500, margin: 0, marginTop: 4}}>Participant: [Name]</p>
      </div>
      {/* Vayu Labs Logo - Top Left */}
      <img
        src={process.env.PUBLIC_URL + '/vayu+labs+logo+purple.png'}
        alt="Vayu Labs Logo"
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
          width: 120,
          height: 'auto',
          zIndex: 10,
          opacity: 0.92,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      {/* Elegant Hero Title Section */}
      <TitleSection />
      {/* Purple NEURAL SHIFT REPORT below hero section */}
      <div style={mobileStyle({
        width: '100%',
        display: 'flex',
        justifyContent: 'right',
        margin: '-35px 0 24px 0',
      }, {
        margin: '8px 0 16px 0',
        justifyContent: 'center',
      })}>
        <span style={mobileStyle({
          color: '#C696FF',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 300,
          fontSize: 40,
          letterSpacing: '1.5px',
          opacity: 0.9,
          textTransform: 'uppercase',
        }, {
          fontSize: 22,
          letterSpacing: '1px',
        })}>Neural Shift Report</span>
      </div>
      {/* Header */}
      
      {/* Meditation Enhancement */}
      <div style={mobileStyle({
        backgroundColor: "#111827", 
        borderRadius: "12px", 
        border: "1px solid #374151",
        overflow: "visible", 
        marginBottom: "32px"
      }, {
        borderRadius: 8,
        marginBottom: 20,
        padding: 0,
      })}>
        {/* Top gradient section */}
        <div style={mobileStyle({
          background: "linear-gradient(135deg, #7AD6FF 0%, #7D4BE1 100%)",
          padding: "24px",
          color: "white",
          borderRadius: "12px",
          marginBottom: "32px",
        }, {
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px',
        })}>
          <h2 style={{textAlign: "center", fontSize: "24px", marginBottom: "16px"}}>Meditative Depth Score</h2>
          
          <div style={mobileStyle({
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }, {
            flexDirection: 'column',
            gap: 8,
          })}>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "14px", opacity: "0.9", textTransform: "uppercase", letterSpacing: "0.5px"}}>Regular Meditation</p>
              <p style={{fontSize: "48px", fontWeight: "700", color: "#FFD7B8", margin: "8px 0"}}>32</p>
              <p style={{fontSize: "12px", opacity: "0.8"}}>Standard Alpha State</p>
            </div>
            
            <div style={{fontSize: "24px"}}>→</div>
            
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "14px", opacity: "0.9", textTransform: "uppercase", letterSpacing: "0.5px"}}> Entrained Meditation</p>
              <p style={{fontSize: "48px", fontWeight: "700", color: "#FFD7B8", margin: "8px 0"}}>78</p>
              <p style={{fontSize: "12px", opacity: "0.8"}}>Deep Alpha-Theta State</p>
            </div>
            
            <div style={{fontSize: "24px"}}>→</div>
            
            <div style={{
              textAlign: "center", 
              backgroundColor: "rgba(17, 24, 39, 0.3)", 
              padding: "16px", 
              borderRadius: "8px"
            }}>
              <p style={{fontSize: "14px", opacity: "0.9", textTransform: "uppercase", letterSpacing: "0.5px"}}>Delta</p>
              <p style={{fontSize: "48px", fontWeight: "700", color: "#FDD6F8", margin: "8px 0"}}>+144%</p>
              <p style={{fontSize: "12px", opacity: "0.8"}}>Overall State Change</p>
            </div>
          </div>
        </div>
        
        {/* Brain activity section replaced with image-based component */}
        <BrainActivityImageSection />
        
        {/* Integrated Neural Coherence Section */}
        <div style={mobileStyle({
          padding: '0 24px 24px 24px'
        }, {
          padding: '0 8px 16px 8px',
        })}>
          <h3 style={{fontSize: 22, fontWeight: 700, color: '#fff', margin: '24px 0 18px 0'}}>Neural Coherence</h3>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 12}}>
            <div style={{flex: 1, height: 16, background: '#23293a', borderRadius: 8, overflow: 'hidden', marginRight: 16, position: 'relative'}}>
              <div style={{
                background: 'linear-gradient(to right, #7AD6FF, #7D4BE1)',
                width: '76%',
                height: '100%',
                borderRadius: 8,
                transition: 'width 0.8s cubic-bezier(.4,2,.6,1)',
              }}></div>
            </div>
            <span style={{fontSize: 20, fontWeight: 700, color: '#fff', minWidth: 48, textAlign: 'right'}}>0.76</span>
          </div>
          <div style={{fontSize: 16, color: '#D1D5DB', marginBottom: 0}}>
            Coherence measures how synchronized different parts of your brain are working together. Your coherence increased from <span style={{color:'#FFD7B8'}}>0.32</span> to <span style={{color:'#7AD6FF'}}>0.76</span> (<span style={{color:'#B18AFF'}}>+138%</span>).
          </div>
        </div>
        
        {/* Wave metrics section */}
        <div style={mobileStyle({
          padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px"
        }, {
          display: 'flex', flexDirection: 'column', gap: 12, padding: '8px',
        })}>
          {/* Alpha Waves */}
          <div style={{backgroundColor: "#1F2937", padding: "16px", borderRadius: "8px", border: "1px solid #374151"}}>
            <h4 style={{fontSize: "15px", fontWeight: 600, color: "#D1D5DB", marginBottom: "10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              Alpha Waves
            </h4>
            <div style={{display: "flex", alignItems: "center", height: "80px"}}>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "28%",
                    backgroundColor: "#EFC9A8",
                    opacity: 0.92,
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: 700, color: "#fff", textShadow: "0 1px 4px #0008, 0 0px 1px #0006"}}>28</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>Before</p>
              </div>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "67%",
                    backgroundColor: "#5CB8E6",
                    opacity: 0.92,
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: 700, color: "#fff", textShadow: "0 1px 4px #0008, 0 0px 1px #0006"}}>67</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>After</p>
              </div>
              <div style={{flex: "1", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px'}}>
                <p style={{fontSize: "20px", fontWeight: 600, color: "#FDD6F8", margin: 0}}>+139%</p>
              </div>
            </div>
          </div>
          {/* Theta Waves */}
          <div style={{backgroundColor: "#1F2937", padding: "16px", borderRadius: "8px", border: "1px solid #374151"}}>
            <h4 style={{fontSize: "15px", fontWeight: 600, color: "#D1D5DB", marginBottom: "10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              Theta Waves
            </h4>
            <div style={{display: "flex", alignItems: "center", height: "80px"}}>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "19%",
                    backgroundColor: "#EFC9A8",
                    opacity: 0.92,
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: 700, color: "#fff", textShadow: "0 1px 4px #0008, 0 0px 1px #0006"}}>19</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>Before</p>
              </div>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "58%",
                    backgroundColor: "#5CB8E6",
                    opacity: 0.92,
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: 700, color: "#fff", textShadow: "0 1px 4px #0008, 0 0px 1px #0006"}}>58</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>After</p>
              </div>
              <div style={{flex: "1", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px'}}>
                <p style={{fontSize: "20px", fontWeight: 600, color: "#FDD6F8", margin: 0}}>+205%</p>
              </div>
            </div>
          </div>
          {/* Beta Waves */}
          <div style={{backgroundColor: "#1F2937", padding: "16px", borderRadius: "8px", border: "1px solid #374151"}}>
            <h4 style={{fontSize: "15px", fontWeight: 600, color: "#D1D5DB", marginBottom: "10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              Beta Waves
            </h4>
            <div style={{display: "flex", alignItems: "center", height: "80px"}}>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "34%",
                    backgroundColor: "#EFC9A8",
                    opacity: 0.92,
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: 700, color: "#fff", textShadow: "0 1px 4px #0008, 0 0px 1px #0006"}}>34</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>Before</p>
              </div>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "21%",
                    backgroundColor: "#5CB8E6",
                    opacity: 0.92,
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: 700, color: "#fff", textShadow: "0 1px 4px #0008, 0 0px 1px #0006"}}>21</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>After</p>
              </div>
              <div style={{flex: "1", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px'}}>
                <p style={{fontSize: "20px", fontWeight: 600, color: "#7AD6FF", margin: 0}}>-38%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subjective Experience Section (SMS) */}
      <div style={mobileStyle({
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151",
        padding: "24px",
        marginBottom: "24px",
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
      }, {
        flexDirection: 'column',
        gap: 12,
        padding: '8px',
        borderRadius: 8,
        marginBottom: 16,
      })}>
        {/* Left: SMS Scores */}
        <div style={mobileStyle({
          flex: 1, minWidth: 320
        }, {
          minWidth: 0,
          width: '100%',
        })}>
          <h3 style={{fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 20}}>Your Subjective Experience</h3>
          <div style={{fontSize: 17, fontWeight: 600, color: '#D1D5DB', marginBottom: 18}}>State Mindfulness Scale (SMS)</div>
          {/* Mind Awareness Subscore */}
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
            <span style={{fontSize: 15, color: '#9CA3AF', minWidth: 170}}>Mind Awareness Subscore</span>
            <span style={{fontSize: 15, color: '#FFD7B8', marginRight: 8, marginLeft: 8}}>4.2</span>
            <span style={{fontSize: 15, color: '#FF6B6B'}} title="Decrease">2.7 ▼</span>
          </div>
          <div style={{height: 10, background: '#23293a', borderRadius: 5, marginBottom: 14, position: 'relative', overflow: 'hidden', display: 'flex', width: '100%'}}>
            {/* Peach: 2.7/5 = 54% */}
            <div style={{width: '54%', background: '#FFD7B8', borderRadius: '5px 0 0 5px'}}></div>
            {/* Red: (4.2-2.7)/5 = 30% */}
            <div style={{width: '30%', background: '#FF6B6B'}}></div>
            {/* Dark: (5-4.2)/5 = 16% */}
            <div style={{width: '16%', background: '#23293a', borderRadius: '0 5px 5px 0'}}></div>
          </div>
          {/* Body Awareness Subscore */}
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
            <span style={{fontSize: 15, color: '#9CA3AF', minWidth: 170}}>Body Awareness Subscore</span>
            <span style={{fontSize: 15, color: '#FFD7B8', marginRight: 8, marginLeft: 8}}>2.3</span>
            <span style={{fontSize: 15, color: '#7AD6FF'}}>4.5</span>
          </div>
          <div style={{height: 10, background: '#23293a', borderRadius: 5, marginBottom: 18, position: 'relative', overflow: 'hidden', display: 'flex', width: '100%'}}>
            {/* Peach: 2.3/5 = 46% */}
            <div style={{width: '46%', background: '#FFD7B8', borderRadius: '5px 0 0 5px'}}></div>
            {/* Blue: (4.5-2.3)/5 = 44% */}
            <div style={{width: '44%', background: '#7AD6FF'}}></div>
            {/* Dark: (5-4.5)/5 = 10% */}
            <div style={{width: '10%', background: '#23293a', borderRadius: '0 5px 5px 0'}}></div>
          </div>
          <div style={{fontSize: 17, color: '#D1D5DB', marginBottom: 6}}>Notable Improvements (1–5 scale):</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 4}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span style={{flex: 1, color: '#9CA3AF', fontSize: 15}}>Present Moment Connection</span>
              <span style={{color: '#FFD7B8', marginRight: 8, fontSize: 15}}>2</span>
              <span style={{color: '#7AD6FF', fontSize: 15}}>5</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span style={{flex: 1, color: '#9CA3AF', fontSize: 15}}>Body Sensation Awareness</span>
              <span style={{color: '#FFD7B8', marginRight: 8, fontSize: 15}}>2</span>
              <span style={{color: '#7AD6FF', fontSize: 15}}>5</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span style={{flex: 1, color: '#9CA3AF', fontSize: 15}}>Noticing Thought Patterns</span>
              <span style={{color: '#FFD7B8', marginRight: 8, fontSize: 15}}>3</span>
              <span style={{color: '#7AD6FF', fontSize: 15}}>4</span>
            </div>
          </div>
        </div>
        {/* Right: Mind-Body Alignment Card */}
        <div style={mobileStyle({
          flex: 1, minWidth: 320, background: '#181e2a', borderRadius: 12, border: '1px solid #23293a', padding: 24, marginLeft: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }, {
          minWidth: 0,
          width: '100%',
          marginLeft: 0,
          marginTop: 16,
          borderRadius: 8,
          padding: 12,
        })}>
          <div style={{fontSize: 36, fontWeight: 700, color: '#B18AFF', marginBottom: 4, textAlign: 'center'}}>+84%</div>
          <div style={{fontSize: 18, color: '#9CA3AF', fontWeight: 500, marginBottom: 12, textAlign: 'center'}}>SMS Score Improvement</div>
          <div style={{fontSize: 15, color: '#D1D5DB', marginBottom: 18, textAlign: 'center'}}>
            Your State Mindfulness Scale scores showed dramatic improvement with BWE meditation, particularly in body awareness (+96%) and present moment connection (+150%).
          </div>
          <div style={{width: '100%', marginTop: 8}}>
            <div style={{fontSize: 15, fontWeight: 500, color: '#D1D5DB', marginBottom: 6}}>BWE Effectiveness Match</div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{flex: 1, height: 10, background: '#23293a', borderRadius: 5, marginRight: 8, overflow: 'hidden'}}>
                <div style={{background: 'linear-gradient(to right, #7AD6FF, #7D4BE1)', height: '100%', width: '92%', borderRadius: 5}}></div>
              </div>
              <span style={{fontSize: 15, fontWeight: 500, color: '#D1D5DB'}}>92%</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Personal Insights Section */}
      <div style={mobileStyle({
        backgroundColor: "#111827", 
        borderRadius: "12px", 
        border: "1px solid #374151",
        padding: "24px",
        marginBottom: "24px"
      }, {
        borderRadius: 8,
        padding: '8px',
        marginBottom: 16,
      })}>
        <div style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
          <span style={{fontSize: "24px", marginRight: "12px"}}>⭐</span>
          <h3 style={{fontSize: "20px", fontWeight: "600", color: "white"}}>Your Unique Neural Strength</h3>
        </div>
        
        <div style={{marginBottom: "24px"}}>
          <div style={{fontSize: "18px", fontWeight: "600", color: "#C696FF", marginBottom: "12px"}}>Frontal Theta-Gamma Coupling</div>
          <p style={{fontSize: "14px", color: "#D1D5DB"}}>Your brain showed exceptional improvement in theta-gamma coupling, a pattern associated with advanced meditation and cognitive integration.</p>
        </div>
        
        <div>
          <div style={{display: "flex", alignItems: "center", marginBottom: "12px"}}>
            <span style={{fontSize: "20px", marginRight: "12px"}}>⬆️</span>
            <h4 style={{fontSize: "16px", fontWeight: "600", color: "white"}}>Personal BWE Recommendation</h4>
          </div>
          <p style={{fontSize: "14px", color: "#D1D5DB", marginLeft: "32px"}}>Focus on breath-centered techniques with 6Hz entrainment to further strengthen your unique neural pattern.</p>
          <p style={{fontSize: "14px", color: "#D1D5DB", marginLeft: "32px", marginTop: "12px"}}>
            For home practice, we recommend the Vayu Labs app with the "Theta Gateway" track (6Hz primary entrainment) for 20 minutes, 3-4 times weekly.
          </p>
        </div>
      </div>
      
      {/* Comparative Results Section */}
      <div style={mobileStyle({
        backgroundColor: "#111827", 
        borderRadius: "12px",
        border: "1px solid #374151",
        padding: "24px",
        marginBottom: "24px"
      }, {
        borderRadius: 8,
        padding: '8px',
        marginBottom: 16,
      })}>
        <h3 style={{fontSize: "20px", fontWeight: "600", color: "white", marginBottom: "24px"}}>How Your Results Compare</h3>
        
        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
          {/* Meditation Depth */}
          <div>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
              <span style={{fontSize: "14px", fontWeight: "500", color: "#D1D5DB"}}>Meditation Depth</span>
              <span style={{fontSize: "14px", fontWeight: "500", color: "#7AD6FF"}}>Top 15%</span>
            </div>
            <div style={{height: "10px", backgroundColor: "#1F2937", borderRadius: "5px", overflow: "hidden"}}>
              <div style={{
                background: "linear-gradient(to right, #7AD6FF, #7D4BE1)",
                height: "100%",
                width: "85%",
                borderRadius: "5px"
              }}></div>
            </div>
          </div>
          
          {/* BWE Enhancement Effect */}
          <div>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
              <span style={{fontSize: "14px", fontWeight: "500", color: "#D1D5DB"}}>BWE Enhancement Effect</span>
              <span style={{fontSize: "14px", fontWeight: "500", color: "#7AD6FF"}}>Top 8%</span>
            </div>
            <div style={{height: "10px", backgroundColor: "#1F2937", borderRadius: "5px", overflow: "hidden"}}>
              <div style={{
                background: "linear-gradient(to right, #7AD6FF, #7D4BE1)",
                height: "100%",
                width: "92%",
                borderRadius: "5px"
              }}></div>
            </div>
          </div>
          
          {/* Time to Deep State */}
          <div>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
              <span style={{fontSize: "14px", fontWeight: "500", color: "#D1D5DB"}}>Time to Deep State</span>
              <span style={{fontSize: "14px", fontWeight: "500", color: "#7AD6FF"}}>Top 12%</span>
            </div>
            <div style={{height: "10px", backgroundColor: "#1F2937", borderRadius: "5px", overflow: "hidden"}}>
              <div style={{
                background: "linear-gradient(to right, #7AD6FF, #7D4BE1)",
                height: "100%",
                width: "88%",
                borderRadius: "5px"
              }}></div>
            </div>
          </div>
        </div>
        
        <p style={{fontSize: "14px", color: "#9CA3AF", marginTop: "24px"}}>
          Your results are compared anonymously with other Vayu Labs workshop participants. 
          The BWE-enhanced meditation allowed you to reach states typically achieved only by those with 8+ years of consistent practice.
        </p>
      </div>
      
      {/* Footer */}
      <div style={{textAlign: "center", marginTop: "24px"}}>
        <p style={{fontSize: "14px", color: "#9CA3AF"}}>
          Vayu Labs • Neural State Training • www.vayulabs.com
        </p>
        <p style={{fontSize: "12px", color: "#6B7280", marginTop: "8px"}}>
          This report provides a simplified visualization of complex neurological data.
          For research purposes only. Not a medical diagnostic tool.
        </p>
      </div>
    </div>
  );
};

export default SecondAttentionReport;