import LogoAnimated from '../LogoAnimated/LogoAnimated'
import './LogoScreen.css'

export default function LogoScreen() {
  return (
    <div className="LogoScreen">
      <LogoAnimated />
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translate(-50%)',
          fontFamily: 'sans-serif',
          fontSize: '20px',
          color: 'gray',
        }}
      >
        Gregory Kafanov Your Trusted Web Developer
      </div>
    </div>
  )
}
