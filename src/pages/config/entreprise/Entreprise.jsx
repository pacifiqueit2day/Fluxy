import React, { useRef, useState } from 'react'
import ConfigLayout from '../ConfigLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

export default function Entreprise() {
    const [visible, setVisible] = useState(false);

    const customers = [
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
        { id: 1, name: 'John Doe', country: 'USA' },
    ]

    return (
        <ConfigLayout>
            <div className='bg-background text-foreground rounded-lg p-2 shadow-default border border-border'>
                <div className='flex justify-between'>
                    <div>
                        <div className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText
                                type="search"
                                placeholder='Rechercher'
                                className="p-inputtext-sm"
                                style={{ minWidth: 250 }}
                            />
                        </div>
                    </div>
                    <Button size='small' label="New" icon="pi pi-plus" onClick={() => setVisible(true)} />
                    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog>
                </div>
                <div className='rounded-md mt-2 p-1'>
                    <DataTable stripedRows showGridlines value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                        <Column sortable field="name" header="Name" style={{ width: '25%' }}></Column>
                        <Column field="country" header="Country" style={{ width: '25%' }}></Column>
                    </DataTable>
                </div>
            </div>
        </ConfigLayout>
    )
}
