import { Route } from "react-router-dom";
import Entreprise from "../../pages/config/entreprise/Entreprise";
import PageTitle from "../../components/PageTitle";
import Configuration from "../../pages/config/Configuration";

export const config_routes_items = {
    entreprise: {
        path: "entreprise",
        name: "Entreprise",
        component: Entreprise
    },
    configuration: {
        path: "configuration",
        name: "Configuration",
        component: Configuration
    },
}

var config_routes = []

for (let key in config_routes_items) {
    const route = config_routes_items[key]
    config_routes.push(
        <Route path={route.path} element={
            <>
                <PageTitle title={route.name} />
                <route.component />
            </>
        } key={route.path} />
    )
}

export default config_routes