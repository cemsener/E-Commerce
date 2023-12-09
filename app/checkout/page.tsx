"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { RootState } from "@/app/store/store";
import withAuth from "@/app/hoc/withAuth";

import { useFormik } from "formik";
import * as Yup from "yup";

const FormGroup = ({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string | boolean;
}) => (
  <div className="flex flex-col gap-1 ">
    <label className="text-sm font-semibold">{label}</label>
    {children}
    {error && <div className="text-red-500">{error}</div>}
  </div>
);

const Checkout = () => {
  // const { items, totalQuantity, totalPrice } = useSelector(
  //   (state: RootState) => state.cart
  // );
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, "En fazla 50 karakter olmalıdır")
      .required("Zorunlu alan"),
    email: Yup.string()
      .email("Hatalı Email Adresi Girdiniz.")
      .required("zorunlu alan."),
    address: Yup.string()
      .max(150, "adres alanı en fazla 150 karakter olabilir")
      .required("zorunlu alan."),
    city: Yup.string()
      .max(30, "En fazla 30 karakter olmalıdır")
      .required("zorunlu alan."),
    state: Yup.string()
      .max(30, "En fazla 30 karakter olmalıdır")
      .required("zorunlu alan."),
    zip: Yup.string()
      .matches(/^[0-9]{5}$/, "posta kodu 5 haneli olmalıdır ve sayı olmalıdır")
      .length(5, "posta kodu 5 haneli olmalıdır."),
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/)
      .required("zorunlu alan."),
    cardExpiration: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)
      .required("zorunlu alan."),
    cardCVV: Yup.string()
      .matches(/^[0-9]{3}$/)
      .required("zorunlu alan."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      cardExpiration: "",
      cardCVV: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="md:container bg-white text-slate-700 my-6 ">
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 md:p-6 flex flex-col gap-3"
      >
        <h1 className="text-2xl font-bold">Checkout</h1>
        <FormGroup
          error={formik.touched.name && formik.errors.name}
          label="İsim"
        >
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="İsim"
          />
        </FormGroup>
        <FormGroup
          error={formik.touched.email && formik.errors.email}
          label="Email"
        >
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="email"
          />
        </FormGroup>
        <FormGroup
          error={formik.touched.address && formik.errors.address}
          label="Adres"
        >
          <Input
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            placeholder="adres"
          />
        </FormGroup>
        <div className="columns-auto md:columns-3 ">
          <FormGroup
            error={formik.touched.city && formik.errors.city}
            label="Şehir"
          >
            <Input
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder="şehir"
              error={formik.touched.city && formik.errors.city ? true : false}
            />
          </FormGroup>
          <FormGroup
            error={formik.touched.state && formik.errors.state}
            label="İlçe"
          >
            <Input
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              placeholder="ilçe"
            />
          </FormGroup>
          <FormGroup
            error={formik.touched.zip && formik.errors.zip}
            label="posta kodu"
          >
            <Input
              name="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              placeholder="posta kodu"
            />
          </FormGroup>
        </div>
        <h2 className="text-xl font-bold">Kredi Kartı Bilgileri</h2>
        <FormGroup
          error={formik.touched.cardNumber && formik.errors.cardNumber}
          label="Kart Numarası"
        >
          <Input
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            placeholder="Kart Numarası"
          />
        </FormGroup>
        <div className="columns-2">
          <FormGroup
            error={
              formik.touched.cardExpiration && formik.errors.cardExpiration
            }
            label="Skt"
          >
            <Input
              name="cardExpiration"
              value={formik.values.cardExpiration}
              onChange={formik.handleChange}
              placeholder="Skt"
            />
          </FormGroup>
          <FormGroup
            error={formik.touched.cardCVV && formik.errors.cardCVV}
            label="CVV"
          >
            <Input
              name="cardCVV"
              value={formik.values.cardCVV}
              onChange={formik.handleChange}
              placeholder="CVV"
            />
          </FormGroup>
        </div>
        <Button type="submit" children="Submit" />
      </form>
    </div>
  );
};

export default withAuth(Checkout);
