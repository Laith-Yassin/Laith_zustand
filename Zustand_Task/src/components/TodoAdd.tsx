import { Input, Button, Row, Col } from 'antd';

import useStore from "../store";

function TodoAdd() {
  const store = useStore((state) => state);

  return (
    <Row gutter={16} style={{ paddingTop: 8 }}>
    <Col span={16}>
      <Input
        value={store.newTodo}
        onChange={(evt) => store.setNewTodo(evt.target.value)}
        placeholder="New todo"
      />
    </Col>
    <Col span={8}>
      <Button
        type="primary"
        onClick={() => {
          store.addTodo();
        }}
      >
        Add Todo
      </Button>
    </Col>
  </Row>
  );
}

export default TodoAdd;