import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Todo } from '../types/types';
import { TodoItem, Checkbox, TodoText, Button } from '../styles/StyledComponents';

const DraggableTodo: React.FC<{
  todo: Todo;
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  moveTodo: (draggedId: string, targetId: string) => void;
}> = ({ todo, todos, toggleTodo, deleteTodo, moveTodo }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'TODO',
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop(() => ({
    accept: 'TODO',
    hover: (draggedItem: { id: string }) => {
      if (draggedItem.id !== todo.id) {
        const draggedIndex = todos.findIndex((t) => t.id === draggedItem.id);
        const targetIndex = todos.findIndex((t) => t.id === todo.id);
        if (draggedIndex !== targetIndex) {
          moveTodo(draggedItem.id, todo.id);
        }
      }
    },
  }));

  return (
    <TodoItem 
      isDragging={isDragging} 
      ref={(node) => dragRef(dropRef(node))}
      key={todo.id}>
      <Checkbox completed={todo.completed} onClick={() => toggleTodo(todo.id)} />
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <Button onClick={() => deleteTodo(todo.id)}><span className="material-symbols-outlined">delete</span></Button>
    </TodoItem>
  );
};

export default DraggableTodo;