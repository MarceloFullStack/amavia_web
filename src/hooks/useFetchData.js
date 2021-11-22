// useFetchData hook

import { useParams } from "react-router";
import React, { useState } from "react";
import UserService from "src/services/auth/user.service";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const useFetchData = (url, initialValues, resolver) => {
  const [data, setData] = useState(initialValues);
  let { id } = useParams();
  const [load, setLoad] = React.useState(false);
  const history = useHistory();

  const onSubmit = (payload) => {
    if (id) {
      UserService.update(`${url}/${id}`, payload).then((response) => {
        console.log(response);
      });
    } else {
      UserService.create(`${url}`, payload).then((response) => {
        console.log(response);
      });
    }
    history.push(`/${url}`);
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver });

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  useEffect(() => {
    if (id) {
      setLoad(true);
      UserService.getOne(`${url}/`, id)
        .then((response) => {
          setData(response.data);
        })
        .then((res) => {
          setLoad(false);
        });
    }
  }, [id]);

  return [control, Controller, handleSubmit, onSubmit, errors, data, id, load];
};

export default useFetchData;
