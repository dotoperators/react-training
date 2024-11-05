import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { userService } from "../../../Api/user.services";
import { Itable as Props, complex } from "../../../interfaces/Itable";
import Card from "../../UI/card/Card";
import CustomModal from "../../UI/modal/Modal";
import CreateUser from "../../User/CreateUser";
import classes from "./CustomTable.module.scss";
import Dropdown from "../../UI/dropdown/Dropdown";
import Pagination, { InitialPaginationData } from "../../UI/pagination/Pagination";


export type Users = {
  _id?: string,
  email?: string,
  name?: string,
  createdOn?: string,
  modifiedOn?: string
}

export type user = Omit<Users, "createdOn" | "modifiedOn">;



const dropdownOptions = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "15", value: 15 },
  { label: "20", value: 20 },
  { label: "25", value: 25 },
];

export interface IPagination {
  page?: number;
  pageSize?: number;
  limit?: number;
  count?: number
}
const CustomTable: React.FC<Props> = (props) => {
  const [limit, setSelected] = useState(dropdownOptions[0].value);
  const [showModal, setShowModal] = useState(false);
  const [dataShow, setDataShow] = useState<complex[]>([]);
  const [show, setShow] = useState(false);
  const [modalValue, setModalValue] = useState<string>('');
  const [currPage, setCurrPage] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pagination, setPagination] = useState<IPagination>(InitialPaginationData)

  const selectedChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(() => Number(e.target.value));
    setPagination((prev) => ({
      ...prev,
      pageSize: + Number(e.target.value),
      page: 1,
      limit: + Number(e.target.value),
      count: props.limit
    }))
    props.fetched(pagination.page, + Number(e.target.value));
  }

  function showModalHandler(event: any) {
    if (event === 'delete')
      console.log("eve", modalValue)
    else if (event === 'cancel')
      setModalValue('');
    setShowModal((prev) => {
      return !prev
    });
  }

  const handleDataSubmit = (data: any) => {
    delete data.password;
    userService.updateUser(data)
      .then((response: any) => {
        let index = props.bodyData.findIndex((eachItem: any) => {
          return eachItem._id === response._id
        })
        props.bodyData[index] = response;
        props.fetched(pagination.page, pagination.pageSize)
        setShow(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  function tableBody(item: complex, index: number) {
    /* type guard (in typescript) */
    if ("name" in item) {
      //for implementing top customers
      return (
        <>
          <tr key={index}>
            <td>{item.email}</td>
            <td>{item.name}</td>
            <td>{item.createdOn}</td>
            <td>{item.modifiedOn}</td>
            <td className={classes.actions}>
              <Icon icon="charm:menu-kebab" />
              <div className={classes.actions__box}>
                <div
                  className={classes.actions__delete}
                  onClick={(type) => {
                    setModalValue(item.email || '');
                    showModalHandler(type)
                  }}
                >
                  <Icon icon="fluent:delete-24-regular" width="24" />
                </div>
                <div className={classes.actions__edit}>
                  <Icon icon="fluent:edit-16-regular" width="24" onClick={() => {
                    setModalValue(item.email || '');
                    handleShow()
                  }} />

                </div>
              </div>
            </td>
          </tr>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Insert Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CreateUser data={dataShow.find((eachItem: any) => eachItem.email === modalValue)} onDataSubmit={handleDataSubmit} />
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }

  useEffect(() => {
    setDataShow(
      props.bodyData
        ? props.bodyData.slice(0, Number(props.bodyData.length))
        : props.bodyData
    );
    setPagination((prev) => ({
      ...prev,
      total: props.limit,
      // count: props.limit,
    }))
  }, [props, props.bodyData]);

  const { t } = useTranslation();
  const handlePageChange = (data: IPagination) => {
    setPagination((pagination) => {
      return {
        ...pagination,
        ...data,
      };
    });
    props.fetched(data.page, data.pageSize)

  }
  return (
    <>
      {showModal ? (
        <CustomModal
          data={modalValue}
          title={t("deleteCustomer")}
          message={`${t("modalMessage")}`}
          onConfirm={showModalHandler}
        />
      ) : null}

      <div className={classes.container}>
        <Card>
          <div className={classes.wrapper}>
            <div className={classes.table__wrapper}>
              <table
                className={limit ? classes.largeTable : classes.table}
              >
                {props.headData ? (
                  <thead>
                    <tr>
                      {props.headData.map((item, index) => (
                        <th key={index}>{t(item)}</th>
                      ))}
                    </tr>
                  </thead>
                ) : null}
                <tbody>
                  {dataShow.map((item, index) => tableBody(item, index))}
                </tbody>
              </table>
            </div>

            {props.limit && props.limit > 1 ? (
              <>
                <Pagination
                  pagination={pagination}
                  onPageChange={handlePageChange}
                />
              </>
            ) : null}
          </div>
        </Card>

      </div>
    </>
  );
};

export default CustomTable;
