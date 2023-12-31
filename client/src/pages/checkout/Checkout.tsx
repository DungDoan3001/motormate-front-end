import { useState } from "react";
import SelectCityVN from "../../app/components/SelectCityVN";

export default function Checkout() {
  //Select option Payment Method
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState("cashOnDelivery");

  const handlePaymentOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentOption(e.target.value);
  };
  //End of select option Payment Method

  //Select option delivery
  const [deliveryOption, setDeliveryOption] = useState("");
  const handleDeliveryOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDeliveryOption(e.target.value);
  };
  //End of select option delivery
  return (
    <>
      <section className="pt-12 pb-24 bg-blue-100 overflow-hidden">
        <div className="container px-4 mx-auto">
          {/* <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
            <li className="mr-6">
              <a
                className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                href="#"
              >
                <span>Home</span>
                <svg
                  className="ml-6"
                  width="4"
                  height="7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="mr-6">
              <a
                className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                href="#"
              >
                <span>Store</span>
                <svg
                  className="ml-6"
                  width="4"
                  height="7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                href="#"
              >
                Your cart
              </a>
            </li>
          </ul> */}

          <div className="justify-center flex-1 max-w-6xl py-5 mx-auto bg-white rounded-2xl">
            {/* <div className="flex flex-wrap justify-center px-20 pb-12 mb-16 text-left border-b border-gray-200 dark:border-gray-700 lg:justify-between ">
                <div className="px-4 mb-6 lg:mb-0">
                  <h2 className="mb-1 text-lg font-semibold tracking-wide dark:text-gray-300">
                    Your order has been Shipped
                  </h2>
                  <p className="text-sm text-gray-500    ">
                    by DHFL on 10th feb, 2022
                  </p>
                </div>
                <div className="px-4">
                  <button className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-full md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-300">
                    Tracking details
                  </button>
                </div>
              </div> */}
            <div className="flex flex-wrap items-center justify-center ">
              <div className="relative w-full px-4 mb-16 md:w-1/2 lg:w-1/4 lg:mb-0">
                <div className="absolute hidden top-5 lg:block left-1/2 ">
                  <span className="mb-3 border-b-2 border-r border-gray-300 w-72 md:block left-1/2 inset-px"></span>
                </div>

                {/* <div className="relative text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 mb-8 text-lg text-gray-100 bg-blue-600 rounded-full shadow-md dark:bg-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-medium     ">
                    Order information
                  </h2>
                </div> */}
                <div className="relative text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 mb-8 text-lg text-white bg-blue-600 rounded-full shadow-md">
                    1
                  </span>
                  <h2 className="text-lg font-medium">Order information</h2>
                </div>
              </div>
              <div className="relative w-full px-4 mb-16 md:w-1/2 lg:w-1/4 lg:mb-0">
                <div className="absolute hidden top-5 lg:block left-1/2">
                  <span className="mb-3 border-b-2 border-r border-gray-300 w-72 md:block left-1/2 inset-px"></span>
                </div>
                <div className="relative text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 mb-8 text-lg text-black bg-gray-200 rounded-full shadow-md">
                    2
                  </span>
                  <h2 className="text-lg font-medium    ">Payment</h2>
                </div>
              </div>
              <div className="relative w-full px-4 mb-16 md:w-1/2 lg:w-1/4 md:mb-0">
                <div className="relative text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 mb-8 text-lg text-black bg-gray-200 rounded-full shadow-md ">
                    3
                  </span>
                  <h2 className="text-lg font-medium    ">Done</h2>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
            <h2 className=" text-7xl xl:text-10xl leading-normal font-heading font-medium text-center">
              Checkout
            </h2>
          </div> */}
          <div className="flex flex-wrap -mx-4 mb-14 xl:mb-24 pt-10">
            <div className=" w-full md:w-8/12 lg:w-2/4 px-4 mb-14 md:mb-0">
              <div className="py-12 px-8 md:pl-6 md:pr-16 bg-white rounded-3xl">
                <div className="pb-16 mb-14 border-b border-gray-200 border-opacity-30">
                  <div className="max-w-lg mx-auto">
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg">Your name:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg  ">Phone number:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className=" flex flex-col items-center">
                      <div className="mb-6">
                        <select
                          id="DeliverOption"
                          value={deliveryOption}
                          onChange={handleDeliveryOptionChange}
                          required
                          className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                        >
                          <option defaultValue="">
                            Choose your Delivery Option
                          </option>
                          <option value="selfPickup">Self Pick-up</option>
                          <option value="standardShipping">
                            Standard Shipping
                          </option>
                        </select>
                      </div>
                    </div>
                    {deliveryOption === "standardShipping" && (
                      <>
                        <SelectCityVN />
                        <div className="flex flex-wrap mb-6 items-center">
                          <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                            <label className="text-lg  ">
                              Delivery address:
                            </label>
                          </div>
                          <div className="w-full md:w-2/3">
                            <input
                              className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                              type="text"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {deliveryOption === "selfPickup" && (
                      <div className="flex flex-wrap mb-6 items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg  ">Pick-up Address:</label>
                        </div>
                        <div className="w-full md:w-2/3">
                          <input
                            className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            value="Q12 HCM"
                            disabled
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" border-b border-gray-200 border-opacity-30">
                  <div className="max-w-lg mx-auto mb-6">
                    {/* <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg  ">Country:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg  ">State:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg  ">Zip code:</label>
                      </div>
                      <div className="w-full md:w-1/3">
                        <input
                          className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                        />
                      </div>
                    </div> */}
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg">Payment method:</label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <div className="grid grid-cols-2 mt-5 ">
                          <label className="relative inline-flex mb-5 mr-16 items-center">
                            <input
                              className="relative appearance-none mr-3"
                              type="radio"
                              value="cashOnDelivery"
                              checked={
                                selectedPaymentOption === "cashOnDelivery"
                              }
                              onChange={handlePaymentOptionChange}
                            />
                            <img
                              style={{ width: "76px", height: "30px" }}
                              src={require("../../app/assets/images/icon/CashOnDelivery_icon.png")}
                            />

                            <span className="ml-2 text-sm text-black leading-3 font-bold">
                              COD
                            </span>
                          </label>
                          <label className="relative inline-flex mb-5 mr-16 items-center">
                            <input
                              className="relative appearance-none mr-3"
                              type="radio"
                              value="visa"
                              checked={selectedPaymentOption === "visa"}
                              onChange={handlePaymentOptionChange}
                            />
                            <img
                              style={{ width: "58px", height: "40px" }}
                              src={require("../../app/assets/images/icon/Visa_icon.png")}
                            />

                            <span className="ml-2 text-sm text-black leading-3 font-bold">
                              Visa
                            </span>
                          </label>

                          <label className="relative inline-flex mb-5 items-center font-bold">
                            <input
                              className="relative appearance-none mr-3"
                              type="radio"
                              value="momo"
                              checked={selectedPaymentOption === "momo"}
                              onChange={handlePaymentOptionChange}
                            />
                            <img
                              className=" h-10 w-10"
                              src={require("../../app/assets/images/icon/MoMo_icon.png")}
                            />

                            <span className="ml-2 text-sm text-black leading-3">
                              MoMo
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:ml-16">
                    <label className="relative flex mb-8 items-center">
                      <input
                        className="relative ml-10 appearance-none"
                        type="checkbox"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-400">
                        I agree with the terms and conditions.
                      </span>
                    </label>
                  </div>
                </div>

                {/* <div className="max-w-lg mx-auto">
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg  ">
                        Name on card:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg  ">
                        Credit card number:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg  ">
                        Expiration:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg  ">
                        CVV:
                      </label>
                    </div>
                    <div className="w-full md:w-1/3">
                      <input
                        className="w-full h-1/3 px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className=" w-full md:w-8/12 lg:w-2/4 px-4 mb-14 md:mb-0">
              <div>
                <h2 className="mb-7 lg:mt-6 text-3xl font-heading font-medium">
                  Order summary
                </h2>
                <div className=" max-h-[20vw] scrollbar overflow-y-auto mb-5 border border-gray-200 rounded">
                  <div className="p-10 mb-8 bg-white rounded-md shadow sm:flex sm:items-center xl:py-5 xl:px-12">
                    <a href="#" className="mr-6 md:mr-12">
                      <img
                        className=" w-full lg:w-[80px] h-[200px] lg:h-[80px]  object-cover  mx-auto mb-6 sm:mb-0 "
                        src="https://i.postimg.cc/YS2pPP8k/white-denim-jacket-front-view-streetwear-fashion.jpg "
                        alt="dress"
                      />
                    </a>
                    <div>
                      <a
                        className="inline-block mb-1 text-lg font-medium hover:underline dark:text-gray-400"
                        href="#"
                      >
                        White jacket for men
                      </a>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Color:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            Silver
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Size:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            medium
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Style:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            Uk minimal design
                          </span>
                        </p>
                        <p className="text-sm font-medium dark:text-gray-400">
                          <span>Qty:</span>
                          <span className="ml-2 text-gray-400">1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 mb-8 bg-white rounded-md shadow sm:flex sm:items-center xl:py-5 xl:px-12">
                    <a href="#" className="mr-6 md:mr-12">
                      <img
                        className=" w-full lg:w-[80px] h-[200px] lg:h-[80px]  object-cover  mx-auto mb-6 sm:mb-0 "
                        src="https://i.postimg.cc/YS2pPP8k/white-denim-jacket-front-view-streetwear-fashion.jpg "
                        alt="dress"
                      />
                    </a>
                    <div>
                      <a
                        className="inline-block mb-1 text-lg font-medium hover:underline dark:text-gray-400"
                        href="#"
                      >
                        White jacket for men
                      </a>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Color:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            Silver
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Size:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            medium
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Style:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            Uk minimal design
                          </span>
                        </p>
                        <p className="text-sm font-medium dark:text-gray-400">
                          <span>Qty:</span>
                          <span className="ml-2 text-gray-400">1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 mb-8 bg-white rounded-md shadow sm:flex sm:items-center xl:py-5 xl:px-12">
                    <a href="#" className="mr-6 md:mr-12">
                      <img
                        className=" w-full lg:w-[80px] h-[200px] lg:h-[80px]  object-cover  mx-auto mb-6 sm:mb-0 "
                        src="https://i.postimg.cc/YS2pPP8k/white-denim-jacket-front-view-streetwear-fashion.jpg "
                        alt="dress"
                      />
                    </a>
                    <div>
                      <a
                        className="inline-block mb-1 text-lg font-medium hover:underline dark:text-gray-400"
                        href="#"
                      >
                        White jacket for men
                      </a>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Color:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            Silver
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Size:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            medium
                          </span>
                        </p>
                        <p className="mr-4 text-sm font-medium">
                          <span className="font-medium dark:text-gray-400">
                            Style:
                          </span>
                          <span className="ml-2 text-gray-400 dark:text-gray-400">
                            Uk minimal design
                          </span>
                        </p>
                        <p className="text-sm font-medium dark:text-gray-400">
                          <span>Qty:</span>
                          <span className="ml-2 text-gray-400">1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-1/2 justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                  <span>Subtotal</span>
                  <span className="flex items-center text-xl">
                    <span className="mr-2 text-base">$</span>
                    <span>710,70</span>
                  </span>
                </div>
                <div className="flex items-center w-1/2 justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                  <span>Shipping</span>
                  <span className="flex items-center text-xl">
                    <span className="mr-2 text-base">$</span>
                    <span>10,00</span>
                  </span>
                </div>
                <div className="flex items-center w-1/2 justify-between py-4 px-10 mb-10 leading-8 bg-white font-heading font-medium rounded-3xl">
                  <span>Total</span>
                  <span className="flex items-center text-xl text-blue-500">
                    <span className="mr-2 text-base">$</span>
                    <span>720,70</span>
                  </span>
                </div>
                <div className="flex">
                  <h4
                    className=" mb-4 text-xl font-heading font-medium mr-3"
                    style={{ marginTop: "2px" }}
                  >
                    Discount code
                  </h4>
                  <div className="relative mb-3 lg:mb-10">
                    <input
                      className="flex-grow outline-none px-5 py-4 w-1/2 h-1/2 leading-7 bg-white border-2 border-blue-500 rounded mr-6"
                      type="text"
                    />
                    <a
                      className="w-auto py-3 px-8 text-lg leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                      href="#"
                    >
                      Apply
                    </a>
                  </div>
                </div>

                <a
                  className="inline-block w-1/2 py-5 lg:py-3 px-10 text-lg leading-6 lg:leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  href="/payment"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-96">
            <a
              className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              href="#"
            >
              Back to shop
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
