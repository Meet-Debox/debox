import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/dist/client/router";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "./Modal";
const MySwal = withReactContent(Swal);
import React from "react";
import Link from "next/link";

function Footer() {
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
    <div className="relative bg-darkBlue">
      <Toaster />
      <Modal setOpen={setIsOpen} open={isOpen}>
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 className="text-3xl my-4 font-extrabold tracking-tight sm:text-4xl">
            {"Let's connect."}
          </h2>

          <p className="my-4 text-sm text-gray-500 sm:mt-3">
            {
              "Whether you are looking at solving a problem that is slowing down your business growth or are looking at an opportunity that can help your business grow multifold, connect with us and we would love to partner with you on the journey and make it a success."
            }
          </p>
          <form
            ref={form}
            name="Contact Form"
            data-netlify="true"
            action={"/?submit=true"}
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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1117"
        className="absolute bottom-20 left-0  -z-10 h-[120%] w-[vw]"
      >
        <defs></defs>
        <g
          id="Mask_Group_23"
          data-name="Mask Group 23"
          transform="translate(0 -5725)"
          clip-path="url(#clip-path)"
        >
          <path
            id="Path_18"
            data-name="Path 18"
            d="M-83.585,6913.693S95.253,5763.89,1035.391,5843.566s1351.951,531.348,1351.951,531.348L3156.3,7067.859Z"
            transform="translate(-623.448 -51.935) rotate(-3)"
            fill="#1113C2"
          />
        </g>
      </svg> */}

      <div className="max-w-7xl mx-auto cont text-white">
        <hr />
        <div className="flex flex-col md:flex-row justify-between px-8 items-center py-8 gap-4 md:gap-10">
          <div className="md:w-1/4 space-y-4">
            <svg
              className="w-48 h-14 lg:w-72 lg:h-28 group cursor-pointer mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 523.803 120.605"
            >
              <g id="Layer_1-2" transform="translate(-0.004)">
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(0.004)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M99.126,0q-.079,12.937-.081,79.354a35.641,35.641,0,0,1-6.627,20.7,45.348,45.348,0,0,1-18,15.056A56.421,56.421,0,0,1,49.568,120.6a57.443,57.443,0,0,1-25.012-5.488A45.093,45.093,0,0,1,6.4,100.057a34.309,34.309,0,0,1-6.391-20.7q.47-17.484,14.349-29.4T49.568,38.03A49.521,49.521,0,0,1,65.8,40.813,43.822,43.822,0,0,1,79.36,48.066v-28.3A19.767,19.767,0,0,1,99.126,0ZM49.568,54.575q-12.314,0-20.9,7.254T19.846,79.354q-.312,10.117,8.51,17.408a32.2,32.2,0,0,0,21.211,7.294c8.265,0,15.1-2.4,20.817-7.213s8.69-10.638,8.9-17.485q.233-10.192-8.55-17.485a32.06,32.06,0,0,0-21.171-7.291Z"
                    transform="translate(-0.004)"
                    fill="#fff"
                    className="group-hover:fill-primary transition-colors duration-300"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M425.227,128.335a45.23,45.23,0,0,1,18.152,15.016c1.858,2.674,3.258,7.3,4.232,11.87A11.131,11.131,0,0,1,436.7,168.639H370.969q1.726,8.549,9.956,14.113a36.588,36.588,0,0,0,19.372,6.037,46.973,46.973,0,0,0,17.73-2.181,44.716,44.716,0,0,1,27.928-.655l1.114.344a.145.145,0,0,1,.071.223q-6.264,8.046-17.8,13.483-11.639,5.487-29.048,5.333a58.73,58.73,0,0,1-25.012-5.646,45.776,45.776,0,0,1-18.112-14.976,33.413,33.413,0,0,1-6.354-20.622,36.547,36.547,0,0,1,4.195-16.074,42.927,42.927,0,0,1,10.508-13.133,50.265,50.265,0,0,1,15.6-8.783A56.285,56.285,0,0,1,400.3,122.85a57.27,57.27,0,0,1,24.934,5.488ZM383.04,144.1a26.915,26.915,0,0,0-10.821,12.311h56.458q-2.746-7.45-10.7-12.273a33.469,33.469,0,0,0-17.681-4.821A31.607,31.607,0,0,0,383.04,144.1Z"
                    transform="translate(-241.97 -84.736)"
                    fill="#fff"
                    className="group-hover:fill-primary transition-colors duration-300"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M720.646,19.763v28.3a43.859,43.859,0,0,1,13.564-7.254,49.506,49.506,0,0,1,16.229-2.783q21.328,0,35.206,11.92t14.349,29.4a34.341,34.341,0,0,1-6.391,20.7,45.093,45.093,0,0,1-18.152,15.056,57.442,57.442,0,0,1-25.012,5.488,56.426,56.426,0,0,1-24.857-5.488,45.314,45.314,0,0,1-17.994-15.056,35.619,35.619,0,0,1-6.627-20.7q0-66.412-.081-79.354h0a19.763,19.763,0,0,1,19.763,19.763Zm8.625,42.1q-8.786,7.292-8.55,17.485.317,10.275,8.9,17.485t20.818,7.213a32.4,32.4,0,0,0,21.211-7.294q8.819-7.292,8.51-17.408-.237-10.271-8.823-17.526t-20.9-7.254a32.158,32.158,0,0,0-21.171,7.291Z"
                    transform="translate(-483.437)"
                    fill="#fff"
                    className="group-hover:fill-primary transition-colors duration-300"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M1126.675,128.328a45.278,45.278,0,0,1,18.152,15.016,34.283,34.283,0,0,1,6.388,20.74,37.544,37.544,0,0,1-4.235,16,42.688,42.688,0,0,1-10.505,13.173,50.249,50.249,0,0,1-15.643,8.82,56.306,56.306,0,0,1-19.173,3.254,57.272,57.272,0,0,1-24.937-5.488,45.23,45.23,0,0,1-18.153-15.016,34.268,34.268,0,0,1-6.388-20.74,37.712,37.712,0,0,1,4.232-16.074,42.563,42.563,0,0,1,10.467-13.133,50.268,50.268,0,0,1,15.643-8.783,56.4,56.4,0,0,1,19.135-3.255,57.443,57.443,0,0,1,25.012,5.488Zm-45.836,18.23q-8.58,7.25-8.817,17.526-.317,10.2,8.5,17.485a32.1,32.1,0,0,0,21.134,7.291q12.314,0,20.9-7.254t8.817-17.526q.313-10.192-8.5-17.485a32.213,32.213,0,0,0-21.212-7.291C1093.4,139.3,1086.564,141.725,1080.839,146.558Z"
                    transform="translate(-725.744 -84.73)"
                    fill="#fff"
                    className="group-hover:fill-primary transition-colors duration-300"
                  />
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M1412.806,143.636a37.064,37.064,0,0,0-28.375-13.216h-8.451l30.349,33.423,12.623-12.891-6.146-7.312Z"
                    transform="translate(-949.091 -89.958)"
                    fill="#fff"
                    className="group-hover:fill-primary transition-colors duration-300"
                  />
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M1576.246,130.42a54.9,54.9,0,0,0-42.1,19.66l-.827.99,12.458,12.9,30.464-33.547Z"
                    transform="translate(-1057.619 -89.958)"
                    fill="#fff"
                    className="group-hover:fill-primary transition-colors duration-300"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M1423.064,220.634,1410.6,208.01l-33.89,35.452-17.156,18.416a58.083,58.083,0,0,0,40.713-16.657l10.334-10.157,7.415,7.924a59.642,59.642,0,0,0,43.55,18.894l-38.5-41.244Z"
                    transform="translate(-937.759 -143.476)"
                    fill="#fff"
                    className="group-hover:fill-primary transition-colors duration-300"
                  />
                </g>
              </g>
            </svg>
            <div className="flex items-center gap-3">
              <span className="text-lg pt-0.5">Follow Us On:</span>
              <a href="https://www.facebook.com/deboxconsulting/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 w-5 hover:fill-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/deboxconsulting/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 w-5 hover:fill-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/deboxconsulting/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-5 w-5 hover:fill-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-3/4 flex flex-col md:flex-row justify-start items-start gap-4 text-base">
            <div className="md:w-1/2 space-y-4">
              <div className="text-xl font-bold">OUR ADDRESS</div>
              <div>
                1014, Lodha Supremus - Tower B Lodha Business District, 2,
                Kolshet Rd, Thane, Maharashtra 400607
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <div className="text-xl font-bold">OUR CONTACT</div>
              <div>
                <div
                  onClick={() => setIsOpen(true)}
                  className="flex w-fit group items-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-accent duration-200 transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="group-hover:text-accent duration-200 transition-colors">
                    Write to Us
                  </span>
                </div>

                <p className="md:space-x-4">
                  <span className="">
                    India: <a href="tel:+919920969961">+91 9920969961</a>
                  </span>
                  <span className="block md:inline">
                    {" "}
                    USA: <a href="tel:+1 404 731 6010">+1 404 731 6010</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
