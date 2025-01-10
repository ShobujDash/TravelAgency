import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/moving-border";

export function ContactFrom() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent dark:bg-black">
      <h2 className="font-bold text-xl text-white dark:text-neutral-200">
        Welcome to Travel24
      </h2>
      <p className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
        Contact with us
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className=" text-white">
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className=" text-white">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 text-white">
          <Label htmlFor="email ">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8 text-white">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            className="border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-neutral-800 dark:text-neutral-300 bg-white dark:bg-black w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </LabelInputContainer>

        <div className="w-80 ">
          <Button className="w-full px-4">Send Messagae &rarr;</Button>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
