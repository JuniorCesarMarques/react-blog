import styles from "./PostVideoForm.module.css";
import Input from "../Input";

const PostVideoForm = () => {
  return (
    <form className={styles.container}>
      <Input
        placeholder="Digite o titulo do video"
        name="title"
        type="text"
        text="Título"
      />
    </form>
  );
};

export default PostVideoForm;
