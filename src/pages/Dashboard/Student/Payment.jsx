import { Button, TextInput } from "flowbite-react";

const Payment = () => {
  return (
    <div className=" text-center items-center justify-center">
      <section className="bg-white dark:bg-gray-900">
        <div className=" px-4 mx-auto lg:pt-10 lg:px-6 ">
          <div className="mx-auto text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Payment History
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
        </div>
        <form className="flex max-w-md flex-col gap-4 mx-auto  ">
          <div>
            <TextInput
              id="cardNumber"
              placeholder="Card Number"
              required
              type="text"
            />
          </div>
          <div>
            <TextInput id="password1" placeholder="MM/YY/CVC" />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </section>{" "}
    </div>
  );
};

export default Payment;
