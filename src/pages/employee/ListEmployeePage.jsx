import React, { useCallback, useEffect, useState } from "react";
import DefaultLayout from '../../layout/DefaultLayout'

import fetchApi from "../../helpers/fetchApi.js";

// import DefaultLayout from "../../../../layout/DefaultLayout";
import Table from "../../components/utility/Table";
import { IconButton } from "@mui/material";
import AddEmploye from "./AddEmploye";
import { Search } from "react-bootstrap-icons";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useTranslation } from "react-i18next";

export default function ListEmployeePage() {
  const { t } = useTranslation()

  const [searchItem, setSearchItem] = useState('')
  const [loading, setLoading] = useState(false);

  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    search: "",
  });

  const columns = [
    {
      field: "full_name",
      header: "Nom & Prenom",
      sortable: true,
      body: (rowData) => `${rowData.nom} ${rowData.prenom}`,
    },
    { field: "email", sortable: true, header: "Email" },
    { field: "telephone1", sortable: true, header: "Telephone" },
    { field: "profil_id.profil_descr", sortable: true, header: "Profil" },
    { field: "", header: "Actions" },
  ];

  const fetchEmplers = useCallback(
    async (currentLazy = lazyState) => {
      try {
        setLoading(true);
        const baseurl = "Api/suppliers/";
         let url = baseurl;
        // const params = currentLazy || lazyState;
        // for (let key in params) {
        //   const value = params[key];
        //   if (value) {
        //     if (typeof value == "object") {
        //       url += `${key}=${JSON.stringify(value)}&`;
        //     } else {
        //       url += `${key}=${value}&`;
        //     }
        //   }
        // }
        const response = await fetchApi(url);

        console.log(response);
        //setUsers(response.result.data);
        //(response.result.totalRecords);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [lazyState]
  );

  useEffect(() => {
    fetchEmplers();
  }, [lazyState]);

  return (
    <DefaultLayout>
      <>
    <div className='bg-background text-foreground rounded-lg p-3 shadow-default border border-border space-y-2'>
      <div className='flex justify-between items-center'>
        <div>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText v-model="value1"
              type='search'
              placeholder={t('research')}
              className='w-40 md:w-60'
              value={searchItem}
              onInput={(e) => setSearchItem(e.target.value)}
            />
          </IconField>
        </div>
        <div>
          <AddEmploye />
        </div>
      </div>
      <div>
        <Table value="" columns={columns} loading={loading} />
      </div>
    </div>
    </>
    </DefaultLayout>
  );
}
