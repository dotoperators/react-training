import React from "react";
import ReactDom from "react-dom";
import { useTranslation } from "react-i18next";
import classes from "./Modal.module.scss";
import Card from "../card/Card";
import Button from "../button/Button";

interface IBackdrop {
  onConfirm: () => void;
}
const Backdrop: React.FC<IBackdrop> = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

interface IModal {
  data?: string;
  title: string;
  message: string;
  onConfirm: (e?: any) => void;
}

const ModalOverlay: React.FC<IModal> = (props) => {
  const { t } = useTranslation();
  return (
    <Card>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h3>{props.title}</h3>
        </header>
        <div className={classes.content}>
          <p>{props.message} {props.data}</p>
        </div>
        <footer className={classes.actions}>
          <Button outline={true} onClick={() => props.onConfirm('cancel')}>
            {t("cancel")}
          </Button>
          <Button outline={true} onClick={() => props.onConfirm('delete')}>
            {t("delete")}
          </Button>
        </footer>
      </div>
    </Card>
  );
};

const CustomModal: React.FC<IModal> = (props) => {
  const backdropRoot = document.getElementById("backdrop-root") as HTMLElement;
  const modalOverlay = document.getElementById("overlay-root") as HTMLElement;
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        backdropRoot
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          data={props.data}
          onConfirm={props.onConfirm}
        />,
        modalOverlay
      )}
    </>
  );
};


export default CustomModal;
