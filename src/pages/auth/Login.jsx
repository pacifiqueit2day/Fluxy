import React from "react"
import { BoxArrowInRight, Envelope, Lock } from "react-bootstrap-icons"
import { Link, useNavigate } from "react-router-dom"
import { Button } from 'primereact/button';
        

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/")
    }

    return (
        <div className="rounded-sm border h-screen border-border bg-background shadow-default ">
            <div className="flex flex-wrap items-center h-full">
                <div className="hidden w-full xl:block xl:w-1/2">
                    <div className="py-17.5 px-26 text-center">
                        {/* <Link className="mb-5.5 inline-block" to="/">
              <img className="hidden dark:block" src={Logo} alt="Logo" />
              <img className="dark:hidden" src={LogoDark} alt="Logo" />
            </Link> */}

                        {/* <p className="2xl:px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse.
            </p> */}

                        <span className="mt-15 inline-block">

                        </span>
                    </div>
                </div>

                <div className="w-full border-border xl:w-1/2 xl:border-l-2">
                    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                        <h2 className="mb-9 text-2xl font-bold text-foreground sm:text-title-xl2">
                            Connectez-vous !
                        </h2>

                        <form>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-foreground">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Entrez votre email"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-12 pr-4 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                    <span className="absolute left-4 top-4 text-gray-300">
                                        <Envelope size={24} />
                                    </span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 flex items-center justify-between font-medium text-foreground">
                                    Mot de passe
                                    <Link to='#' className="text-primary hover:font-medium cursor-pointer ">
                                        Mot de passe oublié ?
                                    </Link>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Entrez votre mot de passe"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-12 pr-4 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                    <span className="absolute left-4 top-4 text-gray-300">
                                        <Lock size={24} />
                                    </span>
                                </div>
                            </div>

                            {/* <Link to='#' className="mb-6 text-primary font-medium">
                                <label className="mb-2.5 block cursor-pointer ">
                                    Mot de passe oublié ?
                                </label>
                            </Link> */}

                            <div className="mb-5">
                                {/* <button
                                type="submit"
                                    onClick={() => handleSubmit()}
                                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                >
                                    Se connecter
                                    <span>
                                        <BoxArrowInRight size={24}/>
                                    </span>
                                </button> */}
                                <Button 
                                type="submit"
                                    onClick={() => handleSubmit()}
                                     className='w-full' 
                                     label="Se connecter" 
                                     icon="pi pi-sign-in" iconPos="right" 
                                     />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
