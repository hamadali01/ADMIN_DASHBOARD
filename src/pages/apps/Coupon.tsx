import { FormEvent, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "!@#$%^&*()-+";
const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeCharacter, setIncludeCharacter] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const copyText = async (text: string) => {
    await window.navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!includeCharacter && !includeNumber && !includeSymbols)
      return alert("Please Select At Least One");

    let result: string = prefix || "";
    const loopLength: number = size - result.length

    for (let i = 0; i < loopLength; i++) {
        let entireString: string = ""
        if (includeCharacter) entireString += allLetters
        if (includeNumber) entireString += allNumbers
        if (includeSymbols) entireString += allSymbols

        const randomNumber: number = ~~(Math.random() * entireString.length)

        result += entireString[randomNumber]
        
    }

    setCoupon(result);
    setIsCopied(false);
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumber}
                onChange={() => setIncludeNumber((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeCharacter}
                onChange={() => setIncludeCharacter((prev) => !prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>

            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
