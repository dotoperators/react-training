import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IUser, userHeader } from "../../interfaces/IUser";
import { dashboardSelector } from "../../Stores/hooks/dashboardSelector";
import { getDashboardTable } from "../../Stores/reduxContainer/actionCreators/getDashboardTable";
import CustomTable from "./customTable/CustomTable";
import classes from "./DashboardTables.module.scss";

const DashboardTable = ({ submitted }: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<Dispatch<any>>();
  const [useTable, setUserTable] = useState<IUser[]>([]);
  const { users } = dashboardSelector((data) => {
    return data.users
  });
  const [limit, setLimit] = useState<number>(10)
  
  useEffect(() => {
    getAllUsers();
  }, [submitted]);

  const getAllUsers = async (page = 1, pageSize = 5) => {
    setUserTable([]);
    await dispatch(getDashboardTable(page, pageSize))
  }

  return (
    <section className={classes.table}>
      <div className={`${classes.table__top__customers} ${classes.table__child}`}>
        {<CustomTable headData={userHeader} bodyData={users} limit={limit}
          fetched={getAllUsers}></CustomTable>}
      </div>
    </section>
  );
};

export default DashboardTable;
