import './styles.css';
import IMAGE from './react-logo.png';
import LOGO from './pedro.svg';
import { CounterButton } from './CounterButton'

export const App = () => {
    return <>
    <h1>MUSCI Home Page - {process.env.NODE_ENV} {process.env.name}</h1>
    <img src={IMAGE} alt="React Logo" width="300" />
    <img src={LOGO} alt="React Logo" height="500" />
    <CounterButton />
    </>
}