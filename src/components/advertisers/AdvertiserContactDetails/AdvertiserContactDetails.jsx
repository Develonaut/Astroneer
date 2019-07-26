import React from "react";
import { formFieldProps } from "components/forms/configs/CreateAdvertiser";
import ModalList from "components/shared/ModalList/ModalList";

const AdvertiserContactDetails = ({ advertiser }) => {
  return (
    <ModalList
      items={Object.values(formFieldProps)}
      headerRenderer={({ extClasses }) => {
        return (
          <header className={extClasses}>
            <h3>Contact details</h3>
          </header>
        );
      }}
      itemRenderer={props => {
        const { extClasses, name, label } = props;
        return (
          <li className={extClasses} key={name}>
            {label}: {advertiser[name]}
          </li>
        );
      }}
    />
  );
};

export default AdvertiserContactDetails;
