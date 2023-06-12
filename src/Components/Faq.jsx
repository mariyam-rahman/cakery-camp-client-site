import { Accordion } from "flowbite-react";
import img from "../assets/faq.jpg";
const Faq = () => {
  return (
    <div className="my-28">
      <div className="mx-auto text-center mb-8 max-w-screen-sm">
        <h2 className="mb-4  text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          FAQ
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="grid grid-cols-2  gap-10 p-16 items-center">
        <div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>
                What age group is the cake bakery summer camp suitable for?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    The cake bakery summer camp is designed for children and
                    teenagers aged 8 to above. It offers age-appropriate
                    activities and lessons to cater to different skill levels
                    and interests within this range.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What kind of skills will participants learn at the cake bakery
                summer camp?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Participants at the cake bakery summer camp will learn a
                    wide range of baking skills and techniques. They will be
                    taught how to measure and mix ingredients, bake various
                    types of cakes, decorate them using different piping
                    techniques, and even experiment with flavors and fillings.
                    Additionally, they will learn about kitchen safety and
                    hygiene practices.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Are there any prerequisites or prior experience required to
                attend the cake bakery summer camp?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    No prior experience or specific prerequisites are required
                    to attend the cake bakery summer camp. It is open to
                    beginners as well as those with some baking knowledge. The
                    camp instructors will adapt their teaching to suit different
                    skill levels, ensuring that everyone can learn and have fun
                    regardless of their prior experience in baking.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/top-view-birthday-party-table_23-2147716855.jpg?w=1060&t=st=1686557841~exp=1686558441~hmac=5d1b5ae3b7225810e42560c5b5d16297bad92aa8d648bd12ae45439887734b7d"
            alt=""
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
