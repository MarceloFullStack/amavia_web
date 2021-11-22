import { useCallback } from "react";

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );

  export default useYupValidationResolver;
  //EXEMPLO DE USO
// const validationSchema = yup.object({
//   firstName: yup.string().required("Required"),
//   lastName: yup.string().required("Required")
// });

// export default function App() {
//   const resolver = useYupValidationResolver(validationSchema);
//   const { handleSubmit, register } = useForm({ resolver });

//   return (
//     <form onSubmit={handleSubmit(data => console.log(data))}>
//       <input {...register("firstName")} />
//       <input {...register("lastName")} />
//       <input type="submit" />
//     </form>
//   );
// }

// const schema = yup.object({
//   nome: yup.string().required("O campo nome é obrigatório"),
//   descricao: yup.string().required(),
// }).required();
