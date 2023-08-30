import { Input, Button, Row, Col } from 'antd';

import useStore from "../store";

function TodoAdd() {
  
  const addTodo = useStore((state) => state.addTodo)
  const newTodo = useStore((state) => state.newTodo)
  const setNewTodo = useStore((state)=> state.setNewTodo)
  return (
    <Row gutter={16} style={{ paddingTop: 8 }}>
    <Col span={16}>
      <Input
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
        placeholder="New todo"
      />
    </Col>
    <Col span={8}>
      <Button
        type="primary"
        onClick={addTodo}
      >
        Add Todo
      </Button>
    </Col>
  </Row>
  );
}

export default TodoAdd;