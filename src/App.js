import "./App.css";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
} from "react-router-dom";
import TodoDetail from "./components/TodoDetail";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/modules/todos";

const StyledContainer = styled.div`
	max-width: 1200px;
	min-width: 800px;
	justify-content: center;
	height: 100vh;
	margin: 0 auto;
`;

function App() {
	let navigate = useNavigate();
	const location = useLocation();
	const [input_title, setInput_title] = useState("");
	const [input_content, setInput_content] = useState("");
	const todos = useSelector((state) => state.todos.todos);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input_title && input_content) {
			dispatch(addTodo(input_title, input_content));
			setInput_title("");
			setInput_content("");
			navigate("/todos");
		}
	};

	const isDetailPage = location.pathname.includes("/todos/");

	return (
		<StyledContainer>
			<Navbar
				bg='dark'
				variant='dark'>
				<Container>
					<Navbar.Brand
						as={Link}
						to='/'>
						투두 리스트 LV2
					</Navbar.Brand>
				</Container>
			</Navbar>
			{!isDetailPage && (
				<Form onSubmit={handleSubmit}>
					<Form.Control
						placeholder='제목'
						value={input_title}
						onChange={(e) => setInput_title(e.target.value)}
					/>
					<Form.Control
						placeholder='내용'
						value={input_content}
						onChange={(e) => setInput_content(e.target.value)}
					/>
					<Button
						variant='outline-secondary'
						type='submit'>
						추가하기
					</Button>
				</Form>
			)}
			<Routes>
				<Route
					path='/'
					element={!isDetailPage ? <TodoList /> : null}
				/>
				<Route
					path='/todos'
					element={!isDetailPage ? <TodoList /> : null}
				/>
				<Route
					path='/todos/:id'
					element={<TodoDetail />}
				/>
			</Routes>
		</StyledContainer>
	);
}

export default App;
