export default function about() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing the best services.</p>
      <button onClick={() => (window.location.href = "/job")}>Click Me</button>
    </div>
  );
}
