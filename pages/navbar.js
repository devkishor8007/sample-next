import Link from "next/link";

function Navbar() {
  return (
    <ul>
      <li style={{ display: "inline", margin: "10px" }}>
        <Link href="/">Home</Link>
      </li>
      <li style={{ display: "inline", margin: "10px" }}>
        <Link href="/about">About Us</Link>
      </li>
      <li style={{ display: "inline", margin: "10px" }}>
        <Link href="/blog">Blog Post</Link>
      </li>
    </ul>
  );
}

export default Navbar;
