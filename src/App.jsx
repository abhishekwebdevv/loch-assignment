import { useState } from "react";
import { SectionOne, SectionTwo, TestimonialsSection } from "./sections";
import { Input, Button } from "./components";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.trim()) {
      setError("Email is required.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      setEmail("");
      window.location.href = "https://app.loch.one/welcome";
    }
  };

  return (
    <main className="lg:flex h-full">
      <div className="lg:w-3/5 bg-gradient-radial bg-cover bg-black py-5 px-5 sm:py-24 sm:px-16 flex flex-col gap-10 overflow-hidden">
        <SectionOne />
        <SectionTwo />
        <TestimonialsSection />
      </div>
      <div className="lg:w-2/5 flex justify-center py-10 relative transition-all">
        <div className="flex flex-col gap-5 p-5 lg:sticky lg:top-0 h-fit lg:mt-40">
          <h1 className="text-5xl font-medium text-gray-300 leading-tight text-center sm:text-left">
            Sign up for <br /> exlusive access.
          </h1>

          <div>
            <Input value={email} onChange={handleChange} error={error} />
            <p className={`${error ? "text-red-500 text-sm mt-2" : "hidden"}`}>
              {error}
            </p>
          </div>
          <Button onClick={handleSubmit} />
          <p className="font-semibold">
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
