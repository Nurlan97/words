import * as Yup from "yup";

export const wordFormSchema = Yup.object().shape({
  word: Yup.string().required("Обязательное поле для заполнения*"),
  description: Yup.string()
    .required("Обязательное поле для заполнения*")
    .min(5, "Слишком мало слов! Минимум 5 символов*")
    .max(600, "Слишком много слов! Максимум 600 символов*"),
});
