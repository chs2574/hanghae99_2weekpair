const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

export const addTodo = (title, content) => ({
	type: ADD_TODO,
	payload: { title, content },
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	payload: { id },
});

// Initial State
const initialState = {
	todos: [
		{
			id: 0,
			title: "예제 1번제목",
			content: "예제 1번타이틀",
			isDone: false,
		},
		{
			id: 1,
			title: "예제 2번 제목",
			content: "예제 2번타이틀",
			isDone: false,
		},
		{
			id: 2,
			title: "예제 3번 제목",
			content: "예제 3번타이틀",
			isDone: false,
		},
	],
};

export default function todosReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			const newTodo = {
				id:
					state.todos.length > 0
						? state.todos[state.todos.length - 1].id + 1
						: 0,
				title: action.payload.title,
				content: action.payload.content,
				isDone: false,
			};
			return { ...state, todos: [...state.todos, newTodo] };

		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, isDone: !todo.isDone }
						: todo
				),
			};

		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(
					(todo) => todo.id !== action.payload.id
				),
			};

		default:
			return state;
	}
}
