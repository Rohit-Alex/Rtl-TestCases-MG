import { useState } from "react";
import constate from "constate";


function GetRole() {
    const [role, setRole] = useState([])
    return { role, setRole }
}
const [ RoleProvider, useRoleContext] = constate(GetRole);
export { useRoleContext, RoleProvider }