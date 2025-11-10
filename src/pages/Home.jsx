import BillCard from "../component/BillCard";
import { useLoaderData } from "react-router";

const Home = () => {
  const bill = useLoaderData();

  console.log(bill);
  return (
    <div className="grid grid-cols-3 gap-3.5">
      {bill.map((bill) => (
        <BillCard bill={bill}></BillCard>
      ))}
    </div>
  );
};

export default Home;
