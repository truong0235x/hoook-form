import {  Checkbox } from 'antd';
// import { useState } from 'react';
import { Controller } from "react-hook-form";

function CheckBoxUseForm({name, control, textChild, ...res}) {
  return (
    <Controller
      name={name}
      render={({ field }) =>
        <Checkbox
          {...field}
          {...res}
        >
          {textChild}
        </Checkbox>
      }
      control={control}
    />
  )
}

export default CheckBoxUseForm;