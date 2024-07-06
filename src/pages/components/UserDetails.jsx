import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Row, Col, Form } from "antd";
import validations from "../utils/formvalidator";
import styles from "./index.module.css";

const UserDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Form layout="vertical">
      <Row gutter={16} className={styles.formRow}>
        <Col span={12}>
          <Form.Item
            label="Email ID"
            required
            validateStatus={errors.emailId ? "error" : ""}
            help={errors.emailId ? errors.emailId.message : null}
          >
            <Controller
              name="emailId"
              control={control}
              rules={validations.email}
              render={({ field }) => <Input {...field} placeholder="Enter email address" />}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Password"
            required
            validateStatus={errors.password ? "error" : ""}
            help={errors.password ? errors.password.message : null}
          >
            <Controller
              name="password"
              control={control}
              rules={validations.password}
              render={({ field }) => <Input.Password {...field} placeholder="Enter password" />}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default UserDetails;
