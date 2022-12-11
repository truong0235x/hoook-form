import { Form, Input, Typography } from 'antd';
import { Controller } from "react-hook-form";

const { Text } = Typography;

function InputUseForm({label, name, placeholder, control, error, ...res}) {

  return (
    <Form.Item label={label}>
      <Controller
        name={name}
        render={({ field }) => <Input status={error ? 'error' : ""} {...field} placeholder={placeholder} {...res} />}
        control={control}
      />
      {error && <Text type="danger">{error?.message}</Text>}
    </Form.Item>
  )
}

export default InputUseForm;