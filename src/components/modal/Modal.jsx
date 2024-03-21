import React from "react";
import x from '../../assets/x.svg'
import { Link } from 'react-router-dom'
import './Modal.css'
const Modal = ({ setShowModal, onSelectMembership }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Unlock Wellness: Activate Your Maxicare Card!
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-white opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <img src={x} alt="Close" className="h-8 w-8 filter brightness-0" />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="text-blueGray-500 text-lg leading-relaxed">
                Exciting news! Register your Maxicare card today and unlock
                exclusive benefits. Plus, enjoy the convenience of your new
                account, all in one go! Ready to experience wellness at your
                fingertips? Let's get started!
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b w-full">
  <Link to="/choose-membership">
    <button
      className="w-full text-white bg-emerald-500 hover:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => onSelectMembership("MyMaxicare")} 
    >
      Get Started
    </button>
  </Link>
</div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25 backdrop-filter backdrop-blur-md"></div> {/* Add backdrop-filter and opacity */}
    </>
  );
};

export default Modal;
