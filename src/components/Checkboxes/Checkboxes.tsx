import React from "react";

export const Checkboxes = ({ label }: { label: string }) => {
  return (
    <>
      <input type="checkbox" id="food" name="food" value="food" disabled />
      <label htmlFor="food">{label}</label>
    </>
  );
};
