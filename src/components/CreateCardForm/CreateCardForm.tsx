import { useRef, useState } from "react";
import styles from "./CreateCardForm.module.scss";
import defaultImage from "../../assets/solar_camera-broken.png";
import DragAndDropImage from "../DragAndDropImage/DragAndDropImage";
import { useFormik } from "formik";
import { initialValues } from "../../utils/formHelpers";
import { wordFormSchema } from "../../utils/yupSchemas";

interface ICreateCardData {
  word: string;
  description: string;
  image: string;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
const CreateCardForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);

  const [fileName, setFileName] = useState("No Selected File");

  const handlePhotoInputChange = (event: InputChangeEvent) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("image", file);
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = ({ word, description, image }: ICreateCardData) => {
    console.log(word, description, image);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: wordFormSchema,
    validateOnBlur: true,
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>Add a word or a phrase to learn</h2>

      <div className={styles.wordInputWrapper}>
        <label htmlFor="word">Text the word you want to learn</label>
        <input
          type="text"
          id="word"
          className={styles.wordNameInput}
          placeholder="E.g. an apple"
          value={formik.values.word}
          onChange={formik.handleChange}
        />
        <p className={styles.errors}>{formik.errors.word}</p>
      </div>
      <div className={styles.descriptionInputWrapper}>
        <label htmlFor="description">
          Describe the word you want to learn or share the examples on how to
          use the word
        </label>
        <input
          type="text"
          id="description"
          className={styles.wordDescriptionInput}
          placeholder="E.g. An apple is a round, crunchy fruit that can be red, green, or yellow."
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <p className={styles.errors}>{formik.errors.description}</p>
      </div>
      <div className={styles.wordImageInputWrapper} onClick={handleUploadClick}>
        <input
          type="file"
          ref={fileInputRef}
          id="wordImage"
          className={styles.wordImageInput}
          onChange={handlePhotoInputChange}
          hidden
        />

        {image ? (
          <div className={styles.uploadedImageWrapper}>
            <img
              src={image}
              width={80}
              height={80}
              alt={fileName}
              className={styles.uploadedImage}
            />

            <DragAndDropImage
              setImage={setImage}
              onDragText="Выбрать другое фото"
              onDropText="Отпустите файл, чтобы загрузить их"
            />
          </div>
        ) : (
          <>
            <img
              src={defaultImage}
              alt="IMG"
              width={50}
              height={50}
              className={styles.defaultImage}
            />
            <DragAndDropImage
              setImage={setImage}
              onDragText="Загрузите фото"
              onDropText="Отпустите файл, чтобы загрузить их"
            />
          </>
        )}
      </div>
      <button type="submit" className={styles.submitBtn}>
        Добавить в словарь
      </button>
    </form>
  );
};

export default CreateCardForm;
