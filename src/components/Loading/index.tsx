export function LoadingSpinner({ text = "Carregando..." }: { text?: string }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            color: '#4ecdc4',
            fontSize: '1.1rem'
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid rgba(78, 205, 196, 0.3)',
                borderTop: '4px solid #4ecdc4',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '1rem'
            }}></div>
            {text}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export function LoadingCard() {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #2d2d44 0%, #3d3d5c 100%)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'pulse 1.5s ease-in-out infinite'
        }}>
            <div style={{
                height: '24px',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                backgroundSize: '200% 100%',
                borderRadius: '4px',
                marginBottom: '1rem',
                animation: 'shimmer 2s infinite'
            }}></div>
            
            <div style={{
                height: '60px',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                backgroundSize: '200% 100%',
                borderRadius: '4px',
                marginBottom: '1rem',
                animation: 'shimmer 2s infinite 0.5s'
            }}></div>
            
            <div style={{
                height: '30px',
                width: '60%',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                backgroundSize: '200% 100%',
                borderRadius: '4px',
                animation: 'shimmer 2s infinite 1s'
            }}></div>
            
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
            `}</style>
        </div>
    );
}
