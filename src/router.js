import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, GenresPage, MoviePage, MoviesPage} from "./pages";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'movies'}/>},
            {path:'movies',element:<MoviesPage/>},
            {path:'movie/:id',element:<MoviePage/>},
            {path:'genres',element:<GenresPage/>},
            {path:'genre/:id',element:<GenrePage/>}
    ]}
]);

export {
    router
}