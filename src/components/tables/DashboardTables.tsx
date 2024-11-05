import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { userService } from "../../Api/user.services";
import { IUser, userHeader } from "../../interfaces/IUser";
import CustomTable from "./customTable/CustomTable";
import classes from "./DashboardTables.module.scss";

const DashboardTable = ({ submitted }: any) => {
  const { t } = useTranslation();
  const [useTable, setUserTable] = useState<IUser[]>([]);
  const [limit, setLimit] = useState<number>(10)
  useEffect(() => {
    getAllUsers();
  }, [submitted]);

  const getAllUsers = async (page = 1, pageSize = 5) => {
    setUserTable([]);
    try {
      const response: any = await userService.getAllfilterUsers({ page: page, limit: pageSize });
      setLimit(response?.data?.total)
      setUserTable([
        ...response?.data?.data.map((res: IUser) => {
          return {
            _id: res._id,
            email: res.email,
            name: res.name,
            createdOn: res.createdOn,
            modifiedOn: res.modifiedOn
          }
        })
      ])
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className={classes.table}>
      <div className={`${classes.table__top__customers} ${classes.table__child}`}>
        {<CustomTable headData={userHeader} bodyData={useTable} limit={limit}
          fetched={getAllUsers}></CustomTable>}
      </div>
    </section>
  );
};

export default DashboardTable;
