import { Link } from "react-router-dom"; 
import { Button } from 'antd';

function Home() {
  return (
    <>
      <Link to="/todo"> 
        <Button type="primary">Primary Button</Button>
      </Link>
    </>
  );
}

export default Home;
