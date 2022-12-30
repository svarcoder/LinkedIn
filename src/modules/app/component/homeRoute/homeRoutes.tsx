import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Header from "../header";
import Home from "../home";
import Login from "../login";
import history from "./history";
import { NotFound } from "./NotFound";
import { Paths } from "./types";

interface Props {}

export interface RouteDefinition {
	path: string;
	protected?: boolean;
	redirect?: string;
	component?: any;
	routes?: RouteDefinition[];
	title?: string;
	pathType?: number;
}

const notFoundRoute: RouteDefinition = {
	path: "*",
	component: NotFound,
	protected: false,
	title: "",
};

export const routes: RouteDefinition[] = [
	{
		path: Paths.root,
		component: Login,
		protected: false,
		redirect: Paths.root,
		title: "Root",
		pathType: 0,
	},
	{
		path: Paths.home,
		component: Home,
		protected: false,
		redirect: Paths.home,
		title: "Home",
		pathType: 0,
	},
];
interface RoutesProps {}

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
	return () => <route.component />;
}

const HomeRoute: React.FC<Props & RoutesProps> = (props) => {
	return (
		<Router>
			<Switch>
				{routes.map((route, i) => {
					const render = getRouteRenderWithAuth(route, i);
					const rest = { render };
					return <Route key={i} path={route.path} exact {...rest} />;
				})}
			</Switch>
		</Router>
	);
};

export default HomeRoute;
