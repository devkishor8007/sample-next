import { useSelector } from "react-redux";

export default function Home() {
  const aa = useSelector((state) => state.moon);
  return (
    <>
      <p>{aa.home}</p>
    </>
  );
}
