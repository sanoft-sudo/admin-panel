import React, { useState } from "react";
import { StatusOffline } from "styled-icons/heroicons-outline";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import UserDetails from "./UserDetails";

const MultiStepForm = () => {
  const [state, setState] = useState({
    step: 1,
    fullName: "",
    email: "",
    password: "",
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    state: "",
    region: "",
    street: "",
    phone: "",
    isAgree: false,
  });

  const nextStep = () => {
    const { step } = state;
    setState({
      step: step + 1,
    });
  };

  const prevStep = () => {
    const { step } = state;
    setState({
      step: step - 1,
    });
  };

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };
  //   const inputValues = {
  //     fullName,
  //     email,
  //     password,
  //     cardHolder,
  //     cardNumber,
  //     expiryDate,
  //     state,
  //     region,
  //     street,
  //     phone,
  //     isAgree,
  //   };
  switch (state.step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          inputValues={state}
        />
      );
    case 2:
      return (
        <Confirmation
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          inputValues={StatusOffline}
        />
      );
    case 3:
      return (
        <AddressDetails
          nextStep={nextStep}
          prevStep={prevStep}
          inputValues={state}
        />
      );
    case 4:
      return (
        <Success nextStep={nextStep} prevStep={prevStep} inputValues={state} />
      );
  }
};

export default MultiStepForm;
