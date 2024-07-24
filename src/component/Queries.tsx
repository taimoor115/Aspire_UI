import { questionsData } from "../lib/utils/contants";
import QuestionList from "./QuestionList";

const Queries = () => {
  return (
    <section className="container">
      <div className="bg-lightGray py-40 lg:px-40">
        <div>
          <p className="text-center font-serif text-2xl font-bold text-primary md:text-4xl lg:text-[56px] lg:leading-[60px]">
            Frequently asked questions
          </p>
        </div>

        <p className="text-fadeGray mt-5 text-center text-xs md:text-sm lg:text-base">
          We have put together some commonly asked questions
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
          {questionsData.map((question) => (
            <QuestionList question={question.question} key={question.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Queries;
