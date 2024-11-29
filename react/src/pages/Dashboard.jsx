import { useAuth } from '../context/AuthContext';
import Products from './Products';
import "./dashboard.css";
const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className='container-All'>
      <h1>Bienvenido {user.nombre_usuario}</h1>
      <Products />
    </div>
  );
};

export default Dashboard;
