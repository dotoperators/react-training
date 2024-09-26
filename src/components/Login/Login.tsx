import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../Stores/loginContext";
import { ILogin } from "../models/ILogin";
import Input from "../UI/input/Input";
import classes from "./Login.module.scss";
import Button from "../UI/button/Button";
import { useTranslation } from "react-i18next";
import langContextObj from "../../Stores/langContext";
interface ILoginState {
    user: ILogin
}
const Login: React.FC = () => {
    const loginCtx = useContext(LoginContext);
    const langCtx = useContext(langContextObj);
    const userNameRef = useRef<HTMLInputElement>(null);
    const errorMessageRef = useRef<HTMLSpanElement>(null);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [state, setState] = useState<ILoginState>({
        user: {
            password: '',
            email: '',
            authUser: {
                isLogin: false
            }
        }
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        })
    }
    let isLogin = false;
    const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
        event.preventDefault();
        isLogin = userNameRef.current?.value === "admin";
        if (userNameRef.current) {
            if (isLogin) {
                loginCtx.toggleLogin();
                navigate("/");
            } else {
                userNameRef.current.focus();
                errorMessageRef.current?.setAttribute(
                    "style",
                    "display: inline-block;opacity: 1"
                );
            }
        }
    }
    return (
        <div className={`${classes.container} ${langCtx.lang === "fa" ? classes.rtl : ""}`}>
            <div className={classes.loginBox}>
                <h2 className={classes.title}>{t("loginPage")}</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        ref={userNameRef}
                        type={"text"}
                        id={"userName"}
                        placeholder={"admin"}
                    />
                    <span ref={errorMessageRef} className={classes.errorMessage}>
                        {t("errorMessage")}
                    </span>
                    <Input
                        type={"password"}
                        id={"pass"}
                        value={"admin"}
                        readonly={true}
                    />
                    <Button type="submit">{t("login")}</Button>
                    <Link className={classes.forgat_pass} to="/">
                        {t("forgetPass")}
                    </Link>
                    <div className={classes.checkbox}>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">{t("rememberMe")}</label>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login