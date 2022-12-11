import {  Radio } from 'antd';
import { Controller } from "react-hook-form";

function RadioUseForm({name, control, textChild, ...res}) {
  return (
    <Controller
      name={name}
      render={({ field }) => <Radio {...field} {...res} >{textChild}</Radio>}
      control={control}
    />
  )
}

export default RadioUseForm;