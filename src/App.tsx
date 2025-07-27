import ChatLayout from './components/ChatLayout';

function App() {
  return (
    <div className="App" style={{
      margin: 0,
      padding: 0,
      width: '100vw',
      overflowX: 'hidden'
    }}>
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        padding: '0 5%',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#0066cc',
            margin: 0
          }}>
            DeviceCare
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Products</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Solutions</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Support</a>
          <button style={{
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </div>
      </nav>

      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '80px 5%',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Protect & Optimize Your Devices
          </h1>
          <p style={{ 
            fontSize: '20px', 
            marginBottom: '40px',
            opacity: 0.9,
            maxWidth: '600px'
          }}>
            DeviceCare monitors, protects, and optimizes all your devices with real-time health scanning, performance optimization, and automated backups.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button style={{
              backgroundColor: '#ffffff',
              color: '#0066cc',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Start Free Trial
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '2px solid #ffffff',
              padding: '15px 30px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#ffffff',
        padding: '80px 5%',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ 
          fontSize: '36px', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          color: '#333'
        }}>
          Why Choose DeviceCare?
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#666',
          marginBottom: '60px'
        }}>
          Comprehensive protection for all your devices
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            padding: '30px',
            borderRadius: '12px',
            backgroundColor: '#f8f9fa',
            textAlign: 'left'
          }}>
            <div style={{ 
              fontSize: '40px', 
              marginBottom: '20px'
            }}>🔍</div>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 'bold', 
              marginBottom: '15px',
              color: '#333'
            }}>
              Health Monitoring
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6'
            }}>
              Real-time monitoring of your device's performance, temperature, and overall health with detailed reports.
            </p>
          </div>

          <div style={{
            padding: '30px',
            borderRadius: '12px',
            backgroundColor: '#f8f9fa',
            textAlign: 'left'
          }}>
            <div style={{ 
              fontSize: '40px', 
              marginBottom: '20px'
            }}>⚡</div>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 'bold', 
              marginBottom: '15px',
              color: '#333'
            }}>
              Performance Optimization
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6'
            }}>
              Automatically optimize your device's performance by cleaning junk files and managing resources.
            </p>
          </div>

          <div style={{
            padding: '30px',
            borderRadius: '12px',
            backgroundColor: '#f8f9fa',
            textAlign: 'left'
          }}>
            <div style={{ 
              fontSize: '40px', 
              marginBottom: '20px'
            }}>🛡️</div>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 'bold', 
              marginBottom: '15px',
              color: '#333'
            }}>
              Security Protection
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6'
            }}>
              Advanced security scanning and real-time protection against malware, viruses, and threats.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '60px 5%',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          color: '#333'
        }}>
          Trusted by millions worldwide
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#666',
          marginBottom: '40px'
        }}>
          Join over 5 million users who trust DeviceCare to protect their devices
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0066cc' }}>5M+</div>
            <div style={{ color: '#666' }}>Active Users</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0066cc' }}>99.9%</div>
            <div style={{ color: '#666' }}>Uptime</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#0066cc' }}>24/7</div>
            <div style={{ color: '#666' }}>Support</div>
          </div>
        </div>
      </div>

      <footer style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '40px 5%',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0066cc' }}>DeviceCare</h3>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Contact Us</a>
          <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Help Center</a>
        </div>
        <p style={{ color: '#999', margin: 0 }}>
          © 2024 DeviceCare. All rights reserved.
        </p>
      </footer>

      <ChatLayout />
    </div>
  );
}

export default App;