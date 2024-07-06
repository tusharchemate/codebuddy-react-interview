import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Form, Row, Col } from "antd";
import validations from "../utils/formvalidator";
import styles from "./index.module.css";

const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Form layout="vertical" className={styles.form}>
      <Row gutter={16} className={styles.formRow}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="First Name"
            required
            validateStatus={errors.firstName ? "error" : ""}
            help={errors.firstName ? errors.firstName.message : null}
          >
            <Controller
              name="firstName"
              control={control}
              rules={validations.firstName}
              render={({ field }) => <Input {...field} placeholder="Enter first name" />}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Last Name"
            validateStatus={errors.lastName ? "error" : ""}
            help={errors.lastName ? errors.lastName.message : null}
          >
            <Controller
              name="lastName"
              control={control}
              rules={validations.lastName}
              render={({ field }) => <Input {...field} placeholder="Enter last name" />}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16} className={styles.formRow}>
        <Col span={24}>
          <Form.Item
            label="Address"
            required
            validateStatus={errors.address ? "error" : ""}
            help={errors.address ? errors.address.message : null}
          >
            <Controller
              name="address"
              control={control}
              rules={validations.address}
              render={({ field }) => <Input.TextArea {...field} placeholder="Enter address" />}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonalInformation;
