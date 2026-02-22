import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-xl">Home Page</h2>
      <Link href="./tickets" className="underline">
        Tickets
      </Link>
    </div>
  );
};
export default HomePage;
