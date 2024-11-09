import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useTranslation } from 'react-i18next';

const Table = ({ value, columns, loading }) => {
    const { t } = useTranslation();
    return (
        <DataTable
            value={value}
    
            paginator
            stripedRows
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate={`${t('pagination-from')} {first} ${t('pagination-to')} {last} ${t('pagination-of')} {totalRecords} ${t('pagination-elements')}`}
            emptyMessage={t('pagination-notfound')}
            loading={loading}
            paginatorClassName="justify-content-center"
            scrollable
            selectionMode="single"
            sortMode="multiple"
            removableSort
            size='small'
            resizableColumns
        >
            {columns.map((col, i) => (
                <Column
                    sortable={col.sortable}
                    key={col.field || i}
                    field={col.field}
                    header={col.header}
                    {...(col.body ? { body: col.body } : {})}
                />
            ))}
        </DataTable>
    );
};

Table.propTypes = {
    value: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default Table;
