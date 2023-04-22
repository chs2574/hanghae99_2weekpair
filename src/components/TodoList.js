import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/modules/todos";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledListGroupItem = styled(ListGroup.Item)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

function TodoList() {
	const todos = useSelector((state) => state.todos.todos);
	const dispatch = useDispatch();

	const noddoneTodos = todos.filter((todo) => !todo.completed);
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<ListGroup>
			<h2>해야할일😂</h2>
			{todos.map((todo) =>
				todo.isDone == false ? (
					<StyledListGroupItem key={todo.id}>
						<Link to={`/todos/${todo.id}`}>
							<span>{todo.title}</span>
						</Link>
						<div>
							<Button
								onClick={() => dispatch(toggleTodo(todo.id))}>
								완료
							</Button>
							<Button
								onClick={() => dispatch(deleteTodo(todo.id))}>
								삭제
							</Button>
						</div>
					</StyledListGroupItem>
				) : null
			)}
			<h2>끝난일🎉</h2>
			{todos.map((todo) =>
				todo.isDone ? (
					<StyledListGroupItem key={todo.id}>
						<Link to={`/todos/${todo.id}`}>
							<span>{todo.title}</span>
						</Link>
						<div>
							<Button
								onClick={() => dispatch(toggleTodo(todo.id))}>
								되돌리기
							</Button>
							<Button
								onClick={() => dispatch(deleteTodo(todo.id))}>
								삭제
							</Button>
						</div>
					</StyledListGroupItem>
				) : null
			)}
		</ListGroup>
	);
}

export default TodoList;
