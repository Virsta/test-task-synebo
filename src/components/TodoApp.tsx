import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Todo } from '../types/types';
import { Container, Box, Header, InputWrapper, Button, Input, FilterBar, FilterButton } from '../styles/StyledComponents';
import GlobalStyle from '../styles/GlobalStyles';
import DraggableTodo from '../components/DraggableTodo';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const moveTodo = (draggedId: string, targetId: string) => {
    const draggedIndex = todos.findIndex((todo) => todo.id === draggedId);
    const targetIndex = todos.findIndex((todo) => todo.id === targetId);
  
    if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
      const updatedTodos = [...todos];
      const [movedTodo] = updatedTodos.splice(draggedIndex, 1);
      updatedTodos.splice(targetIndex, 0, movedTodo);
      setTodos(updatedTodos);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
        <Container>
        <Header>
          <h1>To do</h1>
        </Header>
        <Box>    
          <InputWrapper>
            <Input
              value={newTodo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Create a new todo..."
            />
            <Button onClick={addTodo}>Add</Button>
          </InputWrapper>
          {filteredTodos.map((todo) => (
            <DraggableTodo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              todos={todos}
              deleteTodo={deleteTodo}
              moveTodo={moveTodo}
            />
          ))}
          <FilterBar>
            <FilterButton active={false}>{remainingTodos} item{remainingTodos !== 1 ? 's' : ''} left</FilterButton>
            <div>
              {['All', 'Active', 'Completed'].map((type) => (
                <FilterButton
                  key={type}
                  active={filter === type}
                  onClick={() => setFilter(type as typeof filter)}
                >
                  {type}
                </FilterButton>
              ))}
            </div>
            <Button onClick={clearCompleted}>Clear Completed</Button>
          </FilterBar>
        </Box>
      </Container>
      
    </DndProvider>
  );
};


export default TodoApp;