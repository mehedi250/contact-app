import { createBrowserRouter } from "react-router";
import Contacts from "../pages/Contacts";
import RootLayout from "../components/RootLayout";
import CreateContact from "../pages/CreateContact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Contacts />
            },
            {
                path: "/create",
                element: <CreateContact />
            }
        ]
    }
]);

export default router;