import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 10px;

  @media screen and (max-width: 768px), (max-width: 375px) {
      margin: 10px auto;
    }
`;

export const Box = styled.section`
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Header = styled.header`
  color: white;

  h1 {
    text-transform: uppercase;
    font-size: 42px;
    font-weight: 600;
    letter-spacing: 3px;
    margin: 30px 0;

    @media screen and (max-width: 768px), (max-width: 375px) {
      font-size: 32px;
    }
  }
`;

export const InputWrapper = styled.div`
  background: #fff;
  display: flex;
  padding: 16px;
  border-radius: 8px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #555555;
  margin-left: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: #000080;
  }
`;

export const TodoItem = styled.div<{ isDragging: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
  cursor: grab;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  background: ${({ isDragging }) => (isDragging ? "#ddd" : "white")};

  &:active {
    cursor: grabbing;
  }
`;

export const Checkbox = styled.div<{ completed: boolean }>`
  width: 20px;
  height: 20px;
  border: ${({ completed }) => (completed ? '' : '2px solid #c0c0c0')} ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 16px;
  
  background: ${({ completed }) =>
    completed
      ? "linear-gradient(307deg, rgba(101,9,147,0.9467436632856268) 0%, rgba(153,0,154,0.845903327151173) 27%, rgba(0,48,180,0.7814775568430498) 96%, rgba(0,129,255,0.7450629910167192) 100%)"
      : ''};

  &::before {
    content: '${({ completed }) => (completed ? '\u2713' : '')}';
    color: #fff;
    font-size: 12px;
    font-weight: bold;
`;

export const TodoText = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#aaa" : "black")};
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid #eee;
  background: #f9f9f9;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  color: ${({ active }) => (active ? "#000080" : "#555")};
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: #000080;
  }
`;
