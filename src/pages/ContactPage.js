import { Formik, Field, Form, ErrorMessage } from "formik";

const Contact = () => {
  return (
    <>
      <div className="col-span-5 mx-auto my-auto">
        <div>
          <h4 className="text-gray-700 text-4xl font-semibold leading-none tracking-wider mb-10">
            Send Us Your Bar!
          </h4>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl  m-5 bg-violet-400 p-4 hover:scale-110 transition duration-500 ease-in-out">
          <div className="">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                phoneNum: "",
                email: "",
                agree: false,
                contactType: "By Phone",
                feedback: "",
              }}
            >
              <Form className="px-6 py-4">
                <div className=" grid grid-cols-4 pb-3 pt-5">
                  <label htmlFor="phoneNum" className="col-span-2">
                    Phone:
                  </label>
                  <Field
                    name="phoneNum"
                    placeholder="Phone"
                    className="col-span-2 pl-2 rounded-sm"
                  />
                </div>
                <div className="py-3 grid grid-cols-4">
                  <label htmlFor="firstName" className="col-span-2">
                    First Name:
                  </label>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="col-span-2 pl-2 rounded-sm"
                  />
                </div>
                <div className="py-3 grid grid-cols-4">
                  <label htmlFor="lastName" className="col-span-2">
                    Last Name:
                  </label>
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="col-span-2 pl-2 rounded-sm"
                  />
                </div>
                <div className="py-3 grid grid-cols-4">
                  <label htmlFor="barName" className="col-span-2">
                    Bar Name:
                  </label>
                  <Field
                    name="barName"
                    placeholder="Bar Name"
                    className="col-span-2 pl-2 rounded-sm"
                  />
                </div>
                <div className="py-3 grid grid-cols-4">
                  <label htmlFor="description" className="col-span-4">
                    Description of Your Bar:
                  </label>
                  <Field
                    name="description"
                    placeholder="Description Here"
                    as="textarea"
                    className="col-span-4 grid-row-6 pl-2 rounded-lg h-36"
                  />
                </div>
                <div className="py-3 grid grid-cols-4 ml-20">
                  <button
                    type="submit"
                    className="col-span-3 py-2.5 bg-violet-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Send Feedback
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="px-10 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-10 py-1 text-sm font-semibold text-gray-700 mb-2">
              #TalkingWithThirsty
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
