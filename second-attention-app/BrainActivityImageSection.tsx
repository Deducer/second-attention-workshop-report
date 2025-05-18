import React from 'react';
import imageSrc from './image.png';

const BrainActivityImageSection = () => {
  return (
    <div style={{ padding: '24px', borderBottom: '1px solid #374151', backgroundColor: '#111827', borderRadius: '12px', marginBottom: '24px' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'white', marginBottom: '16px', textAlign: 'center' }}>
        Brain Activity Comparison
      </h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}>
        {/* Regular Meditation */}
        <div style={{ textAlign: 'center', flex: 1 }}>
          <p style={{ fontSize: '16px', marginBottom: '12px', color: '#D1D5DB' }}>Regular Meditation</p>
          <div style={{
            width: '160px',
            height: '160px',
            margin: '0 auto',
            borderRadius: '80px',
            backgroundColor: '#1F2937',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 0 24px 0 #FFD7B880',
            border: '2px solid #374151',
          }}>
            <img
              src={imageSrc}
              alt="Brain activity map - Regular Meditation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <p style={{ fontSize: '14px', marginTop: '12px', color: '#9CA3AF' }}>Light Alpha, Minimal Theta</p>
        </div>
        {/* Arrow */}
        <div style={{ fontSize: '32px', color: '#7D4BE1', margin: '0 16px' }}>⟶</div>
        {/* BWE-Enhanced Meditation */}
        <div style={{ textAlign: 'center', flex: 1 }}>
          <p style={{ fontSize: '16px', marginBottom: '12px', color: '#D1D5DB' }}>BWE-Enhanced Meditation</p>
          <div style={{
            width: '160px',
            height: '160px',
            margin: '0 auto',
            borderRadius: '80px',
            backgroundColor: '#1F2937',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 0 32px 0 #7AD6FF80',
            border: '2px solid #374151',
          }}>
            <img
              src={imageSrc}
              alt="Brain activity map - BWE-Enhanced Meditation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <p style={{ fontSize: '14px', marginTop: '12px', color: '#9CA3AF' }}>Deep Alpha-Theta State, High Coherence</p>
        </div>
      </div>
    </div>
  );
};

export default BrainActivityImageSection; 