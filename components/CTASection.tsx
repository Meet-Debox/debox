import React from "react";
import Modal from "./reusable/Modal";
import { useState, useRef, useEffect } from "react";
import Heading from "./reusable/Heading";
// import Button from "./reusable/TransBtn";
import Button from "../components/reusable/Button";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/dist/client/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function CTASection({ redirectPage }: { redirectPage?: string }) {
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (query && query.submit === "true") {
      MySwal.fire({
        icon: "success",
        titleText: "Success",
        text: "Thank you for submitting an enquiry. We'll get back to you as soon as possible.",
        timer: 3500,
        showConfirmButton: false,
      });
    }
  }, [query]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    remarks: "",
    reqType: "",
  });

  const form = useRef<null | HTMLFormElement>(null);
  function handleSubmit() {
    if (typeof form !== null) {
      if (
        !formData.email ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.remarks ||
        !formData.company
      ) {
        toast.error("Please provide all the details!");
        return;
      }

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          formData.email.toString()
        )
      ) {
        toast.error("Please provide a valid email id.");
        return;
      }

      form.current?.submit();
    }
  }

  return (
    <section
      id="Connect"
      className="cont mx-auto space-y-10  max-w-5xl w-11/12 py-10 text-center"
    >
      <Toaster />
      <Heading>{"Let's work together"}</Heading>
      {/* <h2 className="text-3xl mt-2 font-extrabold tracking-tight sm:text-4xl">
        
      </h2> */}
      <p className="my-4 text-sm sm:mt-3 md:text-lg">
        {
          "If not for a business challenge, there is always an opportunity for growth. We have ground-level experience from planning to execution for both across a multitude of industries. Tell us about your problems or let us structure your growth by exploring opportunities - we'll make it happen for you."
        }
      </p>
      <Button
        className="!text-lg"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Connect With Us
      </Button>

      <Modal setOpen={setIsOpen} open={isOpen}>
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 className="text-3xl my-4 font-extrabold tracking-tight sm:text-4xl">
            {"Let's connect."}
          </h2>

          {/* <p className="my-4 text-sm text-gray-500 sm:mt-3">
            If not for a business challenge, there is always an opportunity for
            growth. We have ground-level experience from planning to execution
            for both across a multitude of industries. Tell us about your
            problems or let us structure your growth by exploring opportunities
            - we'll make it happen for you.
          </p> */}
          <form
            ref={form}
            name="Contact Form"
            data-netlify="true"
            action={"/about?submit=true"}
            method="POST"
            className=" grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name*
              </label>
              <div className="mt-1">
                <input
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name*
              </label>
              <div className="mt-1">
                <input
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <div className="mt-1">
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company*
              </label>
              <div className="mt-1">
                <input
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <span id="phone-description" className="text-sm text-gray-500">
                  Optional
                </span>
              </div>
              <div className="mt-1">
                <PhoneInput
                  inputProps={{
                    name: "phone",
                  }}
                  country={"in"}
                  preferredCountries={["us", "in", "ca", "sg", "ae"]}
                  inputClass="!w-full !border-none !outline-none px-2"
                  searchClass="!bg-primary"
                  buttonClass="!bg-transparent !outline-none !border-none"
                  containerClass="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 rounded-md"
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone: phone }))
                  }
                  //   value={this.state.phone}
                  //   onChange={(phone) => this.setState({ phone })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="how-can-we-help"
                  className="block text-sm font-medium text-gray-700"
                >
                  How can we help you?*
                </label>
                {/* <span
                  id="how-can-we-help-description"
                  className="text-sm text-gray-500"
                >
                  Max. 500 characters
                </span> */}
              </div>
              <div className="mt-1">
                <textarea
                  id="how-can-we-help"
                  name="how-can-we-help"
                  aria-describedby="how-can-we-help-description"
                  rows={4}
                  className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-2 border-black h-20 px-2 rounded-md"
                  value={formData.remarks}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      remarks: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            {/* <fieldset className="sm:col-span-2">
              <div className="flex w-full justify-between">
                <legend className="block text-sm font-medium text-gray-700">
                  Service Requirement
                </legend>
                <span className="text-sm text-gray-500">Optional</span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-y-4">
                <div className="flex items-center gap-3">
                  <input
                    name="RequestFor[]"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-black border-2 px-2"
                    id={"consulting"}
                    type="checkbox"
                  />
                  <label htmlFor={"consulting"}>
                    <span className="block text-sm text-gray-700">
                      Consulting
                    </span>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    name="RequestFor[]"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-black border-2 px-2"
                    id={"tech"}
                    type="checkbox"
                  />
                  <label htmlFor={"tech"}>
                    <span className="block text-sm text-gray-700">Tech</span>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    name="RequestFor[]"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-black border-2 px-2"
                    id={"marketing"}
                    type="checkbox"
                  />
                  <label htmlFor={"marketing"}>
                    <span className="block text-sm text-gray-700">
                      Marketing
                    </span>
                  </label>
                </div>
              </div>
            </fieldset> */}

            <div className="text-right sm:col-span-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  //   console.log(formData);
                }}
                className="relative inline-block group focus:outline-none focus:ring cursor-pointer w-fit"
              >
                <span
                  className={`${"px-2 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm border-2"}
        relative inline-block font-bold tracking-widest text-black uppercase border-current group-active:text-opacity-75 duration-200 transition-colors hover:bg-accent hover:text-black `}
                >
                  Submit
                </span>
              </button>

              {/* <button
                onClick={() => {}}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-primary hover:bg-darkBlue/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              ></button> */}
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
}

export default CTASection;
