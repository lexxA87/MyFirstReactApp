import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {required} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import s from "../Common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    component={Input}
                    name={"email"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    type={"password"}
                    component={Input}
                    name={"password"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"}/>{" "}
                remember me
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);
