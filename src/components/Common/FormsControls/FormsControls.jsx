import s from "./FormsControls.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  //debugger;
  const hasError = meta.error && meta.touched;

  return (
    <div className={s.formsControle + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  //debugger;
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input} />
    </FormControl>
  );
};

export const Input = (props) => {
  //debugger;
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...restProps} {...input} />
    </FormControl>
  );
};
