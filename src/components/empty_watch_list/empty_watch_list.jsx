import React from 'react';
import { useNavigate } from 'react-router-dom';
import heartIcon from '../../icons/heart slash.png';

export default function EmptyWatchList() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div style={{ width: '100%', height: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

            {/* Placeholder for Icon */}
            <div style={{ width: '211.60px', height: '211.62px', position: 'relative', marginBottom: '20px' }}>
                <img src={heartIcon} alt="Heart Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* No Movies Message */}
            <div style={{ color: 'black', fontSize: '24px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textAlign: 'center', marginBottom: '20px' }}>
                No Movies in watch list
            </div>

            {/* Back to Home Button */}
            <button
                onClick={handleBackToHome}
                style={{
                    width: '383px',
                    height: '46px',
                    background: '#FFE353',
                    borderRadius: '10px',
                    border: 'none',
                    color: '#050505',
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '46px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    marginTop: '20px'
                }}
            >
                Back to Home
            </button>
        </div>
    );
}