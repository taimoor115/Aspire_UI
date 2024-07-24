import { downArrow } from "../assets/images";

interface QuestionListProps {
  question: string;
}

const QuestionList = ({ question }: QuestionListProps) => {
  return (
    <div className="flex items-center justify-between bg-white py-5 shadow">
      <p className="border-border pl-3 text-[10px] md:text-base lg:font-[18px]">
        {question}
      </p>
      <img src={downArrow} alt="icon" className="w-4.5 h-2 pr-3" />
    </div>
  );
};

export default QuestionList;
