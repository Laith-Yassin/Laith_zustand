import { Typography } from 'antd';
import { Checkbox, Input, Button } from 'antd';
// import { EditOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";


const { Title } = Typography;

import useStore from "../store";

function TodoListItems() {
  const store = useStore((state) => state);

  return (
    <>
    {store.todos.map((todo) => (
      <div key={todo.id} style={{ display: 'flex', paddingTop: 8 }}>
        <Checkbox
          onClick={() => store.toggleTodo(todo.id)}
          checked={todo.done}
        />
        <Input
          style={{ margin: '0 8px' }}
          value={todo.text}
          onChange={(evt) => store.updateTodo(todo.id, evt.target.value)}
        />
        <Button
          onClick={() => store.removeTodo(todo.id)}
          danger
        >
          Delete
        </Button>
        {/* <Link to="/todo/edit">
          <Button type="primary" icon={<EditOutlined />} />
        </Link> */}
      </div>
    ))}
  </>
  );
}

function TodoList() {
  return (
    <>
  <Title level={2}>Todo List</Title>
      <TodoListItems />
    </>
  );
}

export default TodoList;