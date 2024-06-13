import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './utils/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import root from './router/root';

function App() {
  return (
    // 데이터를 전달하고자 하는 자식 컴포넌트를 Provider로 감쌉니다.
    <AuthContextProvider>
      <RouterProvider router={root} />
    </AuthContextProvider>
  );
}

export default App;
