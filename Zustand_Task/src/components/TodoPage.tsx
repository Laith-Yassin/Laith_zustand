import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale/en_US";
import { Row, Col } from "antd";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { Outlet } from "react-router-dom";



function TodoPage() {
  return (
    <>
      <ConfigProvider locale={enUS}>
        <div style={{ maxWidth: "8xl", margin: "auto", padding: 5 }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <TodoList />
            </Col>
            <Col span={24}>
              <TodoAdd />
            </Col>
          </Row>
        </div>
        {/* <Link to="/todo/edit">
          <Button type="primary" icon={<EditOutlined />} />
        </Link> */}
        <Outlet />
      </ConfigProvider>
    </>
  );
}

export default TodoPage;
