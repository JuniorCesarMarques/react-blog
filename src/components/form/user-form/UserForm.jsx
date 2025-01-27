import Input from "../Input";

import styles from "./Userform.module.css";

const UserForm = ({ btnText, handleChange, handleSubmit, confirmPassword }) => {
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        type="name"
        name="name"
        text="Nome"
        handleOnChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        text="Email"
        handleOnChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        text="Senha"
        handleOnChange={handleChange}
      />
      {confirmPassword && <Input
        type="password"
        name="confirmPassword"
        text="Confirme sua senha"
        handleOnChange={handleChange}
      />}
      <input type="submit" value={btnText} />
    </form>
  );
};

export default UserForm;
