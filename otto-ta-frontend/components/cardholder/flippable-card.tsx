import "./flippable-card.css";
import Card from "../card/card";

interface CardProps {
  question: string;
  answer: string;
  hint: string;
}
function FlippableCard(props: CardProps) {
  return (
    <div className="flippable-card-container">
      <Card question={props.question} answer={props.answer} hint={props.hint} />
    </div>
  );
}
export default FlippableCard;
