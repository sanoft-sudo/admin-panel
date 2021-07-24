import React from "react";
import Head from "next/head";
import MainFormWizard from "../components/formElements/formWizard/MainFormWizard";
import FormikValidation from "../components/formElements/formWizard/FormikValidation";
import CommingSoon from "../components/formElements/formWizard/ComingSoon";

const formwizard = () => {
  return (
    <div>
      <Head>
        <title>Form wizard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="form, form wizard, step-by-step form" />
      </Head>

      <h1>Form wizard</h1>
      <CommingSoon />
    </div>
  );
};

export default formwizard;
