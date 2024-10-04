import React from 'react'
import DashboardTables from '../../components/tables/DashboardTables'
import { useTranslation } from 'react-i18next';

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="title">{t("dashboard")}</h2>
      <DashboardTables />
    </section>
  )
}

export default DashboardPage
