import React, { useState } from "react";
import styles from "./DragAndDropImage.module.scss";

interface DragAndDropImageProps {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  onDragText: string;
  onDropText: string;
}

const DragAndDropImage = ({
  setImage,
  onDragText,
  onDropText,
}: DragAndDropImageProps) => {
  const [drag, setDrag] = useState(false);
  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];

    setDrag(false);
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return drag ? (
    <div
      className={styles.dropArea}
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      onDrop={(e) => onDropHandler(e)}
    >
      {onDropText}
    </div>
  ) : (
    <div
      className={styles.dragArea}
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
    >
      {onDragText}
    </div>
  );
};

export default DragAndDropImage;
