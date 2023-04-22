import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

function TodoDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const todo = useSelector((state) =>
		state.todos.todos.find((todo) => todo.id === parseInt(id, 10))
	);

	if (!todo) {
		return <div>Todo를 찾지 못했습니다.</div>;
	}

	return (
		<Card>
			<Card.Header>상세내용 </Card.Header>
			<Card.Body>
				<Card.Title>리스트 ID: {todo.id + 1}</Card.Title>
				<Card.Title style={{ borderBottom: "solid 1px black" }}>
					{todo.title}
				</Card.Title>
				<Card.Text style={{ borderBottom: "solid 1px black" }}>
					{todo.content}
				</Card.Text>
				<Button
					variant='secondary'
					onClick={() => {
						navigate(-1);
					}}>
					돌아가기
				</Button>
			</Card.Body>
		</Card>
	);
}

export default TodoDetail;
