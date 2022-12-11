import { useForm } from "react-hook-form";
import { Button, Radio, Form } from 'antd';
import InputUseForm from "./common/InputUseForm";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import RadioUseForm from "./common/RadioUseForm";
import CheckBoxUseForm from "./common/CheckBoxUseForm";

function App() {
  const validation = yup.object({
    username: yup.string().required("bạn chưa nhập tên người dùng"),
    password: yup.string()
    .required("bạn chưa nhập mật khẩu")
    .min(8)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Mật khẩu phải chứa ít nhất 8 ký tự, một chữ hoa, một số và một ký tự đặc biệt"
    ),
    age: yup.number().min(0).required("bạn chưa nhập tuổi"),
    gender: yup.string().required("bạn chưa chọn giới tính"),
    security: yup.boolean().required("Bạn cần chấp nhận điều khoản bảo mật của chúng tôi"),
  })

  const { control, watch, handleSubmit, setValue, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validation),
    mode: "onBlur",
    defaultValues: {
      security: false,
      gender: "male"
    }
  });

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="App" style={{ width: "800px", margin: "0 auto"}}>
      <Form onFinish={handleSubmit(onSubmit)} labelCol={{ span: 5 }}>
        <InputUseForm
          label="Nhập tên người dùng"
          name="username"
          placeholder="Nhập tên người dùng"
          control={control}
          error={errors.username}
        />
        <InputUseForm
          label="Nhập mật khẩu"
          name="password"
          type="password"
          placeholder="Nhập mật khẩu"
          control={control}
          error={errors.password}
        />
        <InputUseForm
          label="Nhập tuổi"
          name="age"
          placeholder="Nhập tuổi"
          control={control}
          error={errors.age}
          type="number"
          min={0}
        />
        <Form.Item  wrapperCol={{ span: 14, offset: 5 }}>
          <Radio.Group>
            <RadioUseForm
              name="gender"
              control={control}
              textChild="Nam"
              value="male"
            />
            <RadioUseForm
              name="gender"
              control={control}
              textChild="Nữ"
              value="female"
            />
          </Radio.Group>
          <br />
          <CheckBoxUseForm
            name="security"
            checked={watch("security")}
            onChange={()=>{
              setValue("security", !watch("security"))
            }}
            control={control}
            textChild="Chấp nhận điều khoản bảo mật này"
          />
        </Form.Item>
        <InputUseForm
          label="Ngày đăng kí"
          name="date"
          placeholder="Chọn ngày"
          control={control}
          error={errors.date}
          type="date"
        />
        <Button type="primary" disabled={!isValid} htmlType="submit" style={{marginLeft: "50%"}}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
