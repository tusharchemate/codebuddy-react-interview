import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Select, Checkbox, Row, Col, Form } from "antd";
import validations from "../utils/formvalidator";
import styles from "./index.module.css";

const { Option } = Select;

const ContactInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Form layout="vertical">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Country Code"
            required
            validateStatus={errors.countryCode ? "error" : ""}
            help={errors.countryCode ? errors.countryCode.message : null}
          >
            <Controller
              name="countryCode"
              control={control}
              rules={validations.countryCode}
              render={({ field }) => (
                <Select {...field} style={{ width: "100%" }} placeholder="Select country code">
                  <Option value="+91">India (+91)</Option>
                  <Option value="+1">America (+1)</Option>
                </Select>
              )}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Phone Number"
            required
            validateStatus={errors.phoneNumber ? "error" : ""}
            help={errors.phoneNumber ? errors.phoneNumber.message : null}
          >
            <Controller
              name="phoneNumber"
              control={control}
              rules={validations.phoneNumber}
              render={({ field }) => <Input {...field} placeholder="Enter phone number" />}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row className={styles.formRow}>
        <Col span={24}>
          <Form.Item
            validateStatus={errors.acceptTermsAndCondition ? "error" : ""}
            help={errors.acceptTermsAndCondition ? errors.acceptTermsAndCondition.message : null}
          >
            <Controller
              name="acceptTermsAndCondition"
              control={control}
              rules={validations.acceptTerms}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                >
                  I accept the terms and conditions
                </Checkbox>
              )}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactInformation;
