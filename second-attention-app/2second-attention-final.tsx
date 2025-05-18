import React from 'react';
import BrainActivityImageSection from './BrainActivityImageSection';

const SecondAttentionReport = () => {
  return (
    <div style={{
      backgroundColor: "#030712", 
      color: "#D1D5DB", 
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "32px",
      borderRadius: "12px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      {/* Header */}
      <div style={{textAlign: "center", marginBottom: "32px"}}>
        <h1 style={{color: "white", fontSize: "32px", fontWeight: "600", marginBottom: "8px"}}>Second Attention</h1>
        <p style={{color: "#C696FF", fontSize: "18px", fontStyle: "italic", marginBottom: "16px"}}>Your Neural Shift Report</p>
        <p style={{color: "#9CA3AF", fontSize: "14px"}}>Session Date: May 15, 2025</p>
      </div>
      
      {/* Meditation Enhancement */}
      <div style={{
        backgroundColor: "#111827", 
        borderRadius: "12px", 
        border: "1px solid #374151",
        overflow: "hidden", 
        marginBottom: "24px"
      }}>
        {/* Top gradient section */}
        <div style={{
          background: "linear-gradient(135deg, #7D4BE1 0%, #7AD6FF 100%)",
          padding: "24px",
          color: "white"
        }}>
          <h2 style={{textAlign: "center", fontSize: "24px", marginBottom: "16px"}}>Meditation Enhancement</h2>
          
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "14px", opacity: "0.9", textTransform: "uppercase", letterSpacing: "0.5px"}}>Regular Meditation</p>
              <p style={{fontSize: "48px", fontWeight: "700", color: "#FFD7B8", margin: "8px 0"}}>32</p>
              <p style={{fontSize: "12px", opacity: "0.8"}}>Standard Alpha State</p>
            </div>
            
            <div style={{fontSize: "24px"}}>→</div>
            
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "14px", opacity: "0.9", textTransform: "uppercase", letterSpacing: "0.5px"}}>BWE-Enhanced Meditation</p>
              <p style={{fontSize: "48px", fontWeight: "700", color: "#7AD6FF", margin: "8px 0"}}>78</p>
              <p style={{fontSize: "12px", opacity: "0.8"}}>Deep Alpha-Theta State</p>
            </div>
            
            <div style={{fontSize: "24px"}}>→</div>
            
            <div style={{
              textAlign: "center", 
              backgroundColor: "rgba(17, 24, 39, 0.3)", 
              padding: "16px", 
              borderRadius: "8px"
            }}>
              <p style={{fontSize: "14px", opacity: "0.9", textTransform: "uppercase", letterSpacing: "0.5px"}}>Improvement</p>
              <p style={{fontSize: "48px", fontWeight: "700", color: "#FDD6F8", margin: "8px 0"}}>+144%</p>
              <p style={{fontSize: "12px", opacity: "0.8"}}>Overall State Change</p>
            </div>
          </div>
        </div>
        
        {/* Brain activity section */}
        <div style={{padding: "24px", borderBottom: "1px solid #374151"}}>
          <h3 style={{fontSize: "20px", fontWeight: "600", color: "white", marginBottom: "16px"}}>Brain Activity Comparison</h3>
          
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "16px", marginBottom: "12px", color: "#D1D5DB"}}>Regular Meditation</p>
              <div style={{
                width: "120px", 
                height: "120px", 
                margin: "0 auto", 
                borderRadius: "60px", 
                backgroundColor: "#1F2937",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "60px",
                  background: "radial-gradient(circle at center, #FFD7B8 0%, transparent 70%)",
                  opacity: "0.4"
                }}></div>
                <span style={{fontSize: "48px"}}>🧠</span>
              </div>
              <p style={{fontSize: "14px", marginTop: "12px", color: "#9CA3AF"}}>Light Alpha, Minimal Theta</p>
            </div>
            
            <div style={{fontSize: "24px", color: "#7D4BE1"}}>⟶</div>
            
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "16px", marginBottom: "12px", color: "#D1D5DB"}}>BWE-Enhanced Meditation</p>
              <div style={{
                width: "120px", 
                height: "120px", 
                margin: "0 auto", 
                borderRadius: "60px", 
                backgroundColor: "#1F2937",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "60px",
                  background: "radial-gradient(circle at center, #7AD6FF 0%, #C696FF 40%, transparent 70%)",
                  opacity: "0.5"
                }}></div>
                <span style={{fontSize: "48px"}}>🧠</span>
              </div>
              <p style={{fontSize: "14px", marginTop: "12px", color: "#9CA3AF"}}>Deep Alpha-Theta State, High Coherence</p>
            </div>
          </div>
        </div>
        
        {/* Wave metrics section */}
        <div style={{padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px"}}>
          <div style={{backgroundColor: "#1F2937", padding: "16px", borderRadius: "8px", border: "1px solid #374151"}}>
            <h4 style={{fontSize: "16px", fontWeight: "600", color: "#D1D5DB", marginBottom: "12px"}}>Alpha Waves (Meditation)</h4>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "80px"}}>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "28%",
                    backgroundColor: "#FFD7B8",
                    opacity: "0.7",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: "600"}}>28</span>
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
                    backgroundColor: "#7AD6FF",
                    opacity: "0.7",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: "600"}}>67</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>After</p>
              </div>
              
              <div style={{flex: "1", textAlign: "center"}}>
                <p style={{fontSize: "18px", fontWeight: "600", color: "#FDD6F8"}}>+139%</p>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: "#1F2937", padding: "16px", borderRadius: "8px", border: "1px solid #374151"}}>
            <h4 style={{fontSize: "16px", fontWeight: "600", color: "#D1D5DB", marginBottom: "12px"}}>Theta Waves (Deep Meditation)</h4>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "80px"}}>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "19%",
                    backgroundColor: "#FFD7B8",
                    opacity: "0.7",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: "600"}}>19</span>
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
                    backgroundColor: "#7AD6FF",
                    opacity: "0.7",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: "600"}}>58</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>After</p>
              </div>
              
              <div style={{flex: "1", textAlign: "center"}}>
                <p style={{fontSize: "18px", fontWeight: "600", color: "#FDD6F8"}}>+205%</p>
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: "#1F2937", padding: "16px", borderRadius: "8px", border: "1px solid #374151"}}>
            <h4 style={{fontSize: "16px", fontWeight: "600", color: "#D1D5DB", marginBottom: "12px"}}>Gamma Waves (Peak States)</h4>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "80px"}}>
              <div style={{textAlign: "center", flex: "1"}}>
                <div style={{height: "60px", position: "relative"}}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "14%",
                    backgroundColor: "#FFD7B8",
                    opacity: "0.7",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: "600"}}>14</span>
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
                    height: "41%",
                    backgroundColor: "#7AD6FF",
                    opacity: "0.7",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{fontSize: "14px", fontWeight: "600"}}>41</span>
                  </div>
                </div>
                <p style={{marginTop: "8px", fontSize: "12px", color: "#9CA3AF"}}>After</p>
              </div>
              
              <div style={{flex: "1", textAlign: "center"}}>
                <p style={{fontSize: "18px", fontWeight: "600", color: "#FDD6F8"}}>+193%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subjective Experience Section */}
      <div style={{
        backgroundColor: "#111827", 
        borderRadius: "12px", 
        border: "1px solid #374151",
        padding: "24px",
        marginBottom: "24px"
      }}>
        <h3 style={{fontSize: "20px", fontWeight: "600", color: "white", marginBottom: "24px"}}>Your Subjective Experience</h3>
        
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px"}}>
          <div>
            <h4 style={{fontSize: "16px", fontWeight: "500", color: "#D1D5DB", marginBottom: "16px"}}>State Management Scale</h4>
            
            {/* Mental Clarity */}
            <div style={{marginBottom: "16px"}}>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}>
                <span style={{fontSize: "14px", color: "#D1D5DB"}}>Mental Clarity</span>
                <div>
                  <span style={{fontSize: "14px", color: "#FFD7B8", marginRight: "12px"}}>5</span>
                  <span style={{fontSize: "14px", color: "#7AD6FF"}}>8</span>
                </div>
              </div>
              <div style={{height: "8px", backgroundColor: "#1F2937", borderRadius: "4px", position: "relative"}}>
                <div style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  backgroundColor: "#FFD7B8",
                  opacity: "0.7",
                  borderRadius: "4px 0 0 4px"
                }}></div>
                <div style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  width: "30%",
                  backgroundColor: "#7AD6FF",
                  opacity: "0.7",
                  borderRadius: "0 4px 4px 0"
                }}></div>
              </div>
            </div>
            
            {/* Emotional Calm */}
            <div style={{marginBottom: "16px"}}>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}>
                <span style={{fontSize: "14px", color: "#D1D5DB"}}>Emotional Calm</span>
                <div>
                  <span style={{fontSize: "14px", color: "#FFD7B8", marginRight: "12px"}}>6</span>
                  <span style={{fontSize: "14px", color: "#7AD6FF"}}>9</span>
                </div>
              </div>
              <div style={{height: "8px", backgroundColor: "#1F2937", borderRadius: "4px", position: "relative"}}>
                <div style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "60%",
                  backgroundColor: "#FFD7B8",
                  opacity: "0.7",
                  borderRadius: "4px 0 0 4px"
                }}></div>
                <div style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  width: "30%",
                  backgroundColor: "#7AD6FF",
                  opacity: "0.7",
                  borderRadius: "0 4px 4px 0"
                }}></div>
              </div>
            </div>
            
            {/* Body Relaxation */}
            <div style={{marginBottom: "16px"}}>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}>
                <span style={{fontSize: "14px", color: "#D1D5DB"}}>Body Relaxation</span>
                <div>
                  <span style={{fontSize: "14px", color: "#FFD7B8", marginRight: "12px"}}>5</span>
                  <span style={{fontSize: "14px", color: "#7AD6FF"}}>9</span>
                </div>
              </div>
              <div style={{height: "8px", backgroundColor: "#1F2937", borderRadius: "4px", position: "relative"}}>
                <div style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  backgroundColor: "#FFD7B8",
                  opacity: "0.7",
                  borderRadius: "4px 0 0 4px"
                }}></div>
                <div style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  width: "40%",
                  backgroundColor: "#7AD6FF",
                  opacity: "0.7",
                  borderRadius: "0 4px 4px 0"
                }}></div>
              </div>
            </div>
            
            {/* Present Awareness */}
            <div style={{marginBottom: "16px"}}>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}>
                <span style={{fontSize: "14px", color: "#D1D5DB"}}>Present Awareness</span>
                <div>
                  <span style={{fontSize: "14px", color: "#FFD7B8", marginRight: "12px"}}>4</span>
                  <span style={{fontSize: "14px", color: "#7AD6FF"}}>8</span>
                </div>
              </div>
              <div style={{height: "8px", backgroundColor: "#1F2937", borderRadius: "4px", position: "relative"}}>
                <div style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "40%",
                  backgroundColor: "#FFD7B8",
                  opacity: "0.7",
                  borderRadius: "4px 0 0 4px"
                }}></div>
                <div style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  width: "40%",
                  backgroundColor: "#7AD6FF",
                  opacity: "0.7",
                  borderRadius: "0 4px 4px 0"
                }}></div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 style={{fontSize: "16px", fontWeight: "500", color: "#D1D5DB", marginBottom: "16px"}}>Mind-Body Alignment</h4>
            
            <div style={{
              backgroundColor: "#1F2937", 
              padding: "16px", 
              borderRadius: "8px", 
              border: "1px solid #374151"
            }}>
              <div style={{textAlign: "center", marginBottom: "16px"}}>
                <div style={{fontSize: "24px", fontWeight: "700", color: "#C696FF"}}>+64%</div>
                <div style={{fontSize: "14px", color: "#9CA3AF"}}>Subjective Improvement</div>
              </div>
              
              <p style={{fontSize: "14px", color: "#D1D5DB", marginBottom: "16px"}}>
                Your subjective ratings showed dramatic improvement with BWE meditation, 
                particularly in body relaxation (+80%) and present moment awareness (+100%).
              </p>
              
              <div>
                <div style={{fontSize: "14px", fontWeight: "500", color: "#D1D5DB", marginBottom: "8px"}}>BWE Effectiveness Match</div>
                <div style={{display: "flex", alignItems: "center"}}>
                  <div style={{
                    flex: "1", 
                    height: "10px", 
                    backgroundColor: "#111827", 
                    borderRadius: "5px", 
                    marginRight: "8px",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      background: "linear-gradient(to right, #7D4BE1, #7AD6FF)",
                      height: "100%",
                      width: "92%",
                      borderRadius: "5px"
                    }}></div>
                  </div>
                  <span style={{fontSize: "14px", fontWeight: "500"}}>92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Personal Insights Section */}
      <div style={{
        backgroundColor: "#111827", 
        borderRadius: "12px", 
        border: "1px solid #374151",
        padding: "24px",
        marginBottom: "24px"
      }}>
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
      <div style={{
        backgroundColor: "#111827", 
        borderRadius: "12px",
        border: "1px solid #374151",
        padding: "24px",
        marginBottom: "24px"
      }}>
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
                background: "linear-gradient(to right, #7D4BE1, #7AD6FF)",
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
                background: "linear-gradient(to right, #7D4BE1, #7AD6FF)",
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
                background: "linear-gradient(to right, #7D4BE1, #7AD6FF)",
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