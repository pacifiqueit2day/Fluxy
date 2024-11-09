import { Route } from "react-router-dom";
import ListEmployeePage from "../../pages/employee/ListEmployeePage";

export const employee_routes_items = {
    employee: {
      path: "employee/list",
      name: "Employee",
      component: ListEmployeePage,
    },
  };
  
  var employee_routes = [];
  
  for (let key in employee_routes_items) {
    const route = employee_routes_items[key];
    employee_routes.push(
      <Route path={route.path} Component={route.component} key={route.path} />
    );
  }
  
  export default employee_routes;