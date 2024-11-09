import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { ColumnsGap, Gear } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

export default function ConfigLayout({ children }) {
    return (
        <DefaultLayout>
            {/* <!-- ===== Configuration Start ===== --> */}
            <div className="grid grid-cols-12 gap-x-2">
                {/* <!-- ===== Sidebar Area Start ===== --> */}
                <div className='col-span-3 bg-card border border-border rounded-lg flex flex-col min-height shadow-default'>
                    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                        <nav className="mt-1 py-2 px-2 lg:mt-1 lg:px-2">
                            {/* <!-- Menu Group --> */}
                            <div>
                                <ul className="mb-6 flex flex-col gap-1">

                                    <li>
                                        <NavLink
                                            to="/entreprise"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-secondary-foreground duration-300 ease-in-out  bg-secondary"
                                                    : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                                            }
                                        >
                                            <ColumnsGap size={18} />
                                            Entreprises
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>

                        </nav>
                    </div>
                    <div className="mt-auto py-2 px-2 lg:px-2">
                        <ul className="flex flex-col gap-1">
                            <li>
                                <NavLink
                                    to="/configuration"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-secondary-foreground duration-300 ease-in-out bg-secondary"
                                            : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                                    }
                                >
                                    <Gear size={20} />
                                    Configuration
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- ===== Sidebar Area End ===== --> */}
                {/* <!-- ===== Content Area Start ===== --> */}
                <div className='col-span-9'>
                    {children}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Configuration End ===== --> */}
        </DefaultLayout>
    )
}
