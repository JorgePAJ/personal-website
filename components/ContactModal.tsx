import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setIsOpen }: Props) {
  let firstInputRef = useRef(null);
  let labelClass = "select-none cursor-none";

  let inputClass = "mb-1";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";

  const handleOnSubmit = (e: any) => {
    document.querySelector("#submit")?.setAttribute("disabled", "disabled");
    e.preventDefault();
    if (name && email && message) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then(
          (result: any) => {
            Swal.fire({
              icon: "success",
              title: "Your message has been sent!",
              showConfirmButton: false,
              timer: 1500,
              width: 250,
            });
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
            Swal.fire({
              width: 250,
              icon: "error",
              title: "Oops...",
              text: error.text,
            });
          }
        )
        .finally(() => {
          document.querySelector("#submit")?.removeAttribute("disabled");
          setIsOpen(false);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields",
        iconColor: "#e3bfd4",
        confirmButtonColor: "#e3bfd4",
        width: 250,
      });
      setIsOpen(true);
      // activate button
      document.querySelector("#submit")?.removeAttribute("disabled");
    }
  };

  return (
    <div
      className={`relative z-50  ${isOpen ? "block" : "hidden"} `}
      onClick={() => setIsOpen(false)}
    >
      <div className="fixed inset-0  bg-black/30" aria-hidden="true" />
      <div className="fixed  inset-0 z-[60]  overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center">
          <div
            className="max-w-sm  z-[60]  p-4 window"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="title-bar w-full" id="titlebarModal">
              <div className="title-bar-text">send me a message</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Minimize"
                  onClick={() => setIsOpen(false)}
                />
                <button aria-label="Maximize" />
                <button aria-label="Close" onClick={() => setIsOpen(false)} />
              </div>
            </div>

            <div className="window-body">
              <form className="flex flex-col gap-1" onSubmit={handleOnSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="My name is..."
                    name="user_name"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="duser@gmail.com"
                    name="user_email"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello, I wanted to tell you that..."
                    className={inputClass}
                  />
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    id="submit"
                    type="submit"
                    className="cursor-none text-white select-none px-[14px] py-[6px]  transition-all duration-500 bg-gradient-to-tl to-[#9C89B8] via-[#F0A6CA] from-[#DEC0F1] bg-size-200 bg-pos-0 hover:bg-pos-100"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}